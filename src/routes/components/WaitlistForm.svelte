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
		on:submit={handleSubmit}
		class="mx-auto max-w-md rounded-lg border border-accent-cyan/20 bg-primary-300 p-8 shadow-lg"
	  >
		<div class="mb-6">
		  <label class="mb-2 block font-header text-secondary" for="email">
			Email Address
		  </label>
		  <input
			id="email"
			name="email"
			type="email"
			required
			placeholder="your@email.com"
			class="w-full rounded-md border border-secondary-500 bg-primary px-4 py-3 text-secondary
			   transition duration-200 placeholder:text-secondary-500 focus:outline-none
			   focus:ring-2 focus:ring-accent-cyan"
		  />
		</div>
  
		<button
		  type="submit"
		  class="w-full rounded-md bg-accent-cyan px-6 py-3 font-header text-primary
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