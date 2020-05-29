#CONTACTBOOK USING MEAN STACK

frontend is havin 3 components signup form, login form and the contactbook havinf the list of all contacts and details, Api folder is having the full Backend developed in NODE, EXPRESS AND Used MONGOOSE for mongodb, the database and back end has apis have User field, for signup and login form and particular used will have their own contact lict which can't be inherited by other, All Curd operation are on the basis of the ID of the particular user. Use 2 level hierarchy in the database with 2 Schemas first is user and second is contacts which functions by using the user Id of the user schema. The Api calls still ne to be made in the front end but the back end is fully developed and every hit is perfectly working as it is tested in POSTMAN.  

# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 
backend http://localhost:3000/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
