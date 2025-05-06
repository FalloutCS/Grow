<script>
    // PayPal donation function
    function openPayPalDonation() {
      const paypalURL = 'https://www.paypal.com/donate?hosted_button_id=C8GEY476BB8FJ';
      
      // Open in a popup window
      window.open(
        paypalURL,
        'paypal_donation',
        'width=550,height=750,left=100,top=100,resizable=yes,scrollbars=yes'
      );
      
      return false;
    }
  
    // Social sharing functions
    function shareOnTwitter() {
      const text = "Check out Grow.gg - The ultimate CS2 demo analysis tool";
      const url = window.location.origin;
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        'twitter-share',
        'width=550,height=450,left=100,top=100'
      );
      return false;
    }
  
    function shareOnFacebook() {
      const url = window.location.origin;
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        'facebook-share',
        'width=550,height=650,left=100,top=100'
      );
      return false;
    }
  
    function shareOnDiscord() {
      const text = "Check out Grow.gg - The ultimate CS2 demo analysis tool";
      const url = window.location.origin;
      // Discord doesn't have a direct sharing API like Twitter/Facebook,
      // so we'll copy a formatted message to clipboard
      const message = `${text}\n${url}`;
      navigator.clipboard.writeText(message)
        .then(() => alert("Discord message copied to clipboard! Paste it in your favorite Discord server."))
        .catch(err => console.error('Failed to copy text: ', err));
      return false;
    }
  
    function shareOnReddit() {
      const title = "Check out Grow.gg - The ultimate CS2 demo analysis tool";
      const url = window.location.origin;
      window.open(
        `https://www.reddit.com/submit?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        'reddit-share',
        'width=550,height=650,left=100,top=100'
      );
      return false;
    }
  </script>
  
  <section class="relative overflow-hidden py-2xl" id="support-us">
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-primary-400">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary"></div>
      <div 
        class="absolute inset-0 opacity-80"
        style="background: radial-gradient(circle at 50% 0%, rgba(47, 74, 156, 0.4) 0%, rgba(12, 19, 40, 0.95) 100%);"
      ></div>
    </div>
    
    <!-- Content -->
    <div class="container relative z-10 mx-auto px-md">
      <h2 class="mb-xl text-center font-header text-header text-secondary">
        Support Our Project
      </h2>
      
      <div class="mx-auto max-w-4xl">
        <div class="mb-xl rounded-xl bg-primary-300/40 p-8 backdrop-blur-sm">
          <h3 class="mb-6 text-center font-header text-xl text-secondary">Donate to Keep Us Going</h3>
          <p class="mb-8 text-center text-secondary-300">
            Your donations help us develop Grow-GG, innovate new features, and eventually provide this service to the CS2 community.
          </p>
          
          <div class="flex justify-center">
            <button 
              onclick={openPayPalDonation}
              class="flex items-center rounded-md bg-[#0070BA] px-6 py-3 font-header text-white transition-transform hover:scale-105"
            >
              <!-- <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.897 7.092c.224-1.424.095-2.387-.432-3.253-.578-.952-1.609-1.408-2.912-1.408h-5.84c-.384 0-.711.283-.771.665L8.15 15.233a.457.457 0 00.45.535h2.999l-.125.785a.381.381 0 00.375.441h2.595a.634.634 0 00.626-.533l.026-.107.502-3.183.032-.174a.634.634 0 01.626-.532h.393c2.552 0 4.551-1.037 5.134-4.037.243-1.252.117-2.297-.516-3.032a2.747 2.747 0 00-.781-.804"/>
                <path d="M9.097 7.404c.037-.24.189-.435.396-.53a.918.918 0 01.353-.068h4.324c.51 0 .984.033 1.419.103.124.02.245.045.364.071.119.027.235.057.347.091.056.017.112.034.166.053.223.076.426.166.608.275.224-1.424.095-2.387-.432-3.253-.578-.952-1.609-1.408-2.912-1.408h-5.84c-.384 0-.711.283-.771.665L5.336 15.48a.457.457 0 00.45.535h2.999l.753-4.774.559-3.837z"/>
              </svg> -->
              <img src="/PayPal_Logo_Icon_2014.svg" alt="PayPal" class="mr-2 h-5 w-5">
              Donate with PayPal
            </button>
          </div>
        </div>
        
        <div class="rounded-xl bg-primary-300/40 p-8 backdrop-blur-sm">
          <h3 class="mb-6 text-center font-header text-xl text-secondary">Share with Friends</h3>
          <p class="mb-8 text-center text-secondary-300">
            Help us grow by sharing Grow.gg with your teammates and friends in the CS2 community.
          </p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <!-- Twitter -->
            <button 
              onclick={shareOnTwitter}
              class="flex items-center rounded-md bg-[#1DA1F2] px-6 py-3 font-header text-white transition-transform hover:scale-105"
            >
              <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </button>
            
            <!-- Facebook -->
            <button 
              onclick={shareOnFacebook}
              class="flex items-center rounded-md bg-[#4267B2] px-6 py-3 font-header text-white transition-transform hover:scale-105"
            >
              <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.8985V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2152 5.90625C15.3084 5.90625 16.4539 6.10156 16.4539 6.10156V8.5625H15.1914C13.9498 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"/>
              </svg>
              Facebook
            </button>
            
            <!-- Discord -->
            <button 
              onclick={shareOnDiscord}
              class="flex items-center rounded-md bg-[#5865F2] px-6 py-3 font-header text-white transition-transform hover:scale-105"
            >
              <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
              </svg>
              Discord
            </button>
            
            <!-- Reddit -->
            <button 
              onclick={shareOnReddit}
              class="flex items-center rounded-md bg-[#FF4500] px-6 py-3 font-header text-white transition-transform hover:scale-105"
            >
              <svg class="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
              </svg>
              Reddit
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>