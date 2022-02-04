<template>
    <ul class="flex flex-col inline-flex items-left justify-left leading-none w-fit">
        <li v-for="page in pages" :key="page.id" class="font-extralight my-0.5">
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