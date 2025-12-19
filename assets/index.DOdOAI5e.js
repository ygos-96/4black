(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const m="/4black/assets/capa-album.BHws3A-3.png",c="/4black/assets/spotify.CV4oJBfM.png",d="/4black/assets/youtube.BeqBCF8Z.png",p="/4black/assets/amazon.BVdw0qzx.png",u="/4black/assets/IMG_6499.BJgcqGSO.JPG",f="/4black/assets/IMG_6499.BJgcqGSO.JPG",b="/4black/assets/1.D9VWBMfg.png",g="/4black/assets/2.Dd3al5FA.png",x="/4black/assets/3.D17-3Uen.png",h="/4black/assets/4.CcosI3Td.png";let a="main";function y(){return`
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-4 md:py-8 bg-textured">
      <!-- Capa do Álbum -->
      <div class="mb-4 md:mb-12">
        <img 
          src="${m}" 
          alt="Capa do Álbum" 
          class="w-48 h-48 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl shadow-2xl object-cover"
        />
        <!-- Texto apenas no mobile -->
        <p class="text-center text-sm text-gray-400 mt-4 md:hidden">Escute nas seguintes plataformas</p>
      </div>

      <!-- Botões das Plataformas -->
      <div class="flex flex-col gap-2 md:gap-4 w-full max-w-md mb-4 md:mb-12">
      <!-- Spotify -->
      <a href="https://open.spotify.com/intl-pt/artist/1LGNHJyIMWvSECazAf2dn7" target="_blank" rel="noopener noreferrer" class="platform-btn spotify-btn group">
        <div class="flex items-center gap-4">
          <img src="${c}" alt="Spotify" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">Spotify</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no Spotify</span>
          </div>
        </div>
      </a>

      <!-- YouTube Music -->
      <a href="https://www.youtube.com/@coedreey" target="_blank" rel="noopener noreferrer" class="platform-btn youtube-btn group">
        <div class="flex items-center gap-4">
          <img src="${d}" alt="YouTube Music" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">YouTube Music</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no YouTube Music</span>
          </div>
        </div>
      </a>

      <!-- Amazon Music -->
      <a href="https://music.amazon.com.br/artists/B0FLM19X83/coedrey?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=BR&ref=dm_sh_fFGmxLsZwqkyxZgdTgCiTFisD" target="_blank" rel="noopener noreferrer" class="platform-btn amazon-btn group">
        <div class="flex items-center gap-4">
          <img src="${p}" alt="Amazon Music" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">Amazon Music</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no Amazon Music</span>
          </div>
        </div>
      </a>

        <!-- Integrantes 4Black -->
        <button id="btn-integrantes" class="platform-btn instagram-btn group">
          <div class="flex items-center gap-4">
            <img src="${u}" alt="Integrantes 4Black" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain rounded-full" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">Integrantes 4Black</span>
              <span class="text-xs md:text-sm opacity-80">Conhecer os integrantes</span>
            </div>
          </div>
        </button>
      </div>

      <!-- Rodapé com Logo da Produtora -->
      <footer class="mt-auto pt-2 md:pt-8 text-center hidden md:block">
        <div class="mb-2">
          <img 
            src="${f}" 
            alt="4BLACK" 
            class="h-8 mx-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
          />
        </div>
        <p class="text-xs text-gray-500">© 2024 4BLACK. Todos os direitos reservados.</p>
      </footer>
    </div>
  `}function v(){return`
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-4 md:py-8 bg-textured">
      <!-- Botão Voltar -->
      <button id="btn-voltar" class="mb-8 text-white opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Voltar</span>
      </button>

      <!-- Título -->
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Integrantes 4Black</h1>

      <!-- Botões dos Integrantes -->
      <div class="flex flex-col gap-4 items-center w-full">
        <a href="https://www.instagram.com/4black.ent/" target="_blank" rel="noopener noreferrer" class="integrante-btn" style="background-image: url('${b}');"></a>
        <a href="https://www.instagram.com/coedreey_/" target="_blank" rel="noopener noreferrer" class="integrante-btn" style="background-image: url('${g}');"></a>
        <a href="https://www.instagram.com/7santinno/" target="_blank" rel="noopener noreferrer" class="integrante-btn" style="background-image: url('${x}');"></a>
        <button id="btn-doismau" class="integrante-btn" style="background-image: url('${h}');"></button>
      </div>
    </div>
  `}function w(){return`
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-4 md:py-8 bg-textured">
      <!-- Botão Voltar -->
      <button id="btn-voltar-doismau" class="mb-8 text-white opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Voltar</span>
      </button>

      <!-- Título -->
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center">DoisMau</h1>

      <!-- Botões das Plataformas -->
      <div class="flex flex-col gap-2 md:gap-4 w-full max-w-md">
        <!-- YouTube -->
        <a href="https://www.youtube.com/@DoisMau" target="_blank" rel="noopener noreferrer" class="platform-btn youtube-btn group">
          <div class="flex items-center gap-4">
            <img src="${d}" alt="YouTube" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">YouTube</span>
              <span class="text-xs md:text-sm opacity-80">Ver no YouTube</span>
            </div>
          </div>
        </a>

        <!-- Spotify -->
        <a href="https://open.spotify.com/intl-pt/artist/3Gl37U5Wx4AJGwztArl9T2?si=sbw3N6pOQa2G5aSkOrJEQg" target="_blank" rel="noopener noreferrer" class="platform-btn spotify-btn group">
          <div class="flex items-center gap-4">
            <img src="${c}" alt="Spotify" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">Spotify</span>
              <span class="text-xs md:text-sm opacity-80">Ouvir no Spotify</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  `}function n(){const o=document.querySelector("#app");if(a==="main"){o.innerHTML=y();const e=document.getElementById("btn-integrantes");e&&e.addEventListener("click",()=>{a="integrantes",n()})}else if(a==="integrantes"){o.innerHTML=v();const e=document.getElementById("btn-voltar");e&&e.addEventListener("click",()=>{a="main",n()});const r=document.getElementById("btn-doismau");r&&r.addEventListener("click",()=>{a="doismau",n()})}else if(a==="doismau"){o.innerHTML=w();const e=document.getElementById("btn-voltar-doismau");e&&e.addEventListener("click",()=>{a="integrantes",n()})}}n();
