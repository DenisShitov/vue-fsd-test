<script setup lang="ts">
import IconSearch from '../../../app/assets/icons/search.svg?component'
import IconChevron from '../../../app/assets/icons/chevron.svg?component'
import {FilterTags} from "../../../features/filter-tags";
import {InputText} from "../../../shared";
import {useBlogStore} from "../../../app/store/blog.ts";
import {Ref, ref, watch} from "vue";

const showFilter: Ref<boolean> = ref(true)

const store = useBlogStore()

const search = ref('')

const onClearSearch = (): void => {
    search.value = ''
}

watch(search, () => {
    store.updateTitleFilter(search.value.toLowerCase())
})
</script>

<template>
    <div class="divide-y divide-gray-50">

        <div class="top">

            <h1 class="mr-[40px] order-1">Блог</h1>

            <div class="w-full order-3 md:order-2">
                <div class="md:max-w-[400px]">
                    <input-text
                        v-model="search"
                        @clear="onClearSearch"
                    >
                        <template #icon>
                            <icon-search class="fill-[#A1A5B7] w-[14px] h-[14px]"/>
                        </template>
                    </input-text>
                </div>
            </div>

            <div class="flex items-center gap-[10px] order-2 md:order-3">

                <div
                    v-if="store.getTagsFilter.length"
                    @click="store.clearTagsFilter()"
                    class="clear">
                    Очистить
                </div>

                <div @click="showFilter = !showFilter" class="filter">
                    <p class="text-sm leading-[14px] text-[#A1A5B7] text-nowrap">{{ showFilter ? 'Скрыть фильтр' : 'Фильтр' }}</p>
                    <icon-chevron :class="['icon-chevron', showFilter && 'rotate-180']"/>
                </div>

            </div>
        </div>

        <transition name="show">
            <div v-if="showFilter" class="bottom">
                <filter-tags
                    :selected="store.getTagsFilter"
                    @check="(name) => store.updateTagsFilter(name)"
                />
            </div>
        </transition>


    </div>
</template>

<style scoped lang="postcss">
.top {
    @apply w-full flex items-center justify-between md:justify-normal flex-wrap md:flex-nowrap gap-[10px] py-[12px] xl:py-[20px]
}
.bottom {
    @apply py-[12px] xl:py-[20px]
}
.clear {
    @apply text-primary text-sm leading-[14px] cursor-pointer hover:brightness-110
}
.filter {
    @apply flex items-center gap-[6px] cursor-pointer hover:brightness-110
}
.icon-chevron {
    @apply w-[10px] fill-[#A1A5B7] transition-all ease-out duration-300
}
.show-enter-active,
.show-leave-active {
    transition: all 0.3s ease-out;
}

.show-enter-from,
.show-leave-to {
    opacity: 0;
}
</style>