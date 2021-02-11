<template>
  <v-row justify="center" align="center">
    <v-card
      @click="showResponse"
      height="550"
      width="450"
      class="mt-15"
      >
      <v-app-bar
        flat
        dark
        dense
        >
        <v-card-title
          v-if="!empty"
        >
          {{ cardIndex + 1 }} / {{ cardList.length }}
        </v-card-title>
        <v-card-title v-else>This deck is empty!</v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon to="/decks">
          <v-icon>mdi-cards</v-icon>
        </v-btn>
      </v-app-bar>

      <v-card-text
        v-if="!empty"
        class="my-15 text-h3 text-center"
      >
        {{ cardList[cardIndex].attributes.title }}
      </v-card-text>

      <v-spacer></v-spacer>

      <v-card-actions v-if="!empty" class="mt-auto">
        <v-spacer></v-spacer>
        <v-icon>
          mdi-cursor-default-click
        </v-icon>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'deck',
      'cardList'
    ]),
    
    empty: function () {
      return this.cardList.length === 0
    }
  },

  data: () => ({
    cardIndex: 0,
    misses: []
  }),

  methods: {
    ...mapActions([
      'getCardList'
    ]),

    showResponse: function () {
      console.log(this.cardList)
    }
  },

  async fetch() {
    // Grab the Card nodes tagged with this deck.
    await this.getCardList({
      filter: {
        'field_deck.id': {
          value: this.deck.id
        }
      }
    })
  }
}
</script>
