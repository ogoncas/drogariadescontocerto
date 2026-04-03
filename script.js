// Função para abrir o modal de imagem
function openImageModal(src) {
    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <div class="flex items-center justify-center">
            <img src="${src}" 
                 alt="Imagem expandida - Drogaria Desconto Certo"
                 class="modal-content w-full max-h-[80vh] object-contain rounded-2xl shadow-inner">
        </div>
    `;
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Função para abrir o modal de vídeo do YouTube
function openVideoModal() {
    const youtubeEmbedUrl = 'https://www.youtube.com/embed/SEU_VIDEO_ID_AQUI';
    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <div class="aspect-video w-full bg-black rounded-2xl overflow-hidden">
            <iframe 
                width="100%" 
                height="100%" 
                src="${youtubeEmbedUrl}" 
                title="Vídeo Institucional - Drogaria Desconto Certo"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
            </iframe>
        </div>
        <p class="text-center text-xs text-gray-400 mt-4">Clique no play para assistir</p>
    `;
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.getElementById('modal-content').innerHTML = '';
}

// Evento disparado quando o DOM é carregado
document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos do menu móvel
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Evento para alternar o menu móvel
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
    });

    // Eventos para fechar o menu ao clicar em links móveis
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });

    // Evento para abrir o modal de vídeo
    const videoTrigger = document.getElementById('video-trigger');
    if (videoTrigger) videoTrigger.addEventListener('click', openVideoModal);

    // Eventos para abrir modais de imagem na galeria
    const galleryImages = document.querySelectorAll('.media-hover');
    galleryImages.forEach(el => {
        el.addEventListener('click', () => {
            const img = el.querySelector('img');
            if (img && img.src) openImageModal(img.src);
        });
    });

    // Evento para fechar modal com tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Log de direitos autorais no console
    console.log('%c © 2026 Drogaria Desconto Certo. Todos os direitos reservados.', 'color:#fa7516; font-weight:bold');
});
