<script lang="typescript">
	import CalendarIcon from "../components/icons/CalendarIcon.svelte";
	import PinIcon from "../components/icons/PinIcon.svelte";
	import SearchIcon from "../components/icons/SearchIcon.svelte";
	import UsersIcon from "../components/icons/UsersIcon.svelte";
	import NavItem from "../components/nav/NavItem.svelte";
	import Avatar from "../components/shared/Avatar.svelte";
	import { fly } from "svelte/transition";
	import LocationModal from "../components/modals/LocationModal.svelte";
	import DatePickerModal from "../components/modals/DatePickerModal.svelte";
	import ParticipantModal from "../components/modals/ParticipantModal.svelte";
	import { clickAway } from "../hooks/clickAway";
	import { participantStore } from "../stores/HomeStore";
	//https://dribbble.com/shots/14677571-Doland-Itinerary-Travel-Planner

	let openSearchBar: boolean = false;
	let searchBarRef: HTMLInputElement = null;
	let searchBarValue: string = "";

	type Modal = "MODAL_DATE" | "MODAL_LOCATION" | "POPULTAION_MODAL";
	let openModal: Modal = "POPULTAION_MODAL";

	const onOpenSearchBarClick = () => {
		openSearchBar = !openSearchBar;
		setTimeout(() => {
			searchBarRef.focus();
		}, 10);
	};

	const switchModal = (modal: Modal) => {
		if (openModal !== modal) {
			openModal = modal;
		} else {
			openModal = null;
		}
	};

	function handleClickOutside() {
		openModal = null;
	}

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		console.log(searchBarValue);
	};
</script>

<svelte:head>
	<title>FreeLance - Traveler</title>
</svelte:head>

<div class="md:max-h-screen overflow-hidden flex bg-gray-200">
	<div class="w-8/12 relative">
		<img
			src="/japon.jpg"
			alt="test"
			class="object-cover object-right md:h-screen w-full overflow-hidden" />

		<div
			class="abolute top-10 left-16 text-4xl text-white font-bold absolute opacity-90">
			Fravel
		</div>
		<div
			use:clickAway={handleClickOutside}
			class="absolute top-36 left-14 right-20">
			<div class="relative">
				<div class="bg-white rounded-2xl flex p-1 divide-x">
					<div
						class="flex-1 p-4 flex space-x-3 overflow-hidden"
						on:click={() => switchModal('MODAL_LOCATION')}>
						<PinIcon />
						<!-- {#if $homeStore.location.length !== 0}
							<span>{$homeStore.location.length}</span>
						{:else}<span> Where are you going ? </span>{/if} -->
					</div>
					<div
						class="flex-1 p-4 flex space-x-3 overflow-hidden"
						on:click={() => switchModal('MODAL_DATE')}>
						<CalendarIcon />
						<!-- {#if $homeStore.dates}
							<span>{$homeStore.dates.start.toLocaleDateString()}
								-
								{$homeStore.dates.end.toLocaleDateString()}</span>
						{:else}<span>Check in - Check out</span>{/if} -->
					</div>
					<div
						class="flex-1 p-4 flex space-x-3 overflow-hidden"
						on:click={() => switchModal('POPULTAION_MODAL')}>
						<UsersIcon />
						<span>
							{$participantStore.adults}
							Adults,
							{$participantStore.childrens}
							Children
						</span>
					</div>
					<div
						role="button"
						class="flex-1 bg-gradient-to-tr from-light-blue to-ligher-blue to rounded-r-xl py-4 text-white font-semibold text-center overflow-hidden">
						Find
					</div>
				</div>
				<div class="top-20 left-0 right-0 absolute p-1 flex">
					{#if openModal === 'MODAL_LOCATION'}
						<div
							class="flex-1 flex"
							in:fly={{ y: -20, duration: 100, delay: 150 }}>
							<LocationModal />
						</div>
					{:else if openModal === 'MODAL_DATE'}
						<div
							class="flex-1 flex"
							in:fly={{ y: -20, duration: 100, delay: 150 }}>
							<DatePickerModal />
						</div>
					{:else if openModal === 'POPULTAION_MODAL'}
						<div
							class="flex-1 flex flex-row-reverse"
							in:fly={{ y: -20, duration: 100, delay: 150 }}>
							<ParticipantModal />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div
		class="w-5/12 py-10 px-14 space-y-4 rounded-l-3xl bg-white -ml-6 z-10 shadow-2xl text-gray-600 relative">
		<div class="flex justify-between">
			<div class="flex space-x-12 my-auto">
				<NavItem text="Discover" href="/discover" />
				<NavItem text="Popular" href="/popular" />
				<NavItem text="Suggestions" href="/suggestions" />
			</div>
			<div class="flex space-x-6">
				<div class="my-auto">
					<div role="button" on:click={onOpenSearchBarClick}>
						<SearchIcon className="w-5 h-5" />
					</div>
				</div>
				<div class="relative">
					<Avatar />
					<span class="flex h-3 w-3 absolute right-0 top-0">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
						<span
							class="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
					</span>
				</div>
			</div>
		</div>
		{#if openSearchBar}
			<div
				class="overflow-hidden absolute left-0 right-0 mx-14 border shadow-sm rounded-xl"
				transition:fly={{ y: -20, duration: 200 }}
				on:submit={handleSubmit}>
				<form class="flex">
					<input
						type="text"
						bind:this={searchBarRef}
						bind:value={searchBarValue}
						placeholder="Search"
						class="h-full w-full p-4 bg-white focus:outline-none placeholder-gray-500" />
					<button
						class="m-0.5 px-4 rounded-lg bg-light-blue text-white"
						type="submit">Search</button>
				</form>
			</div>
		{/if}
	</div>
</div>
