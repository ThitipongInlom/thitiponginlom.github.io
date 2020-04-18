<template>
    <li class="about"> 
        <div class="my-auto">
            <div class="heading">
                <h1 class="mb-0">{{ $t("name.fname") }} <span class="text-orange">{{ $t("name.lname") }}</span></h1>
            </div>
            <span> <b-icon icon="map"></b-icon> {{ $t("name.address.province") }}, {{ $t("name.address.country") }}</span>
            <div class="subheading">
                🎓 {{ $t("about.fullstackdeveloper") }} <a class="a-color"
                    href="mailto:ingnice007@gmail.com">{{ $t("name.email") }} </a>
            </div>
            <p class="lead">{{ $t("about.text1") }}</p>
            <p class="lead">{{ $t("about.text2") }}</p>
            <div style="padding-bottom: 17rem;"></div>
        </div>
    </li>       
</template>

<script>
export default {
    name: 'about',

}
</script>
