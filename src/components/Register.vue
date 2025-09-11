<template>
  <button @click="signInWithGoogle">Authenth</button>
</template>

<script>

import {getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect} from "firebase/auth";
import { router } from "@/main"

export default {
  // source https://www.youtube.com/watch?v=xceR7mrrXsA&ab_channel=LearnVue
  name: 'Register',
  mounted() {
    this.signInWithGoogle()
    console.log("mounted Register")
  },
  methods: {
    signInWithGoogle(){
      const provider = new GoogleAuthProvider();
      const auth = getAuth()
      signInWithPopup(auth , provider)
          .then((result) => {
              console.log(result.user)
            router.push('/main')
          })
    }
  }
}
</script>