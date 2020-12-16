<script lang="ts">
    import { addDays } from "date-fns";
    let displayedMonth: Date = new Date();

    const testHooks = (node: HTMLElement, cb: () => void) => {
        console.log(node);
        setTimeout(() => {
            const ret = cb();
            console.log(ret);
        }, 3000);
    };
</script>

<div class="w-full bg-white rounded-2xl p-5">
    <div use:testHooks={() => (displayedMonth = addDays(displayedMonth, 1))}>
        {displayedMonth.toLocaleDateString()}
    </div>
</div>
