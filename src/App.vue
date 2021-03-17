<template>
  <div id="app">
    
  <div class="navbar navbar-dark " style="background-color:#FF3333;">

   
  <a class="navbar-brand" href="#">
    <img src="https://grandorder.wiki/images/8/80/Icon_Coin_Saber.png" width="30" height="30" class="d-inline-block align-top" alt="">
 งานLogin
  </a>

    <ul class="nav">
     <li class="nav-item ">
        <router-link class="text-white" to="/">Home<a>|</a></router-link> 
     </li>
    
     <li class="nav-item ">
       <router-link class="text-white"  to="/Login"> Login</router-link>
     </li>
     
    </ul>
  </div>
  <div class="cintainer py-4">
    <router-view/>
  </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
