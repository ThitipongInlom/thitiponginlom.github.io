<template>
    <!-- Upper -->
    <a href="javascript:void(0)" class="back-to-top d-flex align-items-center justify-content-center" ref="backToTop" v-on:click="backToTop">
        <i class="fa-solid fa-arrow-up"></i>
    </a>

</template>
<script>
export default {
    name: 'Footer',
    data: () => ({
        windowTop: 0
    }),
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        onScroll(e) {
            this.windowTop = e.target.documentElement.scrollTop;
            if (this.windowTop > 100) {
                this.$refs.backToTop.classList.add("active");
            } else {
                this.$refs.backToTop.classList.remove("active");
            }
        },
        backToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
}
</script>