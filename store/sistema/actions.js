// Actions do modulo

const findOneSistema = (state, id) => {
  for (var i = 0; i < state.sistemas.length; i++) {
    if (i == id) {
      return sistemas[i]
    }
  }
}

export default { findOneSistema }
