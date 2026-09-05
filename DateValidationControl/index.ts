import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import { DatePickerControl } from "./Components/DatePickerControl";
import { IInputs, IOutputs } from "./generated/ManifestTypes";

export class DateValidationControl implements ComponentFramework.StandardControl<IInputs, IOutputs> {
    private root: Root | null = null;
    private selectedDate: Date | null = null;
    private notifyOutputChanged: (() => void) | null = null;
    private lastContextDateKey: string | null = null;

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container: HTMLDivElement
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
        this.root = createRoot(container);
        this.render(context);
    }

    public updateView(context: ComponentFramework.Context<IInputs>): void {
        this.render(context);
    }

    public getOutputs(): IOutputs {
        return { date: this.selectedDate ?? undefined };
    }

    public destroy(): void {
        this.root?.unmount();
        this.root = null;
        this.notifyOutputChanged = null;
    }

    private render(context: ComponentFramework.Context<IInputs>): void {
        const date = context.parameters.date.raw;
        const contextDate = date ? this.toCalendarDate(new Date(date)) : null;
        const contextDateKey = contextDate ? this.toDateKey(contextDate) : null;

        if (contextDateKey !== this.lastContextDateKey) {
            this.selectedDate = contextDate;
            this.lastContextDateKey = contextDateKey;
        }

        this.root?.render(
            React.createElement(DatePickerControl, {
                isPastDateRestricted: context.parameters.isPastDateRestricted.raw,
                isFutureDateRestricted: context.parameters.isFutureDateRestricted.raw,
                isTodayRestricted: context.parameters.isTodayRestricted.raw,
                AllowedDateRangeFutureDays: context.parameters.AllowedDateRangeFutureDays.raw,
                AllowedDateRangePastDays: context.parameters.AllowedDateRangePastDays.raw,
                selectedDate: this.selectedDate,
                onDateChange: (date) => {
                    this.selectedDate = date;
                    this.notifyOutputChanged?.();
                },
            })
        );
    }

    private toCalendarDate(date: Date): Date {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }

    private toDateKey(date: Date): string {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    }
}
