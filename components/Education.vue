<template>
  <section id="education">
    <div class="container">
      <div class="section-title">
        <h2><i class="fa-solid fa-graduation-cap me-3" />{{ $t('general.mainMenu.education') }}</h2>
      </div>
      <div class="row">
        <div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
          <div v-for="(item, index) in educationCountInFile" :key="index" class="resume-item">
            <h4>
              {{ getTranslateReplaceString(item, educationCountInFile, 'school') }}
            </h4>
            <h5>
              {{ getTranslateReplaceString(item, educationCountInFile, 'time') }}
            </h5>
            <p>
              <em class="me-2">
                {{ getTranslateReplaceString(item, educationCountInFile, 'degree') }}
              </em>
              <i class="fa-solid fa-trophy" />
              <span class="ms-1">
                {{ getTranslateReplaceString(item, educationCountInFile, 'grade') }}
              </span>
            </p>
            <div
              v-if="getTranslateReplaceString(item, educationCountInFile, 'certificate') === 'true'"
            >
              <span
                href="javascript:void(0)"
                class="text-primay pointer"
                @:click="getShowCertificate"
                ><i class="fa-solid fa-image"></i> {{ $t('general.general.certificate') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Swal from 'sweetalert2';
import LangEnglish from '@/lang/en-US.json';

export default {
  name: 'Education',
  components: {},
  data: () => ({
    imageCertificate: [
      new URL(`@/assets/image/general/Professional_qualifications.jpg`, import.meta.url).href,
    ],
  }),
  computed: {
    educationCountInFile() {
      return LangEnglish.education.length;
    },
  },
  methods: {
    getTranslateReplaceString(itemIndex, itemCount, itemType) {
      let getReplaceNumber = this.getReplaceNumber(itemIndex, itemCount);
      let stringTranslate = '';
      switch (itemType) {
        case 'school':
          stringTranslate = this.$t('education.' + getReplaceNumber + '.school');
          break;
        case 'time':
          stringTranslate = this.$t('education.' + getReplaceNumber + '.time');
          break;
        case 'degree':
          stringTranslate = this.$t('education.' + getReplaceNumber + '.degree');
          break;
        case 'grade':
          stringTranslate = this.$t('education.' + getReplaceNumber + '.grade');
          break;
        case 'certificate':
          stringTranslate = this.$t('education.' + getReplaceNumber + '.certificate');
          break;
      }
      return stringTranslate;
    },
    getReplaceNumber(item, count) {
      return String(item - count).replace('-', '');
    },
    getShowCertificate() {
      Swal.fire({
        confirmButtonText: this.$t('general.general.close'),
        confirmButtonColor: '#d33',
        cancelButtonColor: '#d33',
        customClass: {
          confirmButton: 'btn btn-danger',
          cancelButton: 'btn btn-danger',
          buttonsStyling: false,
        },
        imageUrl: new URL(`@/assets/image/general/Professional_qualifications.jpg`, import.meta.url)
          .href,
      });
    },
  },
};
</script>
