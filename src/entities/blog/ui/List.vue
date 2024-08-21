<script setup lang="ts">
import {BlogCard} from "./index.ts";
import {useApi} from "../../../shared";
import {onMounted, toValue} from "vue";
import {filterBlogsFn} from "../lib";
import {useBlogStore} from "../../../app/store/blog.ts";
import {watchDeep} from "@vueuse/core";

const store = useBlogStore()

const {data, fetchData} = useApi(
    '/items.json',
    (data: string) => filterBlogsFn(data, toValue(store.getTagsFilter), toValue(store.getTitleFilter))
)

onMounted(async () => {
    await fetchData()
})

watchDeep(store.filter, async () => {
    await fetchData()
})

</script>

<template>
    <transition-group name="list" tag="div" class="bloglist">
        <blog-card v-for="blog in data" :key="blog.id" :blog="blog"/>
    </transition-group>
</template>

<style scoped>

</style>