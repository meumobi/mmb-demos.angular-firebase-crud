# Edit form

Based on [modality in UX/UI best practices](https://uxplanet.org/modality-the-one-ux-concept-you-need-to-understand-when-designing-intuitive-user-interfaces-e5e941c7acb1) should use modal with create/edit form.

## item-form.modal

ng g c items/item-form -m items --type modal --project angular-crud

Update eslint config (`.eslintrc`) to add 'modal' as component class suffix:

```json
"rules": {
  "@angular-eslint/component-class-suffix": [
    "error",
    {
      "suffixes": ["Page", "Component", "Modal"]
    }
  ],
```

https://blog.angular-university.io/angular-material-dialog/

https://material.angular.io/components/dialog/overview

show, post, edit, and delete text/image posts.
https://lidiacodes.medium.com/no-backend-no-problem-a-guide-to-crud-operations-using-firebase-and-angular-fire-v7-7de1ac26f18e

EntityRepositoryService
https://medium.com/@jakehockey10/angular-firebase-repository-pattern-534a0fd248c2

NgRx v16: Integration with Angular Signals
https://dev.to/ngrx/announcing-ngrx-v16-integration-with-angular-signals-functional-effects-standalone-schematics-and-more-5gk6

## Furthermore

- [github.com/Tariqu/angular-crud-app](https://github.com/Tariqu/angular-crud-app)
- [medium.com/@lspeixotodev - Angular CRUD w/ Observables and Signals](https://medium.com/@lspeixotodev/criando-um-crud-com-angular-observables-signals-75008ff4671c)
- [coyleandrew.medium.com - Form design best practices](https://coyleandrew.medium.com/form-design-best-practices-9525c321d759)
- [medium.com/ngconf - An Introduction to Angular Material Form-Fields](https://medium.com/ngconf/an-introduction-to-angular-material-form-fields-5828b92d3a3c)
- [blog.angular-university.io - Angular Material Dialog: A Complete Example](https://blog.angular-university.io/angular-material-dialog/)
- [stackoverflow - Form values non nullable by default](https://stackoverflow.com/a/73242411/4982169)
