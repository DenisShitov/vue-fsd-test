<script setup lang="ts">
import {CommentView} from "./index.ts";
import {Comment} from "../model";

const {comments} = defineProps<{
    comments: Comment[]
}>()
</script>

<template>
    <div class="flex flex-col gap-[10px]">
        <comment-view
            v-for="c in comments"
            :comment="c"
            :key="c.id"
        />
    </div>
</template>

<style scoped lang="postcss">

</style>