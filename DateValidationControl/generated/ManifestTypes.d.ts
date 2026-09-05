/* eslint-disable */
// This file is generated from ControlManifest.Input.xml.
// It is included here to make the source package self-contained.
// Running the PCF build regenerates the generated types.

export interface IInputs {
    date: ComponentFramework.PropertyTypes.DateOnlyProperty;
    isFutureDateRestricted: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    isPastDateRestricted: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    isTodayRestricted: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    AllowedDateRangeFutureDays: ComponentFramework.PropertyTypes.NumberProperty;
    AllowedDateRangePastDays: ComponentFramework.PropertyTypes.NumberProperty;
}

export interface IOutputs {
    date?: Date;
}
