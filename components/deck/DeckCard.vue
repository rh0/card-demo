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
        :to="'/deck/' + deck.id"
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
export default {
  props: ['deck']
}
</script>
