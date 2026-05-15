<!-------ToDoFooter.vue------->
<template>
    <div class="footer">
        <span class="todo-count">
            共<strong>{{ lastLength }}</strong>条未完成任务
        </span>
        <ul class="filters">
            <li>
                <a @click.prevent="emit('updateStatus', 'all')" :class="{ selected: status === 'all' }" href=" ">All</a>
            </li>
            <li>
                <a @click.prevent="emit('updateStatus', 'active')" :class="{ selected: status === 'active' }"
                    href="#/active">Active</a>
            </li>
            <li>
                <a @click.prevent="emit('updateStatus', 'completed')" :class="{ selected: status === 'completed' }"
                    href="#/completed">Completed</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
const props = defineProps(['lastLength', 'status'])
const emit = defineEmits(['updateStatus'])
</script>
