<script setup>
import {ref} from "vue";

const showPassword=ref(false)
function showHide() {
  showPassword.value=!showPassword.value
}
</script>
<template>
  <div class="sign-up-page-container">
    <div class="sign-up-page-div">
      <form class="sign-up-form">
        <h1>
          Sign Up
        </h1>
        <div class="sign-up-email-div">
          <label>
            E-mail
          </label>
          <div class="sign-up-form-email-input">
            <i class="fa-solid fa-user"/>
            <input type="text" placeholder="Type your email"/>
          </div>
        </div>
        <div class="sign-up-password-div">
          <label>Password</label>
          <div class="sign-up-form-password-input">
            <i class="fa-solid fa-key"/>
            <input :type="showPassword ? 'text' : 'password'" placeholder="Type your password"/>
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

.sign-up-form h1 {
  display: flex;
  align-self: center;
  color: #333333;
  margin-bottom: 30px;
  margin-top: 0;
}
.sign-up-email-div{
  display: flex;
  flex-direction: column;
}
.sign-up-email-div label{
  font-size: 15px;
  margin-bottom: 5px;
  color: #333333;
}
.sign-up-form-email-input input{
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
.sign-up-form-email-input i{
  position: absolute;
  padding: 10px;
  color: #666666;
}
.sign-up-form-email-input input:focus{
  outline: transparent;
}
.sign-up-password-div{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.sign-up-form-password-input input:focus{
  outline: transparent;
}
.sign-up-password-div label{
  font-size: 15px;
  margin-bottom: 5px;
  color: #333333;
}
.sign-up-form-password-input input{
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
.sign-up-form-password-input i:nth-child(3){
  right: 0;
}
.sign-up-form-password-input i{
  position: absolute;
  padding: 10px;
  color: #666666;
}
.sign-up-button{
  background: linear-gradient(to right, #B1E1FF, #AFB4FF, #9C9EFE, #A66CFF);
  border: 1px solid #e6e6e6;
  padding: 10px;
  font-size: 15px;
  border-radius: 15px;
  margin-top: 15px;
  color: #333333;
  cursor: pointer;
}
.sign-up-page-login-link-div{
  margin-top: 30px;
  align-self: center;
  font-size: 13px;
}
.sign-up-page-login-link-div span{
  color: gray;
}
.sign-up-page-login-link-div a{
  color: #333333;
  text-decoration: none;
}
.sign-up-form-email-input{
  display: flex;
  flex-direction: row;
}
.sign-up-form-password-input{
  display: flex;
  flex-direction: row;
  position: relative;
}
</style>
