<template>
  <div id="app">
    <TheNavigation />
    <h1>
    <router-view/>
    </h1>
  </div>
</template>


<script>

import TheNavigation from '@/components/TheNavigation'

export default {
  components : {
    TheNavigation
  }
  
};

</script>