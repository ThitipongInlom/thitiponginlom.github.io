<template>
    <li>
        <div class="heading padding3rm">
            <h1 class="mb-0">{{ $t("menu.education") }}</h1>
        </div>
        <div class="resume-item d-flex flex-column flex-md-row mb-1">
            <div class="content-left mr-auto">
                <span class="headexperience" keylang="school_geade_2"></span>
                <div class="subexperience"><span keylang="school_name_2"></span></div>
            </div>
            <div class="resume-date text-md-right">
                <span class="text-grayblack" keylang="school_date_2"></span>
            </div>
        </div>
        <!-- School 2 -->
        <div class="resume-item d-flex flex-column flex-md-row mb-1">
            <div class="content-left mr-auto">
                <p class="headexperience">{{ $t("education.school_2.branchwriting") }} | 
                    <b-icon icon="controller"></b-icon> &nbsp; {{ $t("education.school_2.grade") }}
                </p>
                <div class="subexperience">{{ $t("education.school_2.name") }}</div>
            </div>
            <div class="resume-date text-md-right">
                <p class="text-grayblack">{{ $t("education.school_2.date") }}</p>
            </div>
        </div>
        <!-- School 1 -->
        <div class="resume-item d-flex flex-column flex-md-row mb-1">
            <div class="content-left mr-auto">
                <p class="headexperience">{{ $t("education.school_1.branchwriting") }} | 
                    <b-icon icon="controller"></b-icon> &nbsp; {{ $t("education.school_1.grade") }} |
                    <b-icon icon="award"></b-icon> &nbsp; <b-button size="sm" v-b-modal.modal-lg variant="outline-primary">{{ $t("education.school_1.certificate") }}</b-button>
                </p>
                <div class="subexperience">{{ $t("education.school_1.name") }}</div>
            </div>
            <div class="resume-date text-md-right">
                <p class="text-grayblack">{{ $t("education.school_1.date") }}</p>
            </div>
        </div>
        <!-- Modal -->
        <b-modal id="modal-lg" centered size="lg" ok-only ok-variant="danger" ok-title="Cancel">
            <img src="../assets/img/Professional_qualifications.jpg" class="img-fluid"  v-b-tooltip title="Professional_qualifications">
        </b-modal>
    </li>
</template>

<script>
export default {
    name: 'education'
}
</script>

<style>

</style>