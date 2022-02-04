<template>
    <ul class="flex flex-col items-left justify-left leading-none">
        <li v-for="page in pages" :key="page.id" class="inline-flex font-extralight my-0.5">
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