<template>
  <div class="pageContainer">
    <div class="signupBox">
      <h3>SignUp</h3>
      <label for="email">Email</label>
      <input type="email" name="email"  required v-model="email">
      <label for="password">Password</label>
      <input type="password" name="password" required v-model="password">
      <div v-if="errMsg">{{errMsg}} </div>
      <button @click="SignUp" class="SignUp">SignUp</button>
    </div>
  </div>
</template>

<script>
export default {
name: "SignUp", 
data: function() {
    return {
   email: '',
   password: '',
   errMsg: '',
  }
  },
watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
validatePassword(value) {
      if (value.length < 8 || value.length >= 16 || !/[A-Z]/.test(value) || !/[0-9]/.test(value)) {
        this.errMsg = "Password must be at least 8 characters  and less than 16 characters, it must include a capital letter and at least one number"
      }else{
      this.errMsg = ''
      }
    },
SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', 
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/api/posts");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.pageContainer {
  display: flex;
  height: 75vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 75%;
}

.signupBox {
  text-align: center;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 16px;
  margin: 0 auto;
  width: 50%;
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
  display: block;
  margin: 0 auto;
  width: 50%;
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
