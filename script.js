// Mensagens românticas
const messages = [
  "Minhas princesa, você ilumina minha vida como nenhuma estrela conseguiria. Cada momento ao seu lado é um presente que guardo no coração para sempre. Te amo mais do que as palavras podem expressar! 💕",

  "Meu amor, desde que você entrou na minha vida, tudo ganhou mais cor, mais sentido, mais felicidade. Você é a razão do meu sorriso e a dona do meu coração. Te amo infinitamente! ❤️",

  "você é meu sonho realizado, meu porto seguro, minha paz em meio ao caos. Com você, descobri o verdadeiro significado do amor. Obrigado por existir e por me amar também! 🌹",

  "Cada batida do meu coração sussurra seu nome. Você é a melodia mais bonita que já ouvi, a poesia que não precisa de palavras. Sou completamente apaixonado por você, minha princesa! 💖",
];

// Elementos
const mainHeart = document.getElementById("mainHeart");
const messageBox = document.getElementById("messageBox");
const messageText = document.getElementById("messageText");
const closeBtn = document.getElementById("closeBtn");
const heartButtons = document.querySelectorAll(".heart-button");
const jellyfishHeart = document.getElementById("jellyfishHeart");
const insectHeart = document.getElementById("insectHeart");
const mainPage = document.getElementById("mainPage");
const jellyfishPage = document.getElementById("jellyfishPage");
const insectPage = document.getElementById("insectPage");
const backBtnJelly = document.getElementById("backBtnJelly");
const backBtnInsect = document.getElementById("backBtnInsect");

// Função para mostrar mensagem
function showMessage(message) {
  messageText.textContent = message;
  messageBox.classList.add("show");
  createFloatingHearts();
}

// Função para fechar mensagem
function closeMessage() {
  messageBox.classList.remove("show");
}

