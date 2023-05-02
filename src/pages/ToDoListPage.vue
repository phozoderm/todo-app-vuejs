<script setup>
import CardItemComponent from "@/components/CardItemComponent.vue";
import {ref} from "vue";

const showModal= ref(false)
</script>
<template>
  <div class="to-do-list-container">
    <div class="to-do-list-add-button">
      <button><i class="fa-solid fa-plus"/> ADD TO DO</button>
    </div>
    <div class="to-do-list-div">
      <div>
        <div class="to-do-list-label">
          <label>TO DO</label>
        </div>
        <CardItemComponent/>
      </div>
      <div>
        <div class="to-do-list-label">
          <label>IN PROGRESS</label>
        </div>
        <CardItemComponent/>
      </div>
      <div>
        <div class="to-do-list-label">
          <label>DONE</label>
        </div>
        <CardItemComponent/>
      </div>
    </div>
  </div>
</template>
<style scoped>

.to-do-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to right, #B1E1FF, #AFB4FF, #9C9EFE, #A66CFF);
}

.to-do-list-div {
  width: 1300px;
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
}

.to-do-list-add-button {
  display: flex;
  width: 1300px;
  justify-content: flex-end;
}

.to-do-list-add-button button {
  margin: 20px;
  padding: 10px;
  width: 120px;
  cursor: pointer;
}

.to-do-list-div > div {
  background-color: whitesmoke;
  width: 400px;
  height: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 0 5px;
}

.to-do-list-label {
  margin: 20px;
  color: #4b5a75;
  font-size: 17px;
  font-weight: 600;
}
</style>
