import { createApp } from 'vue'
import './style.css'

// Demo组件 - 基础Vue组件示例
// import App from './components/Demo.vue'

// VIf组件 - v-if指令的应用示例
// import App from './components/VIf.vue'

// VShow组件 - v-show指令的应用示例
// import App from './components/VShow.vue'

// Message组件 - 非响应式数据示例（对比用）
// import App from './components/2_2_2_response_data_tie/Message.vue'

// func_ref.vue - ref()函数的应用示例
// import App from './components/2_2_2_response_data_tie/func_ref.vue'

// func_reactive.vue - reactive()函数的应用示例
// import App from './components/2_2_2_response_data_tie/func_reactive.vue'

// func_toRef.vue - toRef()函数的应用示例
// import App from './components/2_2_2_response_data_tie/func_toRef.vue'

// func_toRefs.vue - toRefs()函数的应用示例
// import App from './components/2_2_2_response_data_tie/func_toRefs.vue'

// 对比示例 - 响应式 vs 非响应式 直观对比
import App from './components/对比示例.vue'

createApp(App).mount('#app')
