<script setup lang="ts">
import IconLogoMain from '../../app/assets/icons/logo-main.svg?component'
import IconBurger from '../../app/assets/icons/burger.svg?component'
import {useWindowSize, UseWindowSizeReturn} from '@vueuse/core'
import {computed, ComputedRef} from "vue";

const { width }: UseWindowSizeReturn = useWindowSize()

const isMobile: ComputedRef<boolean> = computed(() => width.value < 600)
</script>

<template>
    <header>
        <div class="bg-black">
            <div class="wrapper py-[15px] flex items-center">
                <div v-show="isMobile" class="mr-[15px]">
                    <icon-burger class="w-[24px]"/>
                </div>
                <div class="mr-[80px]">
                    <icon-logo-main/>
                </div>
                <nav v-show="!isMobile" class="flex items-center gap-[20px]">
                    <a href="#" class="header-nav">
                        <p>Главная</p>
                    </a>
                    <a href="#" class="header-nav active">
                        <p>Блог</p>
                    </a>
                </nav>
            </div>
        </div>
    </header>
    <main>
        <div class="wrapper bg-white px-[20px] xl:px-[45px]">
            <slot name="actions"/>
        </div>
        <div class="bg-[#F1F1F2]">
            <div class="wrapper py-[10px] xl:py-[20px]">
                <slot name="content"/>
            </div>
        </div>
    </main>
</template>