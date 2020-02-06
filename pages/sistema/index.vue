<template lang="html">
  <v-card class="pa-2 ma-2">
    <v-card-title>
      <span class="title font-weight-light">Seus sistemas</span>
    </v-card-title>
    <v-card-text class="headline font-weight-bold">
      <div class="my-3 d-flex justify-end">
        <v-btn
          to="/sistema/create"
          color="success"
          class="float-right"
          type="button"
        >
          <v-icon class="mr-1">mdi-plus</v-icon>
          Sistema
        </v-btn>
      </div>
      <sistema-table :page="page" ref="table"></sistema-table>
    </v-card-text>

    <v-card-actions class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="total"
      ></v-pagination>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import SistemaTable from '@/components/sistema/SistemaTable'

export default {
  mounted () {
    console.log(this.total);
  },
  components: {
    SistemaTable
  },
  data: () => ({
    page: 1
  }),
  computed: {
    ...mapGetters('sistema', ['total'])
  }
}
</script>

<style lang="css" scoped>
</style>
