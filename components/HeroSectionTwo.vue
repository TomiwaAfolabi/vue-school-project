<template>
  <div
    class="bg-[#212435] relative text-white h-[2800px] sm:h-[2800px] md:h-[2800px] lg:h-[2000px] xl:h-[1330px]"
  >
    <div class="flex flex-col justify-center items-center relative p-2">
      <h1
        class="font-[700] text-[40px] sm:text-[60px] max-w-[752px] leading-[60px] text-center mt-[150px] sm:mt-[100px]"
      >
        Discounted <span class="text-gradient">Corporate Training </span>Bundles
      </h1>
    </div>
    <div
      class="w-[100%] flex flex-col justify-center items-center absolute top-[11%] sm:top-[8%] md:top-[8%] lg:top-[8%] xl:top-[11%]"
    >
      <img class="w-[100%]" src="/assets/hero-body-2-bg.svg" />
    </div>
    <div
      class="w-[100%] flex flex-col justify-center items-center absolute top-[15%] lg:top-[25%] xl:top-[38%]"
    >
      <img class="w-[100%]" src="/assets/hero-body-2-bg-2.svg" />
    </div>
    <div
      class="w-[100%] absolute top-[12%] sm:top-[12%] md:top-[12%] lg:top-[15%] xl:top-[28%]"
    >
      <div
        class="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-[10px] md:gap-[20px] lg:gap-[80px] xl:gap-[20px] overflow-auto p-2"
      >
        <!-- container -->
        <BasicPriceCard />
        <ProfessionalPriceCard />
        <BasicPriceCardTwo />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.text-gradient {
  background: linear-gradient(to right, #0bd88f, #00c2ff);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
