<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref ([])

const input_content = ref('')
const input_category = ref(null)

const todos_asc = computed(() => todos.value.sort((a, b) => {
    return a.createdAt - b.createdAt
}))

const addTodo = () => {}

watch(name, (newVal) => {
    localStorage.setItem('name') || ''
})

onMounted(() => {
    name.value = localStorage.getItem('name') || ''
})
</script>


<template>
   <section class="">
    <h2 class="">
        What'up, <input type="text" placeholder="Name here" v-model="name">
    </h2>
   </section>

   <section>
    <h3>CREATE A TODO</h3>

    <form @submit.prevent="addTodo">
        <h4>What's on your todo list?</h4>
        <input type="text" placeholder="e.g make a video" v-model="input_content" />

        {{ input_content }}
    </form>
   </section>
</template>

<style>

</style>
