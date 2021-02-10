<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="5">
      <div class="text-center">
        <logo />
      </div>
    </v-col>
    <v-col cols="12" md="7" sm="8">
      <IntroText></IntroText>
    </v-col>
    <v-card
      flat
      tile
      color="transparent"
    >
    <v-card-title>Top Level Diagram of WTF is going on.</v-card-title>
      <v-card-text>
        <img src="/component-diagram-dark.svg"/>
      </v-card-text>
    </v-card>

  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import IntroText from '~/components/IntroText.vue'

export default {
  components: {
    Logo,
    IntroText
  }
}
</script>
