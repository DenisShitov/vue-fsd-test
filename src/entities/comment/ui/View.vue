<script setup lang="ts">
import {Comment} from "../model";

const {comment} = defineProps<{
    comment: Comment
}>()


</script>

<template>
    <div class="pt-[12px] px-[12px] flex items-start gap-[12px]">

        <div class="bg-[#E3E5E8] w-[38px] h-[38px] rounded-full overflow-hidden">
            <img
                src="/images/avatar.png"
                class="w-full h-full object-cover"
                alt="user"
            />
        </div>

        <div class="flex flex-col gap-[6px]">
            <h4 class="leading-5">{{ comment.user.name }}</h4>
            <p class="text-[14px] leading-[14px] font-medium">{{ comment.text }}</p>
            <p class="text-[12px] leading-[12px] text-[#A1A5B7]">{{ comment.created_at }}</p>
        </div>

    </div>
</template>

<style scoped lang="postcss">

</style>