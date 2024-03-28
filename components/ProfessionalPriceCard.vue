<template>
  <div
    class="bg-[#2B2F44] w-[370px] sm:w-[640px] md:w-[640px] lg:w-[370px] h-auto rounded-[30px] p-8"
  >
    <div class="flex gap-4 items-center mb-4">
      <img src="/assets/icons/rocket-launch.svg" alt="rocket-launch-icon" />
      <h1 class="text-[22px] font-[700]">Professional</h1>
    </div>

    <div>
      <p class="text-[#0BD88F] mb-4">Includes 1 year access to:</p>
      <div
        v-for="(cardInfo, i) in CardInfo"
        :key="i"
        :class="`flex items-center gap-4 mb-4 ${
          cardInfo.isValid ? `opacity-[100%]` : `opacity-[10%]`
        }`"
      >
        <Icon
          :name="cardInfo.validIcon"
          color="#0BD88F"
          class="w-[18px] h-[18px]"
        ></Icon>
        <div class="w-full flex justify-between">
          <p :class="`${cardInfo.extraclass ? 'font-[700]' : 'font-[200]'}`">
            {{ cardInfo.title }}
          </p>
          <Icon
            class="w-[18px] h-[18px]"
            :name="cardInfo.infoIcon"
            color="#737B98"
          ></Icon>
        </div>
      </div>
    </div>
    <div class="relative mb-4">
      <div
        class="abolute w-full h-[80px] rounded-[10px] bg-[#0BD88F] mt-4 opacity-[20%]"
      ></div>
      <div class="absolute top-0">
        <div class="flex gap-4 p-[20px]">
          <img
            src="/assets/icons/Maskgroup.svg"
            alt="profile-pic"
            class="w-[50.73px] h-[42px]"
          />
          <div>
            <h1 class="text-[14px] text-[#A0A8C3]">Enough time to watch:</h1>
            <p class="text-[18px]">The Vue 3 Masterclass</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#212435] rounded-[16px] p-4">
      <div class="flex mb-4">
        <p class="pr-2 text-[40px] font-[700]">$50</p>
        <span class="text-[#A0A8C3] text-[16px] pt-[20px] tracking-[5px]"
          >/seat/month</span
        >
      </div>
      <div class="flex flex-col gap-4">
        <p class="text-[16px] font-[700]">How many licenses do you need?</p>
        <div class="flex flex-col gap-2">
          <URange v-model="price" color="primary" :min="5" :max="20" />
          <div class="flex justify-between">
            <p class="text-[#737B98] text-[14px]">5</p>
            <p class="text-[#737B98] text-[14px]">20</p>
          </div>
        </div>
      </div>
      <div class="flex p-4 items-center justify-between">
        <div class="flex gap-2">
          <img src="/assets/icons/user-group.svg" alt="user-group-icon" />
          <p class="text-[26px] font-[700]">
            {{ price }} <span class="text-[#979FAD] text-[16px]">seats</span>
          </p>
        </div>
        <div class="flex items-center justify-center">
          <p class="text-[#0BD88F] text-[16px] font-[500] pt-2">26% discount</p>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <Button
          button-class=" !w-full !max-w-full !bg-[#0BD88F] !p-4 !text-[#212435] !rounded-[10px] "
          text-details="Start Learning"
        />
        <Button
          button-class=" !w-full !max-w-full !bg-transparent  hover:!bg-[#0BD88F] !p-4 !text-[#0BD88F] hover:!text-[#212435]  !rounded-[10px] "
          text-details=" Refer Your Manager"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContentStore } from "~/store/content";
const contentStore = useContentStore();
const { getProfessionalCardContent } = contentStore;
const Content = ref(null);
onMounted(async () => {
  await getProfessionalCardContent()
    .then((data) => {
      Content.value = [...data];
    })
    .catch((err) => err);

  if (Content) {
    Content?.value?.forEach((el) => {
      if (el.professionalContent === "Professional card points") {
        CardInfo[0].title = el.titles?.[0];
        CardInfo[1].title = el.titles?.[1];
        CardInfo[2].title = el.titles?.[2];
        CardInfo[3].title = el.titles?.[3];
        CardInfo[4].title = el.titles?.[4];
      }
    });
  }
});

const CardInfo = reactive([
  {
    title: "All Video Course",
    validIcon: "ri:checkbox-circle-fill",
    infoIcon: "ri:information-fill",
    isValid: true,
    extraclass: false,
  },
  {
    title: "Vue.Js Master class",
    validIcon: "ri:checkbox-circle-fill",
    infoIcon: "ri:information-fill",
    isValid: true,
    extraclass: false,
  },
  {
    title: "Developer assist Slack channel",
    validIcon: "ri:checkbox-circle-fill",
    infoIcon: "ri:information-fill",
    isValid: true,
    extraclass: false,
  },
  {
    title: "Live Weekly QnA",
    validIcon: "ph:x-circle-fill",
    infoIcon: "ri:information-fill",
    isValid: true,
    extraclass: true,
  },
  {
    title: " 1 x ws ticket per license",
    validIcon: "ph:x-circle-fill",
    infoIcon: "ri:information-fill",
    isValid: true,
    extraclass: true,
  },
]);
const price = ref(0);
</script>

<style></style>
