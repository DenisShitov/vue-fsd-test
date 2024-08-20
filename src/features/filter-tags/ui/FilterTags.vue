<script setup lang="ts">
import {SelectTag} from "../../../shared";

const {selected} = defineProps<{
    selected: string[]
}>()

const emit = defineEmits<{
    (e: 'check', name: string): void
}>()

const tags = ["Город", "Природа", "Люди", "Животные", "Еда", "Напитки", "Архитектура", "Искусство"]


</script>

<template>
    <div class="flex flex-wrap items-center gap-[8px]">
        <select-tag v-for="tag in tags" :name="tag" :active="selected.includes(tag)" @check="(name) => emit('check', name)"/>
    </div>
</template>

<style scoped>

</style>