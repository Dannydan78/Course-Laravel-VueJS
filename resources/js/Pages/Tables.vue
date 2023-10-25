<script setup lang="ts">
  import AppLayout from '@/Layouts/AppLayout.vue';
  import type { Header } from "vue3-easy-data-table";
  import EasyDataTable from 'vue3-easy-data-table';
  import { defineProps, ref, watch } from 'vue';


  const itemsSelected = ref([]);
  const props = defineProps(['users']);
  const searchField = ref(); // localStorage.getItem('searchField') || ''); ===> pour set la recherche au rechargement de la page
  const searchValue = ref(); // localStorage.getItem('searchValue') || '');


//   watch(searchField, (newSearchField) => {
//     localStorage.setItem('searchField', newSearchField);
//   });

//   watch(searchValue, (newSearchValue) => {
//     localStorage.setItem('searchValue', newSearchValue);
//   });

  const headers: Header[] = [
    { text: "Name", value: "name" },
    { text: "Email", value: "email" },
    { text: "Actions", value: "actions" },
  ];
</script>


<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Utilisateurs</h2>
        </template>
        <span class="ms-2">Champ : </span>
        <select v-model="searchField" class="mb-2 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-300 text-gray-700">
            <option></option>
            <option>name</option>
            <option>email</option>
        </select>

        <br/>

        <span class="ms-2">Recherche :</span>
        <input type="text" v-model="searchValue" class="ms-2 mb-4 shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:ring-indigo-300 leading-tight focus:outline-none focus:shadow-outline placeholder:italic placeholder:text-gray-400" placeholder="Tapez votre recherche ici...">
                <EasyDataTable
                    v-model:items-selected="itemsSelected"
                    buttons-pagination
                    show-index
                    :headers="headers"
                    :items="users"
                    alternating
                    :search-field="searchField"
                    :search-value="searchValue"
                    table-class-name="customize-table"
                    header-text-direction="center"
                    body-text-direction="center"
                />
    </app-layout>
</template>





<style>
.customize-table {
  /* --easy-table-border: 1px solid #445269; */
  /* --easy-table-row-border: 1px solid #445269; */

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #252525;
  --easy-table-header-background-color: #eeeeee;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #252525;
  --easy-table-body-even-row-background-color: #eeeeee;

  --easy-table-body-row-font-color: #252525;
  --easy-table-body-row-background-color: #ffffff;


  --easy-table-body-row-hover-font-color: #efeff0;
  --easy-table-body-row-hover-background-color: #5761be;

}
</style>

















