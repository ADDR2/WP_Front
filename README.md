# WallapopTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Features

    * Responsive
    * Cross browser support (IE11+)
    * Linter rules passing
    * Theming (Dark and Light mode)
    * Environment variables
    * Routing
    * Sorting of items
    * Filter of items
    * Pagination of items (for some devices)
    * Select favorite items
    * Angular Material
    * Icons
    * Modules
    * Services
    * Pipes
    * SASS (variables, mixins, extends, placeholders, functions)
    * CSS animations
    * CSS media queries
    * Models
    * Reusable components

## Comments

    * I would have increase the page size for larger screens, but 5 was required.
    * I would have created an expandable layer or side panel for displaying favorite items intead of a modal/dialog, but again it was required.
    * The pagination is not displayed for some devices because I think it would have been better to create a virtual scroll or something that renders more items on demand.
    * There are no tests.
    * The given endpoint to request items does not provide the CORS header, therefore if you want to use the app in Chrome, you should disable the security rule for CORS.
    * If you see a button, or something that looks like a button, don't be afraid and click it ;).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
