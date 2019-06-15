var Lang = new Vue({
    el: '#app',
    data: {
        // Name
        name: {
            en: "Thitipong Inlom",
            th: "ฐิติพงษ์ อินลม"
        },
        // About
        about: {
            en: "ABOUT",
            th: "เกี่ยวกับ"
        },
        // Experience
        experience: {
            en: "EXPERIENCE",
            th: "ประสบการณ์"
        },
        // Education
        education: {
            en: "EDUCATION",
            th: "การศึกษา"
        },
        // Skills
        skills: {
            en: "SKILLS",
            th: "ทักษะ"
        },
        // ค่าภาษาเริ่มต้น
        default_language: "en"
    },
    methods: {
        new_lang: function (new_lang) {
            Lang.default_language = new_lang;
            // Hide navbar for switch lang
            $("#navbarSupportedContent").collapse('hide');
        }
    }
})
