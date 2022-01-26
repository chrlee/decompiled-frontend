<template>
    <a v-if="external" :href="to" target="_blank">
        <slot></slot>
    </a>
    <NuxtLink v-else :to="to">
        <slot></slot>
    </NuxtLink>
</template>

<script>
export default {
  name: 'Link',
  props: {
      to: {
          type: String,
          default: "/",
          required: true
      },
      external: {
          type: Boolean,
          default: false,
          required: false
      }
  }
}
</script>