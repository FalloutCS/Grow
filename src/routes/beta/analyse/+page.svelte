<!-- routes/match/+page.svelte -->
<script>
    import Map from "./components/Map.svelte";
    import TeamInfo from "./components/TeamInfo.svelte";
    import TimeLine from "./components/TimeLine.svelte";
    import Controls from "./components/Controls.svelte";
  
    // Demo state management
    let currentTime = $state("00:00");
    let isPlaying = $state(false);
    let currentRound = $state(1);
    
    // Mock team data
    const teams = {
      team1: {
        name: "NEXUS",
        score: 0,
        players: [
          { name: "ADRON", money: 0 },
          { name: "BTN", money: 150 },
          { name: "ragga", money: 150 },
          { name: "s0und", money: 150 },
          { name: "xellow", money: 150 }
        ]
      },
      team2: {
        name: "PARTIZAN",
        score: 0,
        players: [
          { name: "c0llins", money: 0 },
          { name: "Dragon", money: 150 },
          { name: "emi", money: 150 },
          { name: "Kind0", money: 0 },
          { name: "VLDN", money: 150 }
        ]
      }
    };
  </script>
  
  <div class="h-screen bg-primary-400 text-secondary flex flex-col">
    <!-- Main content -->
    <div class="flex-1 flex">
      <!-- Map area -->
      <div class="flex-1 relative">
        <Map />
        
        <!-- Team information sidebars -->
        <div class="absolute left-0 top-0 w-64 p-4">
          <TeamInfo team={teams.team1} side="CT" />
        </div>
        <div class="absolute right-0 top-0 w-64 p-4">
          <TeamInfo team={teams.team2} side="T" />
        </div>
      </div>
    </div>
  
    <!-- Bottom navigation -->
    <div class="h-24 bg-primary-300 border-t border-primary-200">
      <div class="flex items-center justify-between px-4 h-full">
        <Controls {isPlaying} />
        <TimeLine {currentRound} totalRounds={30} />
        <div class="text-xl font-header">{currentTime}</div>
      </div>
    </div>
  </div>