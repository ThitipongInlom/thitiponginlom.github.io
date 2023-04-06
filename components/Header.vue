<template>
  <!-- Mobile nav toggle button -->
  <span class="mobile-nav-toggle d-xl-none" @click="submitMobileNavToggle">
    <span v-if="isMobileToggle">
      <i class="fa-solid fa-circle-xmark" />
    </span>
    <span v-else>
      <i class="fa-solid fa-bars" />
    </span>
  </span>
  <!-- Header -->
  <header id="header">
    <div class="d-flex flex-column">
      <div class="profile">
        <img
          src="/image/general/thitiponginlom.jpg"
          alt="Image Profile Resume"
          class="img-fluid rounded-circle profile"
        />
        <h1 class="text-light">
          <NuxtLink to="/">
            {{ $t('general.profile.name') }}
          </NuxtLink>
        </h1>
        <div class="social-links mt-4 text-center">
          <NuxtLink :href="$t('general.profile.socialUrl.twitter')" class="twitter" target="_bank">
            <i class="fa-brands fa-twitter" />
          </NuxtLink>
          <NuxtLink
            :href="$t('general.profile.socialUrl.facebook')"
            class="facebook"
            target="_bank"
          >
            <i class="fa-brands fa-facebook" />
          </NuxtLink>
          <NuxtLink
            :href="$t('general.profile.socialUrl.instagram')"
            class="instagram"
            target="_bank"
          >
            <i class="fa-brands fa-instagram" />
          </NuxtLink>
          <NuxtLink :href="$t('general.profile.socialUrl.github')" class="github" target="_bank">
            <i class="fa-brands fa-github" />
          </NuxtLink>
          <NuxtLink
            :href="$t('general.profile.socialUrl.linkedin')"
            class="linkedin"
            target="_bank"
          >
            <i class="fa-brands fa-linkedin" />
          </NuxtLink>
        </div>
        <!-- Lang -->
        <div class="language row">
          <div class="col-6 text-center mt-3">
            <div class="d-grid gap-2">
              <NuxtLink
                class="btn btn-outline-info"
                :class="{ active: activeClassButtonEnglishLang }"
                href="javascript:void(0)"
                role="button"
                @click="switcherLanguage('en')"
              >
                <img
                  src="/image/lang/english.png"
                  width="20"
                  alt="English language"
                  class="img-fluid rounded"
                />
                <span>{{ $t('general.lang.english') }}</span>
              </NuxtLink>
            </div>
          </div>
          <div class="col-6 text-center mt-3">
            <div class="d-grid gap-2">
              <NuxtLink
                class="btn btn-outline-info"
                :class="{ active: activeClassButtonThaiLang }"
                href="javascript:void(0)"
                role="button"
                @click="switcherLanguage('th')"
              >
                <img
                  src="/image/lang/thai.png"
                  width="20"
                  alt="Thailand language"
                  class="img-fluid rounded"
                />
                <span>{{ $t('general.lang.thai') }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Menu -->
        <nav id="navbar" class="nav-menu navbar mt-2">
          <ul>
            <li>
              <NuxtLink href="#about" class="nav-link scrollto" @click="submitScrollTo">
                <i class="fa-solid fa-user me-2" /><span>{{ $t('general.mainMenu.about') }}</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="#experience" class="nav-link scrollto" @click="submitScrollTo">
                <i class="fa-solid fa-person-digging me-2" /><span>{{
                  $t('general.mainMenu.experience')
                }}</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="#education" class="nav-link scrollto" @click="submitScrollTo">
                <i class="fa-solid fa-graduation-cap me-2" /><span>{{
                  $t('general.mainMenu.education')
                }}</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink href="#skills" class="nav-link scrollto" @click="submitScrollTo">
                <i class="fa-solid fa-book-skull me-2" /><span>{{
                  $t('general.mainMenu.skills')
                }}</span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
  setup() {
    const { t, locale, locales, setLocale } = useI18n();

    return {
      t,
      locale,
      locales,
      setLocale,
    };
  },
  data: () => ({
    isMobileToggle: false,
  }),
  computed: {
    activeClassButtonEnglishLang() {
      if (this.locale == 'en') {
        return true;
      }
      return false;
    },
    activeClassButtonThaiLang() {
      if (this.locale == 'th') {
        return true;
      }
      return false;
    },
  },
  mounted() {},
  methods: {
    submitMobileNavToggle(event) {
      this.isMobileToggle = !this.isMobileToggle;
      document.body.classList.toggle('mobile-nav-active');
    },
    switcherLanguage(langCode) {
      this.isMobileToggle == true ? this.submitMobileNavToggle() : null;
      this.setLocale(langCode);
    },
    submitScrollTo() {
      if (this.isMobileToggle == true) {
        this.isMobileToggle = false;
        document.body.classList.remove('mobile-nav-active');
      }
    },
  },
};
</script>
