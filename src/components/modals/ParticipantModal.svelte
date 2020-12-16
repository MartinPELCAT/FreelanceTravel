<script lang="ts">
    import { participantStore } from "../../stores/HomeStore";
</script>

<div class="w-1/2 right-0 bg-white rounded-3xl p-5">
    <div class="px-5 divide-y">
        <div class="py-3 flex justify-between">
            <span class="font-semibold my-auto text-xl">Adults</span>
            <div class="flex space-x-3 text-xl">
                <div
                    role="button"
                    on:click={participantStore.decrementAdults}
                    class="flex rounded-full border border-gray-800 w-9 h-9 hover:bg-gray-100">
                    <span class="m-auto font-semibold">-</span>
                </div>
                <span class="my-auto"> {$participantStore.adults} </span>
                <div
                    role="button"
                    on:click={participantStore.incrementAdults}
                    class="flex rounded-full border border-gray-800 w-9 h-9 hover:bg-gray-100">
                    <span class="m-auto font-semibold">+</span>
                </div>
            </div>
        </div>
        <div class="py-3 flex justify-between">
            <span class="font-semibold my-auto text-xl">Children</span>
            <div class="flex space-x-3 text-xl">
                <div
                    on:click={participantStore.decrementChildren}
                    role="button"
                    class="flex rounded-full border border-gray-800 w-9 h-9 hover:bg-gray-100">
                    <span class="m-auto font-semibold">-</span>
                </div>
                <span class="my-auto"> {$participantStore.childrens} </span>
                <div
                    role="button"
                    on:click={participantStore.incrementChildren}
                    class="flex rounded-full border border-gray-800 w-9 h-9 hover:bg-gray-100">
                    <span class="m-auto font-semibold">+</span>
                </div>
            </div>
        </div>
    </div>
</div>
