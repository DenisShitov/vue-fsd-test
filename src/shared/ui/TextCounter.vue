<script setup lang="ts">
import {watch, ref, onMounted} from "vue";

const props = defineProps<{
    text: string
    maxLength: number
}>()

const emit = defineEmits<{
    (e: 'onError', error: boolean): void
}>()

const error = ref(false)

watch(props, () => {
    emit('onError', props.text.length > props.maxLength)
    error.value = props.text.length > props.maxLength
})

onMounted(() => {
    error.value = props.text.length > props.maxLength
})

</script>

<template>
    <p class="text-sm text-[#7E8299] leading-3">
        <span :class="error && 'text-error'">{{ text.length }}</span>
        &nbsp;из&nbsp;
        <span>{{ maxLength }}</span>
        &nbsp;символов
    </p>
</template>

<style scoped lang="postcss">

</style>