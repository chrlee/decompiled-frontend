<template>
    <div>
        <ul class="grid grid-flow-col auto-cols-max">
            <li v-for="item in items" :key="item.id" class="text-gray-500 pl-2.5 md:pl-1.5">
                <Link :to="item.attributes.href">
                    <p>{{ item.attributes.title }}</p>
                </Link>
            </li>
        </ul>
    </div>
</template>

<script>
import Link from "../components/Link.vue"
export default {
  name: 'PortfolioLayout',
  components: { Link },
  props: {
      items: {
          type: Array,
          default: () => {},
          required: true
      }
  }
}
</script>