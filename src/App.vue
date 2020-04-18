<template>
  <div id="app">
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        class="bg-grayblack fixed-top"
        variant="dark"
        id="sideNav"
      >
        <b-navbar-brand href="#about">
          <span class="d-block d-lg-none">
            <b>{{ $t("name.fname") }} {{ $t("name.lname") }}</b>
          </span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle-border mx-auto mb-2"
              src="./assets/img/thitiponginlom.jpg"
              alt="Thitipong Inlom profile"
            />
          </span>
        </b-navbar-brand>
        <ul class="list-inline mb-2 mt-1">
          <li class="list-inline-item">
            <a href="https://web.facebook.com/Thitipong.Inlom" target="_bank">
              <img
                src="./assets/img/job/facebook.png"
                class="rounded-circle pointer"
                alt="Linkedin"
                width="40"
                v-b-tooltip
                title="Facebook"
              />
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://github.com/ThitipongInlom" target="_bank">
              <img
                src="./assets/img/job/github.png"
                class="rounded-circle pointer"
                alt="Github"
                width="40"
                v-b-tooltip
                title="Github"
              />
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://www.linkedin.com/in/thitiponginlom" target="_bank">
              <img
                src="./assets/img/job/linkedin.jpg"
                class="rounded-circle pointer"
                alt="Linkedin"
                width="40"
                v-b-tooltip
                title="Linkedin"
              />
            </a>
          </li>
        </ul>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#about">{{ $t("menu.about") }}</b-nav-item>
            <b-nav-item href="#experience">{{ $t("menu.experience") }}</b-nav-item>
            <b-nav-item href="#education">{{ $t("menu.education") }}</b-nav-item>
            <b-nav-item href="#skills">{{ $t("menu.skills") }}</b-nav-item>
            <b-nav-item href="#">
              <div class="form-inline text-center">
                <span
                  class="nav-link pointer"
                  v-for="lang in languages"
                  :key="lang.value"
                  v-on:click="changeLanguage(lang)"
                  style="margin-right: 10px;"
                >
                  <img :src="lang.img" class="rounded-circle" alt="English language" width="30" />
                  {{ lang.title }}
                </span>
              </div>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <Resume></Resume>
    </div>
  </div>
</template>

<script>
import Resume from './views/Resume.vue'

export default {
  name: "languagePicker",
  data() {
    return {
      languages: [
        {
          title: this.$t("languages.english"),
          img: require("./assets/img/en.png"),
          value: "en"
        },
        {
          title: this.$t("languages.thai"),
          img: require("./assets/img/th.png"),
          value: "th"
        }
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang.value;
      this.$store.dispatch("language/setLanguage", lang.value);
    }
  },
  components: {
    Resume
  }
};
</script>
