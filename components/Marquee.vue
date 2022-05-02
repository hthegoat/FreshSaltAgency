<template>
    <section>
 <div class="overflow-hidden max-w-3xl mx-auto py-2 bg-gray-100">
<!--  required classes: marquee inline-flex max-w-full  -->
  <ul class="marquee py-3 inline-flex space-x-4 whitespace-nowrap max-w-full h-1/2" x-data="Marquee({speed: 0.5, spaceX: 4})">
<!-- if you are putting elements that require dynamic width calculations (e.g. images), add the flex-shrink-0 class to each li element -->
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/uc.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/eco.jpg"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/prdr.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/expo.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/uhoh.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/selfgrowth.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/mm.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/sfm.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/lxy.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/sf.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/dx.png"></li>
    <li class="flex-shrink-0"><img class="object-contain h-11 w-9" src="~/assets/bth.png"></li>
  </ul>
</div>

    </section>
</template>

<style scoped>
.marquee {
  animation: scrolling var(--marquee-time) linear infinite;
}

.marquee:hover {
  animation-play-state: paused;
}

@keyframes scrolling {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-1 * var(--marquee-width))); }
}
</style>
<script>
/**
 * See https://stackoverflow.com/a/24004942/11784757
 */
const debounce = (func, wait, immediate = true) => {
  let timeout
  return () => {
    const context = this
    const args = arguments
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }, wait)
    if (callNow) func.apply(context, args)
  }
}

/**
 * Append the child element and wait for the parent's
 * dimensions to be recalculated
 * See https://stackoverflow.com/a/66172042/11784757
 */
const appendChildAwaitLayout = (parent, element) => {
  return new Promise((resolve, _) => {
    const resizeObserver = new ResizeObserver(entries => {
      resizeObserver.disconnect()
      resolve(entries)
    })
    resizeObserver.observe(element)
    parent.appendChild(element)
  })
}

document.addEventListener('alpine:init', () => {
  Alpine.data(
    'Marquee',
    ({ speed = 1, spaceX = 0, dynamicWidthElements = false }) => ({
      dynamicWidthElements,
      async init() {
        if (this.dynamicWidthElements) {
          const images = this.$el.querySelectorAll('img')
          // If there are any images, make sure they are loaded before
          // we start cloning them, since their width might be dynamically
          // calculated
          if (images) {
            await Promise.all(
              Array.from(images).map(image => {
                return new Promise((resolve, _) => {
                  if (image.complete) {
                    resolve()
                  } else {
                    image.addEventListener('load', () => {
                      resolve()
                    })
                  }
                })
              })
            )
          }
        }
        this.originalElement = this.$el.cloneNode(true)
        const originalWidth = this.$el.scrollWidth + spaceX * 4
        // Required for the marquee scroll animation 
        // to loop smoothly without jumping 
        this.$el.style.setProperty('--marquee-width', originalWidth + 'px')
        this.$el.style.setProperty(
          '--marquee-time',
          ((1 / speed) * originalWidth) / 100 + 's'
        )
        this.resize()
        // Make sure the resize function can only be called once every 100ms
        // Not strictly necessary but stops lag when resizing window a bit
        window.addEventListener('resize', debounce(this.resize.bind(this), 100))
      },
      async resize() {
        // Reset to original number of elements
        this.$el.innerHTML = this.originalElement.innerHTML

        // Keep cloning elements until marquee starts to overflow
        let i = 0
        while (this.$el.scrollWidth <= this.$el.clientWidth) {
          if (this.dynamicWidthElements) {
            // If we don't give this.$el time to recalculate its dimensions
            // when adding child nodes, the scrollWidth and clientWidth won't
            // change, thus resulting in this while loop looping forever
            await appendChildAwaitLayout(
              this.$el,
              this.originalElement.children[i].cloneNode(true)
            )
          } else {
            this.$el.appendChild(
              this.originalElement.children[i].cloneNode(true)
            )
          }
          i += 1
          i = i % this.originalElement.childElementCount
        }

        // Add another (original element count) of clones so the animation
        // has enough elements off-screen to scroll into view
        let j = 0
        while (j < this.originalElement.childElementCount) {
          this.$el.appendChild(this.originalElement.children[i].cloneNode(true))
          j += 1
          i += 1
          i = i % this.originalElement.childElementCount
        }
      },
    })
  )
})

Alpine.start()

</script>