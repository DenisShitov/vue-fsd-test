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
    <div :class="['inputblock', focused && 'focused']">
        <slot name="icon"/>
        <input :value="modelValue" @input="(e: any) => emit('update:modelValue', e.target.value)" ref="target" type="text" placeholder="Поиск" class="input">
        <div class="w-[14px] h-[14px]">
            <div
                v-show="modelValue.length"
                @click="emit('clear')"
                class="w-full h-full flex-center-row cursor-pointer hover:brightness-110"
            >
                <icon-cross class="fill-[#A1A5B7] w-[8px] h-[8px]"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">

</style>