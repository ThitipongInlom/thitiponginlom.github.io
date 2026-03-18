<template>
  <vue-easy-lightbox :visible="isVisible" :imgs="images" :index="indexImage" @hide="onHide" />
</template>
<script>
export default {
  name: 'ModalShowImage',
  data: () => ({
    isVisible: false,
    indexImage: 0,
    images: null,
  }),
  methods: {
    setupImageData(imageData, indexData) {
      this.images = imageData;
      this.showImg(indexData);
    },
    showImg(index) {
      this.indexImage = index;
      this.isVisible = true;
    },
    onHide() {
      this.isVisible = false;
    },
  },
};
</script>
