<template>
    <li>
        <div class="my-auto">
            <div class="heading padding3rm">
                <h1 class="mb-0">{{ $t("menu.experience") }}</h1>
            </div>
            <!-- Job 3 -->
            <div class="resume-item d-flex flex-column flex-md-row mb-1">
                <div class="content-left mr-auto">
                    <p class="headexperience">{{ $t("experience.job_3.position") }}</p>
                    <div class="subexperience"><a class="a-color" href="http://www.thezignhotel.com/"
                            target="_blank">{{ $t("experience.job_3.workplace") }}</a> &nbsp;
                        <span class="subexperiencenot"><b-icon icon="map"></b-icon>
                            {{ $t("experience.job_3.address.province") }}, {{ $t("experience.job_3.address.country") }}</span>
                    </div>
                    <p class="content-text">{{ $t("experience.job_3.text") }}</p>
                </div>
                <div class="resume-date text-md-right">
                    <p class="text-grayblack">{{ $t("experience.job_3.date") }}</p>
                </div>
            </div>
            <!-- Job 2 -->
            <div class="resume-item d-flex flex-column flex-md-row mb-1">
                <div class="content-left mr-auto">
                    <p class="headexperience">{{ $t("experience.job_2.position") }}</p>
                    <div class="subexperience"><a class="a-color" href="https://www.baezeni.com/"
                            target="_blank">{{ $t("experience.job_2.workplace") }}</a> &nbsp;
                        <span class="subexperiencenot"><b-icon icon="map"></b-icon>
                            {{ $t("experience.job_2.address.province") }}, {{ $t("experience.job_2.address.country") }}</span>
                    </div>
                    <p class="content-text">{{ $t("experience.job_2.text") }}</p>
                </div>
                <div class="resume-date text-md-right">
                    <p class="text-grayblack">{{ $t("experience.job_2.date") }}</p>
                </div>
            </div>
            <!-- Job 1 -->
            <div class="resume-item d-flex flex-column flex-md-row mb-1">
                <div class="content-left mr-auto">
                    <p class="headexperience">{{ $t("experience.job_1.position") }}</p>
                    <div class="subexperience"><a class="a-color" href="http://www.thezignhotel.com/"
                            target="_blank">{{ $t("experience.job_1.workplace") }}</a> &nbsp;
                        <span class="subexperiencenot"><b-icon icon="map"></b-icon>
                            {{ $t("experience.job_1.address.province") }}, {{ $t("experience.job_1.address.country") }}</span>
                    </div>
                    <p class="content-text">{{ $t("experience.job_1.text") }}</p>
                </div>
                <div class="resume-date text-md-right">
                    <p class="text-grayblack">{{ $t("experience.job_1.date") }}</p>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'experience',
}
</script>

<style>

</style>