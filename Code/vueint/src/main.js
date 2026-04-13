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

// cmd_v_text.vue - 纯文本渲染命令
// import App from './components/2_3_commands/cmd_v_text.vue'

// cmd_v_html.vue - 超文本渲染命令
// import App from './components/2_3_commands/cmd_v_html.vue'

// cmd_v_bind.vue - 属性绑定命令
// import App from './components/2_3_commands/cmd_v_bind.vue'

// cmd_v_on.vue - 事件绑定命令
// import App from './components/2_3_commands/cmd_v_on.vue'

// cmd_v_model.vue - 双向数据绑定使用案例
// import App from './components/2_3_commands/cmd_v_model.vue'

// cmd_v_if.vue - v-if条件渲染
// import App from './components/2_3_commands/cmd_v_if.vue'

// cmd_v_if.vue - v-show条件渲染
// import App from './components/2_3_commands/cmd_v_show.vue'

// cmd_v_for_arr.vue - v-for数组渲染
// import App from './components/2_3_commands/cmd_v_for_arr.vue'

// cmd_v_for_item.vue - v-for对象数组渲染
// import App from './components/2_3_commands/cmd_v_for_item.vue'

// cmd_v_for_name.vue - v-for对象渲染
// import App from './components/2_3_commands/cmd_v_for_name.vue'

// eo_event.vue - 事件对象示例
// import App from './components/2_4_event_object/eo_event_enent.vue'

// ed_prevent.vue - 阻止默认事件
// import App from './components/2_5_event_decoration/ed_prevent.vue'

// ed_stop.vue - 阻止事件冒泡
// import App from './components/2_5_event_decoration/ed_stop.vue'

// ed_capture.vue - 事件捕获
// import App from './components/2_5_event_decoration/ed_capture.vue'

// ed_once.vue - 单次事件
// import App from './components/2_5_event_decoration/ed_once.vue'

// ed_self.vue - DOM 独自运行事件
// import App from './components/2_5_event_decoration/ed_self.vue'

// ed_button.vue - 检测键盘按键
// import App from './components/2_5_event_decoration/ed_button.vue'

// ed_mouse.vue - 检测鼠标按键
// import App from './components/2_5_event_decoration/ed_mouse÷.vue'

// cp_computed.vue - 计算属性
// import App from './components/2_6_calculate_property/cp_computed.vue'

// w_watch.vue - 侦听器
// import App from './components/2_7_watcher/w_watch.vue'

// sb_class_string.vue - 样式绑定为字符串
// import App from './components/2_8_style_binding/sb_class_string.vue'

// sb_class_obj.vue - 样式绑定为对象
// import App from './components/2_8_style_binding/sb_class_obj.vue'

// sb_class_set.vue - 样式绑定为数组
// import App from './components/2_8_style_binding/sb_class_set.vue'

// sb_style_obj.vue - 样式表绑定为对象
// import App from './components/2_8_style_binding/sb_style_obj.vue'

// sb_style_set.vue - 样式表绑定为数组
import App from './components/2_8_style_binding/sb_style_set.vue'

// 对比示例 - 响应式 vs 非响应式 直观对比
// import App from './components/对比示例.vue'

createApp(App).mount('#app')
