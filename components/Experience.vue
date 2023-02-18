<template>
  <section id="experience">
    <div class="container">
      <div class="section-title">
        <h2>
          <i class="fa-solid fa-person-digging me-3" />{{ $t('general.mainMenu.experience') }}
        </h2>
      </div>
      <div class="row">
        <div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
          <div v-for="(item, index) in experienceCountInFile" :key="index" class="resume-item">
            <h4>
              {{ getTranslateReplaceString(item, experienceCountInFile, 'position') }}
            </h4>
            <h5>
              {{ getTranslateReplaceString(item, experienceCountInFile, 'time') }}
            </h5>
            <p>
              <em class="me-2">
                {{ getTranslateReplaceString(item, experienceCountInFile, 'company') }}
              </em>
              <i class="fa-solid fa-location-dot" />
              <span class="ms-1">
                {{ getTranslateReplaceString(item, experienceCountInFile, 'province') }},
                {{ getTranslateReplaceString(item, experienceCountInFile, 'country') }}
              </span>
            </p>
            <p>
              {{ getTranslateReplaceString(item, experienceCountInFile, 'description') }}
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
  computed: {
    experienceCountInFile() {
      return langEnglish.experience.length;
    },
  },
  methods: {
    getTranslateReplaceString(itemIndex, itemCount, itemType) {
      let getReplaceNumber = this.getReplaceNumber(itemIndex, itemCount);
      let stringTranslate = '';
      switch (itemType) {
        case 'position':
          stringTranslate = this.$t('experience.' + getReplaceNumber + '.position');
          break;
        case 'time':
          stringTranslate = this.$t('experience.' + getReplaceNumber + '.time');
          break;
        case 'company':
          stringTranslate = this.$t('experience.' + getReplaceNumber + '.company');
          break;
        case 'province':
          stringTranslate = this.$t('experience.' + getReplaceNumber + '.address.province');
          break;
        case 'country':
          stringTranslate = this.$t('experience.' + getReplaceNumber + '.address.country');
          break;
        case 'description':
          stringTranslate = this.$t('experience.' + getReplaceNumber + '.description');
          break;
      }
      return stringTranslate;
    },
    getReplaceNumber(item, count) {
      return String(item - count).replace('-', '');
    },
  },
};
</script>
