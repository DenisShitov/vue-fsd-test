<script setup lang="ts">
import IconClocks from '../../../app/assets/icons/clocks.svg?component'
import IconComment from '../../../app/assets/icons/comment.svg?component'
import {Tag} from "../../../shared";
import {Blog} from "../model";

const { blog } = defineProps<{
    blog: Blog
}>()
</script>

<template>
    <div class="blogcard">
        <img :src="blog.image" alt="blog.title">
        <div class="flex items-center gap-[10px] text-secondary text-sm">
            <p>{{ blog.date }}</p>
            <p class="text-xs">•</p>
            <div class="flex items-center gap-[7px]">
                <icon-clocks class="w-[15px] h-[15px] stroke-secondary stroke-0 fill-secondary"/>
                <p>{{ blog.period }} мин</p>
            </div>
            <p class="text-xs">•</p>
            <div class="flex items-center gap-[7px]">
                <icon-comment class="w-[18px] h-[18px] fill-secondary"/>
                <p>{{ blog.comments?.length }} комментариев</p>
            </div>
        </div>
        <h4>{{ blog.title }}</h4>
        <p class="font-medium">{{ blog.description_short }}</p>
        <div class="tagslist">
            <tag v-for="tag in blog.tags" :name="tag"/>
        </div>
    </div>
</template>

<style scoped>

</style>