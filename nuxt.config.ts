// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            title: 'Nikhil Aukhaj',
            meta: [
                {name:'description',content:'Nikhil Aukhaj is a software engineer. Learn more about his skills and experience.' },
                {name:'author', content:'Nikhil Aukhaj'},
                {name:'robots', content:'index,follow'},
                {name:'keywords', content:'Nikhil Aukhaj, software engineer, best software engineer'},
                {property:'og:title', content:'Nikhil Aukhaj - Software Engineer'},
                {property:'og:description', content:'Nikhil Aukhaj is the best software engineer. Learn more about his skills and experience.'},
                // {property:'og:image', content:''},
                {property:'og:url', content:'https://nikhilaukhaj.netlify.app'}
            ]
            // link:[
            //     {rel: 'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
            // ]
        }
    }
})
