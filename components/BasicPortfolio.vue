<template>
    <div>
        <ul v-for="item in items" :key="item.id">
            <li class="text-gray-500 pl-2.5 md:pl-1.5">
                <NuxtLink :to="item.attributes.href">
                    {{ item.attributes.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'PortfolioLayout',
  props: {
      items: {
          type: Object,
          default: () => {},
          required: true
      }
  }
}
</script>