/* eslint-disable semi */
/* eslint-disable semi */
<template>
  <div class="home">
    <h1>
      All Destinations
    </h1>
    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="destination.slug" >
          <h2>
          {{ destination.name }}
          </h2>
        </router-link>
        <figure>
          <router-link :to="destination.name">
            <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name"/>
          </router-link>
        </figure>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import store from '@/store.js';

export default {
  name: 'home',
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
  methods: {
    log() {
      const convert = JSON.parse(JSON.stringify(store));
      console.log(convert);
    },
  },
};
</script>

<style scoped>

  .home {
    text-align: center;
  }

  .destinations {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  figure img {
    max-width: 250px;
  }
</style>
