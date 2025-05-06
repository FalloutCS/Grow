<script>
    let { currentRound, totalRounds } = $props();
    
    const rounds = Array.from({ length: totalRounds }, (_, i) => i + 1);
  </script>
  
  <div class="flex-1 mx-8">
    <div class="flex items-center gap-1">
      {#each rounds as round}
        <button 
          class="w-8 h-8 rounded {currentRound === round ? 'bg-accent-cyan text-primary' : 'bg-primary-200 hover:bg-primary-100'}"
          onclick={() => currentRound = round}
        >
          {round}
        </button>
      {/each}
    </div>
  </div>