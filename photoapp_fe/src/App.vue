<template>
  <div>
      <Navbar />

      <section class="section">
          <router-view/>
      </section>
  </div>
</template>

<script>
    import axios from 'axios';
    import Navbar from '@/components/layout/Navbar'

    export default {
      name: 'App',
      components: {
        Navbar
      },
      beforeCreate() {
        this.$store.commit('initializeStore')

        if (this.$store.state.access) {
          axios.defaults.headers.common['Authorization'] = "Bearer " + this.$store.state.access
        } else {
          axios.defaults.headers.common['Authorization'] = ""
        }
      }
    } 
</script>

<style lang="scss">
  @import '../node_modules/bulma';
</style>
