<script lang="ts">
  import Banner from './components/Banner.vue';
  import ConteudoPrincipalVue from './components/ConteudoPrincipal.vue';
import Rodape from './components/Rodape.vue';

  export default {
    components: {
    Banner,
    ConteudoPrincipalVue,
    Rodape
},
  };
</script>

<template>
  <Banner />
  <ConteudoPrincipalVue />
  <Rodape />
</template>
