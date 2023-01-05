<template>
  <section>
    <div class="marquee">
  <div class="marquee-content">
    <div class="marquee-item">
      <img src="~/assets/selfgrowth.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 1">
    </div>

    <div class="marquee-item">
      <img src="~/assets/sfm.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 2">
    </div>

    <div class="marquee-item">
      <img src="~/assets/prdr.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 3">
    </div>

    <div class="marquee-item">
      <img src="~/assets/mm.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 4">
    </div>

    <div class="marquee-item">
      <img src="~/assets/marietta.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 5">
    </div>

    <div class="marquee-item">
      <img src="~/assets/lxy.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 6">
    </div>

    <div class="marquee-item">
      <img src="~/assets/keystone.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 7">
    </div>

    <div class="marquee-item">
      <img src="~/assets/bth.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 8">
    </div>
    <div class="marquee-item">
      <img src="~/assets/dgx.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 9">
    </div>
    <div class="marquee-item">
      <img src="~/assets/cyndrom.jpg" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 10">
    </div>
    <div class="marquee-item">
      <img src="~/assets/sf.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 11">
    </div>
    <div class="marquee-item">
      <img src="~/assets/aer.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 12">
    </div>
    <div class="marquee-item">
      <img src="~/assets/bbt.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 13">
    </div>
    <div class="marquee-item">
      <img src="~/assets/lys.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 14">
    </div>
    <div class="marquee-item">
      <img src="~/assets/aripaul.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 15">
    </div>
    <div class="marquee-item">
      <img src="~/assets/ihypno.png" class="image-contain" alt="Fresh Salt Marketing Agency, New Jersey Client 16">
    </div>

  </div>
</div>
  </section>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 10;
}

.marquee {
   overflow: hidden;
}

.marquee-content {
  align-content: center;
  display: inline-flex;
  animation: scrolling 45s linear infinite;
}

.marquee-item {
  flex: 0 0 16vw;
  margin: 0 1vw;
/*   flex: 0 0 20vw; */
/*   margin: 0 2vw; */
}

.marquee-item img {
  display: block;
  width: 75%;
/*   padding: 0 20px; */
}

@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translatex(-144vw); }
}

</style>
