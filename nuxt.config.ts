
export default defineNuxtConfig({
    ssr: false,
    sourcemap: false,
    app: {
        baseURL: "/",
        buildAssetsDir: "/nuxt/",
    },
    css: [
        '@/assets/css/style.css',
        'bootstrap/dist/css/bootstrap.min.css',
        '@fortawesome/fontawesome-free/css/all.css',
        'aos/dist/aos.css'
    ],
    modules: [
        '@nuxtjs/i18n',
    ],
    i18n: {
        defaultLocale: 'en',
        langDir: 'lang',
        lazy: true,
        locales: [
            {
                code: 'en',
                file: 'en-US.json'
            }, {
                code: 'th',
                file: 'th-TH.json'
            }
        ]
    },
})
