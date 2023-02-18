<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-title">
        <h2><i class="fa-solid fa-book-skull me-3" />{{ $t('general.mainMenu.skills') }}</h2>
      </div>
      <div class="row">
        <div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
          <div class="table-responsive">
            <table class="table table-hover table-bordered border-dark">
              <thead class="text-center">
                <tr class="table-dark">
                  <td colspan="6">
                    {{ $t('general.general.relevant_technical_skills') }}
                  </td>
                </tr>
                <tr class="table-dark">
                  <td scope="col">
                    {{ $t('general.general.languages_tools') }}
                  </td>
                  <td scope="col">
                    {{ $t('general.general.logo') }}
                  </td>
                  <td scope="col">
                    {{ $t('general.general.years_experience') }}
                  </td>
                </tr>
              </thead>
              <tbody class="text-center">
                <tr v-for="(skills, index) in skillsList" :key="index">
                  <td width="20%">
                    <img
                      :src="getImagePathAuto(skills.name)"
                      class="rounded img-fluid mx-auto d-block"
                      width="30"
                      loading="lazy"
                    />
                  </td>
                  <td width="60%">
                    {{ skills.name }}
                  </td>
                  <td width="20%">
                    {{ getCalculateYearMonth(skills.dateStart) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import moment from 'moment';
import skills from '@/assets/database/skills.json';
import _ from 'lodash';

export default {
  name: 'Skills',
  data: () => ({
    skillsList: skills.skillsData,
    imageBuild: {
      bootstrap: new URL(`@/assets/image/skills/bootstrap.png`, import.meta.url).href,
      codeigniter: new URL(`@/assets/image/skills/codeigniter.png`, import.meta.url).href,
      css: new URL(`@/assets/image/skills/css.png`, import.meta.url).href,
      html: new URL(`@/assets/image/skills/html.png`, import.meta.url).href,
      javascript: new URL(`@/assets/image/skills/javascript.png`, import.meta.url).href,
      jquery: new URL(`@/assets/image/skills/jquery.png`, import.meta.url).href,
      laravel: new URL(`@/assets/image/skills/laravel.png`, import.meta.url).href,
      nodejs: new URL(`@/assets/image/skills/nodejs.png`, import.meta.url).href,
      php: new URL(`@/assets/image/skills/php.png`, import.meta.url).href,
      vuejs: new URL(`@/assets/image/skills/vuejs.png`, import.meta.url).href,
    },
  }),
  methods: {
    getImagePathAuto: function (payload) {
      let imagePath = Object.keys(this.imageBuild)
        .filter((key) => key == payload.toLowerCase())
        .reduce((obj, key) => {
          obj[key] = this.imageBuild[key];
          return obj[key];
        }, {});

      return imagePath;
    },
    getCalculateYearMonth: function (payload) {
      let stringCalculateYearMonth = '';
      let year = moment.duration(moment().diff(moment(payload, 'YYYY-MM-DD')));
      let month = moment.duration(moment().diff(moment(payload, 'YYYY-MM-DD')));
      if (year.years() > 0 && month.months() > 0) {
        stringCalculateYearMonth = `${year.years()}  $year ${month.months()} $month`;
      } else if (year.years() > 0 && month.months() == 0) {
        stringCalculateYearMonth = `${year.years()} $year`;
      } else {
        stringCalculateYearMonth = `${month.months()} $month`;
      }
      stringCalculateYearMonth = _.replace(
        stringCalculateYearMonth,
        '$year',
        this.$t('general.general.year')
      );
      stringCalculateYearMonth = _.replace(
        stringCalculateYearMonth,
        '$month',
        this.$t('general.general.month')
      );

      return stringCalculateYearMonth;
    },
  },
};
</script>
