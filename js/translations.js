// --- Dicionário de Traduções ---
const translations = {
    en: {
        "header_subtitle": "Your online hub of handy tools",
        "footer_copyright": "&copy; 2026 ToolixHub — All tools free and online",
        "tool_dice_title": "Dice Roller",
        "tool_dice_desc": "Random number generator",
        "btn_roll": "Roll Dice",
        "tool_metro_title": "Metronome",
        "tool_metro_desc": "Pro precision timing tool"
    },
    es: {
        "header_subtitle": "Tu centro de herramientas prácticas",
        "footer_copyright": "&copy; 2026 ToolixHub — Todas las herramientas gratis y online",
        "tool_dice_title": "Lanzador de Dados",
        "tool_dice_desc": "Generador de números aleatorios",
        "btn_roll": "Lanzar Dado",
        "tool_metro_title": "Metrónomo",
        "tool_metro_desc": "Herramienta de temporización de precisión"
    },
    pt: {
        "header_subtitle": "Seu centro de ferramentas práticas",
        "footer_copyright": "&copy; 2026 ToolixHub — Todas as ferramentas gratuitas e online",
        "tool_dice_title": "Sorteador de Dados",
        "tool_dice_desc": "Gerador de números aleatórios",
        "btn_roll": "Jogar Dado",
        "tool_metro_title": "Metrônomo",
        "tool_metro_desc": "Ferramenta de precisão para músicos"
    }
};

// --- Função para Alterar Idioma ---
function changeLanguage(lang) {
    // 1. Salva a preferência do usuário no navegador (localStorage)
    localStorage.setItem('preferredLanguage', lang);

    // 2. Busca todos os elementos que possuem o atributo data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    // 3. Itera sobre os elementos e substitui o texto pelo correspondente no dicionário
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        
        // Verifica se o idioma e a chave existem no dicionário
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}
