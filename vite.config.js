import {resolve } from 'path'

export default {
  build:{
    rollupOptions:{
        input:{
            main: resolve(__dirname, 'index.html'),
            create_bouquet: resolve(__dirname,'create_bouquet.html'),
            browse: resolve(__dirname,'browse.html'),
            thankyou: resolve(__dirname,'thank-you.html')     }
    }
  }
}