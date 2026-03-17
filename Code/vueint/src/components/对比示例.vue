<template>
  <div class="comparison">
    <h2>响应式 vs 非响应式 对比示例</h2>
    
    <div class="section">
      <h3>1. 非响应式示例（普通变量）</h3>
      <p>当前值：{{ normalMessage }}</p>
      <button @click="changeNormal">修改普通变量</button>
      <p class="note">点击后：控制台会打印新值，但页面不会自动更新！</p>
    </div>

    <div class="section">
      <h3>2. 响应式示例（ref函数）</h3>
      <p>当前值：{{ reactiveMessage }}</p>
      <button @click="changeReactive">修改响应式变量</button>
      <p class="note">点击后：页面会自动更新显示新值！</p>
    </div>

    <div class="section">
      <h3>3. 响应式对象示例（reactive函数）</h3>
      <p>姓名：{{ user.name }}</p>
      <p>年龄：{{ user.age }}</p>
      <button @click="changeUser">修改用户信息</button>
      <p class="note">点击后：所有相关显示都会自动更新！</p>
    </div>

    <div class="section">
      <h3>4. 实时输入示例</h3>
      <input v-model="inputText" placeholder="输入一些文字..." />
      <p>你输入了：{{ inputText }}</p>
      <p class="note">输入时：页面实时显示输入内容！</p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 1. 非响应式（普通变量）
let normalMessage = '我是普通变量'

// 2. 响应式（ref函数）
const reactiveMessage = ref('我是响应式变量')

// 3. 响应式对象（reactive函数）
const user = reactive({
  name: '小明',
  age: 20
})

// 4. 响应式输入（ref函数）
const inputText = ref('')

const changeNormal = () => {
  normalMessage = '普通变量已修改'
  console.log('普通变量新值：', normalMessage)
  console.log('注意：页面上的显示没有更新！')
}

const changeReactive = () => {
  reactiveMessage.value = '响应式变量已修改'
  console.log('响应式变量新值：', reactiveMessage.value)
}

const changeUser = () => {
  user.name = '小红'
  user.age = 21
  console.log('用户信息已更新：', user)
}
</script>

<style scoped>
.comparison {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.section {
  margin: 30px 0;
  padding: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.section h3 {
  color: #333;
  margin-bottom: 15px;
}

button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;
}

button:hover {
  background-color: #45a049;
}

.note {
  color: #666;
  font-style: italic;
  margin-top: 10px;
  padding: 10px;
  background-color: #fff3cd;
  border-radius: 5px;
  border-left: 4px solid #ffc107;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 300px;
  margin: 10px 0;
  border: 2px solid #ddd;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: #4CAF50;
}
</style>