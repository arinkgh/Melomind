"use client";

import { useState, useMemo } from "react";
import { useReserveStore } from "@/store/reserve.store";

const Time = ({
  startTime = "08:00",
  endTime = "20:00",
  divideMinutes = 30,
  unavailableSlots = [],
}) => {
  const setTime = useReserveStore((s) => s.setTime);
  const [selected, setSelected] = useState<string | null>(null);

  const toMin = (t: string) => {
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
  };

  const format = (m: number) =>
    `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(
      2,
      "0"
    )}`;

  const slots = useMemo(() => {
    const res = [];
    let c = toMin(startTime);
    while (c < toMin(endTime)) {
      res.push(`${format(c)} - ${format(c + divideMinutes)}`);
      c += divideMinutes;
    }
    return res;
  }, []);

  const selectSlot = (s: string) => {
    if (unavailableSlots.includes(s)) return;
    setSelected(s);
    setTime(s);
  };

  return (
    <div className="w-full xl:w-1/2 p-4 sm:p-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {slots.map((s) => (
          <div
            key={s}
            onClick={() => selectSlot(s)}
            className={`text-center rounded-lg py-2 cursor-pointer
              ${
                unavailableSlots.includes(s)
                  ? "bg-gray-300"
                  : selected === s
                  ? "bg-[#80C244] text-white"
                  : "hover:bg-primary hover:text-white"
              }`}
          >
            {s}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Time;
