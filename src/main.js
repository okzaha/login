import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDKbXLtlTUe3fh488R1rqBmV6S4_tzUs2Y",
  authDomain: "css-tam.firebaseapp.com",
  projectId: "css-tam",
  storageBucket: "css-tam.appspot.com",
  messagingSenderId: "158029273035",
  appId: "1:158029273035:web:79baad8d2a82ff4e63084e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
