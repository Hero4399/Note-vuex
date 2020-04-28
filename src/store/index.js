import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    activeNote: {}
  },
  mutations: {
    ADD_NOTE (state) {
      const newNote = {
        /*
          text:默认文字内容
          favorite:收藏
        */
        text: 'new Note',
        favorite: false,
        id: Date.now() + Math.random()
      }
      state.notes.push(newNote)
      // 新创建的添加为激活的note
      state.activeNote = newNote
    },
    CHANGE_NOTE (state, item) {
      state.activeNote = item
    },
    CHANGE_BOL (state) {
      state.activeNote.favorite = !state.activeNote.favorite
    },
    DEL (state) {
      const index = state.notes.indexOf(state.activeNote)
      state.notes.splice(index, 1)
      if (state.notes.length > 0) {
        state.activeNote = state.notes[0]
      }
    }
  },
  actions: {
    addNote ({ commit }) {
      commit('ADD_NOTE')
    },
    changeNote ({ commit }, item) {
      commit('CHANGE_NOTE', item)
    },
    changeBol ({ commit }) {
      commit('CHANGE_BOL')
    },
    del ({ commit }) {
      commit('DEL')
    }
  },
  modules: {
  }
})
