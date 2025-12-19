Configure este projeto com as seguintes etapas:

1. Verifique se o Node.js LTS está instalado.  
   Se não estiver, instale.

2. Crie um projeto Vite (template vanilla):
   npm create vite@latest . -- --template vanilla

3. Instale TailwindCSS v4, PostCSS e Autoprefixer:
   npm install -D tailwindcss@latest postcss autoprefixer
   npx tailwindcss init -p

4. Configure o arquivo tailwind.config.js com:
   content: ["./index.html", "./src/**/*.{js,ts}"]

5. Ajuste a estrutura inicial:
   - Limpe o HTML padrão do Vite
   - Crie /src/style.css contendo:
       @tailwind base;
       @tailwind components;
       @tailwind utilities;

6. Configure o index.html:
   - Estrutura limpa
   - <div id="app"></div>
   - Script type="module" apontando para src/main.js

7. Garanta que:
   - Hot Reload esteja funcionando
   - Tailwind esteja ativo (adicione uma classe de teste)
   - Nada além de Vite + Vanilla + Tailwind seja usado

8. Final esperado:
   Projeto funcionando com:
   npm install
   npm run dev
