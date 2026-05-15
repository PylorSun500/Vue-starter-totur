<!-------ToDoHeader.vue------->
<template>
    <div>
        <div class="header">
            <p class="title">待办事项</p>
            <input class="new-todo" type="text" placeholder="What needs to be done?" v-model.trim="name"
                @keyup.enter="enterName" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['addTodo'])
const name = ref('')

const enterName = () => {
    if (!name.value.trim()) return
    emit('addTodo', name.value)
    name.value = ''
}
</script>

<!-- 你给的样式直接放这里 -->
<style>
.header {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.title {
    margin: 0;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    color: #b83f45;
}

.new-todo {
    width: 93%;
    padding: 20px 10px 20px 50px;
    height: 20px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.05);
}
</style>

Todomain.vue:

<style>
.main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
}

.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.todo-list li {
    position: relative;
    font-size: 16px;
    border-bottom: 1px solid #ededed;
}

.todo-list li:last-child {
    border-bottom: none;
}

.todo-list li .toggle {
    text-align: center;
    width: 30px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    opacity: 0;
}

.todo-list li .toggle+label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: center left;
}

.todo-list li .toggle:checked+label {
    background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E");
}

.todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    font-weight: 400;
    color: #484848;
}

.todo-list li.completed label {
    color: #949494;
    text-decoration: line-through;
}

.todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    transition: color 0.2s ease-out;
    border: none;
    background-color: #fff;
}

.todo-list li .destroy:hover,
.todo-list li .destroy:focus {
    color: #c18585;
}

.todo-list li .destroy:after {
    content: "×";
    display: block;
    height: 100%;
    line-height: 1.1;
}

.todo-list li:hover .destroy {
    display: block;
}
</style>

App.vue:

<style>
.footer {
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    font-size: 15px;
    border-top: 1px solid #e6e6e6;
}

.footer:before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
        0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
        0 17px 2px -6px rgba(0, 0, 0, 0.2);
}

.todo-count {
    float: left;
    text-align: left;
}

.todo-count strong {
    font-weight: 300;
}

.filters {
    float: right;
    margin: 0;
    padding: 0;
    list-style: none;

}

.filters li {
    display: inline;
}

.filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    border-color: #767676;

}

.filters li a:hover {
    border-color: #db7676;
}

/* .filters li a.selected{
  border-color: #db7676;
} */
.selected {
    border-color: #db7676;
}
</style>