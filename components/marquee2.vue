<template>
<section>
<section class="text-gray-600 bg-slate-100 rounded-lg container body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Fresh Salt Marketing Agency, New Jersey Client 4" src="~/assets/logo3.png">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font text-3xl md:text-4xl font-bold text-center mb-4  text-gray-900">Hassle-Free Website Design</h1>
      <p class="mb-8 leading-relaxed">Want an effective design that matches your brand's mission and vision? Our team can help. We combine data-driven trends with ethical strategies to provide a streamlined experience that suits the needs of your company and clients.</p>
      <div class="flex justify-center">
        <NuxtLink to="contact" class="inline-flex text-white bg-blue-500 border-0 px-12 py-3 focus:outline-none hover:bg-indigo-600 rounded-lg text-md font-semibold">Get Started Free</NuxtLink>

      </div>
    </div>
  </div>
</section>


  <section class="bg-slate-100">
    <div class="marquee">
  <div class="marquee-content">
    <div class="marquee-item">
      <img src="~/assets/1.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 1">
    </div>

    <div class="marquee-item">
      <img src="~/assets/2.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 2">
    </div>

    <div class="marquee-item">
      <img src="~/assets/3.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 3">
    </div>


  </div>
</div>

  </section>
  </section>
</template>
<style scoped>
* {
  box-sizing: flex;
}

body {
  margin: 0;
}

.marquee {
   overflow: hidden;
}

.marquee-content {
  align-content: center;
  display: inline-flex;
  animation: scrolling 35s linear infinite;
}

.marquee-item {
  flex: 0 0 65vw;
  margin: 0px;
/*   flex: 0 0 20vw; */
/*   margin: 0 2vw; */
}

.marquee-item img {
  display: flex;
  width: 75%;
/*   padding: 0 20px; */
}

@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translatex(-144vw); }
}

</style>
