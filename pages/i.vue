<template>
    <globe class="h-full w-screen" />
</template>

<script>
export default {
    name: 'ImageMap',
    components: { Globe: () => {if(process.browser){return import("../clientComponents/Globe.vue")}} },
    async asyncData (context) {
        const pageData = await context.$strapi.find('pages', { sort: 'id' });
        return {
            pages: pageData.data
        }
    },
    data () {
        return {
            pages: []
        }
    },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>