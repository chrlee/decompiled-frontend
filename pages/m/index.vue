<template>
    <basic-portfolio :items="pages" />
</template>

<script>
import BasicPortfolio from '~/components/BasicPortfolio.vue'
export default {
    name: 'Media',
    components: { BasicPortfolio },
    async asyncData (context) {
        const pageData = await context.$strapi.find('media-items', { sort: 'id:desc', populate: '*' });
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