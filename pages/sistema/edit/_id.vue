<template lang="html">
  <v-card
    class="pa-2 ma-3"
  >
    <v-card-title>
      <span class="title font-weight-light">Sistema: {{ sistema.nome }}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">
      <sistema-form
        ref="form"
        :submit="updateSistema"
        :sistema="sistema"
        @setNome="setNome"
        @setVida="setVida"
        @setMana="setMana"
      ></sistema-form>
    </v-card-text>

    <v-card-actions class="d-flex flex-row-reverse">
      <v-btn @click="updateSistema" color="primary">Enviar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import SistemaForm from '@/components/sistema/SistemaForm'
import sistemaFormMixin from '@/mixins/sistema/sistemaFormMixin'

export default {
  mixins: [ sistemaFormMixin ],
  components: {
    SistemaForm
  },
  mounted () {
    this.findOne(this.$route.params.id)
      .then(sistema => {
        this.sistema = sistema
      })
  },
  methods: {
    updateSistema () {
      if (this.$refs.form.validate())
        this.updateSistema(this.sistema)
    },
    ...mapActions('sistema', ['findOne']),
    ...mapMutations('sistema', ['updateSistema'])
  }
}
</script>

<style lang="css" scoped>
</style>
