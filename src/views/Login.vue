<template>
  <div class="row">
      <div class="text-center mb-4">
          <h1>Login</h1>
      </div>
      <div class="col-sm-5 m-auto">
          <form id="login-form" @submit.prevent="loginUsser">
            <div class="row">
                <div class="col-sm-12 form-group">
                    <label for="email">Email address</label>
                    <input type="email" id="email" v-model="email" class="form-control form-control-lg">
                </div>
                <div class="col-sm-12 form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password"  v-model="password" class="form-control form-control-lg">
                </div>
                <br>
                 <div class="col-sm-12 form-group py-4">
                     <button v-if="! xhrRequest" class="btn btn-primary btn-lg col-sm-4" style="background-color:#FF3333;">Login</button>
                     <button v-if="xhrRequest" class="btn btn-primary btn-lg col-sm-4"  style="background-color:#FF3333;">
                         <span class="spinner-border spinner-border-sm btn-spn"></span>
                         wait ...
                     </button>
                 </div>
                  <div class="col-sm-12 form-group mt-5">
                     <p>Don't have an account?  <router-link  to="/About">Signup</router-link> </p>
                 </div>
            </div>
          </form>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    data(){
        return{
        email:'',
        password:'',
        xhrRequest: false 
        }
    },
    methods: {
    loginUsser(){
        let v = this;
        v.xhrRequest=true;
        firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(
            () =>{
                v.xhrRequest=false;
                alert('Login');
               this.$router.replace('member-area');
            },
            (err) =>{
                v.xhrRequest=false;
                console.log(`Error - ${err.maeeage}`);
            }
    
        );
    }
    }
}
</script>
<style scoped>
.btn-spn{
    position: relative;
    top: -3px;
}
</style>