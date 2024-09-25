<template>
  <div
    class="w-screen h-screen bg-space flex flex-col items-center justify-between"
  >
    <div class="w-full flex justify-between items-center my-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        class="mx-20"
      >
        <g fill="none" fill-rule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
      <div class="w-2/5 height-1 opacity-20 translate-x-8 z-10"></div>
      <div
        class="w-1/2 h-28 blur-image flex items-center justify-around text-white font-khand"
      >
        <div class="flex gap-2 items-center">
          <p class="text-2xl font-semibold">00</p>
          <p class="text-xl opacity-75">HOME</p>
        </div>
        <div class="flex gap-2 items-center">
          <p class="text-2xl font-semibold">01</p>
          <p class="text-xl opacity-75">DESTINATION</p>
        </div>
        <div class="flex gap-2 items-center">
          <p class="text-2xl font-semibold">02</p>
          <p class="text-xl opacity-75">CREW</p>
        </div>
        <div class="flex gap-2 items-center">
          <p class="text-2xl font-semibold">03</p>
          <p class="text-xl opacity-75">TECHNOLOGY</p>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-between items-center 2xl:px-20 2xl:py-24">
      <div class="flex flex-col text-white gap-8 w-2/5">
        <p class="font-khand text-4xl opacity-75">SO, YOU WANT TO TRAVEL TO</p>
        <p class="font-bellefair text-9xl">SPACE</p>
        <p class="w-full text-2xl opacity-75">
          Let's face it; if you want to go to space , you might as well
          genuinely go to outer space and hot hover kind of on the edge of it.
          Well sit back, and relax because we'll give you a truly out of this
          world experience!
        </p>
      </div>
      <div class="w-2/5 flex justify-center items-center">
        <div class="size-96 white-opacity rounded-full flex justify-center items-center">
          <div class="size-52 bg-white opacity-100 rounded-full flex justify-center items-center"><p class="text-3xl font-bellefair opacity-50">EXPLORE</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bellefair&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap");
.font-bellefair {
  font-family: "Bellefair", serif;
}
.font-khand {
  font-family: "Khand", sans-serif;
}
.bg-space {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("../../public/images/home/background-home-desktop.jpg");
}
.height-1 {
  background-color: white;
  height: 1px;
}
.white-opacity {
    background-color: rgba(255, 255, 255, 0.2);
}
.blur-image {
  backdrop-filter: blur(100px);
}
</style>
