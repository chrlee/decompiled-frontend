<template>
    <ul class="flex flex-row inline-flex items-left justify-left leading-none w-fit pt-4 md:pt-8 md:pl-1 border-l border-black">
        <li v-for="page in pages" :key="page.id" class="text-sm md:text-base font-extralight m-0.5 md:m-1">
            <Link :external="page.attributes.external" :to="page.attributes.href">
                <p>{{ page.attributes.Title }}</p>
            </Link>
        </li>
    </ul>
</template>

<script>
import {mapState} from 'vuex'
import Link from './Link.vue'

export default {
    name: 'NavBar',
    components: { Link },
    computed: {
        ...mapState(['pages'])
    } 
}
</script>