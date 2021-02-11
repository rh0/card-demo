<template>
  <v-card>
    <v-card-title class="text-h2">Cards</v-card-title>
    <v-card-subtitle class="text-h6">A Simple Flashcard Application</v-card-subtitle>

    <v-card-text>
      <p>This application if built with NuxtJS with the Vuetify UI framework, and deployed to GitHub pages. It communicates with a Drupal installation acting as a backend 'headless' CMS via axios and Drupal's JSON:API. This architecture allows for decoupling of the backend CMS concerns and the front end presentation layer.</p>
      <ul>
        <li>
          Check out
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
          NuxtJS
          </a>, a Vue.js framework for SSR and SSG (aka JAMStack) sitebuilding.
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
          </a> on GitHub.
        </li>
        <li>
          For more information on the Vuetify UI Framework, check out the 
          <a
            href="https://vuetifyjs.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            documentation
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
        href="https://vuetifyjs.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Vuetify Documentation
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
        <v-icon left small dark>
          mdi-cards
        </v-icon>
        Choose a Deck
      </v-btn>
      <v-btn
        to="architecture"
      >
        <v-icon left small dark>
          mdi-domain
        </v-icon>
        About the Build
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>

</style>
