<script setup lang="ts">
import IconLogoMain from '../../app/assets/icons/logo-main.svg?component'
</script>

<template>
    <header>
        <div class="bg-black">
            <div class="wrapper py-[15px] flex items-center gap-[80px]">
                <div class="">
                    <icon-logo-main/>
                </div>
                <nav class="flex items-center gap-[20px]">
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