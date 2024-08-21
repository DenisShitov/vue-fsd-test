<script setup lang="ts">
import IconSearchList from '../../app/assets/icons/search-list.svg?component'
</script>

<template>
    <div class="w-full py-[65px] flex items-center justify-center">
        <div class="flex flex-col items-center gap-[10px] ">
            <icon-search-list class="w-[33px] fill-[#D8D8E5]"/>
            <p class="text-sm leading-3 text-[#7E8299] text-center">Поиск не дал результатов</p>
            <p class="text-xs leading-5 text-[#A1A5B7] text-center">Повторите поиск или используйте фильтр<br/>для структуризации контента</p>
        </div>
    </div>
</template>

<style scoped lang="postcss">

</style>