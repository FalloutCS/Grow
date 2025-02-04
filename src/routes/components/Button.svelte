<script>
    let { variant = 'primary', type = 'button', disabled = false } = $props();
    
    const variants = {
      primary: 'bg-accent-cyan text-primary hover:bg-accent-cyan-dark',
      secondary: 'bg-secondary border-2 border-accent-cyan text-primary hover:bg-secondary-200'
    };
  </script>
  
  <button 
    {type}
    {disabled}
    class={`px-6 py-3 rounded-md font-header transition-colors duration-200 ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
  >
    <!-- {@render children?.()} -->
  </button>