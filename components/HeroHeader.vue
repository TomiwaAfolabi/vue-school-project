<template>
  <div class="relative">
    <div
      class="w-full flex flex-col md:flex-row gap-[50px] justify-center mx-auto bg-[#212435] text-white"
    >
      <div
        class="flex flex-col justify-center items-center md:items-start lg:items-start p-4 md:p-[70px] md:pl-[50px]"
      >
        <h1
          v-if="
            HeroHeader.intialText.length > 0 ||
            HeroHeader.highlightedText.length > 0 ||
            HeroHeader.finalText.length > 0
          "
          class="max-w-[567px] text-[40px] sm:text-[60px] font-[700] leading-[47px] sm:leading-[71px] text-center md:text-start"
        >
          {{ HeroHeader.intialText }}
          <span class="text-[#0BD88F]"> {{ HeroHeader.highlightedText }}</span>
          {{ HeroHeader.finalText }}
        </h1>
        <h1
          v-else
          class="max-w-[567px] text-[40px] sm:text-[60px] font-[700] leading-[47px] sm:leading-[71px] text-center md:text-start"
        >
          Complete
          <span class="text-[#0BD88F]"> Vue.js trainning</span>
          solutions for companies
        </h1>

        <p
          class="max-w-[570px] text-[16px] sm:text-[22px] text-center md:text-start mt-2"
        >
          Training solutions designed for companies, agencies and organisations
          with developers using or who are considering using the Vue.js
          framework
        </p>
        <div>
          <Button
            button-class="bg-[#0BD88F] p-4 max-w-[176px] flex items-center
          justify-center text-[#212435] rounded-xl font-[500] mt-6
          cursor-pointer"
            :text-details="`${
              HeroHeader.buttonText.length > 0
                ? HeroHeader.buttonText
                : 'Talk to sales'
            }`"
          />
        </div>
      </div>
      <div class="flex justify-center items-center mt-[60px] md:pr-5">
        <img
          class="max-w-[320px] lg:max-w-[602px]"
          src="/assets/hero-header-img.svg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContentStore } from "~/store/content";
const contentStore = useContentStore();
const { getHeaderContent } = contentStore;
const Content = ref(null);
const HeroHeader = reactive({
  intialText: "",
  highlightedText: "",
  finalText: "",
  buttonText: "",
});
onMounted(async () => {
  await getHeaderContent()
    .then((data) => {
      Content.value = [...data];
    })
    .catch((err) => err);

  if (Content) {
    Content?.value?.forEach((el) => {
      if (el.Content === "HeroHeaderContent") {
        HeroHeader.intialText = el.InitialText;
        HeroHeader.highlightedText = el.HighlightedText;
        HeroHeader.finalText = el.FinalText;
        HeroHeader.buttonText = el.ButtonText;
      }
    });
  }
});
</script>

<style></style>
