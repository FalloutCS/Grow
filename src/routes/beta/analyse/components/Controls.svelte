<!-- Controls.svelte -->
<script>
    let { isPlaying } = $props();
    
    function togglePlay() {
      isPlaying = !isPlaying;
    }
  </script>
  
  <div class="flex items-center gap-4">
    <button 
      onclick={togglePlay}
      class="w-12 h-12 rounded-full bg-primary-200 hover:bg-primary-100 flex items-center justify-center"
    >
      {#if isPlaying}
        <!-- Pause icon -->
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16"/>
          <rect x="14" y="4" width="4" height="16"/>
        </svg>
      {:else}
        <!-- Play icon -->
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      {/if}
    </button>
    
    <div class="flex items-center gap-2">
      <button class="p-2 hover:text-accent-cyan">1x</button>
      <button class="p-2 hover:text-accent-cyan">2x</button>
      <button class="p-2 hover:text-accent-cyan">4x</button>
    </div>
  </div>