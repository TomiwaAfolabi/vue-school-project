<template>
  <div :class="`w-full flex gap-4 ${props.extraClass}`">
    <button
      :class="`bg-[#0BD88F] p-4 text-[#212435] rounded-[10px] ${props.buttonClass}`"
    >
      {{ props.textDetails }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["textDetails", "extraClass", "buttonClass"]);
</script>

<style></style>
