export default {
  data: () => ({
    sistema: {
      nome: null,
      vida: null,
      mana: null
    }
  }),
  methods: {
    setNome (value) {
      console.log(value);
      this.sistema.nome = value
    },
    setVida (value) {
      this.sistema.vida = value
    },
    setMana (value) {
      this.sistema.mana = value
    },
  }
}
