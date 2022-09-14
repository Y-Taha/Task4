import { defineStore } from 'pinia'
import axios from 'axios';

import { uAuthorize } from '@/stores/userAuth'
export const uReq = defineStore({
    id: "requests",
    state:()=>({
        userProflieurl:"/me",
        likedsongsurl:"/me/tracks",
        playlistsurl:"/me/playlists",
        playlists: null,
    }),
    actions: {
        getFromApi(request:any){
            try{
                const auth = uAuthorize();
                const response = axios.get("https://api.spotify.com/v1"+request, {
                  headers: {
                    'Authorization': `Bearer ${auth.token}`
                  }
                }).then((response) =>{
                    this.playlists=response.data
                    console.log(this.playlists)
                    console.log(response.data)
                }).catch(function(response){
                    auth.refreshtokengetter();
                })
              }catch(error){
                console.log(error);
              } 
              return; 
        }
    }
})