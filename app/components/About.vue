<template>
  <section id="about" class="about section-defult">
    <div class="container">
      <div class="section-title">
        <h2><i class="fa-solid fa-user me-3" />{{ $t('general.mainMenu.about') }}</h2>
      </div>
      <div class="about-wrapper">
        <div class="about-photo" data-aos="fade-right">
          <img
            src="/image/general/thitiponginlom.jpg"
            class="img-fluid"
            alt="Image Profile Resume"
          />
        </div>
        <div class="about-body" data-aos="fade-left">
          <h3 class="about-position">{{ $t('general.profile.position') }}</h3>
          <p class="about-intro">{{ $t('about.text1') }}</p>
          <div class="about-details">
            <div class="about-detail-item">
              <i class="fa-solid fa-earth-asia" />
              <div>
                <span class="about-label">{{ $t('about.website') }}</span>
                <span class="about-value">{{ $t('general.profile.web') }}</span>
              </div>
            </div>
            <div class="about-detail-item">
              <i class="fa-solid fa-mobile" />
              <div>
                <span class="about-label">{{ $t('about.phone') }}</span>
                <span class="about-value">{{ $t('general.profile.phone') }}</span>
              </div>
            </div>
            <div class="about-detail-item">
              <i class="fa-solid fa-cake-candles" />
              <div>
                <span class="about-label">{{ $t('about.age') }}</span>
                <span class="about-value">{{ $t('general.profile.age') }}</span>
              </div>
            </div>
            <div class="about-detail-item">
              <i class="fa-solid fa-location-dot" />
              <div>
                <span class="about-label">{{ $t('about.city') }}</span>
                <span class="about-value">{{ $t('general.profile.city') }}</span>
              </div>
            </div>
          </div>
          <p class="about-bio">{{ $t('about.text2') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About',
};
</script>
