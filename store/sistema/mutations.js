// Mutations do modulo

const createSistema = (state, { nome, vida, mana }) => {
  state.sistemas.push({
    id: (state.sistemas.length + 1),
    nome,
    vida,
    mana
  })
}

const updateSistema = (state, { id, nome, vida, mana }) => {
  for (var i = 0; i < state.sistemas.length; i++) {
    if (i == id) {
      state.sistemas[i] = { id, nome, vida, mana }
    }
  }
}

const deleteSistema = (state, id) => {
  for (var i = 0; i < state.sistemas.length; i++) {
    if (id == state.sistemas[i].id) {
      state.sistemas.splice(i, 1)
    }
  }
}

export default { createSistema, updateSistema, deleteSistema }
