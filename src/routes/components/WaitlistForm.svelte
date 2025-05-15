<!-- WaitlistForm.svelte -->
<script>
	import { enhance } from '$app/forms';

	let submitted = $state(false);
	let error = $state('');

	/** @type {import('./$types').PageProps} */
	let { form } = $props();

	function handleSubmit(event) {
		submitted = false;
		error = '';
	}
</script>

<section class="bg-primary-400 py-2xl">
	<div class="container mx-auto px-md">
		<h2 class="mb-xl text-center font-header text-header text-secondary">Join the Waitlist</h2>

		<form
			id="waitlist-form"
			method="POST"
			use:enhance={() => {
				return async ({ result }) => {
					if (result.type === 'success') {
						submitted = true;
					} else {
						error = 'Something went wrong. Please try again.';
					}
				};
			}}
			onsubmit={handleSubmit}
			class="mx-auto max-w-md rounded-lg border border-accent-cyan/20 bg-primary-300 p-8 shadow-lg"
		>
			<div class="mb-2">

				<label class="mb-2 block font-header text-secondary" for="email"> Email Address </label>
				<input
					id="email"
					name="email"
					type="email"
					required
					placeholder="your@email.com"
					class="w-full rounded-md border border-secondary-500 bg-primary px-4 py-3 text-secondary transition duration-200 placeholder:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan mb-2"
				/>

				<label class="inline-flex cursor-pointer items-center">
					<span class="m-3 text-sm font-medium text-gray-900 dark:text-gray-300">Q: Is your team playing together for 6 months or more?</span>
					<input id="team" name="team" type="checkbox" value="true" class="peer sr-only" />
					<div
						class="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-blue-600 dark:peer-focus:ring-blue-800"
					></div>
				</label>

			</div>

			<button
				type="submit"
				class="	w-full rounded-md bg-accent-cyan px-6 py-3 font-header text-primary
			 			transition duration-200 hover:bg-accent-cyan-dark
			 			disabled:cursor-not-allowed disabled:opacity-50"	
			>
				{#if submitted}
					Thanks for joining! ✨
				{:else}
					Join Waitlist
				{/if}
			</button>

			{#if error}
				<p class="mt-4 text-center text-red-500">{error}</p>
			{/if}
		</form>
	</div>
</section>
