<script lang="ts">
    import { homeStore } from "../../stores/HomeStore";

    homeStore.update((value) => ({ ...value }));
    let displayedMonth: Date = new Date();
</script>

<div class="w-full bg-white rounded-2xl p-5">
    <div>{displayedMonth.toLocaleDateString()}</div>
</div>
