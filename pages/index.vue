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
    <ArchDiagram></ArchDiagram>

  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import IntroText from '~/components/IntroText.vue'
import ArchDiagram from '~/components/ArchDiagram.vue'

export default {
  components: {
    Logo,
    IntroText,
    ArchDiagram
  }
}
</script>
