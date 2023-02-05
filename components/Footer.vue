<template>
	<!-- Upper -->
	<NuxtLink
		href="javascript:void(0)"
		class="back-to-top d-flex align-items-center justify-content-center"
		:class="{ active: activeClassOnScroll }"
		@:click="backToTop"
	>
		<i class="fa-solid fa-arrow-up"></i>
	</NuxtLink>
</template>
<script>
export default {
	name: "Footer",
	data: () => ({
		windowTop: 0,
	}),
	computed: {
		activeClassOnScroll() {
			if (this.windowTop > 100) {
				return true;
			}
			return false;
		},
	},
	mounted() {
		window.addEventListener("scroll", this.onScroll);
	},
	beforeDestroy() {
		window.removeEventListener("scroll", this.onScroll);
	},
	methods: {
		onScroll(e) {
			this.windowTop = e.target.documentElement.scrollTop;
		},
		backToTop() {
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
	},
};
</script>
