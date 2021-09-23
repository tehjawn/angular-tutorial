### **<span style="text-decoration:underline;">Angular Coding Style Guide</span>**

Notes from [https://angular.io/guide/styleguide](https://angular.io/guide/styleguide) 

Angular is pretty opinionated and because of that it’s easy to transfer Angular skills from one Angular job to another! Here are notes on the preferred conventions used in Angular and why they are used.

**File Structure**



* Use consistent file naming conventions for similarly named companion files for a component.
* For example, a “Hero” component “hero.component.ts” will typically be grouped with HTML, CSS, and Test files: 

    * <span style="text-decoration:underline;">hero.component.ts 
</span>Contains component logic. 
↕
    * <span style="text-decoration:underline;">hero.component.spec.ts</span> 
Contains component unit tests. 

    * <span style="text-decoration:underline;">hero.component.html</span> 
Contains component layout HTML. 
↕
    * <span style="text-decoration:underline;">hero.component.css</span> 
Contains component styling CSS. 


**Single Responsibility**



* Apply the [Single Responsibility Rule](https://en.wikipedia.org/wiki/Single-responsibility_principle) to all components, services, and other symbols.
* Define one service or component per file.
    * Enforce separation of concerns for greater clarity, legibility, and debugging.
* Limit files to 400 lines of code.
    * Make code more reusable, easier to read, and less mistake prone.
* Limit functions to 75 lines of code.
    * Again - reuse, maintain, debug friendly approach is smaller, compact, and single purpose.

**Naming**



* Describe the symbol’s feature, then its type in a file’s name.
    * feature.type.ts
    * hero-list.component.ts
* Separate file names with dots and dashes.
* Use conventional type names including .service, .component, .pipe, .module, and .directive - additional types can be invented but should be limited and well documented.
    * Do <span style="text-decoration:underline;">not</span> use abbreviations, such as .srv, .comp, .pp, .mod, or .dir
* Use consistent naming for assets and what they represent.
    * Use upper camel case for class names
    * Match symbol names to file names
    * Append symbol names with conventional suffixes (Component, Directive, etc.)
        * Append respective matching filename suffixes
        * Add conventional suffixes to services if clarification is needed
            * HeroData => HeroDataService
            * Credit => CreditService
            * Logger => Logger
                * Logger is a verb that can be implied as a service, while HeroData and Credit are nouns that could represent components, objects, or other symbols
                * That being said, LoggerService is still valid.

**Bootstrapping**



* Put bootstrapping and platform logic in a file named main.ts
* Include bootstrapping logic error handling
* Avoid putting application logic in main.ts - instead utilize a component and/or service
    * Do the above to follow a consistent convention for app startup logic

**File Naming - Component, Directive, Pipe Files, Classes, and Selectors**



* Component selector naming convention: 
Use dashed-case or kebab-case for element selectors
    * <span style="text-decoration:underline;">Before:</span> 
@Component({

          selector: 'tohHeroButton',


          templateUrl: './hero-button.component.html'


        }) 


    * After: 
@Component({

          selector: 'toh-hero-button',


          templateUrl: './hero-button.component.html'


        }) 


* Use custom prefixes on selectors to help identify the feature area the component belongs in 
 




 



 

* Directive Selectors should be lower camel case ([https://angular.io/guide/styleguide#directive-selectors](https://angular.io/guide/styleguide#directive-selectors)) 
 
Additionally, they should also be prefixed similarly to component selectors 




 

* Pipe names should use UpperCamelCase for class name and lowerCamelCase for their representative name string. 


**Testing**



* Unit tests use the file suffix “.spec” 
 
hero.component.ts  
↕ _hero component gets a paired spec (testing) component_ 
hero.component.spec.ts 

    * .spec enables pattern matching for the karma test runner to iterate over when performing automated unit testing 

* End to end tests use the file suffix “.e2e-spec” 
heroes.e2e-spec.ts 


**Modules**



* Modules use the file suffix “.module.ts”
* Modules are named after the feature and the folder it resides in
* Use UpperCamelCase to identify objects that can be instantiated using a constructor 
 
AppModule, HeroesModule, AppRoutingModule, etc. 
App.module.ts, heroes.module.ts, app-routing.module.ts 

    * Note: RoutingModule is a very standard file name for a global router 
Because routing is something that needs to be easily identified, we identify these modules with the “-routing” file suffix to easily spot routing modules 


**Application Structure**

“LIFT” : Locate, Identify, Flatten, T-DRY



* Locate: Make locating code intuitive and fast
* Identify: Name files to be instantly recognizable
* Flatten: Flatten folder structure to minimize folder levels where sensible
* T-DRY: Try Don’t Repeat Yourself, but not at the cost of readability

Plan short term and long term project vision



* Start small and modularized for maintainability and scaffold smartly for long-term scalability.
* Reduce folder clutter where possible and contain feature areas together
* Create an NgModule for each feature area and a root AppModule in the root folder
* Create a SharedModule for shared features with minimal stateless services







Lazy Load Folders



* Contains a routing component, child components, and related assets and modules 


Never directly import lazy loaded folders



* Do not directly import otherwise it loads immediately instead of lazy loading on demand 


Filtering and Sorting in Pipes



* Pre-compute filtering and sorting logic in components/services before binding the model in templates
    * B/c filter/sort are expensive operations and pipe methods are called many times

Components as HTML Elements



* Assign component selectors to elements rather than attribute or class selectors

Extract templates and styles to separate files



* Extract to separate file when they require more than 3 lines of code

Decorate input and output properties



* Use @Input() and @Output() class decorators instead of inputs/outputs properties of @Directive and @Component metadata





 





Avoid aliasing inputs and outputs



* Don’t pass in a string in the @Input(...) and @Output(...) - just leave empty to avoid multi-name confusion

Member sequence:



1. Properties, then Methods
2. Public, then Private (Alphabetized)

Delegate complex component logic to services



* Limit component logic to just logic required for the view
* Delegate all other logic to services
    * Make services reusable and keep components simple

Don’t prefix output properties



* Avoid prefixing outputs with the prefix “on” 

    * @Output() onSavedTheDay 
(onSavedTheDay)=”onSavedTheDay()” 
 
Do this instead:
    * @Output() click 
(click)=”onClick()” 


Put presentation logic in the component class



* Avoid putting logic in the template and abstract it to the component instead 

    * **DON’T** 
Average power: {{totalPowers / heroes.length}} 
 
heroes: Hero[]; 
totalPowers: number; 

    * **DO** 
Average power: {{avgPower}} 
 
get avgPower() { 
  Return this.totalPowers / this.heroes.length; 
}

Initialize inputs



* Satisfy strictPropertyInitialization by providing a default value for @Input variables 
For values that are hard to construct a default value for, use ? to explicitly mark the property as optional 

    * ✅ 
@Input() id = ‘default_id’ 
@Input() id?: string; 

* Avoid requiring a field with an ! because it will prevent the type checker ensure the input value is provided 

    * ❌ 
@Input() id!: string;

**<span style="text-decoration:underline;">Directives 
</span>**

Use Directives to enhance an element



* Use attribute directives when you have presentation logic without a template 
 
Use b/c:
    * Attribute directives don’t have an associated template
    * An element may have more than one attribute directive that needs to be applied 



HostListener/HostBinding decorators versus host metadata



* Consider preferring the @HostListener and @HostBinding to the host property of the @Directive and @Component decorators.
    * Why? The property associated with @HostBinding or the method associated with @HostListener can be modified only in a single place—in the directive's class. If you use the host metadata property, you must modify both the property/method declaration in the directive's class and the metadata in the decorator associated with the directive.









* Compare with the less preferred host metadata alternative.
    * Why? The host metadata is only one term to remember and doesn't require extra ES imports. 








**<span style="text-decoration:underline;">Services ([https://angular.io/guide/styleguide#services](https://angular.io/guide/styleguide#services)) </span>**

Services are singletons



* Do use services as singletons within the same injector. Use them for sharing data and functionality.
    * Why? Services are ideal for sharing methods across a feature area or an app.
    * Why? Services are ideal for sharing stateful in-memory data.









* Do create services with a single responsibility that is encapsulated by its context.
* Do create a new service once the service begins to exceed that singular purpose.
    * Why? When a service has multiple responsibilities, it becomes difficult to test.
    * Why? When a service has multiple responsibilities, every component or service that injects it now carries the weight of them all.

Providing a service



* Do provide a service with the application root injector in the @Injectable decorator of the service.
* Why? The Angular injector is hierarchical.
* Why? When you provide the service to a root injector, that instance of the service is shared and available in every class that needs the service. This is ideal when a service is sharing methods or state.
* Why? When you register a service in the @Injectable decorator of the service, optimization tools such as those used by the Angular CLI's production builds can perform tree shaking and remove services that aren't used by your app.
* Why? This is not ideal when two different components need different instances of a service. In this scenario it would be better to provide the service at the component level that needs the new and separate instance.







Use the @Injectable() class decorator



* Do use the @Injectable() class decorator instead of the @Inject parameter decorator when using types as tokens for the dependencies of a service.
* Why? The Angular Dependency Injection (DI) mechanism resolves a service's own dependencies based on the declared types of that service's constructor parameters.
* Why? When a service accepts only dependencies associated with type tokens, the @Injectable() syntax is much less verbose compared to using @Inject() on each individual constructor parameter.







Data Services

[https://angular.io/guide/styleguide#data-services](https://angular.io/guide/styleguide#data-services)







Lifecycle hooks

[https://angular.io/guide/styleguide#lifecycle-hooks](https://angular.io/guide/styleguide#lifecycle-hooks) 







Appendix






