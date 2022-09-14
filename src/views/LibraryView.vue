<template>
    
    <p>Library Page</p>
</template>
<script>
    import { uReq } from '@/stores/userReq'
    export default {
      
      mounted() {
        const req = uReq()
        req.getFromApi(req.playlistsurl)
      }
    }
</script>