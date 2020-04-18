<template>
    <div class="Resume">
        <div class="container-fluid p-0">
            <ul class="timeline">
                <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                    <about></about>
                </section>             
                <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                    <experience></experience>
                </section>   
                <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                    <education></education>
                </section>
                <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                    <skills></skills>
                </section>
            </ul>
        </div>
    </div>
</template>
<script>

import about from '@/components/about.vue'
import experience from '@/components/experience.vue'
import education from '@/components/education.vue'
import skills from '@/components/skills.vue'

export default {
  name: 'Resume',
  components: {
    about,
    experience,
    education,
    skills
  }
}
</script>