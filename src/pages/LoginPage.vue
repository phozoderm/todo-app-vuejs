<script setup>
import { ref, watch} from "vue";

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const errorMessage = ref('')

function showHide() {
  showPassword.value = !showPassword.value
}

function callLoginPostAPI() {
  fetch('http://localhost:1234/session', {
    method: 'POST',
    headers: {
      'content-type': 'application/json '
    },
    body: JSON.stringify({
      username: email.value,
      password: password.value
    })
  }).then((res) => {
    if (res.ok) {
      res.json().then((responseBody) => {
        localStorage.setItem('nameSurname', responseBody.user.nameSurname)
        localStorage.setItem('jwt', responseBody.jwt)
        window.location.reload()
      })
    } else {
      errorMessage.value = 'Email and/or password is incorrect'
    }
  }).catch(() => {
    errorMessage.value = 'Something is wrong!'
  })
}

function onLoginSubmit(e) {
  e.preventDefault()
  if (email.value.length === 0) {
    errorMessage.value = 'Please enter email and/or password.'
    return;
  }
  if (password.value.length === 0) {
    errorMessage.value = 'Please enter your email and/or password.'
    return;
  }
  callLoginPostAPI()
}

watch([email, password], () => {
  errorMessage.value = ''
})
</script>

<template>
  <div class="login-page-container">
    <div class="login-div">
      <form @submit.prevent="onLoginSubmit" class="login-form-div">
        <h1>Login</h1>
        <div v-if="errorMessage" class="error-message-div">
          <span>{{ errorMessage }}</span>
        </div>
        <div class="login-form-input-email-div">
          <label>E-mail</label>
          <div class="login-form-email-input">
            <i class="fa-solid fa-envelope"/>
            <input v-model="email" type="email" placeholder='Type your email'/>
          </div>
        </div>
        <div class="login-form-input-password-div">
          <label>Password</label>
          <div class="login-form-password-input">
            <i class="fa-solid fa-key"/>
            <input v-model="password" :type="showPassword ? 'text' : 'password'" placeholder='Type your password'/>
            <i class="fa-solid" :class="{'fa-eye': !showPassword, 'fa-eye-slash': showPassword}" @click="showHide"/>
          </div>
        </div>
        <div class="login-form-forgot-password">
          <a>Forgot password?</a>
        </div>
        <button class="login-form-button">LOGIN</button>
        <div class="login-page-sign-up-link-div">
          <span>
            Don't have an account?</span> <a href="/signup"> Sign up</a>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
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

.error-message-div span {
  font-size: 14px;
}

.login-form-password-input i:nth-child(3) {
  right: 0;
}

.login-page-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #B1E1FF, #AFB4FF, #9C9EFE, #A66CFF);
}

.login-div {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.login-form-div {
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  padding: 40px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 1px 1px #e6e6e6;
}

.login-form-div h1 {
  display: flex;
  align-self: center;
  color: #333333;
  margin-bottom: 30px;
  margin-top: 0;
}

.login-form-input-email-div {
  display: flex;
  flex-direction: column;
}

.login-form-email-input input:focus {
  outline: transparent;
}

.login-form-email-input {
  display: flex;
  flex-direction: row;
  position: relative;
}

.login-form-email-input i {
  position: absolute;
  padding: 10px;
  font-size: 15px;
  color: #666666
}

.login-form-input-email-div label {
  font-size: 15px;
  margin-bottom: 5px;
  color: #333333;
}

.login-form-password-input input:focus {
  outline: transparent;
}

.login-form-password-input {
  display: flex;
  flex-direction: row;
  position: relative;
}

.login-form-input-password-div {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.login-form-input-password-div label {
  font-size: 15px;
  margin-bottom: 5px;
  color: #333333;
}

.login-form-email-input input {
  border-bottom: 2px solid #e6e6e6;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 3px;
  font-size: 15px;
  width: 100%;
  color: #666666;
  padding: 10px 10px 10px 35px;
}

.login-form-forgot-password {
  font-size: 15px;
  text-align: end;
  margin-top: 15px;
  color: #333333;
}

.login-form-password-input input {
  border-bottom: 2px solid #e6e6e6;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 3px;
  padding: 10px 35px 10px 35px;
  font-size: 15px;
  width: 100%;
  color: #666666
}

.login-form-password-input i {
  position: absolute;
  padding: 10px;
  font-size: 15px;
  color: #666666
}

.login-form-button {
  background: linear-gradient(to right, #B1E1FF, #AFB4FF, #9C9EFE, #A66CFF);
  border: 1px solid #e6e6e6;
  padding: 10px;
  font-size: 15px;
  border-radius: 15px;
  margin-top: 15px;
  color: #333333;
  cursor: pointer;
}

.login-page-sign-up-link-div {
  margin-top: 30px;
  align-self: center;
  font-size: 13px;
}

.login-page-sign-up-link-div span {
  color: gray;
}

.login-page-sign-up-link-div a {
  color: #333333;
  text-decoration: none;
}
</style>
