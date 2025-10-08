
"use client";
import React, { useMemo, useState } from "react";

interface TimeProps {
  startTime?: string; // e.g. "08:00"
  endTime?: string;   // e.g. "20:00"
  divideMinutes?: number; // e.g. 30
  unavailableSlots?: string[]; // booked slots
}

const Time: React.FC<TimeProps> = ({
  startTime = "08:00",
  endTime = "20:00",
  divideMinutes = 30,
  unavailableSlots = ["09:30 - 10:00", "13:00 - 13:30"],
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const toMinutes = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  const formatTime = (mins: number) => {
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
  };

  // convert English numbers to Persian
  const toPersianNumbers = (numStr: string) =>
    numStr.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);

  const timeSlots = useMemo(() => {
    const slots: string[] = [];
    let current = toMinutes(startTime);
    const end = toMinutes(endTime);

    while (current < end) {
      const next = current + divideMinutes;
      const range = `${formatTime(current)} - ${formatTime(next)}`;
      slots.push(range);
      current = next;
    }
    return slots;
  }, [startTime, endTime, divideMinutes]);

  const handleSelect = (slot: string) => {
    if (unavailableSlots.includes(slot)) return;
    setSelectedSlot(slot);
  };

  return (
    <div className="border-l-2 border-gray-200 w-1/2 p-6 flex flex-col items-center" dir="ltr">
      {/* Title */}
      <h3 className="text-secondary font-extrabold text-2xl mt-10 text-center">
        ساعت رزرو
      </h3>

      {/* Time Table */}
      <div className="grid grid-cols-4 gap-6 mt-12 w-full">
        {timeSlots.map((slot, index) => {
          const isUnavailable = unavailableSlots.includes(slot);
          const isSelected = selectedSlot === slot;

          return (
            <div
              key={index}
              onClick={() => handleSelect(slot)}
              className={`text-center rounded-lg py-2 text-sm text-secondary transition cursor-pointer select-none
                ${
                  isUnavailable
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : isSelected
                    ? "bg-[#80C244] text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
            >
              {toPersianNumbers(slot)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Time;
