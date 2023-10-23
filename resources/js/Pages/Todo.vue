<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ text: newTask.value, isStruckThrough: false });
    newTask.value = '';
  }
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};

const Strikethrough = (task) => {
  task.isStruckThrough = !task.isStruckThrough;
};
</script>

<template>
  <app-layout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Todo-List</h2>
    </template>
    <div class="container mx-auto p-4 mt-10">
      <h1 class="text-2xl font-semibold text-gray-800 mb-4">Mes tâches à exécuter</h1>
      <div class="flex mb-4">
        <input v-model="newTask" @keyup.enter="addTask" class="rounded-l-lg py-2 px-3 w-2/4 bg-gray-200 border border-gray-400" type="text" placeholder="Ajouter une tâche..." />
        <button @click="addTask" class="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">Ajouter</button>
      </div>
      <div class="flex">
        <ul>
          <li v-for="(task, index) in tasks" :key="index" class="bg-gray-100 p-2 my-1 rounded border">
            <div class="justify-between items-center flex">
              <span :class="{ 'strikethrough': task.isStruckThrough }">{{ task.text }}</span>
              <div class="flex">
                <button @click="() => Strikethrough(task)" class="bg-green-500 text-white p-1 mx-10 rounded hover:bg-green-600">Réalisé</button>
                <button @click="removeTask(index)" class="bg-red-500 text-white p-1 mx-10 rounded hover:bg-red-600">Supprimer</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </app-layout>
</template>

<style scoped>
.strikethrough {
  text-decoration: line-through;
}
</style>



<!-- <template>
    <div>
      <p :class="{ 'strikethrough': isStruckThrough }">{{ yourText }}</p>
      <button @click="toggleStrikethrough">Barrer / Débarrer</button>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue';

  const isStruckThrough = ref(false);
  const yourText = "Texte à barrer";

  const toggleStrikethrough = () => {
    isStruckThrough.value = !isStruckThrough.value;
  };
  </script>

  <style>
  .strikethrough {
    text-decoration: line-through;
  }
  </style> -->

