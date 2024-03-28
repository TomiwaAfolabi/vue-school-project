<template>
  <div class="bg-[#212435] relative text-white p-12">
    <div class="flex justify-center sm:justify-between items-center mb-10">
      <h1 class="text-[40px] md:text-[60px] font-[700] leading-[45px]">
        Available Workshops
      </h1>
      <div class="hidden sm:flex items-center">
        <Button
          button-class=" !w-full !max-w-[322px] !bg-[#0BD88F] !p-4 !text-[#212435] !rounded-[10px] "
          text-details="See all the Workshops"
        />
      </div>
    </div>
    <div class="w-full flex gap-6 overflow-auto justify-between">
      <div v-for="(card, i) in cardDetails" :key="i">
        <div
          class="w-[570px] flex items-center gap-4 card-gradient rounded-t-[20px] p-4"
        >
          <Icon
            name="mdi:calendar-blank"
            color="white"
            class="w-[18px] h-[20px]"
          />
          <h1>{{ card.date + " - " + card.time }}</h1>
        </div>
        <div
          class="w-[570px] flex flex-col gap-4 bg-[#2B2F44] p-6 rounded-b-[20px]"
        >
          <div class="flex gap-2">
            <div class="flex items-center gap-2">
              <Icon
                name="ri:play-circle-fill"
                color="#737B98"
                class="w-[18px] h-[20px]"
              />
              <p class="text-[14px] font-[400] text-[#737B98]">
                {{ card.type }}
              </p>
            </div>
            <div class="flex items-center gap-2">
              <Icon
                name="ri:time-fill"
                color="#737B98"
                class="w-[18px] h-[20px]"
              />
              <p class="text-[14px] font-[400] text-[#737B98]">
                {{ card.duration }}
              </p>
            </div>
          </div>
          <div class="p-1">
            <h1 class="text-[24px] font-[500]">Vue.js Fundamentals</h1>
            <p class="mex-w-[499px] text-[14px] font-[400] text-[#737B98]">
              {{ card.description }}
            </p>

            <div class="flex items-center gap-2">
              <div class="rounded-[100%] w-[24px] h-[24px] mt-4">
                <img src="/assets/icons/steeve-popoola.svg" alt="profile-pic" />
              </div>
              <p class="text-[14px] text-[#737B98] pt-4">{{ card.lecturer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:hidden mt-4">
      <Button
        extra-class="!flex !items-center !justify-center "
        button-class=" !w-full !max-w-[322px] !bg-[#0BD88F] !p-4 !text-[#212435] !rounded-[10px] "
        text-details=" See all the Workshops"
      />
    </div>
  </div>
</template>

<script setup>
const cardDetails = reactive([
  {
    date: "December 14th",
    time: "11:00 AM (GMT-3)",
    type: "Live Trainning",
    duration: "15 Hours",
    title: "Vue.js Fundamentals",
    description:
      "A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...",
    lecturer: "Steve Popoola",
  },
  {
    date: "December 14th",
    time: "11:00 AM (GMT-3)",
    type: "Live Trainning",
    duration: "15 Hours",
    title: "Vue.js Fundamentals",
    description:
      "A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...",
    lecturer: "Steve Popoola",
  },
  {
    date: "December 14th",
    time: "11:00 AM (GMT-3)",
    type: "Live Trainning",
    duration: "15 Hours",
    title: "Vue.js Fundamentals",
    description:
      "A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...",
    lecturer: "Steve Popoola",
  },
]);
</script>

<style>
.card-gradient {
  background: linear-gradient(to right, #4f08e6, #a01f3f);
}
</style>
