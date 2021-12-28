<template>
    <client-only>
    <page-layout>
        <template #nav>
            <ul v-for="page in pages" :key="page.id">
                <li class="text-gray-500 pl-2.5 md:pl-1.5">
                    <a v-if="page.attributes.external" :href="page.attributes.href" target="_blank">
                        {{ page.attributes.Title }}
                    </a>
                    <NuxtLink v-else :to="page.attributes.href">
                        {{ page.attributes.Title }}
                    </NuxtLink>
                </li>
            </ul>
        </template>
        <div class="overflow-hidden h-screen w-screen p-8 md:py-16">
            <img class="object-contain object-top h-full w-full p-1.5" src="https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg" />
        </div>
    </page-layout>
    </client-only>
</template>

<script>
import PageLayout from '~/components/PageLayout.vue';
export default {
    name: 'App',
    components: { PageLayout },
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