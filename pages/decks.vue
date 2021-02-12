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
    <v-row align-content="stretch">
      <v-col
        v-for="(deck, d) in deckList"
        :key="d"
        cols="12"
        sm="4"
        lg="3"
      >
        <DeckCard :deck="deck"></DeckCard>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import DeckCard from '../components/deck/DeckCard.vue'

export default {
  fetchOnServer: false,

  components: {
    DeckCard
  },

  computed: {
    ...mapGetters(['deckList'])
  },

  async fetch() {
    // Fetch the deck list (taxonomy terms) ordred by weight.
    await this.$store.dispatch('getDeckList', {
      sort: 'weight'
    })
  }
}
</script>

<style scoped>

</style>
