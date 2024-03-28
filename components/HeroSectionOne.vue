<template>
  <!-- hero body section -->
  <div class="bg-[#212435] relative text-white h-[1000px] md:h-[950px]">
    <div class="relative top-[-44px]">
      <img class="w-[100%]" src="/assets/hero-body-bg.svg" />
    </div>
    <div class="w-[100%] absolute top-[-80px]">
      <img class="w-[100%]" src="/assets/hero-body-bg-2.svg" />
    </div>
    <div
      class="flex flex-col justify-center items-center absolute mx-auto top-[70px] left-0 right-0 gap-[100px]"
    >
      <div
        class="w-full flex flex-col justify-center items-center gap-10 pl-8 pr-8"
      >
        <div
          class="flex flex-col sm:flex-row justify-center gap-[0px] md:gap-[50px] bg-[#2B2F44] rounded-[30px] pt-8 pb-8 md:pr-0 md:pl-0 lg:p-10"
        >
          <div
            class="w-full sm:w-[20%] md:max-w-[280px] flex justify-center items-center"
          >
            <img
              class="w-[135px] h-[152px]"
              src="/assets/icons/vue-school-logo.svg"
            />
          </div>
          <div class="w-full sm:w-[80%] p-2">
            <p
              class="sm:max-w-[464px] md:max-w-[770px] text-[24px] sm:text-[40px] font-[700] mb-4 leading-[40px] text-center sm:text-start"
            >
              About Vue School corporate training
            </p>
            <p
              class="max-w-full md:max-w-[770px] text-[14px] sm:text-[22px] text-center sm:text-start"
            >
              School is the #1 training resource for Vue.js and has provided the
              most comprehensive Vue.js video library in the world to over
              140,000 developers. Private individuals and small to enterprise
              companies have used our services to develop their skills since
              2016.
            </p>
          </div>
        </div>

        <div
          class="hidden sm:flex justify-center gap-[20px] lg:gap-[55px] w-full"
        >
          <div
            class="text-[#A0A8C3] text-[25px] lg:text-[32px] xl:text-[41px]"
            v-for="(item, i) in text"
            :key="i"
          >
            {{ item }}
          </div>
        </div>
      </div>

      <div
        class="w-full flex flex-col md:flex-row justify-center items-center gap-0 sm:gap-[5px] p-4"
      >
        <div
          class="flex flex-col justify-center items-center md:items-start max-w-[570px]"
        >
          <p class="text-gradient text-[14px] sm:text-[24px] font-[500]">
            YOUR #1 SOURCE OF VUE.JS COURSES
          </p>
          <h1
            class="text-[40px] sm:text-[60px] font-[700] max-w-[570px] leading-[55px] text-center md:text-start"
          >
            Full Stack <span class="text-gradient">Vue Training </span>Solutions
          </h1>
        </div>
        <div class="flex gap-2 md:gap-[40px]">
          <div v-for="(obj, i) in solutions" :key="i">
            <p class="text-gradient text-[64px] sm:text-[90px] font-[500]">
              {{ obj.amount }}
            </p>
            <div
              class="flex gap-[2px] sm:gap-2 text-[10px] items-center justify-center"
            >
              <Icon :name="obj.icon"></Icon> <span>{{ obj.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const text = reactive([
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
  "Google",
]);
const solutions = reactive([
  { name: "Video Lessons", icon: "ri:play-circle-fill", amount: 763 },
  { name: "Course", icon: "ri:book-3-fill", amount: 40 },
  { name: "15 hours", icon: "ri:time-fill", amount: 64 },
]);
</script>

<style>
.text-gradient {
  background: linear-gradient(to right, #0bd88f, #00c2ff);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
