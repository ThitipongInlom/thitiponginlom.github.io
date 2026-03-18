<template>
  <section id="skills" class="skills section-bg">
    <div class="container">
      <div class="section-title">
        <h2><i class="fa-solid fa-book-skull me-3" />{{ $t('general.mainMenu.skills') }}</h2>
      </div>
      <div class="skills-grid">
        <div
          v-for="(skill, index) in sortedSkills"
          :key="index"
          class="skill-chip"
          data-aos="fade-up"
          :data-aos-delay="50 + (index % 6) * 30"
        >
          <div class="skill-chip-icon">
            <img
              :src="getImageSkillsPathAuto(skill.name)"
              :alt="skill.name"
              loading="lazy"
            />
          </div>
          <div class="skill-chip-text">
            <span class="skill-chip-name">{{ skill.name }}</span>
            <span class="skill-chip-exp">{{ getExperienceText(skill.dateStart) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/th';
import skills from '@/assets/database/skills.json';

dayjs.extend(customParseFormat);

export default {
  name: 'Skills',
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  data: () => ({
    skillsList: skills.skillsData,
  }),
  computed: {
    sortedSkills() {
      return [...this.skillsList].sort(
        (a, b) => dayjs(a.dateStart).unix() - dayjs(b.dateStart).unix(),
      );
    },
  },
  methods: {
    getImageSkillsPathAuto(name) {
      return `/image/skills/${name.toLowerCase()}.png`;
    },
    getExperienceText(dateStart) {
      const start = dayjs(dateStart, 'YYYY-MM-DD');
      const totalMonths = dayjs().diff(start, 'month');
      const years = Math.floor(totalMonths / 12);
      const months = totalMonths % 12;

      if (this.locale === 'th') {
        if (years === 0) return `${months} เดือน`;
        if (months === 0) return `${years} ปี`;
        return `${years} ปี ${months} เดือน`;
      }

      if (years === 0) return `${months} mo`;
      if (months === 0) return `${years} yr`;
      return `${years} yr ${months} mo`;
    },
  },
};
</script>
