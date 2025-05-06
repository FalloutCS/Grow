<script>
    /** @type {{ id: number, title: string, date: string, image: string, excerpt: string }} */
    let { post } = $props();
  </script>
  
  <div class="rounded-xl bg-primary-400 overflow-hidden">
    <div class="flex flex-col md:flex-row justify-center align-middle">
      <div class="md:w-2/5 h-64 md:h-auto">
        <img 
        src={post.image} 
        alt={post.title}
        class="object-cover h-full w-full"
      />
      </div>
      <div class="md:w-3/5 p-6 md:p-8">
        <div class="text-secondary-400 text-sm mb-2">{post.date}</div>
        <h2 class="text-2xl font-header text-secondary mb-4">{post.title}</h2>
        <p class="text-secondary-300 mb-6">{post.excerpt}</p>
        <a 
          href={`/blog/${post.id}`}
          class="inline-flex items-center text-accent-cyan hover:text-accent-cyan-dark transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  </div>