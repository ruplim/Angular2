1) Open a command prompt in the project's root directory (APM)

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.


==========




Learning Path :  https://angular.io/docs/ts/latest/guide/learning-angular.html

To get Started 
===============
1. npm ( Node Package Manager )  
   Download using below steps
    a.  go to https://www.npmjs.com/
    b. scroll dowm to  "Get started with npm"
    c. Click download Node.js. 
    d. Click Current latest features.
    e. Based on ur m/c download and install


2. Editor 
   Download VSCode from https://code.visualstudio.com
   Docs: https://code.visualstudio.com/docs?start=true


3. Starter Code setup::

a. Clone from git (https://angular.io/docs/ts/latest/guide/setup.html)
   C:\Program Files (x86)\Git\bin>git clone https://github.com/angular/quickstart.git c:\Ruplim\temp\Angular2\quickstart

or 

b. Download from https://github.com/DeborahK/Angular2-GettingStarted
   a. Unzip and copy the APM-Start folder and paste it to some alternate folder c:/Angular2
   b. rename to APM
   c. In command prompt go to C:/Angular2/APM and run npm install
   d. npm start


4. Code Samples
a. https://github.com/DeborahK/Angular2-GettingStarted
b. http://angular2-first-look.azurewebsites.net/


5. API : https://angular.io/docs/ts/latest/api/

6. Decorator
================
A decorator is a function that adds metadata to a class, its members (properties, methods) and function arguments.
Decorators are a JavaScript language feature, implemented in TypeScript and proposed for ES2016 (AKA ES7).
To apply a decorator, position it immediately above or to the left of the thing it decorates.

7. Component
=================
   Component decorator allows you to mark a class as an Angular component and provide additional metadata that determines how the 
   component should be processed, instantiated and used at runtime.
   
   A component must belong to an NgModule in order for it to be usable by another component or application. To specify that a component 
   is a member of an NgModule, you should list it in the declarations field of that NgModule.
   