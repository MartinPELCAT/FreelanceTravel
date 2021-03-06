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
	import SearchBar from "../forms/search-bar/SearchBar.svelte";
	//https://dribbble.com/shots/14677571-Doland-Itinerary-Travel-Planner

	let openSearchBar: boolean = false;

	type Modal = "MODAL_DATE" | "MODAL_LOCATION" | "MODAL_POPULTAION";
	let openModal: Modal = "MODAL_DATE";

	const onOpenSearchBarClick = () => {
		openSearchBar = !openSearchBar;
	};

	const switchModal = (modal: Modal) => {
		if (openModal !== modal) openModal = modal;
		else openModal = null;
	};

	function handleClickOutside() {
		openModal = null;
	}
</script>

<svelte:head>
	<title>Fravel</title>
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
						<span> Where are you going ? </span>
					</div>
					<div
						class="flex-1 p-4 flex space-x-3 overflow-hidden"
						on:click={() => switchModal('MODAL_DATE')}>
						<CalendarIcon />
						<span>Check in - Check out</span>
					</div>
					<div
						class="flex-1 p-4 flex space-x-3 overflow-hidden"
						on:click={() => switchModal('MODAL_POPULTAION')}>
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
					{:else if openModal === 'MODAL_POPULTAION'}
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
				transition:fly={{ y: -20, duration: 200 }}>
				<SearchBar />
			</div>
		{/if}
	</div>
</div>
