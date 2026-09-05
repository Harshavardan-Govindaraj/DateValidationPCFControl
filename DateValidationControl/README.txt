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

`package-lock.json` is intentionally not included because it should be generated on your machine by `npm install` using your installed Node/npm environment.

## First-time setup in VS Code

1. Extract this ZIP.
2. Open the extracted `DateValidationControl` folder in VS Code.
3. Open Terminal -> New Terminal.
4. Confirm:
   `pac --version`
5. Confirm:
   `node --version`
6. Confirm:
   `npm --version`
7. Run:
   `npm install`
8. Run:
   `npm run build`

## Alternative

If you want PAC CLI to scaffold the official current PCF project files first, create an empty folder and run:

`pac pcf init --namespace Harshavardan.Controls --name DateValidationControl --template field --run-npm-install`

Then copy the three sample source files from this package into that scaffolded project.

## Deployment

After the control builds successfully, it can be packaged/pushed using the normal PCF/Dataverse workflow. Do not run `pac pcf push` until you have authenticated to the correct Dataverse environment and confirmed the target environment.

## Sample restrictions

- `isPastDateRestricted` restricts dates before today.
- `isFutureDateRestricted` restricts dates after today.
- `isTodayRestricted` restricts today.
- `AllowedDateRangePastDays` restricts the allowed past range.
- `AllowedDateRangeFutureDays` restricts the allowed future range.

The exact interaction of these restrictions follows the extracted sample code.
