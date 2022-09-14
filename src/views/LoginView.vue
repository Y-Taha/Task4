<template>
    <div class="container">
        <button @click="auth.request">Login</button>
    </div>
</template>
<script setup>
       import {authorize} from '@/api/auth'
    const auth =authorize()
</script>
<style lang="scss" scoped>
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
  justify-content: center;

    button {
        background: #65D36E;
        color: black;
        border-radius: 30px;
        width: 10vw;
        height: 5vh;
    }
}
</style>