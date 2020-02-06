// É necessário criar o método getEntity para esse mixin funcionar
// Esse método deve retornar o nome da entidade que deseja rotear

export default {
  methods: {
    goHome () {
      this.$router.push({
        name: this.getEntity()
      })
    },
    goEdit (id) {
      this.$router.push({
        name: this.getEntity() + '-edit',
        params: {
          id: id
        }
      })
    },
    goView (id) {
      this.$router.push({
        name: this.getEntity() + '-view',
        params: {
          id: id
        }
      })
    },
    goCreate () {
      this.$router.push({
        name: this.getEntity() + '-create'
      })
    }
  }
}
