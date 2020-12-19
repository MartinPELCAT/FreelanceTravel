<script lang="ts">
    import { participantStore } from "../../stores/HomeStore";
</script>

<div class="w-1/2 right-0 bg-white rounded-3xl p-5">
    <div class="px-5 divide-y">
        <div class="py-3 flex justify-between">
            <span class="font-semibold my-auto text-xl">Adults</span>
            <div class="flex text-xl w-32 justify-between">
                <button
                    disabled={$participantStore.adults === 0}
                    on:click={participantStore.decrementAdults}
                    class="flex rounded-full border border-gray-800 w-9 h-9 hover:bg-gray-100 disabled:opacity-50">
                    <span class="m-auto font-semibold">-</span>
                </button>
                <span class="m-auto"> {$participantStore.adults} </span>
                <button
                    disabled={$participantStore.adults >= 16}
                    on:click={participantStore.incrementAdults}
                    class="flex rounded-full border border-gray-800 w-9 h-9 hover:bg-gray-100  disabled:opacity-50">
                    <span class="m-auto font-semibold">+</span>
                </button>
            </div>
        </div>
        <div class="py-3 flex justify-between">
            <span class="font-semibold my-auto text-xl">Children</span>
            <div class="flex w-32 justify-between text-xl">
                <button
                    disabled={$participantStore.childrens === 0}
                    on:click={participantStore.decrementChildren}
                    class="flex rounded-full border border-gray-800 w-9 h-9 hover:bg-gray-100 disabled:opacity-50">
                    <span class="m-auto font-semibold">-</span>
                </button>
                <span class="m-auto"> {$participantStore.childrens} </span>
                <button
                    disabled={$participantStore.childrens >= 9}
                    on:click={participantStore.incrementChildren}
                    class="flex rounded-full border border-gray-800 w-9 h-9 hover:bg-gray-100  disabled:opacity-50">
                    <span class="m-auto font-semibold">+</span>
                </button>
            </div>
        </div>
    </div>
</div>
