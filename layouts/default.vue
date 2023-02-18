<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <Link rel="icon" type="image/x-icon" :content="imageBuild.profile" />
        <Meta name="charset" content="utf-8" />
        <Meta name="robots" content="index, follow" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="keywords" :content="keywords" />
        <Meta name="description" :content="description" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:site" content="@ingnice007" />
        <Meta name="twitter:description" :content="description" />
        <Meta name="twitter:image" :content="imageBuild.profile" />
        <Meta name="og:title" :content="title" />
        <Meta name="og:description" :content="description" />
        <Meta name="og:type" content="website" />
        <Meta name="og:image" :content="imageBuild.profile" />
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <slot />
      </Body>
    </Html>
  </div>
</template>
<script>
export default {
  setup() {
    const { t } = useI18n();
    const head = useLocaleHead({
      addDirAttribute: true,
      identifierAttribute: 'id',
      addSeoAttributes: true,
    });
    const title = computed(() => `${t('general.profile.name')} | ${t('general.general.resume')}`);
    const keywords = computed(() => `${t('general.profile.name')}, ${t('general.general.resume')}`);
    const description = computed(() => `${t('about.text1')} ${t('about.text2')}`);
    return {
      title,
      keywords,
      description,
      head,
    };
  },
  data: () => ({
    imageBuild: {
      profile: new URL('@/assets/image/general/thitiponginlom.jpg', import.meta.url).href,
    },
  }),
  mounted() {},
};
</script>
