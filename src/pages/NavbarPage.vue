<script setup>
import {inject} from "vue";

const isLoggedIn = inject('isLoggedIn')
const nameSurname = inject('nameSurname')

function logOut() {
  localStorage.removeItem('jwt')
  localStorage.removeItem('email')
  window.location.reload()
}

</script>

<template>
  <div class="navbar-container">
    <div class="navbar-div">
      <div class="navbar-title">
        <i class="fa-solid fa-clipboard-list"/>
        <h1>
          To Do List
        </h1>
      </div>
      <div v-if="isLoggedIn" class="navbar-right-items-div">
        <div class="navbar-user-name">
          <span>Hello {{nameSurname}}!</span>
        </div>
        <div class="navbar-sign-out">
          <button @click="logOut"> Log out <i class="fa-solid fa-right-from-bracket"/></button>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>

</template>

<style>

.navbar-container {
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, #B1E1FF, #AFB4FF, #9C9EFE, #A66CFF);
}

.navbar-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  width: 1200px;
}

.navbar-title {
  display: flex;
  flex-direction: row;
}

.navbar-title i {
  font-size: 40px;
  margin: 0 10px;
  color: #333333;
}

.navbar-title h1 {
  margin: 0 10px;
  color: #333333;
}

.navbar-right-items-div {
  display: flex;
  flex-direction: row;
}

.navbar-user-name span {
  font-size: 18px;
  color: #333333;
}

.navbar-sign-out button {
  font-size: 16px;
  color: #333333;
  background: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
}

.navbar-user-name {
  margin-right: 10px;
}

.navbar-sign-out {
  margin-left: 10px;
}
</style>
