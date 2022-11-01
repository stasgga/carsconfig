<script setup lang="ts">
defineProps<{
  label: string;
  value: any;
}>();
</script>

<template>
  <div>
    <span class="label font-bold text-gray-600 text-sm uppercase"
      >{{ label }}:
    </span>
    <span class="capitalize">
      {{ value }}
    </span>
  </div>
</template>
