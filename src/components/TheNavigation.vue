<template>
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/hawai">Hawai</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
      <router-link to="/panama">Panama</router-link>
    </nav>
</template>

<style  scoped>
#nav {
  display: flex;
  justify-content: center;
}

#nav a {
  margin : 1rem 1rem;
  color: rgb(59, 59, 59);
}

#nav a.router-link-exact-active {
  color : #42b983
}
</style>
