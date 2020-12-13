<script>
	import CalendarIcon from "../components/icons/CalendarIcon.svelte";
	import PinIcon from "../components/icons/PinIcon.svelte";
	import UsersIcon from "../components/icons/UsersIcon.svelte";
	import NavItem from "../components/nav/NavItem.svelte";
	//https://dribbble.com/shots/14677571-Doland-Itinerary-Travel-Planner
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
			class="abolute top-16 left-16 text-4xl text-white font-bold absolute opacity-90">
			Fravel
		</div>
		<div
			class="absolute top-48 left-14 right-20 bg-white rounded-2xl flex p-1 divide-x">
			<div class="flex-1 p-4 flex space-x-3">
				<PinIcon />
				<span> Where are you going ? </span>
			</div>
			<div class="flex-1 p-4 flex space-x-3">
				<CalendarIcon />
				<span>Check in - Check out</span>
			</div>
			<div class="flex-1 p-4 flex space-x-3">
				<UsersIcon />
				<span> 2 Adults, 0 Children </span>
			</div>
			<div
				role="button"
				class="flex-1 bg-gradient-to-tr from-light-blue to-ligher-blue to rounded-r-xl py-4 text-white font-semibold text-center">
				FInd
			</div>
		</div>
	</div>

	<div class="w-5/12 p-6 space-y-4 rounded-l-3xl bg-white -ml-6 z-10">
		<div class="flex space-x-8">
			<div class="flex-1" />
			<NavItem text="Discover" href="/discover" />
			<NavItem text="Popular" href="/popular" />
			<NavItem text="Login" href="/login" />
		</div>
		<div>Test</div>
	</div>
</div>
