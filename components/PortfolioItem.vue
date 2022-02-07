<template>
  <Link :to="item.attributes.link.href" :external="item.attributes.link.external">
    <div class="flex flex-col">
      <div class="flex-initial inline-flex">
        <img class="object-contain" :src="item.attributes.image.data.attributes.url" :srcset="`${item.attributes.image.data.attributes.formats.thumbnail.url} 234w, ${item.attributes.image.data.attributes.formats.small.url} 500w, ${item.attributes.image.data.attributes.formats.medium.url} 750w`" />
      </div>
      <div class="inline-flex">
        <p>{{ item.attributes.title }}</p>
      </div>
    </div>
  </Link>
</template>

<script>
import Link from "./Link.vue";

export default {
  name: "PortfolioItem",
  components: { Link },
  props: {
    item: {
      type: Object,
      default: () => {},
      required: true
    }
  }
}
</script>