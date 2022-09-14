<script setup>
import sidebar from '../components/SideBar.vue'
</script>
<template>
  <main>
    <div class="container">
      <sidebar position="0"/>
      <RouterView/>
      <sidebar position="1"/>
    </div>
  </main>
</template>
<script>
import { uAuthorize } from '@/stores/userAuth'
export default {
  mounted() {
    const auth = uAuthorize()
    auth.onPageLoad()
  }
}
</script>
<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
    align-items: center;
}
</style>
