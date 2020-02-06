import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      storage: localStorage,
      modules: ['sistema']
    }).plugin(store);
  });
}
