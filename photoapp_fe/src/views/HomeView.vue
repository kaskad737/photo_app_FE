<template>
  <div class="home">
    <router-link to="/image-download" class="button is-primary is-large is-fullwidth">
      Download Image
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
