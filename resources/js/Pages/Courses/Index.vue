<template>
    <!-- Utilisation d'un composant de mise en page appelé "app-layout" -->
    <app-layout>
        <!-- Utilisation d'un "slot" nommé "header" pour afficher le titre -->
        <template #header>
            <h1>Liste des formations</h1>
        </template>
        <!-- Utilisation d'une boucle pour afficher chaque cours -->
        <div class="py-3" v-for="course in this.courseList" v-bind:key="course.id">


            <div class="mx-8 bg-white rounded shadow p-4">
                <div lass="text-sm text-gray-500">{{ course.user.name }}</div>
                <div class="flex justify-between items-center">
                  <div class="text-4xl">{{ course.title }}</div> <!-- Affichage du titre du cours -->
                  <div class="text-sm text-gray-400">{{ course.episodes_count }} episodes</div>
                </div>
            <div lass="text-sm text-gray-500">{{ course.description }}</div>
            <a href="" class="bg-indigo-500 text-white px-2 py-1 text-sm mt-3 inline-block  rounded hover:bg-indigo-700">Voir la formation</a>
        </div>
        </div>
    </app-layout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';

export default {
    components: {
        AppLayout
    },
    data() {
        // Initialisation de la liste des cours avec les données passées en tant que prop "courses"
        return {
            courseList: this.courses
        }
    },
    props: ['courses'], // Déclaration de la prop "courses" qui contiendra la liste des cours

    mounted() {
        // Affichage de la liste des cours dans la console lorsque le composant est monté
        // console.log(this.courseList);
    }
}
</script>
