import { defineStore } from 'pinia'
import axios from 'axios';
import { uReq } from '@/stores/userReq'
export const uAuthorize = defineStore({
  id: "auth",
  state: () => ({
    token: "" ,
    refreshToken: "",
    AUTHORIZELINK: "https://accounts.spotify.com/authorize",
    TOKENLINK: "https://accounts.spotify.com/api/token",
    client_id: '5ae44ef6c257441faca9b0b65d4c0204',
    redirect_uri: 'http://localhost:5173/home',
    client_secret: '1875f21c55954cccbd1d351683f9f9a0',
  }), actions: {
    onPageLoad() {
      if (window.location.search.length > 0) {
        this.handleRedirect()
      }
    }, handleRedirect() {
      let code = this.getCode();
      this.fetchAccessToken(code);
      window.history.pushState("", "", this.redirect_uri);
    }, getCode() {
      let code = null;
      const queryString = window.location.search;
      if (queryString.length > 0) {
        const urlParams = new URLSearchParams(queryString);
        code = urlParams.get('code')
      }
      return code;
    }
    , fetchAccessToken(code: any) {
      let body = "grant_type=authorization_code";
      body += "&code=" + code;
      body += "&redirect_uri=" + encodeURI(this.redirect_uri);
      body += "&client_id=" + this.client_id;
      body += "&client_secret=" + this.client_secret;
      this.tokengetter(body);
      // this.callAuthorizationApi(body);
    },
    // callAuthorizationApi(body: any) {
    //   var xhr = new XMLHttpRequest();
    //   xhr.open("POST", this.TOKENLINK, true);
    //   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //   xhr.setRequestHeader('Authorization', 'Basic ' + btoa(this.client_id + ":" + this.client_secret));
    //   xhr.send(body);
    //   xhr.onload = () => {
    //     if (xhr.status == 200) {
    //       var data = JSON.parse(xhr.responseText);
    //       //  console.log(data.access_token);
    //       // var data = JSON.parse(xhr.access_token);
    //       if (data.access_token != undefined) {
    //         var access_token = data.access_token;
    //         localStorage.setItem("access_token", access_token);
    //       }
    //       if (data.refresh_token != undefined) {
    //         var refresh_token = data.refresh_token;
    //         localStorage.setItem("refresh_token", refresh_token);
    //       }
    //       this.onPageLoad();
    //     }
    //     else {
    //       console.log(xhr.responseText);
    //       alert(xhr.responseText);
    //     }
    //   };
    // }, 
    tokengetter(bodyp:any) {
      const headers = {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.client_id + ":" + this.client_secret)
      }
      axios
        .post(this.TOKENLINK, bodyp
        ,{
          headers: headers
        }
        )
        .then((response) =>{
          var access_token = response.data.access_token;
          this.token= access_token;
          localStorage.setItem("access_token", access_token);
          var refresh_token = response.data.refresh_token;
          this.refreshToken= refresh_token;
          localStorage.setItem("refresh_token", refresh_token);
          const req = uReq()
          console.log(req.getFromApi(req.playlistsurl))
        })
    },refreshtokengetter(){
      const headers = {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.client_id + ":" + this.client_secret)
      }
        this.refreshToken = localStorage.getItem("refresh_token") as any;
        let body = "grant_type=refresh_token";
        body += "&refresh_token=" + this.refreshToken;
        body += "&client_id=" + this.client_id;
        axios
        .post(this.TOKENLINK, body
        ,{
          headers: headers
        }
        )
        .then((response) =>{
          var access_token = response.data.access_token;
          this.token= access_token;
          localStorage.setItem("access_token", access_token);
          var refresh_token = response.data.refresh_token;
          this.refreshToken= refresh_token;
          localStorage.setItem("refresh_token", refresh_token);
        })
    }

  }


})