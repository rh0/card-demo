<template>
  <v-simple-table fixed-header>
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'cardList'
    ])
  }
}
</script>
