<section 
	class="flex min-h-screen items-center justify-center py-2xl relative bg-cover bg-center bg-no-repeat"
	style="background-image: url('/Alternative wallpaper.png');"
>
	<!-- Dark overlay for better text readability -->
	<div class="absolute inset-0 bg-black/60"></div>
	
	<div class="container mx-auto px-md relative z-10">
		<div class="mx-auto max-w-4xl text-center">
      <!-- Added Logo Section -->
      <div class="mb-xl animate-float">
        <img 
          src="/Logo.svg" 
          alt="GrowGG Logo" 
          class="h-24 md:h-32 mx-auto"
        />
      </div>

			<h1 class="mb-lg font-display text-display text-white">
				Master Your CS2 Tactics Lightning Fast 	While Playing
			</h1>

			<p class="mb-xl font-body text-body text-secondary-200">
				Save your key moments while playing. Get instant insights, compare with professional
				matches, and become a pro in strategic understanding.
			</p>

			<button
				type="button"
				onclick={() => {
					document.getElementById('waitlist-form').scrollIntoView({ 
						behavior: 'smooth'
					});
				}}
				class={'rounded-md bg-accent-cyan px-6 py-3 font-header text-primary transition-colors duration-200 hover:bg-accent-cyan-dark'}
			>
				Join the waitlist
			</button>
			<button
			type="button"
			onclick={() => {
				document.getElementById('features').scrollIntoView({ 
					behavior: 'smooth'
				});
			}}
			class={'border border-primary-100 rounded-md px-6 py-3 font-header text-secondary-100 transition-colors duration-200'}
		>
			or learn more
		</button>
		</div>
	</div>
</section>

<style>
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .animate-float {
    animation: float 10s ease-in-out infinite;
  }
</style>