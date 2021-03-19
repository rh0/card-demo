# Cards :flower_playing_cards:

A simple flashcard application to demonstrate using a statically served javascript application to consume and interact with the Drupal CMS JSON:API.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# deploy static project to gh-pages
$ npm run deploy
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Notes on the Drupal side.

= JSON:API =

This is included in Drupal core, and can be enabled by turning on the JSON:API module. It will then expose all drupal entities (that have the appropriate view permissions) to an api endpoint. By default this endpoint is at `/jsonapi`.

The client request will need to be sure to set 'Content type' and 'Accept' headers as follows:

```js
Accept: application/vnd.api+json
Content-Type: application/vnd.api+json
```

### CORS

If you are using the JSON:API in a detached way (making calls from an app not on the same origin) you will run into CORS errors from the browser when trying to make a request.

These headers can be handled in the `services.yml` file, see `default.services.yml` CORS section as an example. Further, if you are on Pantheon, their servers will look for two possible services configuration files and changes should be made to these instead:
  * `services.pantheon.preproduction.yml` loaded for dev or the multis
  * `services.pantheon.production.yml` loaded for test and live

Example `services.yml` config:
```yaml
   # Configure Cross-Site HTTP requests (CORS).
   # Read https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
   # for more information about the topic in general.
   # Note: By default the configuration is disabled.
  cors.config:
    enabled: true
    # Specify allowed headers, like 'x-allowed-header'.
    allowedHeaders: []
    # Specify allowed request methods, specify ['*'] to allow all possible ones.
    allowedMethods: []
    # Configure requests allowed from specific origins.
    allowedOrigins: ['*']
    # Sets the Access-Control-Expose-Headers header.
    exposedHeaders: false
    # Sets the Access-Control-Max-Age header.
    maxAge: false
    # Sets the Access-Control-Allow-Credentials header.
    supportsCredentials: false
```

## JSON:API Extras

The [[https://www.drupal.org/project/jsonapi_extras|JSON:API Extras module]] helps to further the configuration of the Drupal API endpoint. Notably it allows you to disable unneeded resources from being exposed to the api. This will increase securtity (not exposing a user list) as well as trimming things down to just what you need in the API with no superflous endpoints. Further it will allow you to set a custom api endpoint (ie `/api` rather than `/jsonapi`).

Install as normal, and you will find it in a new tab on the JSON:API services page. `/admin/config/services/jsonapi/resource_types`

## OpenAPI UI

[[https://www.drupal.org/project/openapi_ui|OpenApi UI]] module is a helper/documentaion module. It exposes the drupal JSON:API using an installed plugin (most notably [[https://www.drupal.org/project/openapi_ui_swagger|swagger]]) in a format consistent with the OpenAPI standard. This is useful for front end develpment, as it can be used as a table of contents of sorts for all the various endpoints.

Once installed and enabled you can view the sites JSON:API at `/admin/config/services/openapi/swagger/jsonapi`

### A note on installing the swagger module/plugin

This is also documented in the module installation instructions. However be sure that you also:
`composer require composer/installers mnsami/composer-custom-directory-installer`
as well as including the following in the `composer.json` file:

```json
  "extra": {
    "installer-paths": {
      ...
        "web/libraries/{$name}": ["swagger-api/swagger-ui", "type:drupal-library"],
        ...
    }
  }
```




## Resources:
 * [[https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/jsonapi|Drupal JSON:API Documentation]]
 * [[https://www.drupal.org/project/jsonapi_extras|JSON:API Extras Module]]
 * [[https://jsonapi.org/|JSON:API Specification]]
 * [[https://www.drupal.org/project/openapi_ui|OpenApi UI]]
 * [[https://www.drupal.org/project/openapi_ui_swagger|Swagger UI for OpenAPI]]
 * [[https://www.drupal.org/node/2715637|Core Issue including CORS opt-in]]

