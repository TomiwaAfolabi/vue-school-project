<template>
  <footer class="w-full bg-[#212435] flex flex-col md:flex-row self-end">
    <div
      class="w-full lg:w-[60%] xl:w-[50%] pr-4 pl-4 xl:pl-12 pt-12 flex flex-col gap-[70px]"
    >
      <div
        class="flex flex-col sm:gap-0 md:gap-[60px] justify-center sm:justify-center md:justify-start items-center sm:items-center md:items-start"
      >
        <Logo img-class="!w-[78px] !h-[88px]  " extra-class="!items-center" />
        <p
          class="text-white max-w-full text-center sm:text-center md:text-start lg:max-w-[470px] text-[16px]"
        >
          Thanks to fine people like you, Vue School can proudly sponsor Evan
          and the future of Vue.js by being a Platinum Patreon
        </p>
      </div>
      <div
        class="flex flex-col justify-center sm:justify-center md:justify-start items-center sm:items-center md:items-start"
      >
        <h1
          class="text-[#737B98] text-center sm:text-start font-[500] text-[22px] mb-4"
        >
          FOLLOW US ON SOCIAL MEDIA
        </h1>
        <div class="flex gap-10 flex-wrap">
          <div
            v-for="(icon, i) in icons"
            :key="i"
            class="w-[60px] h-[60px] rounded-[100%] bg-[#2B2F44] flex items-center justify-center"
          >
            <Icon
              :name="icon"
              class="w-[30px] h-[30px] cursor-pointer"
              color="#797B88"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full lg:w-[60%] xl:w-[50%] flex flex-col lg:flex-row justify-center sm:justify-center md:justify-end text-white p-12 gap-[50px]"
    >
      <div
        class="flex flex-row lg:flex-col justify-between sm:gap-[50px] flex-wrap"
      >
        <div>
          <h1 class="text-[#737B98] font-[500] text-[22px] mb-4">PRODUCTS</h1>
          <div class="flex flex-col gap-4" v-for="(link, i) in Links" :key="i">
            <NuxtLink
              v-for="(name, i) in link.products"
              :key="i"
              class="cursor-pointer hover:text-[#0BD88F]"
              >{{ name }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <h1 class="text-[#737B98] font-[500] text-[22px] mb-4">PRICING</h1>
          <div class="flex flex-col gap-4" v-for="(link, i) in Links" :key="i">
            <NuxtLink
              v-for="(name, i) in link.price"
              :key="i"
              class="cursor-pointer hover:text-[#0BD88F]"
              >{{ name }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <h1 class="text-[#737B98] font-[500] text-[22px] mb-4">
            CONNECT WITH US
          </h1>
          <div class="flex flex-col gap-4" v-for="(link, i) in Links" :key="i">
            <NuxtLink
              v-for="(name, i) in link.connect"
              :key="i"
              class="cursor-pointer hover:text-[#0BD88F]"
              >{{ name }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <div
        class="flex flex-row lg:flex-col justify-between sm:gap-[50px] flex-wrap"
      >
        <div>
          <h1 class="text-[#737B98] font-[500] text-[22px] mb-4">EVENTS</h1>
          <div class="flex flex-col gap-4" v-for="(link, i) in Links" :key="i">
            <NuxtLink
              v-for="(name, i) in link.events"
              :key="i"
              class="cursor-pointer hover:text-[#0BD88F]"
              >{{ name }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <h1 class="text-[#737B98] font-[500] text-[22px] mb-4">CORPORATE</h1>
          <div class="flex flex-col gap-4" v-for="(link, i) in Links" :key="i">
            <NuxtLink
              v-for="(name, i) in link.corporate"
              :key="i"
              class="cursor-pointer hover:text-[#0BD88F]"
              >{{ name }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <h1 class="text-[#737B98] font-[500] text-[22px] mb-4">
            CONNECT WITH US
          </h1>
          <div class="flex flex-col gap-4" v-for="(link, i) in Links" :key="i">
            <NuxtLink
              v-for="(name, i) in link.resources"
              :key="i"
              class="cursor-pointer hover:text-[#0BD88F]"
              >{{ name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from "./reusables/Logo.vue";
const icons = reactive([
  "ic:outline-facebook",
  "ph:twitter-logo-fill",
  "mdi:github",
  "ri:linkedin-fill",
  "ri:youtube-fill",
]);
const Links = reactive([
  { products: ["Courses", "Workshops", "Vue Masterclass", "Mastering Nuxt"] },
  { price: ["Plan"] },
  { connect: ["About Us", "Careers", "Contact Us"] },
  { events: ["Vue.js Nation", "Nuxt Nation", "Vue.js Forge"] },
  {
    corporate: [
      "Corporate Training",
      "Developer Recruitment",
      "Course Developement",
      "On-site Workshops",
      "Consulting",
      "Affiliate Programs",
    ],
  },
  { resources: ["Articles"] },
]);
</script>

<style></style>
