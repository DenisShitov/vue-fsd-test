import {defineStore} from "pinia";
import {computed, ComputedRef, reactive} from "vue";

interface Filter {
    tags: string[]
}

export const useBlogStore = defineStore('blog', () => {

    const filter: Filter = reactive({
        'tags': []
    })

    const getTagsFilter: ComputedRef<string[]> = computed(() => filter.tags)

    function updateTagsFilter (value: string) {
        if(filter.tags.includes(value)) {
            filter.tags = filter.tags.filter(el => el != value)
        } else {
            filter.tags.push(value)
        }
    }

    return { filter, getTagsFilter, updateTagsFilter }
})