<template>
  <div id="notes-list">
    <div id="list-header">
      <h2>Notes</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" :class="{'active': show=='all'}" @click="show='all'">
            All Notes
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" :class="{'active': show!='all'}" @click="show='sss'">
            Favorites
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a class="list-group-item" href="#" v-for="item in noteList" :key="item.id" :class="{'active': activeNote === item}" @click="changeNote(item)">
          <h4 class="list-group-item-heading">
            {{item.text}}
          </h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: 'all'
    }
  },
  methods: {
    changeNote (item) {
      this.$store.dispatch('changeNote', item)
    }
  },
  computed: {
    notes () {
      return this.$store.state.notes
    },
    activeNote () {
      return this.$store.state.activeNote
    },
    noteList () {
      if (this.show === 'all') {
        return this.notes
      } else {
        return this.notes.filter(item => item.favorite)
      }
    }
  }
}
</script>
<style scoped>
#notes-list {
  float: left;
  width: 300px;
  height: 100%;
  background-color: #F5F5F5;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

#list-header {
  padding: 5px 25px 25px 25px;
}

#list-header h2 {
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  font-size: 22px;
  padding-bottom: 8px;
}

#notes-list .container {
  height: calc(100% - 137px);
  max-height: calc(100% - 137px);
  overflow: auto;
  width: 100%;
  padding: 0;
}

#notes-list .container .list-group-item {
  border: 0;
  border-radius: 0;
}
</style>
