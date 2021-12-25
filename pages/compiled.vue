<template>
    <client-only>
    <transition-group appear name="fade">
    <div key="wrapper" class="grid grid-cols-1 md:grid-cols-3 md:h-screen whitespace-pre-line leading-tight inline-block">
        <div class="pl-8 md:pl-16 pt-8 md:pt-16">
            <h1 class="text-7xl md:text-5xl tracking-tighter">ㅈㅅ</h1>
            <ul v-for="page in pages" :key="page.id">
                <li class="text-gray-500 pl-2.5 md:pl-1.5">
                    {{ page.attributes.Title }}
                </li>
            </ul>
        </div>
        <div class="overflow-hidden md:col-span-2 p-8 md:py-16">
            <img class="object-contain object-top h-full w-full p-1.5" src="https://aimint.org/ap/wp-content/uploads/sites/18/2016/04/image-placeholder-vertical.jpg" />
        </div>
    </div>
    </transition-group>
    </client-only>
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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>