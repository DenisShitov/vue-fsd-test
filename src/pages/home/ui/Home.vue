<script setup lang="ts">
import Layout from '../../../shared/ui/Layout.vue';
import {BlogList} from "../../../entities/blog";
import {FilterTags} from "../../../features/filter-tags";
import {useBlogStore} from "../../../app/store/blog.ts";

const store = useBlogStore()
</script>

<template>
    <layout>
        <template #actions>
            <div class="divide-y divide-gray-50">
                <div class="py-[12px] xl:py-[20px] flex items-center">
                    <h1>Блог</h1>
                </div>
                <div class="py-[12px] xl:py-[20px]">
                    <filter-tags :selected="store.getTagsFilter" @check="(name) => store.updateTagsFilter(name)"/>
                </div>
            </div>
        </template>
        <template #content>
            <div class="content-wrapper">
                <blog-list/>
            </div>
        </template>
    </layout>
</template>

<style scoped>

</style>