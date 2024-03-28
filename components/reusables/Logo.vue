<template>
  <div :class="`flex gap-4 ${props.extraClass}`">
    <img
      :class="`w-[49.54px] h-[56px]  ${props.imgClass}`"
      src="/assets/icons/vue-school-logo.svg"
      alt="nav-logo"
    />
    <div
      :class="`text-white font-[400] leading-[18px] text-[23px] pt-2  ${props.textClass}`"
    >
      <span>Vue</span><br /><span>School.io</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["textClass", "imgClass", "extraClass"]);
</script>

<style></style>
