<template>
    <!-- ======= Mobile nav toggle button ======= -->
    <span class="mobile-nav-toggle d-xl-none" v-on:click="submitMobileNavToggle">
        <span v-if="isMobileToggle">
            <i class="fa-solid fa-circle-xmark"></i>
        </span>
        <span v-else>
            <i class="fa-solid fa-bars"></i>
        </span>
    </span>
    <!-- ======= Header ======= -->
    <header id="header">
        <div class="d-flex flex-column">
            <div class="profile">
                <img :src="this.$store.state.profileImage" alt="" class="img-fluid rounded-circle profile">
                <h1 class="text-light">
                    <router-link :to="{ name: 'Home' }">
                        {{ $t('general.profile.name') }}
                    </router-link>
                </h1>
                <div class="social-links mt-4 text-center">
                    <a :href="$t('general.profile.socialUrl.twitter')" class="twitter" target="_bank"><i class="fa-brands fa-twitter"></i></a>
                    <a :href="$t('general.profile.socialUrl.facebook')" class="facebook" target="_bank"><i class="fa-brands fa-facebook"></i></a>
                    <a :href="$t('general.profile.socialUrl.instagram')" class="instagram" target="_bank"><i class="fa-brands fa-instagram"></i></a>
                    <a :href="$t('general.profile.socialUrl.github')" class="github" target="_bank"><i class="fa-brands fa-github"></i></a>
                    <a :href="$t('general.profile.socialUrl.linkedin')" class="linkedin" target="_bank"><i class="fa-brands fa-linkedin"></i></a>
                </div>
                <div class="language row">
                    <div class="col-6 text-center mt-3">
                        <div class="d-grid gap-2">
                            <a class="btn btn-outline-info" ref="btnEnglish" v-on:click="submitSetLanguage('en')" href="javascript:void(0)" role="button">
                                <img :src="this.$store.state.imageEnglish" width="20" alt="English language" class="img-fluid rounded">
                                <span>{{ $t('general.lang.english') }}</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-6 text-center mt-3">
                        <div class="d-grid gap-2">
                            <a class="btn btn-outline-info" ref="btnThai" v-on:click="submitSetLanguage('th')" href="javascript:void(0)" role="button">
                                <img :src="this.$store.state.imageThai" width="20" alt="English language" class="img-fluid rounded">
                                <span>{{ $t('general.lang.thai') }}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="navbar" class="nav-menu navbar">
                <ul>
                    <li>
                        <a href="#about" class="nav-link scrollto" v-on:click="submitScrollTo">
                            <i class="fa-solid fa-user me-2"></i><span>{{ $t('general.mainMenu.about') }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#experience" class="nav-link scrollto" v-on:click="submitScrollTo">
                            <i class="fa-solid fa-person-digging me-2"></i><span>{{ $t('general.mainMenu.experience') }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#education" class="nav-link scrollto" v-on:click="submitScrollTo">
                            <i class="fa-solid fa-graduation-cap me-2"></i><span>{{ $t('general.mainMenu.education') }}</span
                        ></a>
                    </li>
                    <li>
                        <a href="#skills" class="nav-link scrollto" v-on:click="submitScrollTo">
                            <i class="fa-solid fa-book-skull me-2"></i><span>{{ $t('general.mainMenu.skills') }}</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    data: () => ({
        isMobileToggle: false,
    }),
    mounted() {
        this.getLangIsActive()
    },
    methods: {
        getLangIsActive() {
            // เคลียร์ Class Active
            this.$refs.btnEnglish.classList.remove("active");
            this.$refs.btnThai.classList.remove("active");
            // เซ็ต Class Active
            if (this.$i18n.locale == "th") {
                this.$refs.btnThai.classList.add("active");
            }else if (this.$i18n.locale == "en") {
                this.$refs.btnEnglish.classList.add("active");
            }
        },
        submitSetLanguage(lang) {
            this.$i18n.locale = lang;
            this.getLangIsActive()
            this.isMobileToggle == true ? this.submitMobileNavToggle() : null;
            document.body.classList.remove('mobile-nav-active');
        },
        submitMobileNavToggle(event) {
            this.isMobileToggle = !this.isMobileToggle;
            document.body.classList.toggle('mobile-nav-active');
        },
        submitScrollTo() {
            if (this.isMobileToggle == true) {
                this.isMobileToggle = false;
                document.body.classList.remove('mobile-nav-active');
            }
        }
    }
}
</script>