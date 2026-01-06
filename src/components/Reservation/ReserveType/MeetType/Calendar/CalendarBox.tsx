"use client";
import { DayPicker } from "react-day-picker/persian";
import { useReserveStore } from "@/store/reserve.store";
import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, getDefaultClassNames } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CalendarBox = () => {
  const setStoreDate = useReserveStore((s) => s.setDate);
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const onSelect = (d?: Date) => {
    setDate(d);
    if (d) {
      setStoreDate(d.toLocaleDateString("fa-IR"));
    }
  };

  return (
    <div
      className="
        w-full md:w-1/2
        p-4 sm:p-6
        flex items-center justify-center
      "
    >
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={onSelect}
      />
    </div>
  );
};

export default CalendarBox;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="flex flex-col items-center justify-center">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          "bg-background group/calendar w-full sm:w-auto",
          className
        )}
        captionLayout={captionLayout}
        formatters={{
          formatMonthDropdown: (date) =>
            date.toLocaleString("default", { month: "short" }),
          formatWeekdayName: (date) =>
            date.toLocaleDateString("fa-IR", { weekday: "long" }),
          ...formatters,
        }}
        classNames={{
          root: cn("w-full", defaultClassNames.root),
          months: cn(
            "flex flex-col md:flex-row gap-4 items-center justify-center",
            defaultClassNames.months
          ),
          month: cn(
            "flex flex-col w-full gap-4 pt-10 items-center justify-center",
            defaultClassNames.month
          ),
          nav: cn(
            "flex items-center justify-between w-full absolute top-0 px-6",
            defaultClassNames.nav
          ),
          button_previous: cn(
            "border rounded-full w-10 h-10 flex items-center justify-center shadow-sm",
            defaultClassNames.button_previous
          ),
          button_next: cn(
            "border rounded-full w-10 h-10 flex items-center justify-center shadow-sm",
            defaultClassNames.button_next
          ),
          month_caption: cn(
            "text-secondary text-xl sm:text-2xl font-extrabold mt-2",
            defaultClassNames.month_caption
          ),
          weekdays: cn(
            "flex gap-4 justify-center mt-4 text-xs sm:text-sm font-bold text-secondary",
            defaultClassNames.weekdays
          ),
          weekday: cn("w-8 sm:w-10 text-center", defaultClassNames.weekday),
          week: cn("flex justify-center", defaultClassNames.week),
          day: cn(
            "text-secondary text-[10px] sm:text-sm p-2 rounded-md hover:bg-primary/10 transition-all select-none cursor-pointer",
            defaultClassNames.day
          ),
          today: cn("bg-green-100 rounded-md", defaultClassNames.today),
          disabled: cn(
            "opacity-50 cursor-not-allowed",
            defaultClassNames.disabled
          ),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => (
            <div
              ref={rootRef}
              className={cn("relative", className)}
              {...props}
            />
          ),
          Chevron: ({ orientation, className, ...props }) =>
            orientation === "left" ? (
              <ChevronRightIcon
                className={cn("w-5 h-5 text-primary", className)}
                {...props}
              />
            ) : (
              <ChevronLeftIcon
                className={cn("w-5 h-5 text-primary", className)}
                {...props}
              />
            ),
          DayButton: CalendarDayButton, // ✅ now defined below
          ...components,
        }}
        {...props}
      />
      <p className="text-[10px] text-secondary/80 mt-2 text-center">
        روزهای هاشورخورده به طور کامل رزرو شده‌اند.
      </p>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Custom Day Button (fixes missing reference)
// ----------------------------------------------------------------------------
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);

  const isFriday =
    day.date.toLocaleDateString("fa-IR", { weekday: "long" }) === "جمعه";
  const isDisabled = modifiers.disabled;
  const isSelected =
    modifiers.selected &&
    !modifiers.range_start &&
    !modifiers.range_end &&
    !modifiers.range_middle;

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={isSelected}
      className={cn(
        "data-[selected-single=true]:bg-green-500 data-[selected-single=true]:text-white data-[selected-single=true]:rounded-full flex aspect-square w-full font-normal cursor-pointer hover:cursor-pointer",
        { "text-red-500": isFriday },
        defaultClassNames.day,
        className
      )}
      disabled={isDisabled}
      {...props}
    />
  );
}
