<template>
    <!-- Header -->
    <Header></Header>
    <main id="main">
        <!-- About -->
        <About></About>
        <!-- Experience -->
        <Experience></Experience>
        <!-- Education -->
        <Education></Education>
        <!-- Skills -->
        <Skills></Skills>
    </main>
    <!-- Footer -->
    <Footer></Footer>
</template>

<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import About from '@/components/about.vue'
import Experience from '@/components/experience.vue';
import Education from '@/components/education.vue';
import Skills from '@/components/skills.vue';

export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        About,
        Experience,
        Education,
        Skills
    }
}
</script>
