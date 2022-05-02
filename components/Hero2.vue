<template>
<section class="px-4 py-12 mx-auto max-w-7xl">

  <div class="grid items-center grid-cols-1 mb-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div>
      <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-black md:leading-tight sm:text-left md:text-4xl">Paid Customer Acquisiton</h2>
      <p class="mb-5 text-base text-gray-600 sm:text-left md:text-lg">
        Everyone's telling you to use social media but the ROI doesn't seem tangible. That's where we come in. Paid Customer Acquisition is exactly what it sounds like. We run ads to get you new clients & customers. 
      </p>
      <NuxtLink to="services"><button
    class="px-5 py-3 sm:items-stretch font-bold border-2 rounded-md hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 active:opacity-75"
    type="button"
  >Learn More</button></NuxtLink>
    </div>
    <div class="w-full h-full py-12 bg-gray-200">
        <img src="~/assets/hero1.png" alt="">
    </div>
  </div>
  <div class="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
    <div class="order-none md:order-2">
      <h2 class="mb-4 text-2xl font-extrabold tracking-tight text-black md:leading-tight sm:text-left md:text-4xl">Crowdfunding Marketing</h2>
      <p class="mb-5 text-base text-gray-600 sm:text-left md:text-lg">
        We've had the pleasure of working on some really cool Kickstarter Launches this year. Need help? Contact us below!
      </p>
     <NuxtLink to="kickstarter"> <button
    class="px-5 py-3 font-bold border-2 rounded-md hover:z-10 focus:outline-none focus:border-indigo-600 focus:z-10 sm:justify-center hover:bg-gray-50 active:opacity-75"
    type="button"
  >Learn More</button></NuxtLink>
    </div>
    <div class="w-full h-full py-12 bg-gray-200">
        <img src="~/assets/hero2.png" alt="">
    </div>
  </div>
</section>

</template>