(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d="/4black/assets/spotify.CV4oJBfM.png",i="/4black/assets/youtube.BeqBCF8Z.png",p="/4black/assets/insta.B0bKqhu8.png",f="/4black/assets/1.BMYakP6U.png",u="/4black/assets/2.Dd3al5FA.png",m="/4black/assets/3.hLC1NojM.png",b="/4black/assets/4.CcosI3Td.png";let n="integrantes";function x(){return`
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-4 md:py-8 bg-textured">
      <!-- Título -->
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Integrantes 4Black</h1>

      <!-- Botões dos Integrantes -->
      <div class="flex flex-col gap-4 items-center w-full">
        <button id="btn-4black" class="integrante-btn" style="background-image: url('${f}');"></button>
        <button id="btn-coedreey" class="integrante-btn" style="background-image: url('${u}');"></button>
        <button id="btn-santinno" class="integrante-btn" style="background-image: url('${m}');"></button>
        <button id="btn-doismau" class="integrante-btn" style="background-image: url('${b}');"></button>
      </div>
    </div>
  `}function g(){return`
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-4 md:py-8 bg-textured">
      <!-- Botão Voltar -->
      <button id="btn-voltar-coedreey" class="mb-8 text-white opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Voltar</span>
      </button>

      <!-- Título -->
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Coedreey</h1>

      <!-- Botões de Plataforma para Coedreey -->
      <div class="flex flex-col gap-4 w-full max-w-md">
        <!-- YouTube -->
        <a href="https://www.youtube.com/@coedreey" target="_blank" rel="noopener noreferrer" class="platform-btn youtube-btn group">
          <div class="flex items-center gap-4">
            <img src="${i}" alt="YouTube" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">YouTube</span>
              <span class="text-xs md:text-sm opacity-80">Ouvir no YouTube</span>
            </div>
          </div>
        </a>

        <!-- Spotify -->
        <a href="https://open.spotify.com/intl-pt/artist/1LGNHJyIMWvSECazAf2dn7?si=42wNS6WcQA2xGikUfOIADg" target="_blank" rel="noopener noreferrer" class="platform-btn spotify-btn group">
          <div class="flex items-center gap-4">
            <img src="${d}" alt="Spotify" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">Spotify</span>
              <span class="text-xs md:text-sm opacity-80">Ouvir no Spotify</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  `}function y(){return`
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-4 md:py-8 bg-textured">
      <!-- Botão Voltar -->
      <button id="btn-voltar-santinno" class="mb-8 text-white opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Voltar</span>
      </button>

      <!-- Título -->
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Santinno</h1>

      <!-- Botões de Plataforma para Santinno -->
      <div class="flex flex-col gap-4 w-full max-w-md">
        <!-- YouTube -->
        <a href="https://youtube.com/@san7inno?si=YTLibKHADcakRauu" target="_blank" rel="noopener noreferrer" class="platform-btn youtube-btn group">
          <div class="flex items-center gap-4">
            <img src="${i}" alt="YouTube" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">YouTube</span>
              <span class="text-xs md:text-sm opacity-80">Ouvir no YouTube</span>
            </div>
          </div>
        </a>

        <!-- Spotify -->
        <a href="https://open.spotify.com/artist/7p5TwelDif2gw96LO8TvOM?si=ZlW2KgoKT5OMWY5RyDAMSg" target="_blank" rel="noopener noreferrer" class="platform-btn spotify-btn group">
          <div class="flex items-center gap-4">
            <img src="${d}" alt="Spotify" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">Spotify</span>
              <span class="text-xs md:text-sm opacity-80">Ouvir no Spotify</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  `}function v(){return`
    <div class="min-h-screen flex flex-col items-center justify-center px-4 py-4 md:py-8 bg-textured">
      <!-- Botão Voltar -->
      <button id="btn-voltar-4black" class="mb-8 text-white opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span>Voltar</span>
      </button>

      <!-- Título -->
      <h1 class="text-2xl md:text-3xl font-bold text-white mb-8 text-center">4BLACK</h1>

      <!-- Botões de Plataforma para 4BLACK -->
      <div class="flex flex-col gap-4 w-full max-w-md">
        <!-- Instagram -->
        <a href="https://www.instagram.com/4black.ent/" target="_blank" rel="noopener noreferrer" class="platform-btn instagram-btn group">
          <div class="flex items-center gap-4">
            <img src="${p}" alt="Instagram" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">Instagram</span>
              <span class="text-xs md:text-sm opacity-80">Seguir no Instagram</span>
            </div>
          </div>
        </a>

        <!-- YouTube -->
        <a href="https://youtube.com/@forblack4black?si=w6KjCpPRYruZhAno" target="_blank" rel="noopener noreferrer" class="platform-btn youtube-btn group">
          <div class="flex items-center gap-4">
            <img src="${i}" alt="YouTube" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">YouTube</span>
              <span class="text-xs md:text-sm opacity-80">Ouvir no YouTube</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  `}function h(){return`
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

      <!-- Botões de Plataforma para DoisMau -->
      <div class="flex flex-col gap-4 w-full max-w-md">
        <!-- YouTube -->
        <a href="https://www.youtube.com/@DoisMau" target="_blank" rel="noopener noreferrer" class="platform-btn youtube-btn group">
          <div class="flex items-center gap-4">
            <img src="${i}" alt="YouTube" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">YouTube</span>
              <span class="text-xs md:text-sm opacity-80">Ouvir no YouTube</span>
            </div>
          </div>
        </a>

        <!-- Spotify -->
        <a href="https://open.spotify.com/intl-pt/artist/3Gl37U5Wx4AJGwztArl9T2?si=sbw3N6pOQa2G5aSkOrJEQg" target="_blank" rel="noopener noreferrer" class="platform-btn spotify-btn group">
          <div class="flex items-center gap-4">
            <img src="${d}" alt="Spotify" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
            <div class="flex flex-col text-left">
              <span class="font-semibold text-base md:text-lg">Spotify</span>
              <span class="text-xs md:text-sm opacity-80">Ouvir no Spotify</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  `}function o(){const a=document.querySelector("#app");if(n==="integrantes"){a.innerHTML=x();const t=document.getElementById("btn-4black");t&&t.addEventListener("click",()=>{n="4black",o()});const r=document.getElementById("btn-coedreey");r&&r.addEventListener("click",()=>{n="coedreey",o()});const l=document.getElementById("btn-santinno");l&&l.addEventListener("click",()=>{n="santinno",o()});const e=document.getElementById("btn-doismau");e&&e.addEventListener("click",()=>{n="doismau",o()})}else if(n==="4black"){a.innerHTML=v();const t=document.getElementById("btn-voltar-4black");t&&t.addEventListener("click",()=>{n="integrantes",o()})}else if(n==="coedreey"){a.innerHTML=g();const t=document.getElementById("btn-voltar-coedreey");t&&t.addEventListener("click",()=>{n="integrantes",o()})}else if(n==="santinno"){a.innerHTML=y();const t=document.getElementById("btn-voltar-santinno");t&&t.addEventListener("click",()=>{n="integrantes",o()})}else if(n==="doismau"){a.innerHTML=h();const t=document.getElementById("btn-voltar-doismau");t&&t.addEventListener("click",()=>{n="integrantes",o()})}}o();
