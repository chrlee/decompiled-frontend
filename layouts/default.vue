<template>
    <client-only>
        <transition-group appear name="fade">
            <div key="wrapper" class="whitespace-pre-line leading-tight flex flex-col items-center justify-center h-screen">
                <NavBar /> 
                <div class="flex-auto">
                    <div class="flex flex-row h-full w-screen">
                        <div class="flex-none md:flex-1 border-t border-black"></div>
                        <div class="flex-1 border-r border-t border-black">
                            <Nuxt />
                        </div>
                        <div class="flex-none md:flex-1 pr-1 lg:pr-0">
                            <Header />
                        </div>
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