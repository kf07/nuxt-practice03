export const state = () => ({
  isLoading: false
});

export const mutations = {
  setIsLoadfing(state,isLoading) {
    state.isLoading = isLoading
  }
};
