<!-- routes/+page.svelte -->
<script>
	import Hero from './components/Hero.svelte';
	import Features from './components/Features.svelte';
	import HowItWorks from './components/HowItWorks.svelte';
	import WaitlistForm from './components/WaitlistForm.svelte';
	import Footer from './components/Footer.svelte';
</script>

<svelte:head>
	<title>Demo Master - Level Up Your CS Strategy</title>
	<meta
		name="description"
		content="Analyze your CS gameplay like the pros with Demo Master. Get instant insights, compare with professional matches, and improve your strategic understanding."
	/>
	<meta property="og:title" content="Demo Master - Level Up Your CS Strategy" />
	<meta
		property="og:description"
		content="Analyze your CS gameplay like the pros with Demo Master."
	/>
</svelte:head>

<main class="bg-primary text-secondary">
	<Hero />
	<Features />
	<HowItWorks />
	<WaitlistForm />

	<Footer />
</main>
