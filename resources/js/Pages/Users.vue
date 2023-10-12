<template>
    <div>
        <p v-for="user in users" :key="user.id">
            {{ user.name }} & {{ user.email }}
        </p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['users']);
</script>

