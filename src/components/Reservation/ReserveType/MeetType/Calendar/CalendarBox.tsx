"use client";
import React from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import { DayButton, getDefaultClassNames } from "react-day-picker";
import { DayPicker } from "react-day-picker/persian";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CalendarBox = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="w-1/2 p-3 flex items-center justify-center">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        // className="shadow-sm"
      />
    </div>
  );
};
export default CalendarBox;

// ----------------------------------------------------------------------------
// Calendar Component
// ----------------------------------------------------------------------------
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
    <div className="flex flex-col">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          "bg-background group/calendar px-12 [--cell-size:--spacing(8)] [--rdp-caption-font-size:1.5rem]",
          String.raw`rtl:**:[.rdp-button_next>svg]:rotate-180`,
          String.raw`rtl:**:[.rdp-button_previous>svg]:rotate-180`,
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
          root: cn("w-fit", defaultClassNames.root),
          months: cn("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months),
          month: cn("flex flex-col w-full gap-4 pt-16", defaultClassNames.month),
          
          nav: cn(
            "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between flex-row-reverse rtl:flex-row",
            defaultClassNames.nav
          ),
          button_previous: cn(
            "border-2 rounded-full w-12 h-12 flex items-center justify-center shadow p-0 select-none",
            defaultClassNames.button_previous
          ),
          button_next: cn(
            "border-2 rounded-full w-12 h-12 flex items-center justify-center shadow p-0 select-none",
            defaultClassNames.button_next
          ),
          month_caption: cn(
            
            "flex items-center justify-center font-extrabold text-4xl text-secondary",
            defaultClassNames.month_caption
          ),
          dropdowns: cn(
            "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
            defaultClassNames.dropdowns
          ),
          dropdown_root: cn(
            "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
            defaultClassNames.dropdown_root
          ),
          dropdown: cn("absolute inset-0 opacity-0", defaultClassNames.dropdown),
          caption_label: cn("select-none font-medium", defaultClassNames.caption_label),
          table: "w-full border-collapse",
          weekdays: cn("flex gap-1", defaultClassNames.weekdays),
          weekday: cn(
            "!text-[8px] text-secondary rounded-md flex-1 p-2 font-bold select-none mt-6",
            defaultClassNames.weekday
          ),
          week: cn("flex w-full mt-2", defaultClassNames.week),
          week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header),
          week_number: cn("text-[0.8rem] select-none text-muted-foreground", defaultClassNames.week_number),
          day: cn(
            "text-secondary !text-[10px] relative w-full h-full p-2 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none cursor-pointer hover:cursor-pointer",
            defaultClassNames.day
          ),
          today: cn(
            "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
            defaultClassNames.today
          ),
          outside: cn("text-muted-foreground aria-selected:text-muted-foreground", defaultClassNames.outside),
          disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
          hidden: cn("invisible", defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => (
            <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
          ),
          Chevron: ({ className, orientation, ...props }) => {
            
            if (orientation === "left") {
              return (
                <div className="w-full h-full flex items-center justify-center cursor-pointer">
                  <ChevronRightIcon
                    className={cn("w-6 h-6 text-primary/80 mx-auto", className)}
                    {...props}
                  />
                </div>
              );
            }
            if (orientation === "right") {
              return (
                <div className="w-full h-full flex items-center justify-center cursor-pointer">
                  <ChevronLeftIcon
                    className={cn("w-6 h-6 text-primary/80 mx-auto", className)}
                    {...props}
                  />
                </div>
              );
            }
            return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
          },
          DayButton: CalendarDayButton,
          WeekNumber: ({ children, ...props }) => (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          ),
          ...components,
        }}
        {...props}
      />
      <p className="text-[10px] text-secondary/80">
        روزهای هاشورخورده به طور کامل رزرو شده اند!
      </p>
    </div>
  );
}

// ----------------------------------------------------------------------------
// Custom Day Button
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
        "data-[selected-single=true]:bg-green-500 data-[selected-single=true]:text-white data-[selected-single=true]:rounded-full data-[disabled=true]:bg-gray-100 data-[disabled=true]:rounded-full flex aspect-square w-full min-w-(--cell-size) font-normal cursor-pointer hover:cursor-pointer",
        { "text-red-500": isFriday },
        defaultClassNames.day,
        className
      )}
      disabled={isDisabled}
      {...props}
    />
  );
}
