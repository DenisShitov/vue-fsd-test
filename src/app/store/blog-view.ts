import {defineStore, StoreDefinition} from "pinia";
import {computed, ComputedRef, Ref, ref} from "vue";
import {Blog} from "../../entities/blog";

export const useBlogViewStore: StoreDefinition = defineStore('blog-view', () => {

    const blog: Ref<Blog|null> = ref(null)

    const getBlog: ComputedRef = computed(() => blog.value)

    function updateBlogValue (value: Blog|null): void {
        blog.value = value
    }

    return { getBlog, updateBlogValue }
})