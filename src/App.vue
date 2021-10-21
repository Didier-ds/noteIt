<template>
  <div id="view" >
    <div id="code_box" class="sm:w-8/12 w-11/12 relative p-4 bg-gray-600 rounded-md mx-auto">
      <div id="top_icons" class="absolute p-4 left-0 top-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="14" viewBox="0 0 54 14"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="6" cy="6" r="6" fill="#FF5F56" stroke="#E0443E" stroke-width=".5"></circle><circle cx="26" cy="6" r="6" fill="#FFBD2E" stroke="#DEA123" stroke-width=".5"></circle><circle cx="46" cy="6" r="6" fill="#27C93F" stroke="#1AAB29" stroke-width=".5"></circle></g></svg>
      </div>
      <div>
        <textarea v-model="note" @input="save" class="w-full h-full font-medium" autofocus autocorrect="off"/>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {db, ref, set, onValue} from '@/utils/firebase.js'
export default {
  name: 'App',
  data(){
    return {
      note: '',
    }
  },
  computed: {
    noteRef(){
      const userId = 0
     return ref(db, `/users/${userId}`)
    }
  },
  methods:{
    save(){
      
      console.log(this.note)
     set(this.noteRef,{
        note : this.note
      })
    },
    listen(){
      onValue(this.noteRef, (snapshot) => {
        const data = snapshot.val();
        console.log('user', data)
         this.note = data.note;
      })
    }
  },
  components: {
    // HelloWorld
  },
  mounted() {
    this.listen();
    console.log(ref)
  },
}
</script>

<style lang="scss">
@import 'assets/styles/main.css';
#view {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background: #E7E8F2;
}
#code_box {
  height: 80vh;
  background-color:rgb(1, 22, 39) !important;
  box-shadow: rgb(0 0 0 / 55%) 0px 20px 68px;
}
#code_box textarea {
  background: transparent;
  color: white;
  margin-top: 2em;
  min-height: 70vh;
  resize: none;
  color:rgb(130, 170, 255) !important;
  border: none;
  outline: none;
}
</style>
