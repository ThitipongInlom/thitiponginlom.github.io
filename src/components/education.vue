<template>
    <section id="education" class="resume">
        <div class="container">
            <div class="section-title">
                <h2><i class="fa-solid fa-graduation-cap me-3"></i>{{ $t('general.mainMenu.education') }}</h2>
            </div>
            <div class="row">
                <div class="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                    <div class="resume-item" v-for="(item, index) in educationCount" :key="index">
                        <h4>{{ $t('education.'+ this.getReplaceNumber(item, educationCount) +'.school') }}</h4>
                        <h5>{{ $t('education.'+ this.getReplaceNumber(item, educationCount) +'.time') }}</h5>
                        <p>
                            <em class="me-2">{{ $t('education.'+ this.getReplaceNumber(item, educationCount) +'.degree') }}</em>
                            <i class="fa-solid fa-trophy"></i>
                            <span class="ms-1">
                                {{ $t('education.'+ this.getReplaceNumber(item, educationCount) +'.grade') }}
                            </span>
                        </p>
                        <ul class="certificate">
                            <li v-if="$t('education.'+ this.getReplaceNumber(item, educationCount) +'.certificate') === 'true'">
                                <a href="javascript:void(0)" class="text-primary" v-on:click="getShowCertificate">{{ $t('general.general.certificate') }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
export default {
    name: 'Education',
    data: () => ({

    }),
    computed: {
        ...mapState([
            'educationCount',
        ]),
    },
    mounted() {

    },
    methods: {
        getReplaceNumber(item, count) {
            return String(item - count).replace("-", "");
        },
        getShowCertificate() {
            Swal.fire({
                confirmButtonText: this.$i18n.t('general.general.close'),
                confirmButtonColor: '#d33',
                cancelButtonColor: '#d33',
                customClass: {
                    confirmButton: 'btn btn-danger',
                    cancelButton: 'btn btn-danger',
                    buttonsStyling: false,
                },
                imageUrl: require("@/assets/image/general/Professional_qualifications.jpg")
            })
        }
    }
}
</script>