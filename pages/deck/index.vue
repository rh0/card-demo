<template>
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
