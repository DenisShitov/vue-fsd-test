<script setup lang="ts">
import {InputTextarea} from "../../../shared";
import {TextCounter} from "../../../shared";
import {Ref, ref} from "vue";

const text = ref('')

const error: Ref<boolean> = ref(false)
const focused: Ref<boolean> = ref(false)

</script>

<template>
    <div class="space-y-[10px]">
        <input-textarea
            v-model="text"
            :error="error"
            @on-focused="(v) => focused = v"
            @clear="() => text = ''"
        />
        <transition name="show">
            <text-counter
                v-if="focused"
                :text="text"
                :max-length="250"
                @on-error="(v) => error = v"
            />
        </transition>
        <transition name="show">
            <div
                v-if="focused"
                class="flex justify-end items-center gap-[10px]">

                <button
                    @click="() => text = ''"
                    class="secondary w-[120px]">
                    Отмена
                </button>

                <button
                    :class="['primary w-[120px]', error && 'disabled']">
                    Отправить
                </button>
            </div>
        </transition>

    </div>


</template>

<style scoped lang="postcss">
.show-enter-active,
.show-leave-active {
    transition: all 0.3s ease-out;
}

.show-enter-from,
.show-leave-to {
    opacity: 0;
}
</style>