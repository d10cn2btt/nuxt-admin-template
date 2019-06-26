export const name = 'people';
export const types = {
  SELECT: 'SELECT',
  SET: 'SET'
};
export const namespaced = true;
export const state = () => ({
  selected: 1,
  people: []
});
export const getters = {
  selectedPerson: state => {
    const p = state.people.find(person => person.id === state.selected);
    return p ? p : { first_name: 'Please,', last_name: 'select someone' };
  }
};
export const actions = {
  select({ commit }, id) {
    commit(types.SELECT, id);
  }
};
export const mutations = {
  [types.SELECT](state, id) {
    state.selected = id;
  },
  [types.SET](state, people) {
    state.people = people;
  }
};
