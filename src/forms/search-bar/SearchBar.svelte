<script lang="ts">
    import { onMount } from "svelte";

    import { useForm } from "../../hooks/useForm";
    import { schema } from "./schema";
    const { handleSubmit, data, errors } = useForm({ schema });
    console.log($errors);
    let barRef: HTMLInputElement = null;
    onMount(() => {
        barRef.focus();
    });
</script>

<form class="flex" on:submit={handleSubmit}>
    <input
        type="text"
        bind:this={barRef}
        bind:value={$data.searchContent}
        placeholder="Search"
        class="h-full w-full p-4 bg-white focus:outline-none placeholder-gray-500" />

    <button
        class="m-0.5 px-4 rounded-lg bg-light-blue text-white"
        type="submit">Search</button>
</form>
<!-- <div>{JSON.stringify($data)}</div> -->

{#if $errors.searchContent}
    <span>{JSON.stringify($errors.searchContent.message)}</span>
{/if}
