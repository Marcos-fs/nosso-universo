export type TimelineItem = {
  date: string
  title: string
  description: string
  image?: string
}

export type PhotoItem = {
  image?: string
  title: string
  date: string
  caption: string
  accent: string
}

export type ConstellationMemory = {
  id: number
  x: number
  y: number
  title: string
  message: string
  featured?: boolean
}

export type OpenWhenItem = {
  label: string
  eyebrow: string
  message: string
  accent: string
}

/**
 * Tudo que é pessoal mora aqui.
 * Substitua os textos entre colchetes sem precisar tocar nos componentes.
 */
export const loveData = {
  couple: {
    myName: 'Marcos',
    partnerName: 'Alice',
    startDate: '2026-09-05T00:00:00-03:00',
    startDateLabel: '05/09/2026',
    year: new Date().getFullYear().toString(),
  },
  hero: {
    title: 'Entre bilhões de pessoas,\neu encontrei você.',
    subtitle: 'E, de alguma forma, o meu lugar passou a ser onde você está.',
    image: '/images/hero/main.png',
  },
  music: {
    title: 'De Janeiro a Janeiro',
    artist: 'Roberta Campos & Nando Reis',
    file: '/audio/nossa-musica.mp3',
  },
  timeline: [
    {
      date: '05/09/2026',
      title: 'Li vinho?',
      description: 'Foi aqui que alguma coisa começou, mesmo que naquela época a gente ainda não soubesse o tamanho que isso teria.',
      image: '/images/memories/memory-01.png',
    },
  ] satisfies TimelineItem[],
  littleThings: [
    'Seu jeito de sorrir quando tenta esconder que está feliz.',
    'Como você consegue melhorar um dia ruim sem nem perceber.',
    'As conversas que começam sem assunto e terminam horas depois.',
    'O jeito que você transforma momentos comuns em lembranças.',
    'A calma que aparece quando você está por perto.',
    'As pequenas histórias que você conta como se fossem enormes.',
    'A forma como você enxerga detalhes que quase todo mundo deixa passar.',
    'Os nossos silêncios que nunca parecem vazios.',
    'A pessoa que eu consigo ser quando estou com você.',
    'O seu jeito muito particular de dizer que se importa.',
    'A sensação de que qualquer lugar pode ficar especial com você.',
  ],
  openWhen: [
    {
      label: 'Abra quando estiver triste',
      eyebrow: 'para dias cinzas',
      message: 'Se você abriu isso porque está triste, primeiro vem cá. Eu queria poder aparecer aí agora e te dar um abraço. Como não posso atravessar a tela, vou tentar fazer isso com palavras: você não precisa resolver tudo hoje. Respira. Fica mais um pouco. Eu estou do seu lado, mesmo quando o dia parece pesado.',
      accent: 'rose',
    },
    {
      label: 'Abra quando sentir saudade',
      eyebrow: 'para encurtar distâncias',
      message: 'Eu também sinto. E gosto de pensar que a saudade só existe porque existe um lugar muito bom para onde voltar. Guarda essa mensagem como um abraço pequeno. Em breve a gente transforma a saudade em presença de novo.',
      accent: 'lavender',
    },
    {
      label: 'Abra quando estiver tendo um dia ruim',
      eyebrow: 'para apertar o pause',
      message: 'Nem todo dia precisa ser bonito para continuar sendo parte da nossa história. Hoje pode ser só um dia ruim — não uma vida ruim. Faz o mínimo necessário, se cuida e lembra: amanhã a gente tenta outra vez.',
      accent: 'gold',
    },
    {
      label: 'Abra quando quiser sorrir',
      eyebrow: 'para uma luz rápida',
      message: 'Lembre que em algum momento duas pessoas resolveram construir um universo inteiro com conversas aleatórias, piadas internas e planos que talvez nem façam sentido para mais ninguém. Funcionou. E eu gosto muito desse nosso jeito.',
      accent: 'rose',
    },
    {
      label: 'Abra quando estiver pensando em mim',
      eyebrow: 'para quando eu estiver longe',
      message: 'Eu provavelmente estou pensando em você também — talvez fazendo alguma coisa completamente comum e lembrando de um detalhe completamente nosso. Você aparece nos meus dias mais do que imagina.',
      accent: 'lavender',
    },
    {
      label: 'Abra quando precisar lembrar o quanto é importante',
      eyebrow: 'para guardar no bolso',
      message: 'Você não é importante só pelo que faz. Você é importante por existir, por ser você, por deixar o mundo um pouco diferente depois que passa por ele. Na minha vida, isso muda tudo.',
      accent: 'gold',
    },
    {
      label: 'Abra quando estiver com raiva de mim',
      eyebrow: 'para antes de responder',
      message: 'Se eu fiz algo que machucou você, eu quero ouvir — de verdade, sem tentar ganhar a conversa. Você merece cuidado até nos momentos difíceis. Depois que a raiva passar um pouco, a gente conversa com mais calma. Eu ainda estou aqui.',
      accent: 'rose',
    },
    {
      label: 'Abra quando quiser sentir um abraço meu',
      eyebrow: 'para quando faltar colo',
      message: 'Fecha os olhos por alguns segundos. Imagina meus braços em volta de você, sem pressa, daquele jeito que não precisa explicar nada. É isso que eu queria te dar agora: um lugar para descansar.',
      accent: 'lavender',
    },
  ] satisfies OpenWhenItem[],
  photos: [
    { image: '/images/photos/photo-01.jpg', title: 'Um instante nosso', date: '[DATA]', caption: '[LEGENDA DA FOTO 01]', accent: 'rose' },
    { image: '/images/photos/photo-02.jpg', title: 'Onde tudo ficou bonito', date: '[DATA]', caption: '[LEGENDA DA FOTO 02]', accent: 'lavender' },
    { image: '/images/photos/photo-03.jpg', title: 'Riso fora de hora', date: '[DATA]', caption: '[LEGENDA DA FOTO 03]', accent: 'gold' },
    { image: '/images/photos/photo-04.jpg', title: 'Sem precisar de legenda', date: '[DATA]', caption: '[LEGENDA DA FOTO 04]', accent: 'rose' },
    { image: '/images/photos/photo-05.jpg', title: 'Coisas que eu guardo', date: '[DATA]', caption: '[LEGENDA DA FOTO 05]', accent: 'lavender' },
    { image: '/images/photos/photo-06.jpg', title: 'Ainda quero voltar', date: '[DATA]', caption: '[LEGENDA DA FOTO 06]', accent: 'gold' },
    { image: '/images/photos/photo-07.jpg', title: 'Mais um pedaço da gente', date: '[DATA]', caption: '[LEGENDA DA FOTO 07]', accent: 'rose' },
  ] satisfies PhotoItem[],
  constellation: [
    { id: 1, x: 16, y: 28, title: 'O dia em que...', message: '[MEMÓRIA DE UMA PRIMEIRA VEZ]' },
    { id: 2, x: 31, y: 53, title: 'Aquela conversa', message: '[A CONVERSA QUE VOCÊ NUNCA ESQUECEU]' },
    { id: 3, x: 49, y: 33, title: 'Uma pequena virada', message: '[O MOMENTO EM QUE ALGO MUDOU]' , featured: true },
    { id: 4, x: 63, y: 59, title: 'Nosso lugar', message: '[LOCAL ESPECIAL]' },
    { id: 5, x: 78, y: 25, title: 'A lembrança escondida', message: '[AQUELE MOMENTO QUE EU NUNCA CONTEI QUE GUARDEI]' },
    { id: 6, x: 83, y: 73, title: 'Um riso qualquer', message: '[UMA COISA SIMPLES QUE VIROU MEMÓRIA]' },
    { id: 7, x: 28, y: 78, title: 'E daqui para frente', message: '[ALGO QUE AINDA VAMOS VIVER]' },
  ] satisfies ConstellationMemory[],
  reasons: [
    'Porque você faz o mundo parecer um pouco menos pesado.',
    'Porque eu gosto de quem eu sou quando estou com você.',
    'Porque até o silêncio contigo parece conversa.',
    'Porque você virou parte das coisas que eu espero encontrar no meu dia.',
    'Porque o seu sorriso muda a temperatura de qualquer lugar.',
    'Porque você presta atenção nas pequenas coisas.',
    'Porque você me faz rir quando eu menos espero.',
    'Porque as nossas conversas nunca precisam de roteiro.',
    'Porque você é casa sem deixar de ser aventura.',
    'Porque eu posso ser honesto com você.',
    'Porque você tem um jeito só seu de cuidar.',
    'Porque você não tenta caber em uma versão menor de si.',
    'Porque eu adoro descobrir novas partes de você.',
    'Porque você torna o comum memorável.',
    'Porque a sua presença acalma alguma coisa em mim.',
    'Porque você sabe quando falar e quando só ficar.',
    'Porque você me lembra de olhar para o que importa.',
    'Porque com você até fazer nada parece um plano.',
    'Porque você é engraçada sem precisar tentar.',
    'Porque você não desiste fácil das coisas que ama.',
    'Porque você me surpreende nas horas mais simples.',
    'Porque você tem coragem para recomeçar.',
    'Porque a sua voz já virou um lugar conhecido.',
    'Porque eu gosto de ouvir as suas histórias.',
    'Porque você deixa espaço para eu ser eu.',
    'Porque você comemora as pequenas vitórias.',
    'Porque você consegue ser forte e delicada ao mesmo tempo.',
    'Porque eu me sinto escolhido quando estou com você.',
    'Porque você me faz querer cuidar melhor do nosso tempo.',
    'Porque você torna a saudade suportável.',
    'Porque a sua curiosidade deixa a vida mais interessante.',
    'Porque você não finge que tudo é perfeito.',
    'Porque a gente pode rir no meio de uma conversa séria.',
    'Porque você enxerga beleza onde eu não estava procurando.',
    'Porque você lembra de detalhes que eu nem sabia que contei.',
    'Porque a nossa história tem espaço para crescer.',
    'Porque você faz planos e também sabe improvisar.',
    'Porque você me dá vontade de guardar os dias.',
    'Porque eu ainda fico feliz quando vejo seu nome aparecer.',
    'Porque você torna o futuro menos abstrato.',
    'Porque a sua opinião importa para mim.',
    'Porque você me ensina sem transformar tudo em lição.',
    'Porque você sabe rir de si mesma.',
    'Porque o seu abraço resolve conversas que palavras não resolvem.',
    'Porque eu gosto do nosso jeito de voltar um para o outro.',
    'Porque você respeita os meus silêncios.',
    'Porque você me encoraja sem me empurrar.',
    'Porque você é curiosa sobre o mundo.',
    'Porque eu gosto de dividir descobertas com você.',
    'Porque você percebe quando eu preciso de leveza.',
    'Porque você faz perguntas que ficam na cabeça.',
    'Porque sua autenticidade é bonita de ver.',
    'Porque você sabe transformar uma história em piada interna.',
    'Porque você me lembra que pedir ajuda também é coragem.',
    'Porque você não deixa a rotina apagar a ternura.',
    'Porque você consegue ser meu porto e minha janela.',
    'Porque os nossos planos não precisam ser grandiosos para serem bons.',
    'Porque você me ensina a desacelerar.',
    'Porque há verdade no jeito como você olha.',
    'Porque você faz perguntas e escuta as respostas.',
    'Porque você deixa o carinho aparecer nos detalhes.',
    'Porque você me faz querer contar como foi o meu dia.',
    'Porque você me conhece e ainda escolhe ficar.',
    'Porque você não transforma vulnerabilidade em fraqueza.',
    'Porque eu admiro o seu jeito de continuar.',
    'Porque você sabe encontrar humor no caos.',
    'Porque você me dá histórias que eu vou contar sorrindo.',
    'Porque você faz as distâncias parecerem temporárias.',
    'Porque eu amo o seu jeito de comemorar.',
    'Porque você não tem medo de sentir de verdade.',
    'Porque você trata as pessoas com atenção.',
    'Porque você me faz prestar atenção no presente.',
    'Porque você tem um lugar especial nas minhas melhores lembranças.',
    'Porque você transforma preocupação em conversa.',
    'Porque você sabe ser companhia sem ocupar todo o espaço.',
    'Porque eu posso dividir ideias estranhas com você.',
    'Porque você faz a vida parecer uma coisa que vale a pena observar.',
    'Porque as suas manias já fazem parte do meu carinho.',
    'Porque você não mede afeto por espetáculo.',
    'Porque você faz perguntas sobre o que eu sinto.',
    'Porque eu gosto da nossa coragem de tentar.',
    'Porque você é presença, não só promessa.',
    'Porque você me ensina que amor também é atenção.',
    'Porque você deixa os dias mais humanos.',
    'Porque as nossas memórias têm textura própria.',
    'Porque eu gosto de planejar e desviar do plano com você.',
    'Porque você me lembra que a vida acontece nos intervalos.',
    'Porque você trata os meus sonhos com respeito.',
    'Porque você me faz querer celebrar o caminho.',
    'Porque você sabe quando uma piada é necessária.',
    'Porque você me ajuda a voltar para mim.',
    'Porque você torna a espera menos solitária.',
    'Porque você não precisa fazer barulho para ser inesquecível.',
    'Porque você é uma das minhas escolhas favoritas.',
    'Porque eu ainda quero conhecer todas as suas versões.',
    'Porque com você eu entendo que amor pode ser tranquilo.',
    'Porque você é você — e isso já é muita coisa.',
    'Porque isso tudo ainda é só o começo.',
  ],
  dreams: [
    'Conhecer um lugar novo juntos.',
    'Viajar sem saber exatamente o que vai acontecer.',
    'Ter mais domingos preguiçosos.',
    'Colecionar fotos que ainda nem existem.',
    'Rir de coisas que só nós dois entendemos.',
    'Encontrar um lugar para voltar todos os anos.',
  ],
  finalLetter: `Eu poderia tentar transformar tudo isso em palavras bonitas.\n\nPoderia colocar fotos, músicas, datas e frases.\n\nMas a verdade é que nenhuma dessas coisas consegue explicar completamente o que você significa para mim.\n\nEu só queria criar um pequeno lugar onde algumas das coisas que sinto pudessem existir.\n\nUm lugar para guardar nossas memórias.\nAs que já aconteceram.\nAs que ainda vão acontecer.\n\nE todas aquelas pequenas coisas que talvez eu nunca consiga dizer do jeito certo.\n\nObrigado por fazer parte da minha história.\nE, principalmente, obrigado por permitir que eu faça parte da sua.\n\nEu te amo.\n\n[MEU NOME]`,
  secretMessage: 'Você encontrou uma coisa que eu escondi aqui. ❤️\n\nNem tudo precisa estar no caminho principal. Algumas coisas são só nossas.',
  surprise: {
    image: '/images/hero/surprise.png',
    text: 'Se eu pudesse voltar ao começo...\neu escolheria você de novo.',
    subtext: 'Sem pensar duas vezes.',
  },
} as const
