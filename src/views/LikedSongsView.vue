<template>

    <p>Liked Songs View</p>
</template>
<script>
    import { uReq } from '@/stores/userReq'
    export default {
      
      mounted() {
        const req = uReq()
        req.getFromApi(req.likedsongsurl)
      }
    }
</script>