<template>
  <div id="app">   

 <for-V></for-V>
  <!-- <img src="./assets/logo.png">   <form-V v-on:getform="getForm"></form-V><table-v></table-v> <for-V></for-V>-->  
    <!--<for-V :for-data="forData" class="ol" v-on:inc="inc"></for-V>  -->
    <!---->
    <router-view></router-view>
  </div>
</template>

<script>
import test from './components/test.vue'
import forV from './components/forV.vue'
import formV from './components/form.vue'
import tableV from './components/tableV.vue'
export default {
  name: 'App',
  components:{
    test,
    forV,
    formV,
    tableV
  },
  data() {
    return {
      forData:[11,22,33],
      bar:'bar'
    }
  },
  methods:{
    inc:function(payload) {
      console.log(payload)
    },
    getForm:function(payload) {
      console.log(payload)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
.ol li {
  list-style:none;
}
</style>
