<script setup lang="ts">
import IconCross from '../../app/assets/icons/cross.svg?component'
import {Ref, ref, watch} from "vue";
import {useFocus} from "@vueuse/core";

const { modelValue } = defineProps<{
    modelValue: string
    error: boolean
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'onFocused', focused: boolean): void
    (e: 'clear'): void
}>()

const target: Ref< HTMLInputElement | null > = ref(null)
const { focused } = useFocus(target)

const onInput = (v: string) : void => {
    emit('update:modelValue', v)
    if(target.value) target.value.style.height = target.value.scrollHeight + 'px'
}

watch(focused, () => {
    emit('onFocused', focused.value)
})
</script>

<template>
    <div :class="['inputblock', focused && 'focused', error && 'error']">
        <slot name="icon"/>
        <textarea
            :value="modelValue"
            @input="(e: any) => onInput(e.target.value)"
            ref="target"
            rows="1"
            placeholder="Введите комментарий"
            :class="['input textarea', focused && 'min-h-[130px]']">
        </textarea>
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