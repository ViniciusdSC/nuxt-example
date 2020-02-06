<template lang="html">
  <v-form
    ref="form"
    v-model="valid"
    @submit.prevent="submit"
  >
    <v-text-field
      label="Nome do sistema"
      outlined
      :value="sistema.nome"
      @input="$emit('setNome', $event)"
      :rules="rules.nome"
      :readonly="readonly"
    ></v-text-field>
    <v-text-field
      label="Vida default do sistema"
      outlined
      :value="sistema.vida"
      @input="$emit('setVida', $event)"
      :rules="rules.vida"
      :readonly="readonly"
    ></v-text-field>
    <v-text-field
      label="Mana default do sistema"
      outlined
      :value="sistema.mana"
      @input="$emit('setMana', $event)"
      :rules="rules.mana"
      :readonly="readonly"
    ></v-text-field>
  </v-form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import formMixin from '@/mixins/formMixin'

export default {
  mixins: [ formMixin ],
  data: () => ({
    valid: true,
    rules: {
      nome: [
        v => !!v || 'O nome é obrigatório'
      ],
      vida: [
        v => !!v || 'A vida é obrigatória',
        v => Number.isInteger(+v) || 'A vida deve ser um inteiro'
      ],
      mana: [
        v => !!v || 'A mana é obrigatória',
        v => Number.isInteger(+v) || 'A mana deve ser um inteiro'
      ]
    },
  }),
  props: {
    sistema: {
      type: Object,
      default: {
        nome: null,
        vida: null,
        mana: null
      }
    }
  },
  computed: {
    ...mapState('sistema', ['nome', 'vida', 'mana'])
  },
  methods: {
    ...mapMutations('sistema', ['setNome', 'setVida', 'setMana'])
  }
}
</script>

<style lang="css" scoped>
</style>
