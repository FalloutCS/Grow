<script>
  const features = $state([
    {
      IMG: './Example 2.gif',
      title: 'Smart Snapshots',
      sub_title: 'Dont get tilted during scrims',
      description: 'Save key moments in your demo during gameplay for instant analysis after your game'
    },
    {
      IMG: './Demo dashboard.png',
      title: 'Automatic Uploads',
      sub_title: 'Never forget important lessons again',
      description: 'Your demos are automatically uploaded and formatted based on your snapshots. We\'ll also remind you!'
    },
    {
      IMG: './SnapShots overview.png',
      title: 'In depth round analysis',
      sub_title: 'No need to watch the boring parts, focus on learning',
      description: 'Your snapshots are automatically parsed and ready for you to analyse and (even better) to be compared to proffesional similar moments'
    }
  ]);
</script>

<section class="relative py-2xl overflow-hidden" id="features">
  <!-- Gradient background -->
  <div class="absolute inset-0 bg-primary-400">
    <div class="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary"></div>
    <div 
      class="absolute inset-0 opacity-80"
      style="background: radial-gradient(circle at 50% 0%, rgba(47, 74, 156, 0.4) 0%, rgba(12, 19, 40, 0.95) 100%);"
    ></div>
  </div>

  <!-- Content -->
  <div class="container mx-auto px-md relative z-10">
    <h2 class="mb-xl text-center font-header text-header text-secondary">
      Features That Make You Better
    </h2>

    <div class="grid gap-xl md:grid-cols-3">
      {#each features as feature}
        <div class="flex flex-col rounded-lg bg-primary/40 backdrop-blur-sm p-lg text-center 
                    border border-primary-100/20 hover:border-accent-cyan/30 transition-all duration-300">
          <h3 class="mb-md font-header text-header text-secondary">{feature.title}</h3>
          <div class="relative overflow-hidden rounded-lg">
            <img 
              src={feature.IMG} 
              alt={feature.title}
              class="rounded-lg border-2 border-primary-100/20 hover:border-accent-cyan/30 
                     transition-all duration-300 hover:scale-[1.02]" 
            />
          </div>
          {#if feature.sub_title}
            <p class="pt-4 font-body text-accent-cyan">{feature.sub_title}</p>
          {/if}
          <p class="pt-4 font-body text-secondary-300">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>