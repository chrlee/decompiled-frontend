<template>
    <div class="p-1.5 md:p-3">
        <!--<img class="object-contain object-top h-fit w-fit" :src="image.url" :srcset="`${image.formats.small.url} 364w, ${image.formats.medium.url} 545w, ${image.formats.large.url} 727w`" />-->
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