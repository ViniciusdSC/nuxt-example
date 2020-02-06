<template lang="html">
  <v-data-table
    :headers="headers"
    :items="sistemas"
    hide-default-footer
    multi-sort
    :page="page"
    :items-per-page="5"
    class="elevation-1"
    >
      <!-- <template v-slot:body.prepend>
        <tr>
          <th>
            <v-text-field
              v-model="params.id"
              @change="setUpQueryAndLoadTable"
              label="Código do sistema"
            ></v-text-field>
          </th>
          <th>
            <v-text-field
              v-model="params.nome"
              @change="setUpQueryAndLoadTable"
              label="Nome do sistema"
            ></v-text-field>
          </th>
          <th>
            <v-text-field
              v-model="params.vida"
              @change="setUpQueryAndLoadTable"
              label="Vida padrão do sistema"
            ></v-text-field>
          </th>
          <th>
            <v-text-field
              v-model="params.mana"
              @change="setUpQueryAndLoadTable"
              label="Mana padrão do sistema"
            ></v-text-field>
          </th>
        </tr>
      </template> -->

      <template v-slot:item.action="{ item }">
        <td>
          <v-icon small class="mr-2" @click="goToEdit(item)">mdi-pencil</v-icon>
          <v-icon small class="mr-2" @click="deleteSistema(item.id)">mdi-delete</v-icon>
          <v-icon small @click="goToView(item)">mdi-eye</v-icon>
        </td>
      </template>

  </v-data-table>
</template>

<script>
import routingMixin from "@/mixins/routingMixin"
import { mapGetters, mapMutations } from 'vuex'

export default {
  mixins: [ routingMixin ],
  props: {
    page: Number
  },
  data: () => ({
    headers: [
      {
        text: "Código",
        value: "id"
      },
      {
        text: "Nome",
        value: "nome"
      },
      {
        text: "Vida",
        value: "vida"
      },
      {
        text: "Mana",
        value: "mana"
      },
      {
        text: "Actions",
        value: "action"
      }
    ]
  }),
  computed: {
    ...mapGetters('sistema', ['sistemas', 'total'])
  },
  methods: {
    getEntity() {
      return "sistema";
    },
    ...mapMutations('sistema', ['deleteSistema'])
  }
};
</script>

<style lang="css" scoped>
</style>
