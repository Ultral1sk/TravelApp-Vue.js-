<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/hawai">Hawai</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
      <router-link to="/panama">Panama</router-link>
    </div>
    <h1>
    <router-view/>
    </h1>
  </div>
</template>

<style>
#nav {
  display: flex;
  justify-content: center;
}
#nav a {
  margin : 1rem 1rem;
}
</style>
