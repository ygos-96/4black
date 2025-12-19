(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function c(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=c(s);fetch(s.href,t)}})();const l="/4black/assets/capa-album-BHws3A-3.png",i="/4black/assets/spotify-CV4oJBfM.png",n="/4black/assets/youtube-BeqBCF8Z.png",r="/4black/assets/amazon-BVdw0qzx.png",d="/4black/assets/imusic-BD8Uq2aD.png",m="/4black/assets/insta-B0bKqhu8.png",p="/4black/assets/logo-proutora-BJgcqGSO.JPG";document.querySelector("#app").innerHTML=`
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-4 md:py-8 bg-textured">
    <!-- Capa do Álbum -->
    <div class="mb-4 md:mb-12">
      <img 
        src="${l}" 
        alt="Capa do Álbum" 
        class="w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl object-cover"
      />
      <!-- Texto apenas no mobile -->
      <p class="text-center text-sm text-gray-400 mt-4 md:hidden">Escute nas seguintes plataformas</p>
    </div>

    <!-- Botões das Plataformas -->
    <div class="flex flex-col gap-2 md:gap-4 w-full max-w-md mb-4 md:mb-12">
      <!-- Spotify -->
      <a href="#" class="platform-btn spotify-btn group">
        <div class="flex items-center gap-4">
          <img src="${i}" alt="Spotify" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">Spotify</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no Spotify</span>
          </div>
        </div>
      </a>

      <!-- YouTube Music -->
      <a href="#" class="platform-btn youtube-btn group">
        <div class="flex items-center gap-4">
          <img src="${n}" alt="YouTube Music" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">YouTube Music</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no YouTube Music</span>
          </div>
        </div>
      </a>

      <!-- Amazon Music -->
      <a href="#" class="platform-btn amazon-btn group">
        <div class="flex items-center gap-4">
          <img src="${r}" alt="Amazon Music" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">Amazon Music</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no Amazon Music</span>
          </div>
        </div>
      </a>

      <!-- Apple Music / iMusic -->
      <a href="#" class="platform-btn apple-btn group">
        <div class="flex items-center gap-4">
          <img src="${d}" alt="Apple Music" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">Apple Music</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no Apple Music</span>
          </div>
        </div>
      </a>

      <!-- Instagram -->
      <a href="#" class="platform-btn instagram-btn group">
        <div class="flex items-center gap-4">
          <img src="${m}" alt="Instagram" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">Instagram</span>
            <span class="text-xs md:text-sm opacity-80">Seguir no Instagram</span>
          </div>
        </div>
      </a>
    </div>

    <!-- Rodapé com Logo da Produtora -->
    <footer class="mt-auto pt-2 md:pt-8 text-center hidden md:block">
      <div class="mb-2">
        <img 
          src="${p}" 
          alt="4BLACK" 
          class="h-8 mx-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
        />
      </div>
      <p class="text-xs text-gray-500">© 2024 4BLACK. Todos os direitos reservados.</p>
    </footer>
  </div>
`;
