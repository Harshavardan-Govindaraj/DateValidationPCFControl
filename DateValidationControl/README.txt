# DateValidationControl - Full Source Package

This package contains the code extracted from the supplied Date Validation PCF screenshots.

## Important

The three main source files are kept as the sample implementation:

- `index.ts`
- `Components/DatePickerControl.tsx`
- `ControlManifest.Input.xml`

No alternative date-validation algorithm has been substituted.

## Project files

The package also contains the supporting TypeScript/PCF project files needed to open the project as a source tree:

- `package.json`
- `tsconfig.json`
- `pcfconfig.json`
- `DateValidationControl.pcfproj`
- `generated/ManifestTypes.d.ts`

## Sample restrictions

- `isPastDateRestricted` restricts dates before today.
- `isFutureDateRestricted` restricts dates after today.
- `isTodayRestricted` restricts today.
- `AllowedDateRangePastDays` restricts the allowed past range.
- `AllowedDateRangeFutureDays` restricts the allowed future range.

The exact interaction of these restrictions follows the extracted sample code.
