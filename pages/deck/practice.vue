<template>
  <v-row justify="center" align="center">
    <v-card
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
        <v-chip
          v-if="correct > 0"
          dark
          color="green"
          class="mr-2"
        >
          <v-icon left>mdi-check-bold</v-icon>
          {{ correct }}
        </v-chip>
        <v-chip
          v-if="incorrect > 0"
          dark
          color="red"
        >
          <v-icon left>mdi-close-thick</v-icon>
          {{ incorrect }}
        </v-chip>
        <v-btn icon to="/decks">
          <v-icon>mdi-cards</v-icon>
        </v-btn>
      </v-app-bar>

      <v-card-text
        v-if="!empty && !allDone"
        class="my-15 text-center"
        @click="showResponse"
      >
        <h3 v-if="!showAnswer" class="text-h3">{{ cardList[cardIndex].attributes.title }}</h3>
        <h3 v-else class="text-h3">{{ cardList[cardIndex].attributes.field_response }}</h3>
      </v-card-text>

      <v-card-text
        v-else-if="!empty"
        class="my-15 text-center"
        @click="showResponse"
      >
        <h3 class="text-h3">Good Job, You're All Done!</h3>
      </v-card-text>

      <v-card-actions v-if="!empty && !allDone" class="mt-auto flex-wrap">
        <v-btn
          v-if="showAnswer"
          color="green"
          @click="nextCard(true)"
        >
          <v-icon small>
            mdi-check-bold
          </v-icon>
          Got it!
        </v-btn>
        <v-btn
          v-if="showAnswer"
          color="red"
          @click="nextCard(false)"
        >
          <v-icon small>
            mdi-close-thick
          </v-icon>
          Wrong!
        </v-btn>
        <v-spacer></v-spacer>
        <v-icon
          @click="showResponse"
        >
          mdi-cursor-default-click
        </v-icon>
      </v-card-actions>
      <v-card-actions v-else-if="!empty" class="mt-auto flex-wrap">
      <v-btn
        to="/decks"
      >
        <v-icon left small dark>
          mdi-cards
        </v-icon>
        Practice Another Deck
      </v-btn>
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
    showAnswer: false,
    cardIndex: 0,
    correct: 0,
    incorrect: 0,
    allDone: false
  }),

  methods: {
    ...mapActions([
      'getCardList'
    ]),

    showResponse: function () {
      this.showAnswer = !this.showAnswer
    },

    nextCard: function (correct) {
      this.showAnswer = false

      if (this.cardIndex + 1 < this.cardList.length) {
        this.cardIndex++
      } else {
        this.allDone = true
      }


      if (correct) {
        this.correct++
      } else {
        this.incorrect++
      }
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
