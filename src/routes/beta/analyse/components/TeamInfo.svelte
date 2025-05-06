<script>
    let { team, side } = $props();
  </script>
  
  <div class="bg-primary-300/80 backdrop-blur rounded-lg p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="font-header text-xl">{team.name}</h2>
      <span class="text-2xl">{team.score}</span>
    </div>
    
    <div class="space-y-2">
      {#each team.players as player}
        <div class="flex justify-between items-center">
          <span>{player.name}</span>
          <span class="text-accent-cyan">${player.money}</span>
        </div>
      {/each}
    </div>
  </div>