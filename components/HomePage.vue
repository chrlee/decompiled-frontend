<template>
    <div>
        <div v-if="error">
            {{ error }}
        </div>
        <ul v-else>
            <li v-for="page in pages" :key="page.id">
                {{ page.attributes.Title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data () {
        return {
            pages: [],
            error: null
        }
    },
    async mounted() {
        try {
            const pages = await this.$strapi.$pages.find();
            this.pages = pages.data;
        } catch(error) {
            this.error = error;
        }
    }
}
</script>