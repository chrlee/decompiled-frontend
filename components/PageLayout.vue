<template>
    <transition-group appear name="fade">
    <div key="wrapper" class="md:h-screen whitespace-pre-line leading-tight inline-block">
        <div class="md:absolute px-8 md:px-16 pt-8 md:pt-16">
            <h1 class="text-7xl md:text-5xl tracking-tighter"><NuxtLink to="/">ㅈㅅ</NuxtLink></h1>
            <slot name="nav"></slot>
        </div>
        <slot></slot>
    </div>
    </transition-group>
</template>

<script>
export default {
    name: 'PageLayout'
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