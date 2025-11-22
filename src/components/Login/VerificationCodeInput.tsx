"use client";

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerificationCodeInput = ({
  onComplete,
}: {
  onComplete?: (code: string) => void;
}) => {
  return (
    <InputOTP
      maxLength={6}
      pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
      className="flex justify-center"
      onComplete={(code) => onComplete?.(code)}
    >
      <InputOTPGroup className="flex gap-3">
        <InputOTPSlot
          index={5}
          className="w-14 h-14 rounded-[20px] border-2 border-[#E3ECEF] bg-[#F8FAFB] text-center text-xl font-bold"
        />
        <InputOTPSlot
          index={4}
          className="w-14 h-14 rounded-[20px] border-2 border-[#E3ECEF] bg-[#F8FAFB] text-center text-xl font-bold"
        />
        <InputOTPSlot
          index={3}
          className="w-14 h-14 rounded-[20px] border-2 border-[#E3ECEF] bg-[#F8FAFB] text-center text-xl font-bold"
        />
        <InputOTPSlot
          index={2}
          className="w-14 h-14 rounded-[20px] border-2 border-[#E3ECEF] bg-[#F8FAFB] text-center text-xl font-bold"
        />
        <InputOTPSlot
          index={1}
          className="w-14 h-14 rounded-[20px] border-2 border-[#E3ECEF] bg-[#F8FAFB] text-center text-xl font-bold"
        />
        <InputOTPSlot
          index={0}
          className="w-14 h-14 rounded-[20px] border-2 border-[#E3ECEF] bg-[#F8FAFB] text-center text-xl font-bold"
        />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default VerificationCodeInput;
