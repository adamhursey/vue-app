<template>
  <div id="app">
    <div id="nav">
      <router-link id="userLink" to="/">List of Users</router-link>
      <router-link id="albumLink" to="/albums">List of Albums</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#userLink {
  margin: 5px;
}

#albumLink {
  margin: 5px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
