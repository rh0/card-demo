<template>
  <v-card
    hover
    height="100%"
    class="d-flex flex-column justify-start"
  >
    <v-card-title>{{ deck.attributes.name }}</v-card-title>
    <v-card-text v-html="deck.attributes.description.processed"></v-card-text>
    <v-card-actions
      class="mt-auto"
    >
      <v-btn
        small
        ripple
        nuxt
        @click="toDeckPractice"
      >
        <v-icon small dark class="mr-1">
          mdi-dumbbell
        </v-icon>
        Practice
      </v-btn>
      <v-btn
        small
        ripple
        nuxt
        @click="toDeckInfo"
      >
        <v-icon small dark class="mr-1">
          mdi-clipboard-list
        </v-icon>
        List
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations, actions } from 'vuex'

export default {
  props: ['deck'],

  methods: {
    ...mapMutations(['setDeck']),

    // Pass the selected deck up to the store, so the table will
    // know which one to render.
    toDeckInfo: function () {
      this.setDeck(this.deck)
      this.$router.push({path: '/deck'})
    },

    // Pass the selected deck up to the store, so the table will
    // know which one to render.
    toDeckPractice: function () {
      this.setDeck(this.deck)
      this.$router.push({path: '/deck/practice'})
    }
  }
}
</script>