// Criar corações flutuantes
function createFloatingHearts() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.textContent = "💖";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.top = "100%";
      heart.style.fontSize = Math.random() * 20 + 20 + "px";
      heart.style.opacity = "0";
      heart.style.zIndex = "999";
      heart.style.pointerEvents = "none";
      heart.style.transition = "all 3s ease-out";

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.top = "-100px";
        heart.style.opacity = "1";
        heart.style.transform = `translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
      }, 10);

      setTimeout(() => {
        heart.remove();
      }, 3000);
    }, i * 100);
  }
}

// Criar águas-vivas flutuantes
function createFloatingJellyfish() {
  const jellyfishEmojis = ["🪼", "🌊"];
  for (let i = 0; i < 8; i++) {
    setTimeout(() => {
      const jelly = document.createElement("div");
      jelly.textContent =
        jellyfishEmojis[Math.floor(Math.random() * jellyfishEmojis.length)];
      jelly.style.position = "fixed";
      jelly.style.left = Math.random() * 100 + "%";
      jelly.style.top = "-100px";
      jelly.style.fontSize = Math.random() * 30 + 30 + "px";
      jelly.style.opacity = "0";
      jelly.style.zIndex = "5";
      jelly.style.pointerEvents = "none";
      jelly.style.transition = "all 8s ease-in-out";

      document.body.appendChild(jelly);

      setTimeout(() => {
        jelly.style.top = "120vh";
        jelly.style.opacity = "0.3";
        jelly.style.transform = `translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg)`;
      }, 10);

      setTimeout(() => {
        jelly.remove();
      }, 8000);
    }, i * 1000);
  }
}

// Criar insetos flutuantes
function createFloatingInsects() {
  const insectEmojis = ["🦋", "🐝", "🐞", "🦗"];
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const insect = document.createElement("div");
      insect.textContent =
        insectEmojis[Math.floor(Math.random() * insectEmojis.length)];
      insect.style.position = "fixed";
      insect.style.left = Math.random() * 100 + "%";
      insect.style.top = Math.random() * 100 + "%";
      insect.style.fontSize = Math.random() * 25 + 20 + "px";
      insect.style.opacity = "0";
      insect.style.zIndex = "5";
      insect.style.pointerEvents = "none";
      insect.style.transition = "all 4s ease-in-out";

      document.body.appendChild(insect);

      setTimeout(() => {
        insect.style.left = Math.random() * 100 + "%";
        insect.style.top = Math.random() * 100 + "%";
        insect.style.opacity = "0.4";
        insect.style.transform = `rotate(${Math.random() * 360}deg)`;
      }, 10);

      setTimeout(() => {
        insect.remove();
      }, 4000);
    }, i * 400);
  }
}

// Event listeners para corações normais
mainHeart.addEventListener("click", () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  showMessage(randomMessage);
});

closeBtn.addEventListener("click", closeMessage);

heartButtons.forEach((button) => {
  if (button.id !== "jellyfishHeart" && button.id !== "insectHeart") {
    button.addEventListener("click", () => {
      const messageIndex = parseInt(button.getAttribute("data-message"));
      if (!isNaN(messageIndex) && messages[messageIndex]) {
        showMessage(messages[messageIndex]);
      }
    });
  }
});

// Event listener para o coração das águas-vivas
jellyfishHeart.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  setTimeout(() => {
    jellyfishPage.classList.add("active");
    createFloatingJellyfish();
    jellyfishPage.scrollTop = 0;
    window.scrollTo(0, 0);
  }, 500);
});

// Event listener para o coração dos insetos
insectHeart.addEventListener("click", () => {
  mainPage.classList.add("hidden");
  setTimeout(() => {
    insectPage.classList.add("active");
    createFloatingInsects();
    insectPage.scrollTop = 0;
    window.scrollTo(0, 0);
  }, 500);
});

// Event listeners para voltar
backBtnJelly.addEventListener("click", () => {
  jellyfishPage.classList.remove("active");
  setTimeout(() => {
    mainPage.classList.remove("hidden");
  }, 500);
});

backBtnInsect.addEventListener("click", () => {
  insectPage.classList.remove("active");
  setTimeout(() => {
    mainPage.classList.remove("hidden");
  }, 500);
});

// Fechar ao clicar fora da caixa
messageBox.addEventListener("click", (e) => {
  if (e.target === messageBox) {
    closeMessage();
  }
});

// Animação de entrada
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 1s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Criar animações periódicas nas páginas especiais
setInterval(() => {
  if (jellyfishPage.classList.contains("active")) {
    createFloatingJellyfish();
  }
}, 8000);

setInterval(() => {
  if (insectPage.classList.contains("active")) {
    createFloatingInsects();
  }
}, 4000);

// ===============================================
// DADOS DAS GALERIAS COM IMAGENS REAIS
// ===============================================

// Dados das Águas-Vivas com imagens reais
const jellyfishData = [
    {
        name: "Água-viva-lua",
        scientificName: "Aurelia aurita",
        image: "https://www.aquariumbcn.com/wp-content/uploads/2022/07/Aurelia-aurita-scaled.jpg",
        description: `<p><strong>Nome Científico:</strong> Aurelia aurita</p>
        <p><strong>Características:</strong> Uma das águas-vivas mais comuns e reconhecíveis do mundo! Possui corpo translúcido em forma de sino com até 40cm de diâmetro. Suas quatro estruturas em forma de ferradura visíveis são as gônadas reprodutoras.</p>
        <p><strong>Habitat:</strong> Encontrada em oceanos temperados e tropicais ao redor do mundo, especialmente em águas costeiras e portos.</p>
        <p><strong>Alimentação:</strong> Filtra plâncton, pequenos crustáceos e larvas de peixe usando seus tentáculos curtos.</p>
        <p><strong>Periculosidade:</strong> Praticamente inofensiva para humanos! Suas células urticantes são muito fracas e raramente causam mais que leve irritação.</p>
        <p><strong>Ciclo de vida:</strong> Vive cerca de 6 meses. Passa por metamorfose complexa incluindo fase de pólipo fixo no fundo do mar.</p>
        <p><strong>Curiosidades:</strong> Pode se reproduzir tanto sexuada quanto assexuadamente. Possui capacidade incrível de regeneração - pode regrowing partes perdidas! Bioluminescente fraca em algumas condições.</p>
        <p><strong>Papel ecológico:</strong> Serve de alimento para tartarugas marinhas e peixes-lua. Indicadora de saúde oceânica.</p>`
    },
    {
        name: "Caravela-portuguesa",
        scientificName: "Physalia physalis",
        image: "https://med.estrategia.com/portal/wp-content/uploads/2025/03/pexels-lux-werk-2148504350-30375016-960x540.jpg",
        description: `<p><strong>Nome Científico:</strong> Physalia physalis</p>
        <p><strong>Características:</strong> Tecnicamente NÃO é uma água-viva, mas um sifonóforo - colônia de organismos especializados trabalhando juntos! Flutuador azul/roxo cheio de gás (até 30cm) fica na superfície, tentáculos podem atingir 50 metros!</p>
        <p><strong>Habitat:</strong> Águas tropicais e subtropicais de todos os oceanos. Deriva com correntes oceânicas e ventos.</p>
        <p><strong>Alimentação:</strong> Predadora voraz! Paralisa peixes pequenos, crustáceos e larvas com veneno potente, depois os consome.</p>
        <p><strong>Periculosidade:</strong> EXTREMAMENTE PERIGOSA! Veneno causa dor intensa, marcas tipo chicotada, náusea, vômito. Casos raros podem ser fatais. Tentáculos picam mesmo depois da morte!</p>
        <p><strong>Adaptações:</strong> Flutuador funciona como vela, permite "navegar" com vento. Pode esvaziar flutuador e submergir para escapar de predadores ou clima ruim.</p>
        <p><strong>Curiosidades:</strong> Nome vem de navios portugueses do século 15. Alguns peixes (nomeus) são imunes ao veneno e vivem entre tentáculos! Colônia é formada por 4 tipos de pólipos especializados.</p>
        <p><strong>Tratamento de picada:</strong> Lavar com água do mar, remover tentáculos, aplicar vinagre, procurar ajuda médica imediatamente!</p>`
    },
    {
        name: "Água-viva-caixa",
        scientificName: "Chironex fleckeri",
        image: "https://img.freepik.com/fotos-gratis/aguas-vivas-no-tanque-de-agua_1150-12620.jpg?semt=ais_hybrid&w=740&q=80",
        description: `<p><strong>Nome Científico:</strong> Chironex fleckeri</p>
        <p><strong>Características:</strong> Considerada a MAIS MORTAL do mundo! Corpo transparente em forma de cubo (até 30cm cada lado), até 15 tentáculos por canto (60 total) que podem atingir 3 metros. Quase invisível na água!</p>
        <p><strong>Habitat:</strong> Águas costeiras rasas do norte da Austrália, Papua Nova Guiné e sudeste asiático. Mais ativa durante verão australiano.</p>
        <p><strong>Alimentação:</strong> Caça ativamente camarões e peixes pequenos. Nada até 7 km/h - muito rápida!</p>
        <p><strong>Periculosidade:</strong> LETAL! Veneno é um dos mais potentes da natureza. Ataca simultaneamente coração, sistema nervoso e células da pele. Pode matar humano adulto em 2-5 minutos! Dor é descrita como insuportável.</p>
        <p><strong>Visão avançada:</strong> Possui 24 olhos organizados em 4 clusters! Cada cluster tem 6 olhos diferentes: 2 olhos-câmera (como nossos), 4 olhos simples. Visão 360° sofisticada permite caça ativa e navegação por obstáculos.</p>
        <p><strong>Curiosidades:</strong> Praias australianas têm redes protetoras e avisos. Surfistas usam roupas especiais (stinger suits). Existe antiveneno disponível. Vinagre desativa nematocistos não disparados.</p>
        <p><strong>Vítimas:</strong> Causa mais mortes na Austrália que tubarões, crocodilos e cobras combinados!</p>`
    },
    {
        name: "Água-viva-cristal",
        scientificName: "Aequorea victoria",
        image: "https://media.istockphoto.com/id/852642762/pt/foto/jelly-fish.jpg?s=612x612&w=0&k=20&c=id0b6R6nmqmRzRsSkjmOKVdUQCjKLaRL4Hgohyfss34=",
        description: `<p><strong>Nome Científico:</strong> Aequorea victoria</p>
        <p><strong>Características:</strong> Totalmente transparente com borda verde bioluminescente espetacular! Sino pode atingir 10cm de diâmetro com até 100 tentáculos delicados.</p>
        <p><strong>Habitat:</strong> Costa oeste da América do Norte, do Alasca à Califórnia. Prefere águas frias costeiras.</p>
        <p><strong>Bioluminescência:</strong> Produz luz verde através de proteína GFP (Green Fluorescent Protein) quando perturbada. Show de luzes serve para confundir predadores!</p>
        <p><strong>Importância científica REVOLUCIONÁRIA:</strong> A proteína GFP isolada desta água-viva transformou a biologia molecular! Permite marcar células e proteínas, rastrear processos celulares, estudar desenvolvimento de organismos. Descobridores ganharam Prêmio Nobel de Química 2008!</p>
        <p><strong>Alimentação:</strong> Filtradora - come plâncton microscópico e pequenos crustáceos.</p>
        <p><strong>Periculosidade:</strong> Inofensiva para humanos. Tentáculos muito fracos.</p>
        <p><strong>Aplicações da GFP:</strong> Usada em pesquisas de câncer, Alzheimer, desenvolvimento embrionário, neurociência. Permite visualizar células vivas! Uma das ferramentas mais importantes da ciência moderna.</p>
        <p><strong>Curiosidades:</strong> Luz verde brilha mais intensamente quando água-viva está estressada ou sendo atacada.</p>`
    },
    {
        name: "Água-viva-juba-de-leão",
        scientificName: "Cyanea capillata",
        image: "https://blogdopescador.com/wp-content/uploads/2023/01/agua-viva-juba-do-leao.jpg",
        description: `<p><strong>Nome Científico:</strong> Cyanea capillata</p>
        <p><strong>Características:</strong> A MAIOR água-viva do mundo! Sino pode ter 2+ metros de diâmetro. Tentáculos atingem 37 metros - mais longa que baleia azul! Possui até 1.200 tentáculos divididos em 8 grupos. Cor varia: vermelha escura (adultos grandes), laranja, amarela (jovens).</p>
        <p><strong>Habitat:</strong> Águas frias do Ártico, Atlântico Norte e Pacífico Norte. Quanto mais fria a água, maior cresce!</p>
        <p><strong>Alimentação:</strong> Predadora voraz! Come plâncton, peixes, outras águas-vivas menores. Tentáculos formam "rede de pesca" massiva.</p>
        <p><strong>Periculosidade:</strong> Picada dolorosa! Causa queimação intensa, erupções cutâneas, cólicas musculares. Raramente fatal, mas MUITO desconfortável. Tentáculos quebrados flutuando são perigosos!</p>
        <p><strong>Tamanho recorde:</strong> Maior espécime registrado tinha sino de 2.3m diâmetro e tentáculos de 36.6m! Encontrado na Baía de Massachusetts, 1870.</p>
        <p><strong>Ciclo de vida:</strong> Vive cerca de 1 ano. Cresce rapidamente em águas ricas em nutrientes.</p>
        <p><strong>Curiosidades:</strong> Inspirou histórias de Sherlock Holmes ("A Juba do Leão"). Pode abrigar pequenos peixes e camarões entre tentáculos - comensalismo! Nome vem da aparência de juba quando tentáculos se espalham.</p>
        <p><strong>Comportamento:</strong> Migra verticalmente - superfície à noite para comer plâncton, profundidade durante dia.</p>`
    },
    {
        name: "Água-viva-imortal",
        scientificName: "Turritopsis dohrnii",
        image: "https://blogdopescador.com/wp-content/uploads/2023/01/caracteristicas-da-medusa-imortal.jpg",
        description: `<p><strong>Nome Científico:</strong> Turritopsis dohrnii</p>
        <p><strong>Características:</strong> Pequenina (4-5mm diâmetro), sino transparente em forma de sino, 8 grupos de tentáculos. Mas possui o superpoder mais incrível: IMORTALIDADE BIOLÓGICA!</p>
        <p><strong>Habitat:</strong> Originária do Caribe, agora encontrada em oceanos temperados e tropicais mundialmente - espalhou-se via navios.</p>
        <p><strong>O SEGREDO DA IMORTALIDADE:</strong> Quando estressada, doente, velha ou ferida, pode REVERTER completamente seu desenvolvimento! Medusa adulta volta a ser pólipo imaturo através de processo chamado transdiferenciação celular. Células adultas transformam-se em células jovens!</p>
        <p><strong>Processo:</strong> Medusa desce ao fundo, forma cisto, reorganiza tecidos, emerge como pólipo. Pólipo então produz novas medusas por brotamento. Ciclo pode repetir INFINITAMENTE!</p>
        <p><strong>Alimentação:</strong> Carnívora minúscula - plâncton, ovos de peixe, protozoários, larvas minúsculas.</p>
        <p><strong>Limitações:</strong> Não é invencível! Pode morrer por doença, ser comida, morrer por condições ambientais ruins. Mas se sobreviver, pode teoricamente viver para sempre!</p>
        <p><strong>Pesquisa científica:</strong> Intensamente estudada para entender envelhecimento humano, câncer, regeneração de tecidos. Pode ter chaves para terapias anti-idade futuras!</p>
        <p><strong>Curiosidades:</strong> Descoberta em 1880s, mas imortalidade só documentada em 1990s. Única espécie conhecida capaz de reverter completamente maturidade sexual. Chamada "Benjamin Button do mar"!</p>`
    },
    {
        name: "Água-viva-ovo-frito",
        scientificName: "Cotylorhiza tuberculata",
        image: "https://preview.redd.it/til-fried-egg-jellyfish-is-a-real-animal-v0-8cd23xpjlejf1.jpg?width=2048&format=pjpg&auto=webp&s=c502483406c7b70e0aefc6e7f1673c1522b5a00d",
        description: `<p><strong>Nome Científico:</strong> Cotylorhiza tuberculata</p>
        <p><strong>Características:</strong> Parece LITERALMENTE um ovo frito flutuando! Umbrela amarela/branca (até 40cm) com centro laranja elevado. Tentáculos azuis/roxos curtos e numerosos embaixo. Visual único e encantador!</p>
        <p><strong>Habitat:</strong> Mar Mediterrâneo, especialmente comum em Espanha, Itália, Grécia. Prefere águas mornas costeiras.</p>
        <p><strong>Alimentação:</strong> Filtra plâncton e zooplâncton. Possui algas simbióticas (zooxantelas) que fazem fotossíntese e compartilham nutrientes!</p>
        <p><strong>Periculosidade:</strong> Completamente INOFENSIVA! Suas células urticantes são extremamente fracas. Pode ser tocada com cuidado (mas não recomendado - respeite vida marinha!).</p>
        <p><strong>Simbiose:</strong> Mantém relação mutualística com algas unicelulares. Algas vivem nos tecidos, fazem fotossíntese, produzem açúcares que alimentam água-viva. Água-viva fornece proteção e nutrientes às algas.</p>
        <p><strong>Comportamento:</strong> Nada ativamente com pulsações rítmicas. Flutua próxima à superfície para maximizar luz solar para suas algas simbiontes.</p>
        <p><strong>Curiosidades:</strong> Popular em aquários públicos por beleza e natureza pacífica. Nome "ovo frito" é universal - Mediterranean jelly, fried egg jellyfish. Tentáculos abrigam pequenos peixes e crustáceos juvenis!</p>
        <p><strong>Época:</strong> Mais abundante no verão mediterrâneo (julho-setembro).</p>`
    },
    {
        name: "Água-viva-rosa",
        scientificName: "Drymonema larsoni",
        image: "https://img.freepik.com/fotos-premium/agua-viva-rosa-grande-fundo-fotografia-marinha-mar-natureza_568886-1075.jpg",
        description: `<p><strong>Nome Científico:</strong> Drymonema larsoni</p>
        <p><strong>Características:</strong> Água-viva GIGANTE rosa espetacular! Sino pode atingir 1 metro de diâmetro. Cor rosa vibrante a roxa. Tentáculos grossos tipo cabelo humano, não os finos típicos. Descoberta recentemente (2001) no Golfo do México!</p>
        <p><strong>Habitat:</strong> Águas profundas do Atlântico Ocidental, Golfo do México e Mar do Caribe. Ocasionalmente sobe à superfície.</p>
        <p><strong>Alimentação:</strong> PREDADORA DE OUTRAS ÁGUAS-VIVAS! Caça especialmente águas-vivas-lua. É canibal da própria família! Tentáculos grudam e envolvem presas.</p>
        <p><strong>Descoberta:</strong> Apesar do tamanho gigante, só foi descrita cientificamente em 2001! Mostra quantas espécies ainda desconhecemos nos oceanos profundos.</p>
        <p><strong>Periculosidade:</strong> Desconhecida para humanos - encontros raros. Provavelmente picada dolorosa dado tamanho.</p>
        <p><strong>Tentáculos únicos:</strong> Não são os finos típicos, mas sim grossos (até 5cm largura!) e retráteis. Estrutura permite capturar águas-vivas grandes.</p>
        <p><strong>Curiosidades:</strong> Parte de gênero antigo (Drymonema) com fósseis de 505 milhões anos! Espécie moderna é "fóssil vivo". Cor rosa/roxa vem de pigmentos nos tecidos - função desconhecida. Possivelmente camuflagem em águas profundas ou proteção UV.</p>
        <p><strong>Pesquisa:</strong> Ainda muito desconhecida. Cientistas estudam comportamento predatório único.</p>`
    },
    {
        name: "Água-viva-azul",
        scientificName: "Cyanea lamarckii",
        image: "https://images.unsplash.com/photo-1687011910388-03dc093b61a3?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: `<p><strong>Nome Científico:</strong> Cyanea lamarckii</p>
        <p><strong>Características:</strong> Linda água-viva azul vibrante! Sino pode atingir 30cm com cor azul transparente a amarelo-palha. 8 grupos de tentáculos azulados. Parente menor da juba-de-leão.</p>
        <p><strong>Habitat:</strong> Atlântico Nordeste, especialmente comum em Reino Unido, Irlanda, Noruega. Prefere águas temperadas frias.</p>
        <p><strong>Alimentação:</strong> Predadora generalista. Come plâncton, pequenos peixes, crustáceos, larvas, outras águas-vivas menores.</p>
        <p><strong>Periculosidade:</strong> Picada dolorosa mas raramente perigosa. Causa vermelhidão, inchaço, sensação de queimação. Pessoas sensíveis podem ter reações alérgicas.</p>
        <p><strong>Ciclo de vida:</strong> Vive cerca de 6 meses. Aparece em grandes números durante verão em águas costeiras britânicas.</p>
        <p><strong>Reprodução:</strong> Fase de pólipo no inverno fixado em rochas. Produz éfiras (medusas bebês) na primavera que crescem rapidamente.</p>
        <p><strong>Curiosidades:</strong> Nome honra naturalista francês Jean-Baptiste Lamarck. Frequentemente confundida com parente maior (juba-de-leão) mas é menor e mais azul. Tentáculos podem atingir vários metros mas geralmente mais curtos. Cor pode variar dependendo dieta e idade.</p>
        <p><strong>Blooms:</strong> Pode formar grandes agregações no verão, às vezes milhares juntas! Fenômeno preocupa por impacto em pesca.</p>
        <p><strong>Ecologia:</strong> Importante predadora de zooplâncton. Competidora de peixes jovens por alimento.</p>`
    },
];

// Dados dos Insetos com imagens reais
const insectData = [
    {
        name: "Borboleta-monarca",
        scientificName: "Danaus plexippus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Monarch_In_May.jpg/800px-Monarch_In_May.jpg",
        description: `<p><strong>Nome Científico:</strong> Danaus plexippus</p>
        <p><strong>Características:</strong> Ícone absoluto! Asas laranja vibrante com veias pretas e bordas pretas com pontos brancos. Envergadura de 9-10cm. Padrão inconfundível!</p>
        <p><strong>Habitat:</strong> América do Norte, Central e do Sul. Algumas populações na Austrália, Nova Zelândia, Ilhas Canárias.</p>
        <p><strong>Migração ÉPICA:</strong> Realiza uma das migrações mais incríveis da natureza! Populações norte-americanas voam até 4.000 km do Canadá/EUA para montanhas do México central. Viagem leva 2 meses!</p>
        <p><strong>Navegação miraculosa:</strong> Usa bússola solar + relógio circadiano interno para navegar. Também detectam campo magnético terrestre! Três gerações vivem e morrem indo norte no verão. Quarta geração (super-geração) vive 8 meses e faz viagem completa sul!</p>
        <p><strong>Alimentação:</strong> Lagarta come EXCLUSIVAMENTE plantas asclepias (milkweed). Adulto bebe néctar de flores variadas.</p>
        <p><strong>Defesa química:</strong> Lagarta acumula toxinas cardíacas (cardenolídeos) das asclepias. VENENOSA para predadores! Cores vibrantes advertem: "não me coma".</p>
        <p><strong>Metamorfose:</strong> Crisálida verde-jade linda com pontos dourados! Transformação completa leva 10-14 dias.</p>
        <p><strong>Curiosidades:</strong> Santuários de invernada no México têm MILHÕES cobrindo árvores - espetáculo UNESCO. Pesa 0,5g mas voa milhares de km! Pode planar para economizar energia. Monarcas que migram nunca estiveram no México antes - navegação é GENÉTICA!</p>
        <p><strong>Ameaças:</strong> Declínio populacional grave - perda de asclepias por herbicidas, mudanças climáticas, desmatamento.</p>`
    },
    {
        name: "Abelha-europeia",
        scientificName: "Apis mellifera",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Apis_mellifera_Western_honey_bee.jpg/800px-Apis_mellifera_Western_honey_bee.jpg",
        description: `<p><strong>Nome Científico:</strong> Apis mellifera</p>
        <p><strong>Características:</strong> Corpo peludo amarelo e preto (1.2-1.5cm). Três castas: rainha (maior, 2cm), operárias (maioria), zangões (machos, sem ferrão).</p>
        <p><strong>Habitat:</strong> Originária Europa/África/Oriente Médio. Agora mundialmente introduzida. Vive em colmeias complexas.</p>
        <p><strong>Sociedade eussocial perfeita:</strong> Colônia tem 20.000-80.000 abelhas! Uma rainha (põe 2.000 ovos/dia), milhares de operárias estéreis (fazem TUDO), centenas de zangões (reprodução). Cooperação total!</p>
        <p><strong>Comunicação "DANÇA":</strong> Operárias fazem "dança do requebrado" (waggle dance) para comunicar localização exata de flores! Direção da dança = direção em relação ao sol. Velocidade = distância. LINGUAGEM SIMBÓLICA em inseto!</p>
        <p><strong>Produção de mel:</strong> Coletam néctar, enzimas convertem açúcares, desidratam batendo asas, armazenam em favos hexagonais de cera. Uma abelha produz 1/12 colher de chá de mel na vida inteira!</p>
        <p><strong>Polinização CRUCIAL:</strong> Polinizam 1/3 das culturas alimentares humanas! Amêndoas, maçãs, abóboras, pepinos dependem delas. Valor econômico: $15+ bilhões anuais só EUA!</p>
        <p><strong>Ferrão:</strong> Operárias têm ferrão farpado. Ao ferroar mamíferos, ferrão arranca junto com glândula de veneno - abelha morre. Sacrifício pela colônia!</p>
        <p><strong>Curiosidades:</strong> Enxergam UV, podem reconhecer rostos humanos! Fazem decisões coletivas democráticas. Colônia age como "superorganismo". Mel nunca estraga - mel de 3.000 anos encontrado em pirâmides estava perfeito!</p>
        <p><strong>Ameaças:</strong> Síndrome do colapso das colônias, pesticidas (neonicotinoides), ácaros Varroa, perda de habitat.</p>`
    },
    {
        name: "Besouro-rinoceronte",
        scientificName: "Oryctes nasicornis",
        image: "https://controledepragassp.com.br/wp-content/uploads/2024/02/Conheca_tudo_sobre_os_Fascinantes_Besouros_Capa.png",
        description: `<p><strong>Nome Científico:</strong> Oryctes nasicornis</p>
        <p><strong>Características:</strong> GIGANTE impressionante! Machos têm chifre enorme curvado (até 4cm do corpo de 4cm total). Cor marrom-avermelhada brilhante. Fêmeas menores sem chifre.</p>
        <p><strong>Habitat:</strong> Europa, Norte da África, Ásia. Vive em áreas com matéria orgânica em decomposição - pilhas de compostagem, serragem, estrume.</p>
        <p><strong>FORÇA HERCÚLEA:</strong> Pode levantar até 850 VEZES seu próprio peso! Proporcionalmente mais forte que qualquer animal terrestre. Humano equivalente levantaria 65 TONELADAS!</p>
        <p><strong>Combates épicos:</strong> Machos usam chifre para lutar por fêmeas. Tentam levantar e jogar rival. Batalhas podem durar horas! Chifre maior geralmente vence.</p>
        <p><strong>Ciclo de vida:</strong> Larva (grub) vive 2-4 ANOS em matéria orgânica, comendo e crescendo. Pupa por mês. Adulto vive apenas 3-6 meses - não se alimenta, vive de reservas!</p>
        <p><strong>Voo:</strong> Apesar de tamanho, voa bem! Asas membranosas escondidas sob élitros duros. Voo soa como helicóptero miniatura.</p>
        <p><strong>Dimorfismo sexual:</strong> Machos têm chifre grande. Fêmeas têm tubérculo pequeno. Fácil distinguir!</p>
        <p><strong>Curiosidades:</strong> Adultos não comem nada - apenas bebem seiva/néctar ocasionalmente. Toda nutrição vem de fase larval! Atraídos por luz à noite. Inofensivos - não mordem ou picam. Nome "rinoceronte" vem de chifre tipo rinoceronte. Larvas comem madeira podre ajudando decomposição!</p>
        <p><strong>Cultura:</strong> Populares como pets em Ásia, especialmente Japão. Criação comercial de besouros para competições!</p>`
    },
    {
        name: "Formiga-cortadeira",
        scientificName: "Atta spp.",
        image: "https://blog.syngentadigital.ag/wp-content/uploads/2022/05/formiga-cortadeira-1600x900.jpg",
        description: `<p><strong>Nome Científico:</strong> Atta (várias espécies)</p>
        <p><strong>Características:</strong> Formiga avermelhada grande (2-20mm dependendo casta). Corpo peludo. Mandíbulas poderosas tipo tesoura. Colônias GIGANTES - até 8 milhões de indivíduos!</p>
        <p><strong>Habitat:</strong> Américas - do sul dos EUA à Argentina. Florestas tropicais, savanas, áreas agrícolas.</p>
        <p><strong>AGRICULTURA há 50 MILHÕES DE ANOS:</strong> Cultivam fungos! Cortam folhas frescas, mastigam em polpa, usam como substrato para jardins de fungos subterrâneos. Comem apenas o fungo - não as folhas! PRIMEIRA agricultura conhecida!</p>
        <p><strong>Sistema de castas complexo:</strong> (1) Rainhas gigantes (2.5cm) põem ovos, (2) Soldados defendem, (3) Trabalhadoras grandes cortam folhas, (4) Trabalhadoras médias carregam folhas, (5) Trabalhadoras pequenas processam folhas, (6) Minims minúsculas cuidam fungos. Divisão de trabalho perfeita!</p>
        <p><strong>Trilhas impressionantes:</strong> Forrageiras podem viajar 250 metros da colônia! Criam "estradas" limpas na floresta. Tráfego de mão dupla - ida carregada, volta vazia.</p>
        <p><strong>Uso de antibióticos:</strong> Cultivam bactérias Streptomyces na pele que produzem antibióticos! Protegem jardins de fungos parasitas. Antibióticos naturais há 50 milhões de anos - antes de humanos!</p>
        <p><strong>Ninhos monumentais:</strong> Sistemas subterrâneos massivos - 30+ m² de área, 6+ metros profundidade! Centenas de câmaras especializadas: jardins de fungos, criadouros, depósitos de lixo. Engenharia de ventilação complexa!</p>
        <p><strong>Impacto:</strong> Consideradas pragas agrícolas - podem desfolhar laranjal inteiro em dia! Mas papel ecológico crucial - reciclam matéria vegetal, arejam solo.</p>
        <p><strong>Curiosidades:</strong> Rainha vive 10-20 anos! Pode pôr milhões de ovos. Operárias vivem meses. Cortam 17% de folhagem em algumas florestas!</p>`
    },
    {
        name: "Libélula-imperador",
        scientificName: "Anax imperator",
        image: "https://museubiodiversidade.uevora.pt/wp-content/uploads/2019/11/4340_Ai-I.jpg",
        description: `<p><strong>Nome Científico:</strong> Anax imperator</p>
        <p><strong>Características:</strong> Libélula GIGANTE magnífica! Até 8cm corpo, 11cm envergadura. Machos azul brilhante com faixa preta dorsal. Fêmeas verde/azul pálido. Olhos enormes verde-azulados!</p>
        <p><strong>Habitat:</strong> Europa, Norte África, Ásia. Lagos, lagoas, rios lentos com vegetação. Ninfas aquáticas, adultos terrestres/aéreos.</p>
        <p><strong>VOO IMPOSSÍVEL:</strong> Pode voar 50 km/h! Pode pairar, voar para trás, de lado, fazer piruetas impossíveis. Quatro asas independentes permitem manobrabilidade suprema. Considera melhor voador do reino animal!</p>
        <p><strong>VISÃO 360°:</strong> Olhos compostos têm 30.000 omatídeos CADA! Visão quase esférica completa - vê tudo exceto pequeno ponto cego atrás. Detecta movimento instantaneamente. Processa imagens 5x mais rápido que humanos!</p>
        <p><strong>PREDADOR SUPREMO:</strong> Taxa de sucesso de caça 95%! MELHOR predador animal conhecido. Caça mosquitos, moscas, abelhas, borboletas em pleno voo. Calcula trajetória interceptação instantaneamente.</p>
        <p><strong>Fase aquática:</strong> Ninfa vive 2-3 anos submersa! Predadora voraz - come girinos, alevins, insetos aquáticos, até outras ninfas. Usa "máscara" (labium estendido) para capturar presas tipo Alien!</p>
        <p><strong>Emergência dramática:</strong> Ninfa sobe planta emergente, exoesqueleto racha, adulto arrasta-se para fora. Asas expandem e endurecem. Transformação total!</p>
        <p><strong>Migração:</strong> Algumas populações migram centenas de quilômetros! Cruzam Oceano Índico - 6.000+ km!</p>
        <p><strong>Curiosidades:</strong> Existem há 300+ milhões de anos - PRÉ-dinossauros! Libélulas ancestrais tinham 70cm envergadura! Comem próprio peso em presas diariamente. Machos territoriais - defendem seções de água. Pernas formam "cesta" para capturar presas em voo!</p>`
    },
    {
        name: "Besouro-golias",
        scientificName: "Goliathus goliatus",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Goliathus_goliatus_vol.jpg",
        description: `<p><strong>Nome Científico:</strong> Goliathus goliatus</p>
        <p><strong>Características:</strong> Um dos MAIORES besouros do mundo! Até 11cm comprimento, 100g peso! Cores espetaculares - branco/creme com padrões pretos tipo zebra. Machos têm "chifre" bifurcado em forma de Y.</p>
        <p><strong>Habitat:</strong> Florestas tropicais da África - Congo, Camarões, Tanzânia. Vivem em copa de árvores.</p>
        <p><strong>TAMANHO GIGANTE:</strong> Competem com besouro-elefante e besouro-titã por título maior besouro. Larva pode pesar 100g - tamanho de rato! Uma das maiores larvas de inseto.</p>
        <p><strong>Alimentação:</strong> Larvas comem matéria orgânica podre, proteína (carne em natureza/cativeiro). Adultos bebem seiva de árvores, comem frutas maduras especialmente banana.</p>
        <p><strong>Voo impressionante:</strong> Apesar de peso massivo, VOA! Asas geram barulho zumbido alto tipo helicóptero. Voo desajeitado mas efetivo. Procuram seiva e parceiros voando entre árvores.</p>
        <p><strong>Dimorfismo sexual:</strong> Machos maiores com chifre Y para combates. Fêmeas menores com cabeça tipo cunha para cavar buracos em madeira (oviposição).</p>
        <p><strong>Ciclo de vida:</strong> Larva vive 1-2 anos crescendo massivamente. Pupa 3-4 meses. Adulto vive 3-6 meses - época reprodutiva.</p>
        <p><strong>Força:</strong> Pode levantar 850x peso! Força proporcional incrível.</p>
        <p><strong>Coleção e comércio:</strong> Muito populares entre colecionadores! Espécimes vendidos por centenas de dólares. Criação comercial em Japão, Europa. Algumas espécies ameaçadas por coleta excessiva.</p>
        <p><strong>Curiosidades:</strong> Nome vem do gigante bíblico Golias. Cinco espécies no gênero - todas enormes! Élitros parecem mármore polido. Tarsos (pés) têm almofadas adesivas que permitem escalar superfícies lisas!</p>`
    },
    {
        name: "Joaninha-de-sete-pintas",
        scientificName: "Coccinella septempunctata",
        image: "https://www.casadasciencias.org/storage/app/uploads/public/65c/8e9/a91/65c8e9a91b2f3166019791.jpg",
        description: `<p><strong>Nome Científico:</strong> Coccinella septempunctata</p>
        <p><strong>Características:</strong> Joaninha clássica icônica! Élitros vermelhos brilhantes com 7 pontos pretos (3 em cada + 1 compartilhado central). Corpo hemisférico 7-8mm. Cabeça preta com manchas brancas.</p>
        <p><strong>Habitat:</strong> Originária Europa/Ásia. Introduzida América do Norte como controle biológico. Campos, jardins, florestas, praticamente qualquer lugar com pulgões!</p>
        <p><strong>PREDADORA DE PULGÕES:</strong> Come até 50 pulgões POR DIA! Larva come até 400 durante desenvolvimento. HEROÍNA da agricultura - controle natural de pragas. Economiza bilhões em pesticidas!</p>
        <p><strong>Defesa química:</strong> Quando ameaçada, secreta fluido amarelo fedorento (hemolinfa) das articulações das pernas. Sabor horrível + tóxico para predadores! "Reflexo de sangramento".</p>
        <p><strong>Coloração de aviso:</strong> Vermelho + preto = cores aposemáticas universais. Sinal visual: "sou tóxica, não coma!" Pássaros aprendem rapidamente a evitar.</p>
        <p><strong>Ciclo de vida:</strong> Fêmea põe 10-50 ovos amarelos em colônia de pulgões. Larvas (tipo "jacaré miniatura" preto com manchas) comem vorazmente por 3 semanas. Pupa 7-10 dias. Adulto emerge.</p>
        <p><strong>Agregação de inverno:</strong> Milhares hibernam juntas em locais protegidos! Agregações massivas em rochas, árvores, às vezes dentro de casas. Sobrevivem frio extremo.</p>
        <p><strong>Voo:</strong> Asas membranosas escondidas sob élitros. Podem voar longas distâncias procurando comida.</p>
        <p><strong>Simbolismo cultural:</strong> Símbolo de sorte em muitas culturas! "Ladybug" (senhora besouro) refere-se à Virgem Maria - vermelho = manto, pontos = sete alegrias/dores. Na agricultura, chegada de joaninhas é vista como bênção!</p>
        <p><strong>Curiosidades:</strong> Número de pontos NÃO indica idade - sempre 7! Pode viver 1-2 anos. "Finge de morta" quando perturbada. Introduzida deliberadamente para controle de pulgões em pomares.</p>`
    },
    {
        name: "Louva-a-deus-orquídea",
        scientificName: "Hymenopus coronatus",
        image: "https://br.bossanews.com/wp-content/uploads/2024/11/Snapinsta.app_82888918_496646820998566_8155754553383613686_n_1080.jpg",
        description: `<p><strong>Nome Científico:</strong> Hymenopus coronatus</p>
        <p><strong>Características:</strong> ESPETACULARMENTE LINDA! Parece flor de orquídea perfeitamente! Corpo rosa/branco, pernas achatadas tipo pétalas. Fêmeas até 6cm, machos menores (3cm). Mimetismo floral perfeito!</p>
        <p><strong>Habitat:</strong> Florestas tropicais do Sudeste Asiático - Malásia, Indonésia, Tailândia. Vive em plantas floridas.</p>
        <p><strong>CAMUFLAGEM AGRESSIVA:</strong> Não se esconde em flores - ELA É a flor! Flores (insetos polinizadores) vêm até ela pensando que é flor verdadeira. Emboscada perfeita! Estratégia chamada "mimetismo agressivo".</p>
        <p><strong>Atração de presas:</strong> Reflete UV tipo flores! Insetos polinizadores veem padrões UV e são atraídos. Quando pousam para "coletar néctar", ATACADA!</p>
        <p><strong>Caça:</strong> Pernas dianteiras modificadas tipo navalha dobram instantaneamente, espinhos prendem presa. Ataque leva 0.01 segundos! Come abelhas, moscas, borboletas - às vezes presas maiores que ela!</p>
        <p><strong>Dimorfismo sexual extremo:</strong> Fêmeas 2x maiores que machos! Após acasalamento, fêmea frequentemente COME macho (canibalismo sexual). Macho = proteína para ovos.</p>
        <p><strong>Mudança de cor:</strong> Pode mudar de branco para rosa dependendo ambiente! Muda durante ecdise (troca de pele). Adaptação à flor hospedeira!</p>
        <p><strong>Desenvolvimento:</strong> 7-8 mudas até adulto. Cada muda, camuflagem melhora! Ninfas já imitam flores.</p>
        <p><strong>Popularidade:</strong> Pet exótica muito popular! Criação em cativeiro estabelecida. Cara e delicada de manter.</p>
        <p><strong>Curiosidades:</strong> Único louva-a-deus que imita flor específica! Maioria imita folhas/galhos. Cabeça triangular pode girar 180°! Visão estereoscópica - única entre insetos. Pode julgar distância exatamente!</p>`
    },
    {
        name: "Vagalume",
        scientificName: "Photinus pyralis",
        image: "https://pictureinsect.com/image-handle/image/1080/153732551901446183.jpeg?x-oss-process=image/format,webp/resize,s_343&v=1.0",
        description: `<p><strong>Nome Científico:</strong> Photinus pyralis</p>
        <p><strong>Características:</strong> Besouro mágico luminoso! Corpo alongado marrom-escuro (1-2cm), élitros com borda vermelha/amarela. Abdômen tem órgãos luminosos especiais!</p>
        <p><strong>Habitat:</strong> Leste da América do Norte. Campos úmidos, margens de florestas, jardins, perto de água. Ativo crepúsculo/noite no verão.</p>
        <p><strong>BIOLUMINESCÊNCIA:</strong> Produz luz fria amarela-esverdeada! Reação química: luciferina + luciferase + oxigênio = luz. Eficiência 95%+ (LED só 10%!). Quase ZERO calor - "luz fria" perfeita!</p>
        <p><strong>Comunicação por luz:</strong> Machos voam piscando padrão específico da espécie. Fêmeas no chão respondem com próprio padrão se interessadas. Código morse do amor! Cada espécie tem padrão único - evita acasalamento errado.</p>
        <p><strong>Sincronização:</strong> Algumas espécies sincronizam flashes! Milhares piscam juntos em uníssono perfeito. Espetáculo natural incrível em Sudeste Asiático e Américas!</p>
        <p><strong>Larvas luminosas:</strong> Chamadas "glow-worms"! Também bioluminescentes. Vivem em solo comendo lesmas, caracóis, minhocas. Injetam enzimas digestivas, sugam presa liquefeita!</p>
        <p><strong>Defesa:</strong> Toxina (lucibufaginas) torna vagalumes venenosos! Predadores que comem ficam doentes - aprendem a evitar. Luz também pode servir de aviso.</p>
        <p><strong>Ciclo de vida:</strong> Larva vive 1-2 anos no solo. Pupa 2-3 semanas. Adulto vive apenas 2 meses - época reprodutiva.</p>
        <p><strong>Fêmeas "femme fatale":</strong> Algumas espécies de Photuris imitam padrões de outras espécies, atraem machos desavisados, e COMEM eles! Adquirem toxinas da presa.</p>
        <p><strong>Ameaças:</strong> Declínio sério - poluição luminosa (interfere comunicação), perda de habitat, pesticidas.</p>
        <p><strong>Curiosidades:</strong> Cientistas estudam luciferase para biomedicina - marca células cancerígenas! Turismo de vagalumes cresce - pessoas viajam para ver sincronizações!</p>`
    },
    {
        name: "Bicho-pau-gigante",
        scientificName: "Phobaeticus serratipes",
        image: "https://www.infoescola.com/wp-content/uploads/2010/06/bicho-pau.jpg",
        description: `<p><strong>Nome Científico:</strong> Phobaeticus serratipes</p>
        <p><strong>Características:</strong> O INSETO MAIS LONGO DO MUNDO! Fêmeas atingem 56cm comprimento total (corpo + pernas)! Corpo sozinho 35cm. Fino tipo graveto gigante. Marrom/verde.</p>
        <p><strong>Habitat:</strong> Florestas tropicais de Bornéu, Malásia. Dossel florestal alto - raramente desce.</p>
        <p><strong>CAMUFLAGEM PERFEITA:</strong> Corpo longo fino + cor marrom/verde + textura rugosa = galho indistinguível! Fica imóvel dias inteiros. Predadores passam direto sem notar!</p>
        <p><strong>Comportamento defensivo:</strong> Quando ameaçado, vários truques: (1) Tanatose - finge morte, cai tipo graveto, (2) Balanço - imita galho ao vento, (3) Espinhos nas pernas machucam predadores.</p>
        <p><strong>Alimentação:</strong> Herbívoro - come folhas de várias plantas tropicais. Ativo à noite principalmente.</p>
        <p><strong>Reprodução:</strong> Partenogênese facultativa - fêmeas podem reproduzir SEM machos! Clones femininos. Mas reprodução sexual também ocorre quando machos disponíveis.</p>
        <p><strong>Ovos incríveis:</strong> Parecem sementes de plantas! Caem ao chão da floresta. Têm estrutura (capitulum) que formigas adoram - formigas carregam ovos para ninho, comem capitulum, descartam ovo intacto. Dispersão por formigas!</p>
        <p><strong>Regeneração:</strong> Pode regenerar pernas perdidas! Após mudas, perna cresce novamente. Menor, mas funcional.</p>
        <p><strong>Desenvolvimento:</strong> Ovo → ninfa (múltiplas mudas, 1+ ano) → adulto. Fêmeas adultas vivem 1-2 anos.</p>
        <p><strong>Record mundial:</strong> Espécime em museu mede 56.7cm! Segurado por cientista parece galho de árvore.</p>
        <p><strong>Curiosidades:</strong> Mais de 3.000 espécies de bicho-pau! Variam de 1.5cm a 56cm. Nome científico Phobaeticus significa "alarmante, assustador". Completamente inofensivos - sem veneno, picada, mordida!</p>`
    }
];

// ===============================================
// FUNÇÕES DAS GALERIAS
// ===============================================

// Elementos de galeria (já declarados no início do arquivo, mas garantindo aqui)
const galleryBtn = document.getElementById('galleryBtn');
const galleryMenu = document.getElementById('galleryMenu');
const closeGalleryMenu = document.getElementById('closeGalleryMenu');
const openJellyGallery = document.getElementById('openJellyGallery');
const openInsectGallery = document.getElementById('openInsectGallery');
const jellyfishGalleryPage = document.getElementById('jellyfishGalleryPage');
const insectGalleryPage = document.getElementById('insectGalleryPage');
const backFromJellyGallery = document.getElementById('backFromJellyGallery');
const backFromInsectGallery = document.getElementById('backFromInsectGallery');
const jellyfishGalleryGrid = document.getElementById('jellyfishGalleryGrid');
const insectGalleryGrid = document.getElementById('insectGalleryGrid');

// Modal de detalhes (já declarado, mas garantindo)
const detailModal = document.getElementById('detailModal');
const closeDetailBtn = document.getElementById('closeDetailBtn');
const detailImage = document.getElementById('detailImage');
const detailTitle = document.getElementById('detailTitle');
const detailText = document.getElementById('detailText');

// Criar galeria de águas-vivas
function createJellyfishGallery() {
    jellyfishGalleryGrid.innerHTML = '';
    jellyfishData.forEach((jelly, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.1}s`;
        
        const img = document.createElement('img');
        img.className = 'gallery-item-image';
        img.src = jelly.image;
        img.alt = jelly.name;
        img.loading = 'lazy';
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'gallery-item-name';
        nameDiv.textContent = jelly.name;
        
        item.appendChild(img);
        item.appendChild(nameDiv);
        
        item.addEventListener('click', () => showDetail(jelly));
        
        jellyfishGalleryGrid.appendChild(item);
    });
}

