<template>
    <img class="object-contain object-top h-full w-full" :src="image.url" />
</template>

<script>
export default {
    name: 'App',
    async asyncData (context) {
        const pageData = await context.$strapi.find('home-page', { populate: 'image' });
        return {
            image: pageData.data.attributes.image.data.attributes
        }
    },
    data () {
        return {
            image: {}
        }
    },
}
</script>