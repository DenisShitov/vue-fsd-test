<script setup lang="ts">
import IconCross from '../../app/assets/icons/cross.svg?component'
import {Ref, ref} from "vue";
import {useFocus} from "@vueuse/core";

const { modelValue } = defineProps<{
    modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'clear'): void
}>()

const target: Ref< HTMLInputElement | null > = ref(null)
const { focused } = useFocus(target)

</script>

<template>
    <div :class="['block', focused && 'focused']">
        <slot name="icon"/>
        <input :value="modelValue" @input="(e: any) => emit('update:modelValue', e.target.value)" ref="target" type="text" placeholder="Поиск" class="input">
        <div @click="emit('clear')" class="flex-center-row w-[14px] h-[14px] cursor-pointer hover:brightness-110">
            <icon-cross class="fill-[#A1A5B7] w-[8px] h-[8px]"/>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.block {
    @apply flex items-center py-[13px] px-[10px] rounded-[6px] gap-[10px] w-full bg-[#F9F9F9] hover:outline hover:outline-[2px] hover:outline-primary/80
}
.block.focused {
    @apply ring-[3px] ring-offset-1 ring-primary/30 outline outline-[2px] outline-primary/80
}
.input {
    @apply w-full text-[13px] leading-[14px] font-medium bg-transparent border-0 outline-0 placeholder-[#D8D8E5]
}
</style>