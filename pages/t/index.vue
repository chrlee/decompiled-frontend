<template>
    <basic-portfolio :items="pages" />
</template>

<script>
import BasicPortfolio from '~/components/BasicPortfolio.vue'
export default {
    name: 'Tech',
    components: { BasicPortfolio },
    async asyncData (context) {
        const pageData = await context.$strapi.find('tech-items', { sort: 'id' });
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