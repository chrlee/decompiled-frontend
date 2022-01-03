<template>
    <ul class="flex items-center justify-center leading-none">
        <li v-for="page in pages" :key="page.id" class="text-gray-500 mx-2">
            <a v-if="page.attributes.external" :href="page.attributes.href" target="_blank">
                {{ page.attributes.Title }}
            </a>
            <NuxtLink v-else :to="page.attributes.href">
                {{ page.attributes.Title }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
      pages: {
          type: Array,
          default: () => {},
          required: true
      }
    }
}
</script>