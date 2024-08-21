<script setup lang="ts">
import Layout from '../../../shared/ui/Layout.vue';
import {BlogList} from "../../../entities/blog";
import {BlogFilter} from "../../../widgets/blog-filter";
import {BlogView} from "../../../widgets/blog-view";

</script>

<template>
    <layout>
        <template #actions>
            <blog-filter/>
        </template>
        <template #content>
            <div class="content-wrapper">
                <blog-list/>
            </div>
        </template>
    </layout>
    <blog-view/>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0
}
</style>