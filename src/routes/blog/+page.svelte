<!-- routes/blog/+page.svelte -->
<script>
    import BlogCard from '../components/BlogCard.svelte';
	import Footer from '../components/Footer.svelte';
    
    // Mock blog data - this would come from your actual data source
    const blogPosts = $state([
      {
        id: 1,
        title: 'Preparing Your Amateur Team for Their First ESEA Open Season',
        date: 'Apr 30, 2025',
        image: '/nuke.jpeg',
        excerpt: 'Getting ready for your first ESEA Open season is an exciting milestone for any Counter-Strike 2 team. As the entry level to organized competitive CS2, Open division offers a structured environment where your team can grow together and develop a foundation for future success. Here\'s a comprehensive guide to help your squad prepare for the challenges ahead.'
      },
      {
        id: 2,
        title: 'Preparing Your Amateur Team for Their First ESEA Open Season',
        date: 'Apr 30, 2025',
        image: '/mirage.jpg',
        excerpt: 'Getting ready for your first ESEA Open season is an exciting milestone for any Counter-Strike 2 team. As the entry level to organized competitive CS2, Open division offers a structured environment where your team can grow together and develop a foundation for future success. Here\'s a comprehensive guide to help your squad prepare for the challenges ahead.'
      },
      {
        id: 3,
        title: 'Essential CS2 Practice Routines for Teams',
        date: 'Apr 25, 2025',
        image: '/inferno.jpg',
        excerpt: 'Developing effective practice routines is crucial for team improvement. This guide covers structured approaches to warmups, map practice, and tactical development for Counter-Strike 2 teams looking to optimize their training time.'
      }
    ]);
  </script>
  
  <svelte:head>
    <title>Blog - Grow.gg</title>
    <meta name="description" content="CS2 strategy guides, tips and news from Grow.gg">
  </svelte:head>
  
  <div class="py-12 bg-primary">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-header text-secondary mb-12">Latest Guides & News</h1>
      
      <div class="space-y-12">
        {#each blogPosts as post}
          <BlogCard {post} />
        {/each}
      </div>
    </div>
  </div>

  <Footer />