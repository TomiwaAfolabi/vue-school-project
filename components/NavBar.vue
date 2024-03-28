<template>
  <div
    class="bg-[#212435] pt-[20px] pl-[5px] sm:pl-0 pb-[20px] pr-[10px] md:pr-[5px] sm:pr-[5px] lg:pr-[10px] xl:pr-[20px] flex justify-between font-rubik"
  >
    <div class="flex">
      <div class="flex items-center sm:hidden">
        <Icon
          class="w-[28px] h-[24px] cursor-pointer"
          name="material-symbols:menu-rounded"
          color="white"
        />
      </div>

      <Logo text-class="!text-[15px] xl:!text-[16px]" extra-class=" !gap-0 " />
    </div>
    <nav class="hidden sm:flex gap-[7px] md:gap-[7px] lg:gap-[15px] xl:gap-6">
      <ul
        v-for="(link, index) in links"
        :key="index"
        class="flex gap-[0px] md:gap-[2px] lg:gap-[2px] xl:gap-[5px] items-center hover:cursor-pointer"
      >
        <NuxtLink
          class="text-white font-[100] lg:font-[200] xl:font-[400] sm:text-[9px] md:text-[12px] lg:text-[15px] xl:text-[17px] hover:text-[#0BD88F]"
          >{{ link.name }}</NuxtLink
        >
        <Icon
          v-if="link.value"
          name="ic:baseline-arrow-drop-down"
          class="hover:bg-[#0BD88F]"
          color="white #0BD88F"
        />
      </ul>
    </nav>
    <div class="flex gap-4">
      <div class="gradient rounded-[10px] flex items-center p-[1px]">
        <button
          class="bg-[#212435] rounded-[10px] pt-[15px] sm:pt-[20px] md:pt-[20px] lg:pt-[20px] xl:pt-[15px] pl-[8px] sm:pl-[4px] md:pl-[4px] lg:pl-[20px] pb-[15px] sm:pb-[19px] md:pb-[19px] lg:pb-[19px] xl:pb-[15px] pr-[8px] sm:pr-[4px] md:pr-[4px] lg:pr-[20px] text-[#0BD88F] text-[17px] sm:text-[9px] md:text-[12px] lg:text-[15px] xl:text-[17px]"
        >
          Log In
        </button>
      </div>
      <div class="gradient rounded-[10px] flex items-center p-[1px]">
        <button
          class="bg-[#212435] rounded-[10px] pt-[15px] sm:pt-[20px] md:pt-[20px] lg:pt-[20px] xl:pt-[15px] pl-[8px] sm:pl-[4px] md:pl-[4px] lg:pl-[20px] pb-[15px] sm:pb-[19px] md:pb-[19px] lg:pb-[19px] xl:pb-[15px] pr-[8px] sm:pr-[4px] md:pr-[4px] lg:pr-[20px] text-[#0BD88F] text-[17px] sm:text-[9px] md:text-[12px] lg:text-[15px] xl:text-[17px]"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Logo from "../components/reusables/Logo.vue";
const links = reactive([
  { name: "Course", value: true },
  { name: "Plans", value: false },
  { name: "Business Service", value: true },
  { name: "Learning Paths", value: false },
  { name: "Hiring", value: false },
  { name: "Articles", value: false },
  { name: "Events", value: true },
  { name: "Get Certified", value: false },
]);
</script>

<style>
.gradient:hover {
  background: linear-gradient(to right, #0bd88f, #00c2ff);
}
</style>
