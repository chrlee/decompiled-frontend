<template>
    <div class="overflow-hidden h-screen w-fit p-8">
        <img class="object-contain object-top h-full w-full p-1.5" :src="image.url" />
    </div>
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