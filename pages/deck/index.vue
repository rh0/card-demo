<template>
  <div id="card-list">
    <v-card
      flat
      tile
      color="transparent"
    >
      <v-card-title>Card Nodes by Term</v-card-title>
      <v-card-text>
        <hr class="mb-3">
        <p>Each card is a node entity on the Drupal backend. Listed here are the cards that have the '{{ deck.attributes.name }}' term referenced.</p>
        <p>We are able to pull all card nodes by querying the entity of type 'card'. We can include a filter query on the given 'deck' term's UUID as well as an include query for the deck term reference to bring along the term data. This lets us get all the information (all matched node objects and the tagged term object) in one call to the backend!</p>
      </v-card-text>
    </v-card>
    <v-card>
      <v-app-bar
        flat
        dark
      >
        <v-card-title>{{ deck.attributes.name }}</v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon to="/decks">
          <v-icon>mdi-cards</v-icon>
        </v-btn>
        <v-btn icon :to="'/deck/practice'">
          <v-icon>mdi-dumbbell</v-icon>
        </v-btn>

      </v-app-bar>
      <v-card-subtitle v-html="deck.attributes.description.processed"></v-card-subtitle>
      <v-card-text>
        <cardsTable></cardsTable>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters} from 'vuex'
import cardsTable from '../../components/cardsTable.vue'

export default {
  fetchOnServer: false,

  components: {
    cardsTable
  },

  computed: {
    ...mapGetters([
      'cardList',
      'deck'
    ])
  },

  async fetch() {
    // Grab the Card nodes tagged with this deck.
    await this.$store.dispatch('getCardList', {
      filter: {
        'field_deck.id': {
          value: this.deck.id
        }
      }
    })
  }
}
</script>
