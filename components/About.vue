<template>
  <section id="about" class="about section-defult">
    <div class="container">
      <div class="section-title">
        <h2><i class="fa-solid fa-user me-3" />{{ $t('general.mainMenu.about') }}</h2>
        <p>{{ $t('about.text1') }}</p>
      </div>
      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img
            src="/image/general/thitiponginlom.jpg"
            class="img-fluid rounded-5"
            alt="Image Profile Resume"
          />
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>{{ $t('general.profile.position') }}</h3>
          <div class="row">
            <div class="col-lg-6">
              <div class="row">
                <div class="col-12">
                  <i class="fa-solid fa-earth-asia me-2" />
                  <strong class="me-2">{{ $t('about.website') }}:</strong>
                  <span>{{ $t('general.profile.web') }}</span>
                </div>
                <div class="col-12">
                  <i class="fa-solid fa-mobile me-2" />
                  <strong class="me-2">{{ $t('about.phone') }}:</strong>
                  <span>{{ $t('general.profile.phone') }}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="row">
                <div class="col-12">
                  <i class="fa-solid fa-person-walking-luggage me-2" />
                  <strong class="me-2">{{ $t('about.age') }}:</strong>
                  <span>{{ $t('general.profile.age') }}</span>
                </div>
                <div class="col-12">
                  <i class="fa-solid fa-city me-2" />
                  <strong class="me-2">{{ $t('about.city') }}:</strong>
                  <span>{{ $t('general.profile.city') }}</span>
                </div>
              </div>
            </div>
          </div>
          <p class="mt-2">
            {{ $t('about.text2') }}
          </p>
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
