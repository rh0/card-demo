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
      <v-btn icon>
        <v-icon>mdi-dumbbell</v-icon>
      </v-btn>

    </v-app-bar>
    <v-card-subtitle v-html="deck.attributes.description.processed"></v-card-subtitle>
    <v-card-text
      fixed-header
    >
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Challenge
              </th>
              <th class="text-left">
                Response
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="card in cardList"
              :key="card.id"
            >
            <td>{{ card.attributes.title }}</td>
            <td>{{ card.attributes.field_response }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ params }) {
    return { deckId: params.deck }
  },

  computed: {
    ...mapGetters([
      'cardList',
      'deck'
    ])
  },

  methods: {
    ...mapActions([
      'getCardList',
      'getDeck'
    ])
  },

  async created() {
    // Grab this Deck term details.
    await this.getDeck(this.deckId)

    // Grab the Card nodes tagged with this deck.
    await this.getCardList({
      filter: {
        'field_deck.id': {
          value: this.deckId
        }
      }
    })
  }
}
</script>
