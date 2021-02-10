<template>
  <v-card>
    <v-card-title>Cards</v-card-title>
    <v-card-subtitle>A Simple Flashcard Application</v-card-subtitle>

    <v-card-text>
      <p>This application if built with NuxtJS with the Vuetify UI framework, and deployed to GitHub pages. It communicates with a Drupal installation acting as a backend 'headless' CMS via axios and Drupal's JSON:API. This architecture allows for decoupling of the CMS concerns and the front end presentation layer.</p>
      <ul>
        <li>
          For more information on Vuetify, check out the 
          <a
            href="https://vuetifyjs.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            documentation
          </a>.
        </li>
        <li>
          For more information on Drupal's JSON:API, check out the
          <a
            href="https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/jsonapi"
            target="_blank"
            rel="noopener noreferrer"
          >
          documentation
          </a> on D.O.
        </li>
        <li>
          Want to see the frontend code for this application? Check out the
          <a
            href="https://github.com/rh0/card-demo/"
            target="_blank"
            rel="noopener noreferrer"
          >
          repo
          </a>.
        </li>
      </ul>
      <hr class="my-3">
      <a
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nuxt Documentation
      </a>
      <br>
      <a
        href="https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/jsonapi"
        target="_blank"
        rel="noopener noreferrer"
      >
        Drupal JSON:API Documentation
      </a>
      <br>
      <a
        href="https://github.com/rh0/card-demo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cards GitHub
      </a>
    </v-card-text>
    <v-card-actions>
      <v-btn
        to="decks"
      >
        Choose a Deck to Begin
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
