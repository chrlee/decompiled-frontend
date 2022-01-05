export const state = () => ({
    pages: []
  })

  export const mutations = {
    SET_PAGES(state,value)
    {
        state.pages = value
    },
}

  export const actions = {
    async nuxtServerInit({ commit }, context) {
      const pageData = await context.$strapi.find('pages', { sort: 'id' });
    commit('SET_PAGES', pageData.data)
  }
}