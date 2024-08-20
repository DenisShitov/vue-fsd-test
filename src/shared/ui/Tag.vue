<script setup lang="ts">
const {name} = defineProps<{
    name: string
}>()
</script>

<template>
    <div class="tagwrapper">
        <p class="text">{{name}}</p>
    </div>
</template>

<style scoped lang="postcss">
.tagwrapper {
    @apply px-[14px] py-[6px] bg-primary/10 w-fit rounded-full
}
.text {
    @apply text-primary text-sm leading-[14px] font-medium
}
</style>