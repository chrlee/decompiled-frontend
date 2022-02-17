<template>
    <div>
        <ul class="grid grid-flow-row grid-cols-2 md:grid-cols-3 h-full w-full">
            <li v-for="item in items" :key="item.id" class="font-extralight pl-2.5 md:pl-1.5">
                <PortfolioItem :item="item" />
            </li>
        </ul>
    </div>
</template>

<script>
import PortfolioItem from "./PortfolioItem.vue"
export default {
  name: 'PortfolioLayout',
  components: { PortfolioItem },
  props: {
      items: {
          type: Array,
          default: () => {},
          required: true
      }
  }
}
</script>