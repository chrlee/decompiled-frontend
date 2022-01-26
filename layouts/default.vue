<template>
    <client-only>
        <transition-group appear name="fade">
            <div key="wrapper" class="h-screen w-fit whitespace-pre-line leading-tight flex flex-col items-center justify-center">
                <Header /> 
                <div class="overflow-hidden h-screen w-fit p-8">
                    <Nuxt />
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