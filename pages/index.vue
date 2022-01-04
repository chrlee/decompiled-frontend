<template>
    <div class="overflow-hidden h-screen w-fit p-8">
        <img class="object-contain object-top h-full w-full p-1.5" src="https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg" />
    </div>
</template>

<script>
export default {
    name: 'App',
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