<script>
	import NavItem from "../components/nav/NavItem.svelte";
</script>

<svelte:head>
	<title>FreeLance - Traveler</title>
</svelte:head>

<div class="max-h-screen overflow-hidden flex bg-gray-200">
	<div class="flex-1">
		<img
			src="/japon.jpg"
			alt="test"
			class="object-cover object-right h-screen overflow-hidden" />
		<div class="text-white absolute top-0 text-4xl font-bold transform translate-x-20 translate-y-14">Freelance Traveler</div>
	</div>

	<div class="w-5/12 p-6 space-y-4 rounded-l-3xl bg-white -ml-6 ">
		<div class="flex space-x-8">
			<div class="flex-1" />
			<NavItem text="Discover" href="/discover" />
			<NavItem text="Popular" href="/popular" />
			<NavItem text="Login" href="/login" />
		</div>
		<div>Test</div>
	</div>
</div>
