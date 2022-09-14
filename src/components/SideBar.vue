<script setup lang="ts">
defineProps<{
    position: string,
    data: object
}>()
</script>
<script lang="ts">
import { uReq } from '@/stores/userReq'
export default {
    mounted() {
        const req = uReq()
    },
    data() {
        return {
            firstgroup: [{ src: '/src/assets/home.png', text: 'Home', dest: '/home/main' }, { src: '/src/assets/search.png', text: 'Search', dest: '/home/search' }, { src: '/src/assets/library.png', text: 'Your Library', dest: '/home/library' }],
            secondgroup: [{ src: '/src/assets/create.png', text: 'Create Playlist', dest: '/home/create' }, { src: '/src/assets/liked.png', text: 'Liked Songs', dest: '/home/likes' }]
        }
    }
}
</script>
<template>
    <div class="sidebar">
        <div v-if="position=='0'">
            <div class="container">
                <div v-for="item in firstgroup" class="items">
                    <router-link :to=item.dest>
                        <img :src=item.src>
                        <p>{{item.text}}</p>
                    </router-link>
                </div>
            </div>
            <div class="container">
                <div v-for="item in secondgroup" class="items">
                    <router-link :to=item.dest>
                        <img :src=item.src>
                        <p>{{item.text}}</p>
                    </router-link>
                </div>
            </div>
            <div class="scroller">
                
                <!-- <p v-for="item in data">{{item.text}}</p> -->
            </div>
        </div>
        <div v-else-if="position=='1'">
            <p>Friends bar</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding-left: 1vw;
    padding-top: 10vh;

    .items {
        display: flex;
        flex-direction: row;
        padding-bottom: 2vh;

        a {
            display: flex;
            flex-direction: row;
        }

        img {
            padding-right: 1vw;
        }
    }

    .items:last-of-type {
        padding: 0px;
    }
}

.container:last-of-type {
    padding-top: 6vh;
}

.scroller {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding-left: 1vw;
    padding-top: 10vh;
}

.sidebar {
    height: 100vh;
    width: 15vw;
    background-color: black;
}
</style>