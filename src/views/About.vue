<template>
  <div>
    <button>
      {{ $t('language_picker_helper') }}
    </button>

    {{ languages }}
  </div>
</template>
<script>
export default {
  name: 'languagePicker',
  data() {
    return {
      languages: [
        {
          title: this.$t('languages.english'),
          value: 'en',
        },
        {
          title: this.$t('languages.thai'),
          value: 'th',
        },
      ],
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang.value;
      this.$store.dispatch('language/setLanguage', lang.value);
    },
  }
};
</script>