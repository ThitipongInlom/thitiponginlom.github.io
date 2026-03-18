<template>
  <section id="experience">
    <div class="container">
      <div class="section-title">
        <h2>
          <i class="fa-solid fa-person-digging me-3" />{{ $t('general.mainMenu.experience') }}
        </h2>
      </div>
      <div class="exp-timeline">
        <div
          v-for="(item, index) in experienceCountInFile"
          :key="index"
          class="exp-card"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
        >
          <div class="exp-dot" />
          <div class="exp-content">
            <div class="exp-header">
              <h4 class="exp-position">
                {{ t('experience.' + getIndex(item) + '.position') }}
              </h4>
              <span class="exp-time">
                <i class="fa-regular fa-calendar me-1" />
                {{ t('experience.' + getIndex(item) + '.time') }}
              </span>
            </div>
            <div class="exp-company">
              <i class="fa-regular fa-building me-1" />
              {{ t('experience.' + getIndex(item) + '.company') }}
              <span class="exp-location">
                <i class="fa-solid fa-location-dot ms-2 me-1" />
                {{ t('experience.' + getIndex(item) + '.address.province') }},
                {{ t('experience.' + getIndex(item) + '.address.country') }}
              </span>
            </div>
            <p class="exp-description">
              {{ t('experience.' + getIndex(item) + '.description') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import langEnglish from '@/lang/en-US.json';

export default {
  name: 'Experience',
  setup() {
    const { t } = useI18n();
    return { t };
  },
  computed: {
    experienceCountInFile() {
      return langEnglish.experience.length;
    },
  },
  methods: {
    getIndex(item) {
      return String(item - this.experienceCountInFile).replace('-', '');
    },
  },
};
</script>
