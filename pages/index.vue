<template>
    <div class="text-gray-400 whitespace-pre-line leading-tight inline-block m-4 px-2 border-green-500 border-l-2">
        <p>&lt;!DOCTYPE html&gt;</p>
        <p>&lt;html&gt;</p>
        <div class="ml-4">
            <p>&lt;head&gt;</p>
            <div class="ml-4">
                <p> &lt;<span class="text-indigo-400">title</span>&gt;<span class="text-black">Christian Lee</span>&lt;/<span class="text-indigo-400">title</span>&gt;
                    &lt;meta charSet="utf-8"/&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/&gt;
                    &lt;meta name="generator" content="Gatsby 2.21.1"/&gt;
                    &lt;link rel="author" title="instagram" href="https://instagram.com/cjl.e/"/&gt;
                    &lt;link rel="author" title="linkedin" href="https://linkedin.com/in/cjle"/&gt;
                    &lt;link rel="alternate" type="application/rss+xml" href="/rss.xml"/&gt;
                    &lt;link rel="sitemap" type="application/xml" href="/sitemap.xml"/&gt;
                    &lt;link as="script" rel="preload" href="/webpack-runtime-1ff73fa22fa37b2d2a6e.js"/&gt;
                    &lt;link as="script" rel="preload" href="/framework-f7a21432b9f0980fadac.js"/&gt;
                </p>
            </div>
            <p>&lt;/head&gt;</p>
            <p>&lt;body&gt;</p>
                <div class="ml-4">
                    <p>&lt;div id="layout"&gt;</p>
                        <div class="ml-4">
                            <p>&lt;div class="navigation"&gt;</p>
                            <div class="ml-4">
                               <p>&lt;div class="navigation__inner"&gt;</p>
                                    <div class="ml-4">
                                        <p>&lt;div class="navigation__header"&gt;</p>
                                            <div class="ml-4">
                                                <p>&lt;div&gt;</p>
                                                    <div class="ml-4">
                                                        <p>&lt;h2 class="navigation__header-title"&gt;</p>
                                                            <div class="ml-4">
                                                                <p>&lt;a aria-current="page" class="navigation__header-title-link" href="/"&gt;Home&lt;/div&gt;</p> 
                                                            </div>
                                                        <p>&lt;/div&gt;</p> 
                                                    </div>
                                                <p>&lt;/div&gt;</p> 
                                            </div>
                                        <p>&lt;/div&gt;</p>
                                        <p>&lt;nav class="menu"&gt;</p>
                                            <div class="ml-4">
                                                <p>&lt;ul class="menu__list"&gt;</p>
                                                    <div class="ml-4">
                                                        <span v-for="page in pages" :key="page.id">
                                                            <p>&lt;li class="menu__list-item"&gt;</p>
                                                                <div v-if="page.attributes.external" class="ml-4">
                                                                    <a :href="page.attributes.href">
                                                                        <p>&lt;<span class="text-indigo-400">a</span> <span class="text-blue-400">class</span>=<span class="text-yellow-500 opacity-70">"menu__list-item-link"</span> <span class="text-blue-400">href</span>=<span class="text-yellow-500 opacity-70">"{{ page.attributes.href }}"</span>&gt;</p>
                                                                            <div class="ml-4">
                                                                                <p class="text-black">{{ page.attributes.Title }}</p>
                                                                            </div>
                                                                        <p>&lt;/<span class="text-indigo-400">a</span>&gt;</p>
                                                                    </a>
                                                                </div>
                                                                <div v-else class="ml-4">
                                                                    <NuxtLink :to="page.attributes.href">
                                                                        <p>&lt;<span class="text-indigo-400">a</span> <span class="text-blue-400">class</span>=<span class="text-yellow-500 opacity-70">"menu__list-item-link"</span> <span class="text-blue-400">href</span>=<span class="text-yellow-500 opacity-70">"{{ page.attributes.href }}"</span>&gt;</p>
                                                                            <div class="ml-4">
                                                                                <p class="text-black">{{ page.attributes.Title }}</p>
                                                                            </div>
                                                                        <p>&lt;/<span class="text-indigo-400">a</span>&gt;</p>
                                                                    </NuxtLink>
                                                                </div>
                                                            <p>&lt;/li&gt;</p>
                                                        </span>
                                                    </div>
                                                <p>&lt;/ul&gt;</p>
                                            </div>
                                        <p>&lt;/nav&gt;</p>
                                    </div>
                               <p>&lt;/div&gt;</p> 
                            </div>
                            <p>&lt;/div&gt;</p>
                        </div>
                    <p>&lt;/div&gt;</p>
                </div>
            <p>&lt;/body&gt;</p>
        </div>
        <p>&lt;/html&gt;</p>
    </div>
</template>

<!--
<template>
    <div>
        <div v-if="error">
            {{ error }}
        </div>
        <ul v-else>
            <li v-for="page in pages" :key="page.id">
                {{ page.attributes.Title }}
            </li>
        </ul>
    </div>
</template>
-->

<script>
export default {
    name: 'App',
    async asyncData (context) {
        const pageData = await context.$strapi.find('pages', { sort: 'id' });
        return {
            pages: pageData.data
        }
    },
    data () {
        return {
            pages: []
        }
    },
}
</script>