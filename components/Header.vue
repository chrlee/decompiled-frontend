<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold tracking-tighter mt-2"><NuxtLink to="/">ㅈㅅ</NuxtLink></h1>
        <nav-bar :pages="pages" />
    </div>
</template>

<script>
import NavBar from './NavBar.vue';
export default {
    name: 'Header',
    components: { NavBar },
    data () {
        return {
            pages: []
        }
    },
    async fetch () {
        const pageData = await this.$nuxt.context.$strapi.find('pages', { sort: 'id' });
        this.pages = pageData.data;
    },
}
</script>