# Vue 条件渲染：v-if 和 v-show

## 1. v-if 指令

[cmd_v_if.vue](../Code/vueint/src/components/2_3_commands/cmd_v_if.vue)

### 基本用法
`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值的时候被渲染。

### 代码示例
```vue
<template>
    小明的学习评定等级为：
    <p v-if="type === 'A'">优秀</p>
    <p v-else-if="type === 'B'">良好</p>
    <p v-else="type === 'C'">差</p>
    <button @click="type = 'A'">切换成优秀</button>
    <button @click="type = 'B'">切换成良好</button>
    <button @click="type = 'C'">切换成差</button>
</template>
<script setup>
import { ref } from 'vue'
const type = ref('B')
</script>
```

### 学习要点
1. **v-if**：当条件为真时渲染元素
2. **v-else-if**：可以在 `v-if` 之后添加多个 `v-else-if`
3. **v-else**：表示 `v-if` 的"else 块"
4. 使用 `ref` 创建响应式数据
5. 通过按钮点击事件修改数据，触发重新渲染

## 2. v-show 指令

[cmd_v_show.vue](../Code/vueint/src/components/2_3_commands/cmd_v_show.vue)

### 基本用法
`v-show` 指令用于根据条件展示元素，它只是简单地切换元素的 `display` CSS 属性。

### 代码示例
```vue
<template>
    <p v-if = "flag">通过 v-if 控制的元素</p>
    <p v-show = "flag">通过 v-show 控制的元素</p>
    <button @click="flag = !flag">显示/隐藏</button>
</template>
<script setup>
import { ref } from 'vue'
const flag = ref(true)
</script>
```

### 学习要点
1. **v-show**：通过 CSS 的 `display` 属性控制元素显示/隐藏
2. 使用 `!` 操作符切换布尔值
3. 简单的切换按钮实现

## 3. v-if 和 v-show 的区别

### 主要区别
1. **渲染方式不同**：
   - `v-if`：条件为假时，元素**不会被渲染**到 DOM 中
   - `v-show`：条件为假时，元素**会被渲染**到 DOM 中，但通过 CSS 隐藏

2. **性能考虑**：
   - `v-if`：切换开销大，适合条件很少改变的场景
   - `v-show`：初始渲染开销大，适合频繁切换的场景

3. **使用场景**：
   - `v-if`：当条件在运行时很少改变时
   - `v-show`：当需要非常频繁地切换时

## 4. 当前学到的知识点总结

### 已掌握内容
- [x] 使用 `ref()` 创建响应式数据
- [x] `v-if`、`v-else-if`、`v-else` 的条件链
- [x] `v-show` 的基本用法
- [x] 使用 `@click` 绑定点击事件
- [x] 通过修改响应式数据触发视图更新

### 代码特点
1. 简单的条件判断逻辑
2. 基本的用户交互（按钮点击）
3. 响应式数据绑定
4. 模板中的条件渲染

## 5. 实践建议

基于当前学到的代码，可以尝试：
1. 添加更多条件分支
2. 尝试使用计算属性优化条件判断
3. 结合其他指令（如 `v-for`）使用
4. 创建更复杂的条件渲染场景

---

*注：以上内容仅基于当前学到的代码范畴，后续学习会逐步扩展。*
