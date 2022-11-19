import { createStore } from 'vuex'
import Data from "@/plugins/lang/en.json"

export default createStore({
    state: {
        profileImage: require("@/assets/image/general/thitiponginlom.jpg"),
        imageEnglish: require("@/assets/image/lang/english.png"),
        imageThai: require("@/assets/image/lang/thai.png"),
        experienceCount: Data.experience.length,
        educationCount: Data.education.length,
    },
    mutations: {
        
    },
    actions: {

    },
    modules: {}
})
