<!-- WaitlistForm.svelte -->
<script>
	let { form } = $props();
  </script>
  
  <section class="bg-primary-400 py-2xl">
	<div class="container mx-auto px-md">
	  <h2 class="text-center font-header text-header text-secondary mb-xl">Join the Waitlist</h2>
	  
	  <form 
	  	id="waitlist-form"
		method="POST"
		class="mx-auto max-w-md bg-primary-300 p-8 rounded-lg shadow-lg border border-accent-cyan/20"
	  >
		<div class="mb-6">
		  <label class="block font-header text-secondary mb-2" for="email">
			Email Address
		  </label>
		  <input 
			id="email"
			name="email" 
			type="email"
			required
			placeholder="your@email.com"
			class="w-full px-4 py-3 rounded-md bg-primary border border-secondary-500 text-secondary
				   placeholder:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-accent-cyan
				   transition duration-200"
		  >
		</div>
  
		<button
		  type="submit"
		  class="w-full bg-accent-cyan text-primary font-header py-3 px-6 rounded-md
				 hover:bg-accent-cyan-dark transition duration-200 
				 disabled:opacity-50 disabled:cursor-not-allowed"
		>
		  Join Waitlist
		</button>
  
		{#if form?.success}
		  <div class="mt-4 p-4 bg-accent-green/20 border border-accent-green text-accent-green rounded-md">
			Thank you for joining the waitlist!
		  </div>
		{/if}
  
		{#if form?.error}
		  <div class="mt-4 p-4 bg-red-500/20 border border-red-500 text-red-500 rounded-md">
			{form.error}
		  </div>
		{/if}
	  </form>
	</div>
  </section>