<script setup lang="ts">
import {BlogCard} from "./index.ts";
import {EmptySearch} from "../../../shared";
import {useApi} from "../../../shared";
import {onMounted, toValue} from "vue";
import {filterBlogsFn} from "../lib";
import {useBlogFilterStore, useBlogViewStore} from "../../../app";
import {watchDeep} from "@vueuse/core";

const filterStore = useBlogFilterStore()
const viewStore = useBlogViewStore()

const {data, fetchData} = useApi(
    '/items.json',
    (data: string) => filterBlogsFn(data, toValue(filterStore.getTagsFilter), toValue(filterStore.getTitleFilter))
)

const checkBlog = (id: number) => {
    viewStore.updateBlogValue(data.value?.find(el => el.id === id))
}

onMounted(async () => {
    await fetchData()
})

watchDeep(filterStore.getFilter, async () => {
    await fetchData()
})

</script>

<template>
    <div class="bloglist">
        <blog-card
            v-for="blog in data"
            :key="blog.id"
            :blog="blog"
            @on-check="(id) => checkBlog(id)"
        />
    </div>
    <empty-search v-show="!toValue(data)?.length"/>
</template>

<style scoped>

</style>