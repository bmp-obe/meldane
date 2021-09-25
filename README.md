# Meldane Property and Valuation Services Website

### Running
- `yarn start`: runs an express server
- `yarn start-reg`: runs `ng serve`
- `yarn run dev:ssr`: use Universal for server side rendering locally

### Deployment
- `heroku-postbuild`: runs after build is complete when deploying to heroku. Runs `yarn run build:ssr` 
  which in turn runs `ng build --prod --aot && ng run meldane:server:production`

"A normal Angular application executes in the browser, rendering pages in the DOM in response to user actions. Angular Universal 
executes on the server, generating static application pages that later get bootstrapped on the client. This means that the 
application generally renders more quickly, giving users a chance to view the application layout before it becomes fully interactive."

More importantly, server-side rendering facilitates web crawlers (SEO).

"Social media sites rely on web crawlers to index your application content and make that content searchable on the web. These web 
crawlers might be unable to navigate and index your highly interactive Angular application as a human user could do.
Angular Universal can generate a static version of your application that is easily searchable, linkable, and navigable without 
JavaScript. Universal also makes a site preview available because each URL returns a fully rendered page."

Taken from: https://angular.io/guide/universal

One can quickly see this in action:
- run `yarn start-reg` then
- open a new command line window and run `curl localhost:4200`
- take note of the result, namely the presence of `<app-root></app-root>` (and not much in the form of content)
- kill the server, run `yarn run dev:ssr` and run `curl localhost:4200` again
- now one will see that all the content present on the landing page (which in this case is the entire 
  site) is included in the result (and not just `app-root`)
