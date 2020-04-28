<template>
  <div id="toolbar">
    <i class="glyphicon glyphicon-plus" @click="addNote"></i>
    <i class="glyphicon glyphicon-star" @click="changeBol" :class="{'starred': activeNote.favorite}"></i>
    <i class="glyphicon glyphicon-remove" @click="del"></i>
  </div>
</template>
<script>
export default {
  methods: {
    addNote () {
      this.$store.dispatch('addNote')
    },
    changeBol () {
      this.$store.dispatch('changeBol')
    },
    del () {
      this.$store.dispatch('del')
    }
  },
  computed: {
    activeNote () {
      return this.$store.state.activeNote
    }
  }
}
</script>
<style scoped>
#toolbar {
  float: left;
  width: 80px;
  height: 100%;
  background-color: #30414D;
  color: #767676;
  padding: 35px 25px 25px 25px;
}
#toolbar i {
  font-size: 30px;
  margin-bottom: 35px;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.5s ease;
}
.starred {
  color: #F7AE4F;
}

#toolbar i:hover {
  opacity: 1;
}
</style>
