<template>
<section>
<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <!-- text - start -->
    <div class="mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>

      <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
    </div>
    <!-- text - end -->


  </div>
</div>
  <div class="page-wrapper">
    <div
      class="mt-12 grid gap-6 sm:px-8 mx-auto md:grid-cols-2 lg:grid-cols-3 md:max-w-none"
    >
      <div
        v-for="article of getArticles"
        :key="article.slug"
        class="flex flex-col"
      >
        <PostsCard :item="article" />
      </div>
    </div>
    <Pagination :nextPage="nextPage" :pageNo="1" urlPrefix="/blog/all" />
  </div>
  </section>
</template>

<script>
  export default {
    layout: 'blog',
    async asyncData({ $content, params }) {
      const pageNo = parseInt(params.number)
      const numArticles = 9

      const getArticles = await $content('articles')
        .where({ published: { $ne: false } })
        .limit(numArticles)
        .skip(numArticles * (pageNo - 1))
        .sortBy('date', 'desc')
        .fetch()

      if (!getArticles.length) {
        return error({ statusCode: 404, message: 'No articles found!' })
      }

      const nextPage = getArticles.length === numArticles
      getArticles
      return {
        nextPage,
        getArticles,
        pageNo
      }
    }
  }
</script>
