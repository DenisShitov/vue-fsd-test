import {instance} from "./instance.ts";
import {Ref, ref} from "vue";

export function useApi(url: string, filterFn: CallableFunction) {

    const data: Ref<any[]|null> = ref(null)

    const fetchData = async () => {
        data.value = null

        const res = await instance.get(url, {
            transformResponse: [(data) => filterFn(data)]
        })

        data.value = res.data
    }

    return { data, fetchData }

}