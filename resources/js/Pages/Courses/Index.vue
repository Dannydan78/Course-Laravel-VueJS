<template>
    <app-layout>
      <!-- Utilisation d'un composant de mise en page appelé "app-layout" -->
      <template #header>
        <!-- Utilisation d'un "slot" nommé "header" pour afficher le titre -->
        <h1>Liste des formations</h1>
      </template>
      <div class="py-3" v-for="course in courseList" :key="course.id">
        <!-- Utilisation d'une boucle pour afficher chaque cours -->
        <div class="mx-8 bg-white rounded shadow p-4">
          <div class="text-sm text-gray-500">Mise en ligne par {{ course.user.name }}</div>
          <div class="flex justify-between items-center">
            <div class="text-4xl">{{ course.title }}</div>
            <!-- Affichage du titre du cours -->
            <div class="text-sm text-gray-400">{{ course.episodes_count }} episodes</div>
          </div>
          <div class="text-sm text-gray-500">{{ course.description }}</div>
          <a href="'course/' + course.id" class="bg-indigo-500 text-white px-2 py-1 text-sm mt-3 inline-block rounded hover:bg-indigo-700">Voir la formation</a>
        </div>
      </div>
    </app-layout>
  </template>

<script setup>
// Importation des fonctions déclarées Vue.js
import { ref, defineProps, onMounted } from 'vue';

// Importation du composant "AppLayout"
import AppLayout from '@/Layouts/AppLayout.vue';

// Déclaration des props attendues par ce composant
const props = defineProps(['courses']);

// Création d'une référence pour stocker la liste des cours
const courseList = ref([]);

// Utilisation du hook "onMounted" pour exécuter une action une fois que le composant est monté
onMounted(() => {
  // Assignation des données de la prop "courses" à la référence "courseList"
  courseList.value = props.courses;
});
</script>


