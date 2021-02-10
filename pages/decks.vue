<template>
  <div id="decks">
    <v-row>
      <v-col cols="12" md="9">
        <v-card
          flat
          tile
          color="transparent"
        >
          <v-card-title>Available Card Decks</v-card-title>
          <v-card-text>
            <p><strong>Choose a deck to practice!</strong></p>
            <hr class="mb-3">
            <p>These decks are represented by taxonomy terms on the Drupal backend. Card nodes are categorized by referencing one of these terms.</p>
            <p>We are able to pull all decks by directly querying the term list of the deck taxonomy. The response data is then rendered below.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row> 
      <v-col
        v-for="c in 25"
        :key="c"
        cols="12"
        sm="4"
        md="3"
      >
        <v-card
          hover
          ripple
        >
          <v-card-title>A Deck!</v-card-title>
          <v-card-text>Some describption of the deck.</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>

</style>
