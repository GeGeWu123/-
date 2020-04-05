<template>
  <div id="app">
    <img class="temp" src="@/assets/logo.png" alt="">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.temp{
    height: 90px;
    width: 104%;
}
</style>
