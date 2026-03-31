'''
展示事件修饰符 .prevent 的用法。
'''
<template>
    <a href="https://www.google.com">点击跳转</a>
    <br>
    <a href="google.com" @click.prevent>具备 @click.prevent ，不可跳转</a>
</template>