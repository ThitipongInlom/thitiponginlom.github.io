<template>
    <section id="skills" class="skills">
        <div class="container">
            <div class="section-title">
                <h2><i class="fa-solid fa-book-skull me-3"></i>{{ $t('general.mainMenu.skills') }}</h2>
            </div>
            <div class="row">
                <div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                    <div class="table-responsive">
                        <table class="table table-hover table-bordered border-dark">
                            <thead class="text-center">
                                <tr class="table-dark">
                                    <td colspan="6">{{ $t('general.general.relevant_technical_skills') }}</td>
                                </tr>
                                <tr class="table-dark">
                                    <td scope="col">{{ $t('general.general.languages_tools') }}</td>
                                    <td scope="col">{{ $t('general.general.logo') }}</td>
                                    <td scope="col">{{ $t('general.general.years_experience') }}</td>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr v-for="(skills, index) in skillsList" :key="index">
                                    <td width="20%"><img :src="this.getImagePathAuto(skills.name)" class="rounded img-fluid mx-auto d-block" width="30"></td>
                                    <td width="60%">{{ skills.name }}</td>
                                    <td width="20%">{{ this.getCalculateYearMonth(skills.dateStart) }}</td>
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
import moment from "moment"
import skills from "@/assets/json/skills.json";

export default {
    name: 'Skills',
    data: () => ({
        skillsList: skills.skillsData
    }),
    computed: {

    },
    mounted() {

    },
    methods: {
        getImagePathAuto: function(payload) {
            return new URL("../assets/image/skills/"+ payload.toLowerCase() +".png", import.meta.url).href
        },
        getCalculateYearMonth: function(payload) {
            var year = moment.duration(moment().diff(moment(payload, "YYYY-MM-DD")));
            var month = moment.duration(moment().diff(moment(payload, "YYYY-MM-DD")));
            if (year.years() > 0 && month.months() > 0) {
                return year.years() + ' ' + this.$t('general.general.year') + ' ' + month.months() + ' ' + this.$t('general.general.month');
            }else if (year.years() > 0 && month.months() == 0) {
                return year.years() + ' ' + this.$t('general.general.year');
            }else {
                return month.months() + ' ' + this.$t('general.general.month');
            }
        }
    }
}
</script>