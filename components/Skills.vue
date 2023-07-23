<template>
  <section id="skills" class="skills">
    <div class="container">
      <div class="section-title">
        <h2><i class="fa-solid fa-book-skull me-3" />{{ $t('general.mainMenu.skills') }}</h2>
      </div>
      <div class="row">
        <div
          class="col-6 col-md-4 col-lg-3 mb-4"
          v-for="(skills, index) in skillsList"
          :key="index"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="card border-dark text-center">
            <div class="card-header text-bg-dark">
              {{ skills.name }}
            </div>
            <div class="card-body">
              <div class="d-flex card-skills">
                <img
                  :src="getImageSkillsPathAuto(skills.name)"
                  class="rounded img-fluid mx-auto d-block"
                  width="30"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="card-footer">
              {{ getDateFormat(skills.dateStart) }}
            </div>
            <div class="card-footer text-body-secondary">
              {{ getCalculateYearMonthFromNow(skills.dateStart) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import moment from 'moment';
import 'moment/dist/locale/th.js';
import skills from '@/assets/database/skills.json';
import _ from 'lodash';

export default {
  name: 'Skills',
  data: () => ({
    skillsList: skills.skillsData,
  }),
  methods: {
    getImageSkillsPathAuto: function (payload) {
      return `/image/skills/${payload.toLowerCase()}.png`;
    },
    getDateFormat: function (payload) {
      return moment(payload, 'YYYY-MM-DD').format('MM/YYYY');
    },
    getCalculateYearMonthFromNow: function (payload) {
      return moment(payload, 'YYYY-MM-DD').locale(useI18n().locale.value).fromNow();
    },
  },
};
</script>
