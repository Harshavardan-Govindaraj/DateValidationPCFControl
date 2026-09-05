import * as React from "react";
import { DatePicker, DayOfWeek } from "@fluentui/react";

export interface DatePickerControlProps {
    isPastDateRestricted?: boolean | null;
    isFutureDateRestricted?: boolean | null;
    isTodayRestricted?: boolean | null;
    AllowedDateRangeFutureDays?: number | null;
    AllowedDateRangePastDays?: number | null;
    selectedDate?: Date | null;
    onDateChange: (date: Date | null) => void;
}

const startOfDay = (date: Date): Date =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

const mergeMin = (current: Date | undefined, next: Date): Date =>
    !current || next > current ? next : current;

const mergeMax = (current: Date | undefined, next: Date): Date =>
    !current || next < current ? next : current;

export const DatePickerControl: React.FC<DatePickerControlProps> = (props) => {
    const today = startOfDay(new Date());

    let minDate: Date | undefined;
    let maxDate: Date | undefined;

    if (props.isPastDateRestricted) {
        minDate = mergeMin(minDate, today);
    }

    if (props.isFutureDateRestricted) {
        maxDate = mergeMax(maxDate, today);
    }

    if (
        typeof props.AllowedDateRangePastDays === "number" &&
        props.AllowedDateRangePastDays > 0
    ) {
        const d = new Date(today);
        d.setDate(today.getDate() - props.AllowedDateRangePastDays);
        minDate = mergeMin(minDate, d);
    }

    if (
        typeof props.AllowedDateRangeFutureDays === "number" &&
        props.AllowedDateRangeFutureDays > 0
    ) {
        const d = new Date(today);
        d.setDate(today.getDate() + props.AllowedDateRangeFutureDays);
        maxDate = mergeMax(maxDate, d);
    }

    const restrictedDates = props.isTodayRestricted ? [today] : undefined;

    return (
        <DatePicker
            value={
                props.selectedDate
                    ? startOfDay(props.selectedDate)
                    : undefined
            }
            minDate={minDate}
            maxDate={maxDate}
            firstDayOfWeek={DayOfWeek.Sunday}
            allowTextInput={false}
            ariaLabel="Select a date"
            onSelectDate={(date) => props.onDateChange(date ?? null)}
            calendarProps={{ restrictedDates }}
        />
    );
};
