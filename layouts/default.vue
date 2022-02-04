<template>
    <client-only>
        <transition-group appear name="fade">
            <div key="wrapper" class="whitespace-pre-line leading-tight flex flex-col flex-auto items-center justify-center">
                <Header /> 
                <div class="flex">
                    <div class="flex-none md:flex-1"></div>
                    <div class="flex-1 overflow-hidden h-fit pl-1.5 md:pl-0">
                        <Nuxt />
                    </div>
                    <div class="flex-none md:flex-1 px-1.5 md:pr-0">
                        <NavBar />
                    </div>
                </div>
            </div>
        </transition-group>
    </client-only>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
    name: 'PageLayout',
    components: { Header },
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