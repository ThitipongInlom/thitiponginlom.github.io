<template>
    <section id="experience" class="resume">
        <div class="container">
            <div class="section-title">
                <h2><i class="fa-solid fa-person-digging me-3"></i>{{ $t('general.mainMenu.experience') }}</h2>
            </div>
            <div class="row">
                <div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                    <div class="resume-item" v-for="(item, index) in experienceCountInFile" :key="index">
                        <h4>{{ $t('experience.'+ this.getReplaceNumber(item, experienceCountInFile) +'.position') }}</h4>
                        <h5>{{ $t('experience.'+ this.getReplaceNumber(item, experienceCountInFile) +'.time') }}</h5>
                        <p>
                            <em class="me-2">{{ $t('experience.'+ this.getReplaceNumber(item, experienceCountInFile) +'.company') }}</em>
                            <i class="fa-solid fa-location-dot"></i>
                            <span class="ms-1">
                                {{ $t('experience.'+ this.getReplaceNumber(item, experienceCountInFile) +'.address.province') }}, 
                                {{ $t('experience.'+ this.getReplaceNumber(item, experienceCountInFile) +'.address.country') }}
                            </span>
                        </p>
                        <p>{{ $t('experience.'+ this.getReplaceNumber(item, experienceCountInFile) +'.description') }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import LangEnglish from "@/lang/en-US.json";

export default {
    name: 'Experience',
    data: () => ({

    }),
    computed: {
        experienceCountInFile() {
            return LangEnglish.experience.length;
        }
    },
    mounted() {

    },
    methods: {
        getReplaceNumber(item, count) {
            return String(item - count).replace("-", "");
        }
    }
}
</script>