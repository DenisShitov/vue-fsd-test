<script setup lang="ts">
import {BlogInfo} from "./index.ts";
import {Tag} from "../../../shared";
import {Blog} from "../model";

const { blog } = defineProps<{
    blog: Blog
}>()

const emit = defineEmits<{
    (e: 'onCheck', id: number): void
}>()

</script>

<template>
    <div
        class="blogcard"
        @click="emit('onCheck', blog.id)"
    >
        <img
            class="blogimage"
            :src="blog.image"
            alt="blog.title"
        >
        <blog-info
            :date="blog.date"
            :period="blog.period"
            :comments="blog.comments?.length"
        />
        <h4>{{ blog.title }}</h4>
        <p class="font-medium">{{ blog.description_short }}</p>
        <div class="tagslist">
            <tag
                v-for="tag in blog.tags"
                :name="tag"
            />
        </div>
    </div>
</template>

<style scoped>

</style>