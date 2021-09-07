<template>

  <div id="wrapper-div" :style="customBackground">

    <div id="app">
      <h1> We see each other again in: </h1>
      <countdown :time="1631268060 - Date.now()">
        <template
                slot-scope="props">
          {{ props.days }} days, {{ props.hours }} hours, {{ props.minutes }} minutes,
          {{props.seconds}} seconds
        </template>
      </countdown>
    </div>

  </div>

</template>

<script>

import Vue from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';

Vue.component(VueCountdown.name, VueCountdown);


export default {
  name: 'app',
  data()
    {
        const colors = ['#a61f34', '#4f86f7', '#ffe135', '#000000', '#00468b', '#ffc0cb', '#8b0017', '#808080',
            '#4e2a84', '#660099'];

        return{
            customBackground:{
                backgroundColor: `${colors[Math.floor(Math.random() * colors.length)]}`
            }
        }
    }
}
</script>

<style>

h1 {
  font-size: 70px;

}

span {
  font-size: 60px;
  /*color: #fff;*/
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  display: inline-block;
  width: 100%;
  height: 100vh;
  margin-top: 10%;

}
</style>
