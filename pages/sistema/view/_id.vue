<template lang="html">
  <v-container>
    <v-card
      class="pa-2 ma-3"
    >
      <v-card-title>
        <span class="title font-weight-light">Informações básicas do sistema</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        <v-row>
          <v-col v-for="(sis, i) in sistema" :key="i" cols="12" sm="6" md="3">
            <v-text-field
              :label="i"
              :value="sis"
              readonly
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="d-flex justify-end">
        <v-btn
          @click="goEdit($route.params.id)"
          color="primary"
          type="button"
        >
          Editar
        </v-btn>
        <v-btn
          @click="deleteSistema($route.query.params.id)"
          color="error"
          type="button"
        >
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import routingMixin from '@/mixins/routingMixin'

export default {
  mixins: [ routingMixin ],
  date: () => ({
    sistema: {}
  }),
  mounted () {
    this.findOne(this.$route.params.id)
      .then(sistema => {
        this.sistema = sistema
      })
  },
  methods: {
    ...mapActions('sistema', ['findOne']),
    ...mapMutations('sistema', ['deleteSistema'])
  }
}
</script>

<style lang="css" scoped>
</style>