// Criar galeria de insetos
function createInsectGallery() {
    insectGalleryGrid.innerHTML = '';
    insectData.forEach((insect, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.style.animationDelay = `${index * 0.1}s`;
        
        const img = document.createElement('img');
        img.className = 'gallery-item-image';
        img.src = insect.image;
        img.alt = insect.name;
        img.loading = 'lazy';
        
        const nameDiv = document.createElement('div');
        nameDiv.className = 'gallery-item-name';
        nameDiv.textContent = insect.name;
        
        item.appendChild(img);
        item.appendChild(nameDiv);
        
        item.addEventListener('click', () => showDetail(insect));
        
        insectGalleryGrid.appendChild(item);
    });
}

// Mostrar detalhes de espécie
function showDetail(species) {
    detailImage.src = species.image;
    detailImage.alt = species.name;
    detailTitle.textContent = `${species.name} (${species.scientificName})`;
    detailText.innerHTML = species.description;
    detailModal.classList.add('show');
}

// Event listeners para botão de galeria
galleryBtn.addEventListener('click', () => {
    galleryMenu.classList.add('show');
});

closeGalleryMenu.addEventListener('click', () => {
    galleryMenu.classList.remove('show');
});

// Event listeners para abrir galerias
openJellyGallery.addEventListener('click', () => {
    galleryMenu.classList.remove('show');
    mainPage.classList.add('hidden');
    setTimeout(() => {
        createJellyfishGallery();
        jellyfishGalleryPage.classList.add('active');
        jellyfishGalleryPage.scrollTop = 0;
    }, 300);
});

openInsectGallery.addEventListener('click', () => {
    galleryMenu.classList.remove('show');
    mainPage.classList.add('hidden');
    setTimeout(() => {
        createInsectGallery();
        insectGalleryPage.classList.add('active');
        insectGalleryPage.scrollTop = 0;
    }, 300);
});

// Event listeners para voltar das galerias
backFromJellyGallery.addEventListener('click', () => {
    jellyfishGalleryPage.classList.remove('active');
    setTimeout(() => {
        mainPage.classList.remove('hidden');
    }, 500);
});

backFromInsectGallery.addEventListener('click', () => {
    insectGalleryPage.classList.remove('active');
    setTimeout(() => {
        mainPage.classList.remove('hidden');
    }, 500);
});

// Event listeners para modal de detalhes
closeDetailBtn.addEventListener('click', () => {
    detailModal.classList.remove('show');
});

detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        detailModal.classList.remove('show');
    }
});

// Fechar menu de galeria ao clicar fora
galleryMenu.addEventListener('click', (e) => {
    if (e.target === galleryMenu) {
        galleryMenu.classList.remove('show');
    }
});