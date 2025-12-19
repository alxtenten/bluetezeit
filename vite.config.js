import {resolve } from 'path'

export default {
  build:{
    rollupOptions:{
        input:{
            main: resolve(__dirname, 'index.html'),
            create_bouquet: resolve(__dirname,'create_bouquet.html'),
            browse: resolve(__dirname,'browse.html'),
            login: resolve(__dirname,'login.html')      }
    }
  }
}