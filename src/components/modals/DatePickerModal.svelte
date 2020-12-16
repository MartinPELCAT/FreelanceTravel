<script lang="ts">
    let displayedMonth: Date = new Date();
</script>

<div class="w-full bg-white rounded-3xl p-5">
    <div>{displayedMonth.toLocaleDateString()}</div>
</div>
