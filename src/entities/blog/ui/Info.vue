<script setup lang="ts">
import IconClocks from '../../../app/assets/icons/clocks.svg?component'
import IconComment from '../../../app/assets/icons/comment.svg?component'

const {date, period, comments} = defineProps<{
    date: string
    period: number
    comments: number|null|undefined
}>()
</script>

<template>
    <div class="flex items-center gap-[10px] text-secondary text-sm">
        <p>{{ date }}</p>
        <p class="text-xs">•</p>
        <div class="flex items-center gap-[7px]">
            <icon-clocks class="w-[15px] h-[15px] stroke-secondary stroke-0 fill-secondary"/>
            <p>{{ period }} мин</p>
        </div>
        <p class="text-xs">•</p>
        <div class="flex items-center gap-[7px]">
            <icon-comment class="w-[18px] h-[18px] fill-secondary"/>
            <p>{{ comments || '0' }} комментариев</p>
        </div>
    </div>
</template>

<style scoped lang="postcss">

</style>