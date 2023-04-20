<script setup>
import {ref, watch} from "vue";

const username = ref('')
const password = ref('')
const name = ref('')
const surname = ref('')
const showPassword = ref(false)
const errorMessage = ref('')

function showHide() {
  showPassword.value = !showPassword.value
}

watch([username, password], () => {
  console.log('watch')
  errorMessage.value = ''
})


function callSignUpPostAPI() {
  fetch('http://localhost:1234/user', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
      nameSurname: name.value + surname.value,
    })
  }).then((res) => {
    if (res.ok) {

    }
  }).catch(() => {
    errorMessage.value = 'Something is wrong!'
  })
}

function onSignUpSubmit(e) {
  e.preventDefault()
  if (username.value.length === 0) {
    errorMessage.value = 'Please enter your username and/or password.'
    return;
  }
  if (username.value.length < 3) {
    errorMessage.value = 'Username must have at least 3 characters.'
    return;
  }
  if (password.value.length === 0) {
    errorMessage.value = 'Please enter your username and/or password.'
    return;
  }
  if (password.value.length < 7) {
    errorMessage.value = 'Password must have at least 7 characters.'
    return;
  }
  callSignUpPostAPI()

}
</script>
<template>
  <div class="sign-up-page-container">
    <div class="sign-up-page-div">
      <form @submit.prevent="onSignUpSubmit" class="sign-up-form">
        <h1>
          Sign Up
        </h1>
        <div v-if="errorMessage" class="error-message-div">
          <span>{{ errorMessage }}</span>
        </div>
        <div class="sign-up-email-div">
          <label>
            Username
          </label>
          <div class="sign-up-form-email-input">
            <i class="fa-solid fa-user"/>
            <input type="text" v-model="username" placeholder="Type your username"/>
          </div>
        </div>
        <div class="sign-up-password-div">
          <label>Password</label>
          <div class="sign-up-form-password-input">
            <i class="fa-solid fa-key"/>
            <input v-model="password" :type="showPassword ? 'text' : 'password'"
                   placeholder="Type your password"/>
            <i class="fa-solid" :class="{'fa-eye': !showPassword, 'fa-eye-slash': showPassword}" @click="showHide"/>
          </div>
        </div>
        <button class="sign-up-button">SIGN UP</button>
        <div class="sign-up-page-login-link-div">
          <span>
            Already have an account?</span> <a href="/login"> Sign in</a>
        </div>
      </form>
    </div>
  </div>

</template>
<style scoped>
.sign-up-page-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #B1E1FF, #AFB4FF, #9C9EFE, #A66CFF);
}

.sign-up-page-div {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.sign-up-form {
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  padding: 40px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 1px #e6e6e6;
}

.error-message-div {
  height: 40px;
  color: #b30000;
  background-color: #fff1f1;
  border: 1px solid #b30000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

.sign-up-form h1 {
  display: flex;
  align-self: center;
  color: #333333;
  margin-bottom: 30px;
  margin-top: 0;
}

.sign-up-email-div {
  display: flex;
  flex-direction: column;
}

.sign-up-email-div label {
  font-size: 15px;
  margin-bottom: 5px;
  color: #333333;
}

.sign-up-form-email-input input {
  border-bottom: 2px solid #e6e6e6;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 3px;
  padding: 10px 10px 10px 35px;
  font-size: 15px;
  width: 100%;
  color: #666666;
}

.sign-up-form-email-input i {
  position: absolute;
  padding: 10px;
  color: #666666;
}

.sign-up-form-email-input input:focus {
  outline: transparent;
}

.sign-up-password-div {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.sign-up-form-password-input input:focus {
  outline: transparent;
}

.sign-up-password-div label {
  font-size: 15px;
  margin-bottom: 5px;
  color: #333333;
}

.sign-up-form-password-input input {
  border-bottom: 2px solid #e6e6e6;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 3px;
  padding: 10px 35px 10px 35px;
  font-size: 15px;
  width: 100%;
  color: #666666;
}

.sign-up-form-password-input i:nth-child(3) {
  right: 0;
}

.sign-up-form-password-input i {
  position: absolute;
  padding: 10px;
  color: #666666;
}

.sign-up-button {
  background: linear-gradient(to right, #B1E1FF, #AFB4FF, #9C9EFE, #A66CFF);
  border: 1px solid #e6e6e6;
  padding: 10px;
  font-size: 15px;
  border-radius: 15px;
  margin-top: 15px;
  color: #333333;
  cursor: pointer;
}

.sign-up-page-login-link-div {
  margin-top: 30px;
  align-self: center;
  font-size: 13px;
}

.sign-up-page-login-link-div span {
  color: gray;
}

.sign-up-page-login-link-div a {
  color: #333333;
  text-decoration: none;
}

.sign-up-form-email-input {
  display: flex;
  flex-direction: row;
}

.sign-up-form-password-input {
  display: flex;
  flex-direction: row;
  position: relative;
}
</style>
