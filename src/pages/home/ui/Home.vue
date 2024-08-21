<script setup lang="ts">
import Layout from '../../../shared/ui/Layout.vue';
import {BlogList} from "../../../entities/blog";
import {BlogFilter} from "../../../widgets/blog-filter";
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
</template>

<style scoped>

</style>