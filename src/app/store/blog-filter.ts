import {defineStore, StoreDefinition} from "pinia";
import {computed, ComputedRef, reactive} from "vue";

interface Filter {
    tags: string[]
    title: string
}

export const useBlogFilterStore: StoreDefinition = defineStore('blog-filter', () => {

    const filter: Filter = reactive({
        tags    : [],
        title   : ''
    })

    const getFilter: ComputedRef<Filter> = computed(() => filter)
    const getTagsFilter: ComputedRef<string[]> = computed(() => filter.tags)
    const getTitleFilter: ComputedRef<string> = computed(() => filter.title)

    function updateTagsFilter (value: string): void {
        if(filter.tags.includes(value)) {
            filter.tags = filter.tags.filter(el => el != value)
        } else {
            filter.tags.push(value)
        }
    }
    function clearTagsFilter(): void {
        filter.tags = []
    }
    function updateTitleFilter (value: string): void {
        filter.title = value
    }
    function clearTitleFilter(): void {
        filter.title = ''
    }

    return { getFilter, getTagsFilter, getTitleFilter, updateTagsFilter, clearTagsFilter, updateTitleFilter, clearTitleFilter }
})