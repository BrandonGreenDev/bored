# (Bored App)

A modern Angular application that demonstrates integration with multiple public APIs, providing an entertaining and educational showcase of API consumption patterns and Angular 17's standalone component architecture.

## Overview

This application features five interactive components, each consuming a different public API to deliver engaging content including random advice, Shakespearean insults, fun facts, Pokemon data, and real-time currency exchange rates.

## Technologies Used

- **Angular 17.3** - Modern web framework with standalone components architecture
- **TypeScript 5.4** - Type-safe programming language for building robust applications
- **RxJS 7.8** - Reactive extensions library for handling asynchronous data streams
- **SCSS** - Enhanced CSS with variables, nesting, and mixins for maintainable styling
- **Angular HttpClient** - Built-in HTTP client for API communication
- **Angular Forms** - Reactive form handling for user inputs
- **Karma & Jasmine** - Testing framework for unit and integration tests

## Components

### Advice Component
Fetches random life advice from the Advice Slip API. Features automatic loading on component initialization with user-triggered refresh capability and comprehensive error handling.

### Insult Component
Generates Shakespearean-style insults from the Evil Insult Generator API. Provides humorous entertainment with detailed error logging and loading states for better user experience.

### Facts Component
Displays random interesting facts from the Useless Facts API. Simple, clean interface that automatically loads a new fact on initialization with one-click refresh functionality.

### Pokemon Component
Retrieves random Pokemon data from the PokeAPI including sprites, stats, types, and abilities. Features dynamic type-based color coding and comprehensive Pokemon information display with visual sprites.

### Currency Component
Real-time currency exchange rates from the Frankfurter API. Includes a currency selector with popular world currencies, live conversion calculator, and formatted rate displays with flag emojis for better visual identification.

## Architecture

- **Standalone Components** - Utilizes Angular 17's modern standalone component pattern
- **Service Layer** - Dedicated services for each API with proper separation of concerns
- **Reactive Programming** - Observable-based data flow using RxJS operators
- **Error Handling** - Comprehensive error handling with user-friendly messages
- **Loading States** - Visual feedback during API requests

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
