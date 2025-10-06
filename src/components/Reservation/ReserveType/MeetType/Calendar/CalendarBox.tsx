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
import { Button, buttonVariants } from "@/components/ui/button";

const CalendarBox = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div className="w-1/2 p-3 flex items-center justify-center">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className="shadow-sm"
      />
    </div>
  );
};
export default CalendarBox;

// ----------------------------------------------------------------------------
// Calendar Component (copied from shadcn example and works as-is)
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
    <div className="flex flex-col ">
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn(
          // "bg-background group/calendar p-1 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent ",
          "bg-background group/calendar p-1 [--cell-size:--spacing(8)] [--rdp-caption-font-size:1.5rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent ",
 
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
          months: cn(
            "flex gap-4 flex-col md:flex-row relative ",
            defaultClassNames.months
          ),
          month: cn("flex flex-col w-full gap-4 pt-16", defaultClassNames.month),
          nav: cn(
            "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between rtl:flex-row-reverse",
            defaultClassNames.nav
          ),
          button_previous: cn(
            "border-2 rounded-[50%] w-12 h-12 flex items-center shadow aria-disabled:opacity-50 p-0 select-none",
            defaultClassNames.button_previous
          ),
          button_next: cn(
            "border-2 rounded-[50%] w-12 h-12 flex items-center shadow aria-disabled:opacity-50 p-0 select-none",
            defaultClassNames.button_next
          ),
          // month_caption: cn(
          //   "flex items-center justify-center font-bold h-(--cell-size) w-full h-10 px-(--cell-size) text-secondary text-8xl ",
          //   defaultClassNames.month_caption
          // ),
          month_caption: cn(
  "flex items-center justify-center font-bold text-2xl text-secondary ",
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
          caption_label: cn(
            "select-none font-medium",
            captionLayout === "label"
              ? "text-sm"
              : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
            defaultClassNames.caption_label
          ),
          table: "w-full border-collapse",
          weekdays: cn("flex gap-1", defaultClassNames.weekdays),
          weekday: cn(
  "!text-[8px] text-secondary rounded-md flex-1 p-2 font-normal select-none mt-6",
  defaultClassNames.weekday
),
          week: cn("flex w-full mt-2", defaultClassNames.week),
          week_number_header: cn(
            "select-none w-(--cell-size)",
            defaultClassNames.week_number_header
          ),
          week_number: cn(
            "text-[0.8rem] select-none text-muted-foreground",
            defaultClassNames.week_number
          ),
          day: cn(
            "text-secondary !text-[10px] relative w-full h-full p-2 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none cursor-pointer hover:cursor-pointer",
            defaultClassNames.day
          ),
          range_start: cn(
            "rounded-l-md bg-accent",
            defaultClassNames.range_start
          ),
          range_middle: cn("rounded-none", defaultClassNames.range_middle),
          range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
          today: cn(
            "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
            defaultClassNames.today
          ),
          outside: cn(
            "text-muted-foreground aria-selected:text-muted-foreground",
            defaultClassNames.outside
          ), 
          disabled: cn(
            "text-muted-foreground opacity-50",
            defaultClassNames.disabled
          ),
          hidden: cn("invisible", defaultClassNames.hidden),
          ...classNames,
        }}
        components={{
          Root: ({ className, rootRef, ...props }) => {
            return (
              <div
                data-slot="calendar"
                ref={rootRef}
                className={cn(className)}
                {...props}
              />
            );
          },
          Chevron: ({ className, orientation, ...props }) => {
            if (orientation === "left") {
              return (
                <div className="w-full h-full flex items-center justify-center cursor-pointer">
                  <ChevronRightIcon className={cn("w-6 h-6 text-primary/80 mx-auto ", className)} {...props} />
                </div>
              );
            }
            if (orientation === "right") {
              return (
                <div className="w-full h-full flex items-center justify-center cursor-pointer">
                  <ChevronLeftIcon
                    className={cn("w-6 h-6 text-primary/80 mx-auto ", className)}
                    {...props}
                  />
                </div>
              );
            }
            return (
              <ChevronDownIcon className={cn("size-4", className)} {...props} />
            );
          },
          DayButton: CalendarDayButton,
          WeekNumber: ({ children, ...props }) => {
            return (
              <td {...props}>
                <div className="flex size-(--cell-size) items-center justify-center text-center">
                  {children}
                </div>
              </td>
            );
          },
          ...components,
        }}
        {...props}
      />
      <p className="text-[10px] text-secondary/80 ">
        روزهای هاشورخورده به طور کامل رزرو شده اند!
      </p>
    </div>
  );
}

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

  const isFriday = day.date.toLocaleDateString("fa-IR", { weekday: "long" }) === "جمعه";
  const isDisabled = modifiers.disabled;
  const isSelected = modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle;

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={isSelected}
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-green-500 data-[selected-single=true]:text-white data-[selected-single=true]:rounded-full data-[disabled=true]:bg-gray-100 data-[disabled=true]:rounded-full data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square w-full min-w-(--cell-size) font-normal cursor-pointer hover:cursor-pointer",
        { "text-red-500": isFriday },
        defaultClassNames.day,
        className
      )}
      disabled={isDisabled}
      {...props}
    />
  );
}