export default {
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    submit: {
      type: Function,
      default: () => ({})
    }
  },
  methods: {
    getForm () {
      return this.$refs.form
    },
    validate () {
      return this.$refs.form.validate()
    }
  }
}
