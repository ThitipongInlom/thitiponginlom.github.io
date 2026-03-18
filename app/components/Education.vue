<template>
  <section id="education" class="section-bg">
    <div class="container">
      <div class="section-title">
        <h2><i class="fa-solid fa-graduation-cap me-3" />{{ $t('general.mainMenu.education') }}</h2>
      </div>
      <div class="edu-timeline">
        <div
          v-for="(item, index) in educationCountInFile"
          :key="index"
          class="edu-card"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <div class="edu-dot" />
          <div class="edu-content">
            <div class="edu-header">
              <h4 class="edu-school">
                <i class="fa-solid fa-school me-2" />
                {{ t('education.' + getIndex(item) + '.school') }}
              </h4>
              <span class="edu-time">
                <i class="fa-regular fa-calendar me-1" />
                {{ t('education.' + getIndex(item) + '.time') }}
              </span>
            </div>
            <p class="edu-degree">
              <i class="fa-solid fa-book-open me-1" />
              {{ t('education.' + getIndex(item) + '.degree') }}
            </p>
            <div class="edu-footer">
              <span class="edu-grade">
                <i class="fa-solid fa-trophy me-1" />
                GPA {{ t('education.' + getIndex(item) + '.grade') }}
              </span>
              <span
                v-if="t('education.' + getIndex(item) + '.certificate') === 'true'"
                class="edu-cert pointer"
                @click="getShowCertificate"
              >
                <i class="fa-solid fa-award me-1" />
                {{ $t('general.general.certificate') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import LangEnglish from '@/lang/en-US.json';

export default {
  name: 'Education',
  emits: ['show-certificate'],
  setup() {
    const { t } = useI18n();
    return { t };
  },
  data: () => ({
    images: ['/image/general/Professional_qualifications.jpg'],
  }),
  computed: {
    educationCountInFile() {
      return LangEnglish.education.length;
    },
  },
  methods: {
    getIndex(item) {
      return String(item - this.educationCountInFile).replace('-', '');
    },
    getShowCertificate() {
      this.$emit('show-certificate', this.images, 0);
    },
  },
};
</script>
