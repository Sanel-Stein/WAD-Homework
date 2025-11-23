<template>
  <div class="pageContainer">
    <div class="signupBox">
      <form @submit.prevent="submitForm">
        <label>Email</label>
        <input type="email" v-model="email" required placeholder="Email" />

        <label>Password</label>
        <input type="password" v-model="password" required placeholder="Password"/>

        <button type="submit">Sign Up</button>
      </form>
      <p v-if="unvalidReasons" class="reasonings">{{ unvalidReasons }}</p>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return{
      email: '',
      password: '',
      unvalidReasons: ''

    }
  },
  methods: {
    passwordValidation(password) {
      const reasons = [];

      if (password.length < 8) {
        reasons.push("Password must be at least 8 characters.");
      }

      if (password.length > 15) {
        reasons.push("Password must not be more than 15 characters.");
      }

      if (!/[A-Z]/.test(password)) {
        reasons.push("Password must contain at least one uppercase alphabet character.");
      }

      const lowercaseLetters = password.match(/[a-z]/g) || [];
      if (lowercaseLetters.length < 2){
        reasons.push("Password must contain at least two lowercase alphabet characters.");
      }

      if (!/[0-9]/.test(password)) {
        reasons.push("Password must contain at least one numeric value.");
      }

      if (!/^[A-Z]/.test(password)) {
        reasons.push("Password must start with an uppercase alphabet character.");
      }

      if(!password.includes("_")){
        reasons.push("Password must include the character “_”.")
      }

      return reasons
    },
    submitForm() {
      const reasons = this.passwordValidation(this.password)
      if (reasons.length){
        this.unvalidReasons = reasons.join("\n");
        return;
      }


      console.log('Signup data:', this.username, this.password);
      this.email = '';
      this.password = '';
      this.unvalidReasons = '';
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 83.54vh;
  margin: 0;
}

.signupBox {
  max-width: 400px;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 16px;
}

.signupBox label {
  display: block;
  text-align: center;
  margin-bottom: 0.25rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 64px;
  text-align: center;
  font-weight: bold;
}

button {
  width: 100%;
  padding: 0.7rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 64px;
  cursor: pointer;
}

button:hover {
  background-color: #369f6b;
}

.reasonings {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  padding-top: 10px;
  white-space: pre-line;
}
</style>
