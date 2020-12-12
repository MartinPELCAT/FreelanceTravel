<script lang="ts">
	export let segment: string;
</script>

<nav class="flex">
	<ul class="flex space-x-4">
		<li>
			<a
				class="text-indigo-500"
				aria-current={segment === undefined ? 'page' : undefined}
				href=".">home</a>
		</li>
		<li>
			<a
				aria-current={segment === 'about' ? 'page' : undefined}
				href="about">about</a>
		</li>

		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'blog' ? 'page' : undefined}
				href="blog">blog</a>
		</li>
	</ul>

	<div class="" />
</nav>
