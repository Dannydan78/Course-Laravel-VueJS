<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Utilisateurs</h2>
        </template>
        <EasyDataTable
            v-model:items-selected="itemsSelected"
            buttons-pagination
            show-index
            :headers="headers"
            :items="users"
            alternating
        />

    </app-layout>
</template>


<script lang="ts" setup>

    import AppLayout from '@/Layouts/AppLayout.vue';
    import type { Header, Item} from "vue3-easy-data-table";
    import EasyDataTable from 'vue3-easy-data-table'; // Import du composant
    import { defineProps } from 'vue';
    import { ref } from 'vue';

    const itemsSelected = ref<Item[]>([]);
    const props = defineProps( ['users']);

    console.log(props);




    const headers: Header[] = [
        { text: "Nom", value: "name" },
        { text: "Email", value: "email"},

    ];






</script>



