<script setup lang="ts">
import IconCheck from '../../app/assets/icons/check.svg?component'
import IconPlus from '../../app/assets/icons/plus.svg?component'
import IconCross from '../../app/assets/icons/cross.svg?component'
import {useMouseInElement, UseMouseInElementReturn} from '@vueuse/core'
import {Ref, ref} from "vue";

const {name} = defineProps<{
    name: string
    active: boolean
}>()

const emit = defineEmits<{
    (e: 'check', name: string): void
}>()

const target: Ref<HTMLDivElement | null> = ref(null)

const { isOutside }: UseMouseInElementReturn = useMouseInElement(target)
</script>

<template>
    <div :class="['body', active && 'active']" ref="target" @click="emit('check', name)">
        <p class="text">{{name}}</p>
        <icon-cross class="icon" v-show="active && !isOutside"/>
        <icon-check class="icon" v-show="active && isOutside"/>
        <icon-plus class="icon" v-show="!active"/>
    </div>
</template>

<style scoped lang="postcss">
.body {
    @apply px-[14px] py-[8px] bg-primary/10 w-fit rounded-full text-primary flex items-center gap-[6px] cursor-pointer hover:brightness-105
}
.body .icon {
    @apply fill-primary w-[9px] xl:w-[12px]
}
.body.active {
    @apply bg-primary text-white
}
.body.active .icon {
    @apply fill-white
}
.text {
    @apply text-sm leading-[1rem] xl:leading-[1rem] xl:text-base font-medium
}
</style>