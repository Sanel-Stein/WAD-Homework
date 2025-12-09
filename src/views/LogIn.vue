<template>
  <div class="pageContainer">
    <div class="LogInBox">
      <form @submit.prevent="submitForm">
        <label>Email</label>
        <input type="email" v-model="email" required placeholder="Email" />

        <label>Password</label>
        <input type="password" v-model="password" required placeholder="Password"/>
        <div class="container">
            <button type="submit">Login</button>
            <button @click='this.$router.push("/api/signup")' class="center">Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

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
