<script>
    const socialLinks = [
      {
        name: 'Discord',
        url: 'https://discord.gg/your-server',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
              </svg>`
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/demo_master',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>`
      },
      {
        name: 'GitHub',
        url: 'https://github.com/demo-master',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>`
      }
    ];
  
    const legalLinks = [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Contact', href: '/contact' }
    ];
  </script>
  
  <footer class="bg-primary py-2xl">
    <div class="container mx-auto px-md">
      <div class="grid gap-xl md:grid-cols-4">
        <!-- Logo & Description -->
        <div class="md:col-span-2">
          <img src="/Logo.svg" class="h-10" alt="Grow.GG" />
          <p class="text-secondary-300 mb-6">
            Level up your CS gameplay with professional-grade demo analysis and insights.
          </p>
        </div>
  
        <!-- Social Links -->
        <div>
          <h4 class="font-header text-lg text-secondary mb-4">Connect</h4>
          <div class="flex gap-4">
            {#each socialLinks as { name, url, icon }}
             <a 
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                class="text-secondary-300 hover:text-accent-cyan transition-colors duration-200"
                aria-label={name}
              >
                {@html icon}
              </a>
            {/each}
          </div>
        </div>
  
        <!-- Legal Links -->
        <div>
          <h4 class="font-header text-lg text-secondary mb-4">Legal</h4>
          <ul class="space-y-2">
            {#each legalLinks as { name, href }}
              <li>
                <a
                  {href}
                  class="text-secondary-300 hover:text-accent-cyan transition-colors duration-200"
                >
                  {name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
  
      <!-- Bottom Bar -->
      <div class="mt-2xl pt-8 border-t border-secondary-500/20">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-secondary-300 text-sm">
            © {new Date().getFullYear()} Demo Master. All rights reserved.
          </p>
          <p class="text-secondary-400 text-sm">
            Made with ❤️ for the CS community
          </p>
        </div>
      </div>
    </div>
  </footer>