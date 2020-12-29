<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false"/>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue"
import TheSidenav from "@/components/Navigation/TheSidenav.vue"
export default {
  data () {
    return {
      displaySidenav: false
    }
  },
  components:{
    TheHeader,
    TheSidenav
  }
}
</script>
