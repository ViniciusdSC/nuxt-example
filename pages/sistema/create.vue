<template lang="html">
  <v-card
    class="pa-2 ma-3"
  >
    <v-card-title>
      <span class="title font-weight-light">Novo sistema</span>
    </v-card-title>

    <v-card-text ref="teste" class="headline font-weight-bold">
      <sistema-form
        ref="form"
        :submit="submitSistema"
        :sistema="sistema"
        @setNome="setNome"
        @setVida="setVida"
        @setMana="setMana"
      ></sistema-form>
    </v-card-text>

    <v-card-actions class="d-flex flex-row-reverse">
      <v-btn @click="submitSistema" color="primary">Enviar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import SistemaForm from '@/components/sistema/SistemaForm'
import sistemaFormMixin from '@/mixins/sistema/sistemaFormMixin'
import { mapMutations } from 'vuex'
import routingMixin from '@/mixins/routingMixin'

export default {
  mixins: [ sistemaFormMixin ],
  components: {
    SistemaForm
  },
  methods: {
    submitSistema () {
      console.log(this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        this.createSistema(this.sistema)
        this.$router.push({
          name: 'sistema'
        })
      }
    },
    ...mapMutations('sistema', ['createSistema'])
  }
}
</script>

<style lang="css" scoped>
</style>
