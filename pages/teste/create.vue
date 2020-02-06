<template lang="html">
  <v-card
    class="pa-2 ma-3"
  >
    <v-card-title>
      <span class="title font-weight-light">Novo sistema</span>
    </v-card-title>

    <v-card-text ref="teste" class="headline font-weight-bold">
      <sistema-form ref="form" :submit="createSistema"></sistema-form>
    </v-card-text>

    <v-card-actions class="d-flex flex-row-reverse">
      <v-btn @click="createSistema" color="primary">Enviar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
