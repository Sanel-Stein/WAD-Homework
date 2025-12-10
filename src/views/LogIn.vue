<template>
  <div class="pageContainer">
    <div class="LogInBox">
      <form @submit.prevent="login">
        <label>Email</label>
        <input type="email" name="email" required v-model="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" name="password" required v-model="password" placeholder="Password"/>
        <div class="container">
            <button @click='LogIn' type="submit">Login</button>
            <button @click='this.$router.push("/api/signup")' class="center">Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "LogIn", 
data: function() {
    return {
      email: '',
      password: '',
  }
  },
  methods: {
    LogIn() {
          let data = {
            email: this.email,
            password: this.password
          };
          fetch("http://localhost:3000/auth/login", {
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
            location.assign("/");
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

.LogInBox {
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 16px;
  margin: 0 auto;
  width: 50%;
}

.LogInBox label {
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
  width: 30%;
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
.container {
  display: flex;
  justify-content: space-between;
}
</style>
