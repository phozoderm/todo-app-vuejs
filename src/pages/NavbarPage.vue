<script setup>

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
      <div class="navbar-right-items-div">
        <div class="navbar-user-name">
          <span>Hello!</span>
        </div>
        <div class="navbar-sign-out">
          <a> Log out <i class="fa-solid fa-right-from-bracket"/> </a>
        </div>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>
<style>
.navbar-container{
  width: 100%;
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, #B1E1FF, #AFB4FF, #9C9EFE, #A66CFF);
}
.navbar-div{
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 90px;
   width: 1200px;
 }
.navbar-title{
  display: flex;
  flex-direction: row;
}
.navbar-title i{
  font-size: 40px;
  margin: 0 10px;
  color: #333333;
}
.navbar-title h1{
  margin: 0 10px;
  color: #333333;
}
.navbar-right-items-div{
  display: flex;
  flex-direction: row;
}
.navbar-user-name span{
  font-size: 18px;
  color: #333333;
}
.navbar-sign-out a{
  font-size: 18px;
  color: #333333;
}
.navbar-user-name{
  margin-right: 10px;
}
.navbar-sign-out{
  margin-left: 10px;
}
</style>
