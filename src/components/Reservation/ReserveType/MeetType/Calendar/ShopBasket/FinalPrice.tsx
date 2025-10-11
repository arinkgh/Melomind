import React from "react";
import { FaCheck } from "react-icons/fa6";

const FinalPrice = () => {
  const priceData = {
    totalPrice: 12000000,
    discount: 500000,
    finalPrice: 11500000,
    discountCode: "Firstreserve1402",
  };

  const formatNumber = (num) => num.toLocaleString("fa-IR");

  return (
    <div className="rounded-[20px] w-full bg-secondary/5 flex flex-col md:flex-row justify-between gap-6 p-6">
      {/* Left box */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-3">
        <p className="text-secondary text-[18px] font-extrabold">
          قیمت: {formatNumber(priceData.totalPrice)} ریال
        </p>
        <p className="text-secondary text-[18px] font-extrabold">
          قیمت نهایی:{" "}
          <span className="text-primary font-bold text-3xl">
            {formatNumber(priceData.finalPrice)} ریال
          </span>
        </p>
      </div>

      {/* Right box */}
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-3">
        <p className="text-secondary text-[18px] font-extrabold">
          تخفیف: {formatNumber(priceData.discount)} ریال
        </p>

        {/* Discount code area - responsive: full width on mobile */}
        <div className="w-full flex flex-col sm:flex-row gap-3 items-center">
          <div className="flex-1">
            <div className="rounded-[90px] bg-background h-[48px] w-full flex items-center justify-between px-4">
              <p className="text-secondary/80 text-[16px] font-bold truncate">
                کد تخفیف: <span className="text-secondary">{priceData.discountCode}</span>
              </p>
              <div className="bg-primary/70 rounded-full flex items-center justify-center w-8 h-8">
                <FaCheck className="text-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPrice;
