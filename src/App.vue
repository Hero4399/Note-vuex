<template>
  <div id="app">
    <tool-bar/>
    <note-list/>
    <editor/>
  </div>
</template>
<script>

import ToolBar from './components/ToolBar'
import NoteList from './components/NoteList'
import Editor from './components/Editor'

export default {
  name: 'app',
  components: {
    ToolBar,
    NoteList,
    Editor
  }
}
</script>
<style>
html, #app {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
}
</style>
