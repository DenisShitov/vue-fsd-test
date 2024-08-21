<script setup lang="ts">
import IconCross from '../../app/assets/icons/cross.svg?component'
import { onClickOutside } from '@vueuse/core'
import {onMounted, onUnmounted, ref} from "vue";

const emit = defineEmits<{
    (e: 'onClose'): void
}>()

const target = ref(null)
onClickOutside(target, () => emit('onClose'))

onMounted((): void => {
    document.querySelector('body')?.classList.add('overflow-hidden', 'pr-[1rem]')
})

onUnmounted((): void => {
    document.querySelector('body')?.classList.remove('overflow-hidden', 'pr-[1rem]')
})
</script>

<template>
    <div class="dialogbg">
        <div class="px-[10px]">
            <div
                class="dialog"
                ref="target"
            >

                <div class="flex justify-between items-start">
                    <slot name="header"><span/></slot>
                    <div
                        class="close"
                        @click="emit('onClose')"
                    >
                        <icon-cross class="fill-[#A1A5B7] w-[10px]"/>
                    </div>
                </div>

                <slot></slot>

            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.dialogbg {
    @apply bg-black/60 w-screen h-screen fixed top-0 flex items-center justify-center
}
.dialog {
    @apply p-[15px] rounded-[12px] bg-white max-w-[630px]
}
.close {
    @apply w-[20px] h-[20px] flex items-center justify-center cursor-pointer hover:brightness-110
}
</style>