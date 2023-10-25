<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { ref, watch } from 'vue';
import { TrashIcon, CheckIcon } from '@heroicons/vue/24/solid';
import Modal from '@/Components/Modal.vue';

const newTask = ref('');
const tasks = ref(JSON.parse(localStorage.getItem('tasks')) || []);

const addTask = () => {
    if (newTask.value.trim() !== '') {
        tasks.value.push({ text: newTask.value, isStruckThrough: false });
        newTask.value = '';
        saveTasks();
    }
};

//fonction qui efface les taches
const removeTask = (index) => {
    tasks.value.splice(index, 1);
    saveTasks();
};

// fonction qui barre les taches
const Strikethrough = (task) => {
    task.isStruckThrough = !task.isStruckThrough;
    saveTasks();
};

// fonction qui set les taches au rechargement de la page
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks.value));
}

watch(tasks, saveTasks);

// État pour contrôler l'affichage de la modal
const isModalVisible = ref(false);

// État pour contrôler la largeur maximale de la modal
const modalWidth = '2xl';

// État pour contrôler si la modal peut être fermée
const isCloseable = true;

// Méthode pour ouvrir la modal
const openModal = () => {
  isModalVisible.value = true;
};

// Méthode pour fermer la modal
const closeModal = () => {
  isModalVisible.value = false;
};

</script>




<template>
    <app-layout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Todo-List</h2>
        </template>
        <div class="container mx-auto p-4 mt-10">
            <h1 class="text-2xl font-semibold text-gray-800 mb-4">Mes tâches à exécuter :</h1>
            <div class="flex mb-4">
                <input v-model="newTask" @keyup.enter="addTask"
                    class="rounded-l-lg py-2 px-3 w-2/4 bg-gray-200 border border-gray-400" type="text"
                    placeholder="Ajouter une tâche..." />
                <button @click="addTask" class="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">Ajouter</button>
            </div>
            <div class="flex">
                <ul>
                    <li v-for="(task, index) in tasks" :key="index" class="p-2 my-4">
                        <div class="justify-between items-center flex ">
                            <span :class="{ 'strikethrough': task.isStruckThrough }">{{ task.text }}</span>
                            <div class="flex">
                                <button @click="() => Strikethrough(task)"
                                    class="bg-green-500 text-white p-1 mx-5 rounded hover:bg-green-600">
                                    <CheckIcon class="h-6 w-6" />
                                </button>
                                <button @click="removeTask(index)"
                                    class="bg-red-500 hover:bg-red-600 text-white p-1 rounded">
                                    <TrashIcon class="h-6 w-6" />
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
    <!-- Bouton pour ouvrir la modal -->
    <button @click="openModal">Ouvrir la modal</button>

    <!-- Utilisation de la modal -->
    <Modal
      :show="isModalVisible"
      @close="closeModal"
      :maxWidth="modalWidth"
      :closeable="isCloseable"
    >
      <!-- Contenu de la modal -->
      <div>
        <h2>Bonjour</h2>
        <!-- Autres éléments -->
      </div>
    </Modal>
  </div>
        </div>
    </app-layout>
</template>

<style scoped>
.strikethrough {
    text-decoration: line-through;
}
</style>







