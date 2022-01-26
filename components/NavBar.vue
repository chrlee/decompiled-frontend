<template>
    <ul class="flex items-center justify-center leading-none">
        <li v-for="page in pages" :key="page.id" class="text-gray-500 mx-2">
            <Link :external="page.attributes.external" :to="page.attributes.href">
                <p>{{ page.attributes.Title }}</p>
            </Link>
        </li>
    </ul>
</template>

<script>
import Link from './Link.vue'
export default {
    name: 'NavBar',
    components: { Link },
    props: {
      pages: {
          type: Array,
          default: () => {},
          required: true
      }
    }
}
</script>