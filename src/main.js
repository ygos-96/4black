import './style.css'
import capaAlbum from './img/capa-album.png'
import spotifyLogo from './img/spotify.png'
import youtubeLogo from './img/youtube.png'
import amazonLogo from './img/amazon.png'
import imusicLogo from './img/imusic.png'
import instaLogo from './img/insta.png'
import logoProdutora from './img/logo-proutora.JPG'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen flex flex-col items-center justify-center px-4 py-4 md:py-8 bg-textured">
    <!-- Capa do Álbum -->
    <div class="mb-4 md:mb-12">
      <img 
        src="${capaAlbum}" 
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
          <img src="${spotifyLogo}" alt="Spotify" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">Spotify</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no Spotify</span>
          </div>
        </div>
      </a>

      <!-- YouTube Music -->
      <a href="#" class="platform-btn youtube-btn group">
        <div class="flex items-center gap-4">
          <img src="${youtubeLogo}" alt="YouTube Music" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">YouTube Music</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no YouTube Music</span>
          </div>
        </div>
      </a>

      <!-- Amazon Music -->
      <a href="#" class="platform-btn amazon-btn group">
        <div class="flex items-center gap-4">
          <img src="${amazonLogo}" alt="Amazon Music" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">Amazon Music</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no Amazon Music</span>
          </div>
        </div>
      </a>

      <!-- Apple Music / iMusic -->
      <a href="#" class="platform-btn apple-btn group">
        <div class="flex items-center gap-4">
          <img src="${imusicLogo}" alt="Apple Music" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
          <div class="flex flex-col text-left">
            <span class="font-semibold text-base md:text-lg">Apple Music</span>
            <span class="text-xs md:text-sm opacity-80">Ouvir no Apple Music</span>
          </div>
        </div>
      </a>

      <!-- Instagram -->
      <a href="#" class="platform-btn instagram-btn group">
        <div class="flex items-center gap-4">
          <img src="${instaLogo}" alt="Instagram" class="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 object-contain" />
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
          src="${logoProdutora}" 
          alt="4BLACK" 
          class="h-8 mx-auto opacity-60 hover:opacity-100 transition-opacity object-contain"
        />
      </div>
      <p class="text-xs text-gray-500">© 2024 4BLACK. Todos os direitos reservados.</p>
    </footer>
  </div>
`

