<template>
    <client-only>
    <transition-group appear name="fade">
    <div key="wrapper" class="text-gray-400 whitespace-pre-line leading-tight inline-block m-4 px-2 border-green-500 border-l-2">
        <p>&lt;!DOCTYPE html&gt;</p>
        <p>&lt;html&gt;</p>
        <div class="ml-4">
            <p>&lt;head&gt;</p>
            <div class="ml-4">
                <p> &lt;<span class="text-indigo-400">title</span>&gt;<span class="text-black">Christian Lee</span>&lt;/<span class="text-indigo-400">title</span>&gt;
                    &lt;meta charSet="utf-8"/&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/&gt;
                    &lt;meta name="generator" content="Gatsby 2.21.1"/&gt;
                    <a href="https://instagram.com/cjl.e/">&lt;<span class="text-indigo-400">link</span> <span class="text-blue-400">rel</span>=<span class="text-red-500 opacity-70">"author"</span> <span class="text-blue-400">title</span>=<span class="text-red-500 opacity-70">"instagram"</span> <span class="text-blue-400">href</span>=<span class="text-red-500 opacity-70">"https://instagram.com/cjl.e/"</span>/&gt;</a>
                    <br/>
                    <a href="https://linkedin.com/in/cjle/">&lt;<span class="text-indigo-400">link</span> <span class="text-blue-400">rel</span>=<span class="text-red-500 opacity-70">"author"</span> <span class="text-blue-400">title</span>=<span class="text-red-500 opacity-70">"linkedin"</span> <span class="text-blue-400">href</span>=<span class="text-red-500 opacity-70">"https://linked.com/in/cjle/"</span>/&gt;</a>
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
                                <p>&lt;h2 class="navigation__header-title"&gt;</p>
                                <div class="ml-4">
                                    <p>&lt;a aria-current="page" class="navigation__header-title-link" href="/"&gt;Home&lt;/a&gt;</p> 
                                </div>
                                <p>&lt;/h2&gt;</p> 
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
                                                <p>&lt;<span class="text-indigo-400">a</span> <span class="text-blue-400">class</span>=<span class="text-red-500 opacity-70">"menu__list-item-link"</span> <span class="text-blue-400">href</span>=<span class="text-red-500 opacity-70">"{{ page.attributes.href }}"</span>&gt;</p>
                                                <div class="ml-4">
                                                    <p class="text-black">{{ page.attributes.Title }}</p>
                                                </div>
                                                <p>&lt;/<span class="text-indigo-400">a</span>&gt;</p>
                                            </a>
                                        </div>
                                        <div v-else class="ml-4">
                                            <NuxtLink :to="page.attributes.href">
                                                <p>&lt;<span class="text-indigo-400">a</span> <span class="text-blue-400">class</span>=<span class="text-red-500 opacity-70">"menu__list-item-link"</span> <span class="text-blue-400">href</span>=<span class="text-red-500 opacity-70">"{{ page.attributes.href }}"</span>&gt;</p>
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
                    <p>&lt;div class="content"&gt;</p>
                    <div class="ml-4">
                        <p>&lt;div class="content__inner"&gt;</p>
                        <div class="ml-4">
                            <p>&lt;div class="page"&gt;</p>
                            <div class="ml-4">
                                <p>&lt;div class="page_body"&gt;</p>
                                <div class="ml-4">

                                </div>
                                <p>&lt;/div&gt;</p> 
                            </div>
                            <p>&lt;/div&gt;</p> 
                        </div>
                        <p>&lt;/div&gt;</p> 
                    </div>
                    <p>&lt;/div&gt;</p> 
                </div>
                <p>&lt;/div&gt;</p>
            </div>
            <p>&lt;script id="gatsby-script-loader"&gt;</p>
            <div class="ml-4">
                <p>/*&lt;![CDATA[*/</p>
                <div class="ml-4">
                    <p>window.pagePath = "/";</p>
                </div>
                <p>/*]]&gt;*/</p>
            </div>
            <p>&lt;/script&gt;
                &lt;script src="/component---src-pages-index-jsx-6cc8c09ba2dd3d4fee67.js" async=""/&gt;
                &lt;script src="/styles-2784bacaa009e3e009ba.js" async=""/&gt;
                &lt;script src="/app-479a1b9c4c888e48f6fb.js" async=""/&gt;
                &lt;script src="/framework-f7a21432b9f0980fadac.js" async=""/&gt;
                &lt;script src="/webpackruntime-1ff73fa22fa37b2d2a6e.js" async=""/&gt;
            </p>
            <p>&lt;/body&gt;</p>
        </div>
        <p>&lt;/html&gt;</p>
    </div>
    </transition-group>
    </client-only>
</template>

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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>