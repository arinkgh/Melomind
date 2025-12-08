
"use client";

import React, { useState, useEffect } from "react";
import VerificationCodeInput from "./VerificationCodeInput";
import { LoginBtn } from "../common/Butttons/LoginBtn";
import { useAuthStore } from "@/store/auth.store";
import { authService } from "@/services/auth/auth.service";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  name: string;
  lastname: string;
  mobile?: string;
  email?: string;
}

const VerificationCode = () => {
  const { mobile, setToken, setUser, setStep } = useAuthStore();

  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  const [userExists, setUserExists] = useState<boolean | null>(null);
  const [checkingUser, setCheckingUser] = useState(false);

  useEffect(() => {
    setTimeLeft(60);
    setCanResend(false);
  }, [mobile]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (!mobile) {
      setUserExists(null);
      return;
    }

    async function checkUserExists() {
      setCheckingUser(true);
      try {
        const res = await authService.checkUser(mobile);
        if (res.success) {
          setUserExists(res.data.exists);
        } else {
          setUserExists(false); 
          console.error("Check user error:", res);
        }
      } catch (error) {
        setUserExists(false);
        console.error("Check user API call failed:", error);
      } finally {
        setCheckingUser(false);
      }
    }

    checkUserExists();
  }, [mobile]);

  const handleResend = async () => {
    if (!canResend) return;

    try {
      const res = await authService.sendOtp(mobile);
      if (res.success) {
        setTimeLeft(60);
        setCanResend(false);
      } else {
        alert("خطا در ارسال مجدد کد");
      }
    } catch (err) {
      alert("خطا در ارسال مجدد کد");
      console.error(err);
    }
  };

  const handleConfirm = async () => {
    if (otp.length !== 6) {
      alert("کد باید ۶ رقمی باشد");
      return;
    }

    if (userExists === null) {
      alert("لطفا چند لحظه صبر کنید...");
      return;
    }

    setLoading(true);

    try {
      const res = await authService.verifyOtp({
        mobile,
        code: Number(otp),
        exists: userExists,
      });

      if (res.success) {
        const token = res.data.token;

        if (typeof token === "string") {
          setToken(token);
          try {
            const decoded = jwtDecode<JwtPayload>(token);
            setUser({
              name: decoded.name,
              lastname: decoded.lastname,
              mobile: decoded.mobile,
              email: decoded.email,
            });
          } catch (error) {
            console.error("Error decoding token:", error);
            setUser(null);
          }

          setStep(8);
        } else {
          console.error("Token is not a string!", token);
          alert("خطا در دریافت توکن");
          setUser(null);
        }
      } else {
        alert(res.error_desc?.fa || "کد اشتباه یا منقضی شده است");
      }
    } catch (err) {
      alert("خطا در تایید کد");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-between gap-4 md:gap-6 text-center">
      <h2 className="text-secondary font-extrabold text-2xl md:text-4xl">
        کد تایید را وارد کنید
      </h2>

      <p className="text-secondary font-semibold text-base md:text-[18px]">
        کد تایید برای شماره{" "}
        <span className="text-primary/80">{mobile}</span> ارسال شد
      </p>

      <VerificationCodeInput onComplete={(code) => setOtp(code)} />

      <p
        className={`text-secondary font-medium text-sm md:text-[16px] ${
          canResend ? "text-primary cursor-pointer" : "opacity-70"
        }`}
        onClick={canResend ? handleResend : undefined}
      >
        {canResend ? "دریافت مجدد کد" : `ارسال مجدد تا ${timeLeft} ثانیه`}
      </p>

      <div className="w-full max-w-3xl px-4 md:px-0">
        <div onClick={handleConfirm}>
          <LoginBtn text={loading ? "در حال بررسی..." : "تایید"} />
        </div>
      </div>

      {/* ورود با رمز عبور */}
      <p
        className="text-secondary font-semibold text-[16px] md:text-[18px] cursor-pointer"
        onClick={() => useAuthStore.setState({ step: 3 })}
      >
        ورود با رمز عبور
      </p>

      {checkingUser && (
        <p className="text-sm text-gray-500 mt-2">در حال بررسی وجود کاربر...</p>
      )}
    </div>
  );
};

export default VerificationCode;
