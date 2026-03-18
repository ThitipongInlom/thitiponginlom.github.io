<template>
  <!-- Header -->
  <Header />
  <!-- Main -->
  <main id="main">
    <!-- About -->
    <About />
    <!-- Experience -->
    <Experience />
    <!-- Education -->
    <Education @show-certificate="onShowCertificate" />
    <!-- Skills -->
    <Skills />
  </main>
  <!-- Footer -->
  <Footer />
  <ModalShowImage ref="ModalShowImag" />
</template>
<script>
export default {
  name: 'Home',
  methods: {
    onShowCertificate(images, index) {
      this.$refs.ModalShowImag.setupImageData(images, index);
    },
  },
};
</script>
