<script setup lang="ts">
import {DialogWindow} from "../../../shared";
import {useBlogViewStore} from "../../../app";
import {Tag} from "../../../shared";
import {BlogInfo} from "../../../entities/blog";
import {CommentList} from "../../../entities/comment";
import {toValue} from "vue";
import SendComment from "../../../features/send-comment/ui/SendComment.vue";

const viewStore = useBlogViewStore()

</script>

<template>

    <teleport to="body">
        <transition name="fade">
            <dialog-window
                v-if="!!toValue(viewStore.getBlog)"
                @on-close="viewStore.updateBlogValue(null)"
            >

                <template #header>
                    <div class="flex flex-col gap-[10px] mb-[10px]">
                        <h4 class="leading-3">{{ viewStore.getBlog.title }}</h4>
                        <blog-info
                            :date="viewStore.getBlog.date"
                            :period="viewStore.getBlog.period"
                            :comments="viewStore.getBlog.comments?.length"
                        />
                    </div>
                </template>

                <template #default>
                    <div class="flex flex-col gap-[10px]">
                        <img
                            class="blogimage"
                            :src="viewStore.getBlog.image"
                            alt="blog.title"
                        >
                        <p class="font-medium">{{ viewStore.getBlog.description }}</p>
                        <div class="tagslist">
                            <tag
                                v-for="tag in viewStore.getBlog.tags"
                                :name="tag"
                            />
                        </div>

                        <div class="space-y-2">
                            <h4>Коментариев <span class="text-[#7E8299]">{{ viewStore.getBlog.comments?.length }}</span></h4>
                            <div class="">
                                <send-comment/>
                            </div>
                            <comment-list
                                :comments="viewStore.getBlog.comments"
                            />
                        </div>
                    </div>
                </template>

            </dialog-window>
        </transition>
    </teleport>

</template>

<style scoped lang="postcss">

</style>