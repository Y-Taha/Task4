import { defineStore } from 'pinia'
export const authorize = defineStore({
    id: "auth",
    state: () => ({
        AUTHORIZE: "https://accounts.spotify.com/authorize",
        TOKEN: "https://accounts.spotify.com/api/token",
        client_id: '5ae44ef6c257441faca9b0b65d4c0204',
        redirect_uri: 'http://localhost:5173/home',
        client_secret: '1875f21c55954cccbd1d351683f9f9a0',
    }), actions: {
        request() {

            let url = this.AUTHORIZE;
            url += "?client_id=" + this.client_id;
            url += "&response_type=code";
            url += "&redirect_uri=" + encodeURI(this.redirect_uri);
            url += "&show_dialog=true";
            url += "&scope=user-read-private user-read-email user-modify-playback-state user-read-playback-position user-library-read streaming user-read-playback-state user-read-recently-played playlist-read-private";
            window.location.href = url;
        }

    }


})