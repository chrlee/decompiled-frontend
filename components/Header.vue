<template>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold tracking-tighter my-4"><NuxtLink to="/">ㅈㅅ</NuxtLink></h1>
        <nav-bar :pages="pages" />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from './NavBar.vue';

export default {
    name: 'Header',
    components: { NavBar },
    computed: {
        ...mapState(['pages'])
    } 
}
</script>