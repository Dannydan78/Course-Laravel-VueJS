<template>
    <app-layout>

      <template #header>
        {{ course.title }}
      </template>
      <div class="py-3">
        <div class="text-2xl">{{ course.episode[0].title }}</div>
        <iframe class="w-full h-screen" src="course.episodes[0].video_url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
    </app-layout>
</template>









<script setup>
// Importation des fonctions déclarées Vue.js
import { ref, defineProps, onMounted } from 'vue';

// Importation du composant "AppLayout"
import AppLayout from '@/Layouts/AppLayout.vue';

// Déclaration des props attendues par ce composant
const props = defineProps(['course']);

// Création d'une référence pour stocker la liste des cours
const courseList = ref([]);

;


// Utilisation du hook "onMounted" pour exécuter une action une fois que le composant est monté
onMounted(() => {
  // Assignation des données de la prop "courses" à la référence "courseList"
  courseList.value = props.courses;
});
</script>
