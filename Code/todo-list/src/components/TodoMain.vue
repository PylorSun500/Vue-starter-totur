<!-------ToDoMain.vue------->
<template>
    <div class="main">
        <ul class="todo-list">
            <li v-for="item in list" :key="item.id" :class="{ completed: item.done }">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.done" />
                    <label>{{ item.name }}</label>
                    <button class="destroy" @click="delTodo(item.id)"></button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['list'])
const emit = defineEmits(['delToDo'])

const delTodo = (id) => {
    id && emit('delToDo', id)
}
</script>