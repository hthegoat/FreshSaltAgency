<template>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    <!-- text - start -->
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/harrisonkug/meeting?hide_gdpr_banner=1" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->

    <div class="mt-24 mb-10 md:mb-16">
      <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-12 md:mb-6">Get In Touch</h2>


    </div>
    <!-- text - end -->

    <!-- form - start -->
    <form class="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
    action="https://getform.io/f/18e19d2f-ebd0-49b8-a8fa-541dc8c3f69e"
    method="POST"
    >
      <div>
        <label for="first-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">First name*</label>
        <input name="first-name" class="w-full bg-slate-200 text-gray-800 border-4 rounded-xl border-black focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div>
        <label for="last-name" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Last name*</label>
        <input name="last-name" class="w-full bg-slate-200 text-gray-800 border-4 rounded-xl border-black focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>

      <div class="sm:col-span-2">
        <label for="email" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Email*</label>
        <input name="email" class="w-full bg-slate-200 text-gray-800 border-4 rounded-xl focus:ring border-black ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2" />
      </div>


      <div class="sm:col-span-2">
        <label for="message" class="inline-block text-gray-800 text-sm sm:text-base mb-2">Message*</label>
        <textarea name="message" class="w-full h-64 bg-slate-200 text-gray-800 border-4 rounded-xl border-black focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"></textarea>
      </div>

      <div class="sm:col-span-2 flex justify-between items-center">
        <button type="submit" class="inline-block bg-slate-300 border-black border-4 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-black text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Send</button>

        <span class="text-gray-500 text-sm">*Required</span>
      </div>

      <p class="text-gray-400 text-xs">We Look Forward To Chatting <a href="#" class="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100">Privacy Policy</a>.</p>
    </form>
    <!-- form - end -->
  </div>
</div>
</template>
