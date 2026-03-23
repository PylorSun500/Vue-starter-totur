import { createApp } from 'vue'
import './style.css'

// Demo组件 - 基础Vue组件示例
// import App from './components/Demo.vue'



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

// components/2_3_commands/cmd_v_text.vue - 纯文本渲染命令
// import App from './components/2_3_commands/cmd_v_text.vue'

// components/2_3_commands/cmd_v_html.vue - 超文本渲染命令
// import App from './components/2_3_commands/cmd_v_html.vue'

// components/2_3_commands/cmd_v_bind.vue - 属性绑定命令
// import App from './components/2_3_commands/cmd_v_bind.vue'

// components/2_3_commands/cmd_v_on.vue - 事件绑定命令
// import App from './components/2_3_commands/cmd_v_on.vue'

// components/2_3_commands/cmd_v_model.vue - 双向数据绑定使用案例
// import App from './components/2_3_commands/cmd_v_model.vue'

// /components/2_3_commands/cmd_v_if.vue - v-if条件渲染
// import App from './components/2_3_commands/cmd_v_if.vue'

// /components/2_3_commands/cmd_v_if.vue - v-show条件渲染
import App from './components/2_3_commands/cmd_v_show.vue'

// 对比示例 - 响应式 vs 非响应式 直观对比
// import App from './components/对比示例.vue'

createApp(App).mount('#app')
