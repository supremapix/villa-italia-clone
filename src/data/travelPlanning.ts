export interface TravelGuide { title: string; intro: string; question: string; answer: string; links: string[][]; source: string[] | null; }
export const travelPlanning: Record<string, TravelGuide> = {
  "/": {
    "title": "Pousada com piscina em Penha: organize sua estadia",
    "intro": "A Vila D’Itália apresenta duas piscinas, externa e coberta. Piscina coberta não significa necessariamente aquecida: confirme com a equipe as condições de uso para sua estadia. Quem procura uma pousada perto do Beto Carrero também precisa organizar o quarto, o transporte e os dias de praia. Na Vila D’Itália, comece pelas fotos das acomodações e informe à central as datas, o número de adultos e a idade das crianças. Assim, a consulta considera a composição real do grupo, não apenas um valor genérico de diária.",
    "question": "Como comparar opções de hospedagem em Penha?",
    "answer": "Compare o valor total do período, a configuração das camas, os serviços incluídos e as condições de cancelamento. Confirme separadamente os ingressos do parque e os deslocamentos. A pousada não aceita pets; não organize a viagem com animal de estimação sem escolher outra hospedagem adequada.",
    "links": [
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/faq",
        "Consultar informações da estadia"
      ],
      [
        "/#reservation-form",
        "Consultar datas e valores"
      ]
    ],
    "source": null
  },
  "/acomodacoes": {
    "title": "Qual quarto escolher para sua viagem a Penha?",
    "intro": "Uma boa escolha começa pela quantidade de pessoas e pela forma como desejam dormir. Ao consultar um quarto, pergunte sobre as camas disponíveis, a ocupação permitida e qualquer necessidade de acesso. As fotos ajudam a conhecer os ambientes, mas a unidade reservada e as condições precisam ser confirmadas pela equipe.",
    "question": "O que informar para receber uma cotação adequada?",
    "answer": "Envie entrada, saída, número de adultos e idades das crianças. Acrescente pedidos sobre cama, escadas ou mobilidade antes de confirmar a reserva. Solicite por escrito o valor do período e o que está incluído. Não considere uma imagem como garantia de uma categoria ou unidade específica.",
    "links": [
      [
        "/faq",
        "Consultar informações da estadia"
      ],
      [
        "/#reservation-form",
        "Consultar datas e valores"
      ],
      [
        "/beto-carrero-world",
        "Planejar a visita ao Beto Carrero"
      ]
    ],
    "source": null
  },
  "/faq": {
    "title": "Dúvidas sobre reserva: o que confirmar antes de pagar",
    "intro": "Use esta central para organizar sua consulta e registrar as condições combinadas. Datas, ocupação, forma de pagamento e política de cancelamento fazem parte da decisão. Se uma informação daqui não resolver uma necessidade específica, descreva essa necessidade à central em vez de presumir que o serviço está disponível.",
    "question": "Enviar o formulário já confirma minha hospedagem?",
    "answer": "Não. O formulário prepara uma conversa pelo WhatsApp. Disponibilidade, valor e confirmação da reserva dependem do atendimento da pousada. Guarde o resumo recebido e confira os dados antes de efetuar qualquer pagamento. Lembre-se de que a Vila D’Itália não aceita animais de estimação.",
    "links": [
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/#reservation-form",
        "Consultar datas e valores"
      ]
    ],
    "source": null
  },
  "/instagram": {
    "title": "Das fotos do Instagram ao planejamento da estadia",
    "intro": "O Instagram apresenta cenas da pousada e publicações sobre a experiência de hospedagem. Para escolher datas e acomodação, complemente as imagens com as informações deste site e uma conversa com a central. Fotos antigas, stories ou comentários não substituem a confirmação das condições da sua reserva.",
    "question": "E se as publicações do Instagram não carregarem?",
    "answer": "Use o link direto para o perfil ou continue navegando pelas acomodações e pelos guias do site. O carregamento da rede social pode depender de cookies, conexão ou login. Para tratar de disponibilidade, envie as datas e a composição do grupo pelo canal de reservas.",
    "links": [
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/faq",
        "Consultar informações da estadia"
      ],
      [
        "/#reservation-form",
        "Consultar datas e valores"
      ]
    ],
    "source": null
  },
  "/blog": {
    "title": "Guias de Penha para cada etapa da viagem",
    "intro": "Comece pelo assunto que resolve a próxima decisão: como chegar, onde ficar, o que fazer no parque ou como combinar praias e descanso. Os roteiros são sugestões de organização, não pacotes contratados. Leia a data de cada artigo e confirme informações que mudam, como ingressos, horários e eventos.",
    "question": "Qual guia ler primeiro para visitar Penha?",
    "answer": "Se já escolheu as datas, verifique o calendário do parque e a hospedagem antes de preencher todos os dias com passeios. Se ainda estiver comparando períodos, veja os guias sobre época da viagem e deslocamento. Reserve espaço para mudanças de clima e para o ritmo das pessoas do grupo.",
    "links": [
      [
        "/beto-carrero-world",
        "Planejar a visita ao Beto Carrero"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ]
    ],
    "source": null
  },
  "/beto-carrero-world": {
    "title": "Hospedagem e parque: duas reservas para organizar",
    "intro": "Planejar uma viagem ao Beto Carrero envolve o ingresso e também a chegada, o descanso e o retorno. Confirme o dia de funcionamento e as regras do ingresso no canal oficial do parque. Depois, ajuste as noites de hospedagem ao roteiro para não depender de uma viagem longa imediatamente antes ou depois de um dia de atrações.",
    "question": "Reservar a pousada inclui ingresso do Beto Carrero?",
    "answer": "Não presuma essa inclusão. Peça uma confirmação expressa dos itens da proposta. Ingresso, estacionamento, transporte e opcionais devem ser verificados separadamente quando não estiverem descritos na reserva. As restrições das atrações e a programação devem ser consultadas no parque para a data escolhida.",
    "links": [
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/faq",
        "Consultar informações da estadia"
      ],
      [
        "/blog/dicas-beto-carrero-world-familia",
        "Organizar um dia em família"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/bairros-penha": {
    "title": "Praias de Penha: encontre o passeio pelo seu objetivo",
    "intro": "Escolher uma praia envolve mais do que procurar uma foto bonita. Considere o acesso, a previsão do tempo, as condições do mar e o tempo disponível. Este índice reúne praias e denominações locais; nomes usados informalmente precisam ser conferidos no mapa antes de iniciar um deslocamento.",
    "question": "Qual praia de Penha escolher com crianças?",
    "answer": "Não existe condição segura garantida apenas pelo nome da praia. Confira a balneabilidade do ponto pretendido, observe a sinalização no local e siga as orientações dos guarda-vidas. Compare também a caminhada desde o transporte, a sombra e as necessidades da família. A hospedagem pode ser organizada separadamente do passeio.",
    "links": [
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Consultar a balneabilidade"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/mapa-do-site": {
    "title": "Encontre a informação certa antes de reservar",
    "intro": "O mapa reúne as páginas de hospedagem e os guias de viagem da Vila D’Itália. Use acomodações para comparar ambientes, dúvidas para revisar condições e os artigos para montar o roteiro. As páginas sobre praias ajudam a explorar possibilidades, mas não representam unidades da pousada em cada localidade.",
    "question": "Onde consulto valores e disponibilidade?",
    "answer": "No atendimento de reservas. Os artigos e as páginas locais são informativos e não mostram estoque de quartos em tempo real. Ao entrar em contato, envie as datas e a quantidade de hóspedes para que a equipe possa orientar sua consulta.",
    "links": [
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/faq",
        "Consultar informações da estadia"
      ],
      [
        "/#reservation-form",
        "Consultar datas e valores"
      ]
    ],
    "source": null
  },
  "/blog/ferias-verao-janeiro-fevereiro-marco-2026-penha-balneario-camboriu": {
    "title": "Como usar um guia de férias de uma temporada anterior",
    "intro": "Este artigo trata de janeiro, fevereiro e março de 2026. Para planejar outra temporada, aproveite a lógica do roteiro, mas substitua datas, valores e programação por informações atuais. Defina primeiro as noites em Penha e depois avalie se o deslocamento a Balneário Camboriú cabe no tempo disponível.",
    "question": "Posso usar os mesmos horários no próximo verão?",
    "answer": "Não como confirmação. Consulte os operadores e os calendários da nova edição. Compare o custo do transporte com o tempo que deseja dedicar a cada passeio, sem assumir que atrações ou eventos repetem a programação do ano anterior.",
    "links": [
      [
        "/blog/temporada-verao-penha-sc-2027",
        "Planejar o próximo verão"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/cuidados-pele-verao-dicas-saude-praia-penha": {
    "title": "Organize a rotina de praia sem substituir orientação de saúde",
    "intro": "Inclua pausas e locais protegidos do sol no planejamento, especialmente quando o grupo também terá um dia inteiro de parque. Leve os itens de uso pessoal recomendados pelo profissional que acompanha você. Este texto é informativo e não determina tratamento, produto ou dose para uma condição individual.",
    "question": "Como adaptar o roteiro se alguém tem uma necessidade de saúde?",
    "answer": "Informe limitações relevantes aos prestadores e procure orientação profissional antes da viagem quando necessário. Tenha uma alternativa ao passeio ao ar livre. Para condições agudas ou sintomas importantes, procure atendimento em vez de usar o roteiro como orientação médica.",
    "links": [
      [
        "/blog/penha-sc-com-criancas-roteiro-familia",
        "Planejar com a família"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": null
  },
  "/blog/temporada-verao-2025-2026-penha-sc": {
    "title": "Temporada 2025/2026: referência histórica, não oferta vigente",
    "intro": "As datas desta temporada já passaram. Use o artigo para entender como dividir uma viagem entre Penha, praia e parque, mas confirme a programação correspondente ao ano em que pretende viajar. Uma hospedagem divulgada para um verão não mantém automaticamente o mesmo preço ou condição no seguinte.",
    "question": "O que atualizar antes de aproveitar este roteiro?",
    "answer": "Refaça a consulta de quartos, ingressos e transporte. Verifique o calendário do parque e os eventos municipais atuais. Para organizar as próximas férias, consulte também o guia de verão de 2027 e peça uma proposta para seu período exato.",
    "links": [
      [
        "/blog/temporada-verao-penha-sc-2027",
        "Guia de verão 2027"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/reveillon-2026-penha-santa-catarina": {
    "title": "Réveillon de 2026: como consultar outra virada",
    "intro": "Este artigo se refere à virada já encerrada. Para o próximo réveillon, trate horários, festas, trânsito e condições comerciais como informações a confirmar novamente. Escolha a cidade em que pretende passar a noite antes de definir deslocamentos e hospedagem.",
    "question": "A programação de um réveillon vale para o seguinte?",
    "answer": "Não. Shows, fogos, acessos e regras dependem dos anúncios da edição. Confirme o local do evento e a possibilidade de retorno antes de reservar transporte. Não conte com uma atração apenas porque ela aparece em uma publicação antiga.",
    "links": [
      [
        "/blog/reveillon-2026-2027-penha-balneario-camboriu",
        "Planejar a virada 2026/2027"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/melhores-praias-penha": {
    "title": "A melhor praia depende do passeio que você quer fazer",
    "intro": "Para caminhar, fotografar ou passar parte do dia junto ao mar, a escolha pode ser diferente. Compare o ponto de acesso e a distância real desde a hospedagem. Não transforme uma lista de praias em uma obrigação de visitar todas no mesmo dia: isso pode consumir o tempo de descanso em deslocamentos.",
    "question": "Dá para escolher a praia só pela aparência da água?",
    "answer": "Não. A aparência não informa, sozinha, a qualidade da água nem as condições para banho. Consulte o relatório de balneabilidade e observe ondas, correntes, sinalização e orientações locais antes de entrar no mar.",
    "links": [
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Verificar a qualidade da água"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/blog/roteiro-3-dias-penha": {
    "title": "Três dias em Penha: organize a ordem dos passeios",
    "intro": "Uma forma prática de organizar três dias é separar chegada e reconhecimento, visita ao parque e um período flexível para praia ou descanso. Isso é uma sugestão editorial, não um cronograma obrigatório. Ajuste a ordem ao calendário do Beto Carrero, aos horários da hospedagem e ao transporte contratado.",
    "question": "É melhor deixar a praia para o último dia?",
    "answer": "Depende do retorno. Se o voo ou a estrada exigir saída cedo, mantenha o último dia mais simples. Evite comprometer o check-out com um passeio distante. O ideal é escolher uma atividade principal por dia e deixar margem para imprevistos.",
    "links": [
      [
        "/blog/como-chegar-penha-sc-dicas-transporte",
        "Organizar chegada e retorno"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/gastronomia-penha": {
    "title": "Onde comer em Penha: planeje também as refeições",
    "intro": "Ao montar o passeio, reserve tempo para procurar uma refeição que atenda ao grupo. Consulte o cardápio vigente, o horário de atendimento e a forma de pagamento antes de se deslocar. Se houver crianças, restrições alimentares ou necessidade de acesso, envie essas perguntas ao estabelecimento.",
    "question": "Como comparar restaurantes sem depender de um preço antigo?",
    "answer": "Peça o cardápio atual e confirme o que acompanha o prato e para quantas pessoas ele é indicado. Verifique taxas e condições diretamente com o restaurante. A indicação em um guia não significa reserva de mesa nem disponibilidade do produto.",
    "links": [
      [
        "/blog/gastronomia-penha-sc-frutos-do-mar",
        "Guia de frutos do mar"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/dicas-beto-carrero": {
    "title": "Antes do parque: um checklist curto que evita imprevistos",
    "intro": "Tenha em mãos ingresso, documentos exigidos e as orientações recebidas no canal de compra. Consulte o calendário e as restrições das atrações que pretende visitar. Combine um ponto de encontro com o grupo e organize o transporte de retorno antes de entrar.",
    "question": "Preciso planejar todas as atrações com antecedência?",
    "answer": "Escolha prioridades, mas não trate a sequência como garantida. Filas, clima e operação podem mudar o dia. Use o mapa e os avisos oficiais e mantenha pausas no roteiro. Não prometa a uma criança uma atração sem verificar os requisitos aplicáveis.",
    "links": [
      [
        "/blog/beto-carrero-world-guia-completo-familias-2026",
        "Planejar a visita em família"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/guia-completo-penha-sc-beto-carrero": {
    "title": "Penha e Beto Carrero: conecte as decisões da viagem",
    "intro": "Defina o período de viagem, depois verifique ingresso e hospedagem para as mesmas datas. Com essas etapas organizadas, distribua passeios pela cidade conforme transporte e clima. Um roteiro enxuto com tempo de descanso costuma ser mais fácil de adaptar do que uma lista extensa de atrações distantes.",
    "question": "Qual decisão deve vir antes de fechar o roteiro?",
    "answer": "Confira se as atividades principais funcionam no período desejado e se o quarto atende ao grupo. Só então estime os deslocamentos. Alimentação, ingresso, estacionamento e passeios não devem ser presumidos como parte da diária.",
    "links": [
      [
        "/blog/roteiro-3-dias-penha",
        "Modelo de roteiro de três dias"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/praias-penha-sc-litoral-norte": {
    "title": "Praias e litoral norte: organize o passeio por regiões",
    "intro": "Uma viagem com várias cidades exige comparar tempo de estrada e tempo de permanência em cada destino. Escolha um núcleo por dia e mantenha uma alternativa próxima à hospedagem. Consultar o mapa ajuda a evitar idas e voltas desnecessárias entre atrações.",
    "question": "Vale conhecer várias praias em um dia?",
    "answer": "Se o objetivo for um reconhecimento, pode fazer sentido escolher poucas paradas. Para banho ou descanso, reserve mais tempo em uma delas e confirme as condições do ponto escolhido. Não use uma estimativa antiga de trânsito como garantia para o retorno.",
    "links": [
      [
        "/blog/praias-de-penha-sc-guia-completo",
        "Comparar praias de Penha"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/blog/festas-eventos-penha-sc-abril-julho-2026": {
    "title": "Eventos de abril a julho de 2026: consulte a edição correta",
    "intro": "O período indicado neste artigo está encerrado. Datas antigas ajudam a contextualizar o calendário, mas não confirmam nova edição nem sua realização. Ao planejar uma viagem motivada por evento, procure anúncio do organizador com ano, local e programação.",
    "question": "Posso reservar para o mesmo mês no próximo ano?",
    "answer": "Antes, confirme a data oficial do evento que motivou a viagem. Verifique também a política de cancelamento da hospedagem e do transporte, pois calendários podem mudar. Separe informações históricas de anúncios vigentes.",
    "links": [
      [
        "/blog/festas-eventos-penha-regiao-agosto-dezembro-2026",
        "Consultar outros períodos"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/beto-carrero-world-guia-completo-familias-2026": {
    "title": "Beto Carrero em família: planejar pelo perfil do grupo",
    "intro": "Idades, alturas e preferências ajudam a selecionar atrações, mas a regra válida é a publicada pelo parque para cada equipamento. Distribua as prioridades entre os integrantes e combine pontos de encontro. Leve em conta pausas e o trajeto de volta para a pousada.",
    "question": "Como evitar comprar opcionais sem necessidade?",
    "answer": "Leia o que o ingresso já inclui e compare separadamente cada produto adicional. Confirme data, uso e regras antes da compra. A decisão deve considerar as atrações pretendidas, não uma promessa genérica de aproveitar tudo.",
    "links": [
      [
        "/blog/dicas-beto-carrero-world-familia",
        "Checklist para o grupo"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/praias-de-penha-sc-guia-completo": {
    "title": "Compare as praias com um roteiro de perguntas",
    "intro": "Antes de sair, descubra como chegar ao ponto desejado, como retornar e quais condições encontrará naquele dia. Os guias ajudam a conhecer nomes e possibilidades; a escolha para banho depende de informações atuais e da avaliação no local.",
    "question": "Como organizar uma visita sem carro?",
    "answer": "Verifique as opções de transporte e a possibilidade de retorno antes de partir. Salve o endereço exato e um contato de apoio. Não suponha que haverá veículo disponível em todo ponto ou horário; confirme com o prestador para o período da visita.",
    "links": [
      [
        "/blog/como-chegar-penha-sc-dicas-transporte",
        "Planejar os deslocamentos"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/blog/beto-carrero-world-dicas-guia-2026": {
    "title": "Ingresso, hospedagem e transporte: confira cada item",
    "intro": "Uma viagem ao parque fica mais clara quando cada contratação tem data, valor e condições registrados. Guarde os comprovantes de compra e confira se os nomes e períodos estão corretos. O conteúdo do guia orienta o planejamento, mas não substitui as regras do ingresso.",
    "question": "Como saber se uma promoção atende à minha viagem?",
    "answer": "Leia as datas válidas e os requisitos no canal oficial. Compare o custo final para todos os viajantes e evite concluir que uma condição anunciada para uma pessoa se aplica ao grupo inteiro. Confirme o que acontece em caso de mudança de data.",
    "links": [
      [
        "/blog/pousada-perto-beto-carrero-como-escolher",
        "Comparar a hospedagem"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/o-que-fazer-em-penha-sc": {
    "title": "O que fazer em Penha além do parque",
    "intro": "Você pode organizar a viagem por interesses: passeios pela orla, gastronomia, fotografias e períodos de descanso. Selecione as atividades conforme as condições do dia e confirme previamente os serviços que dependem de operador. Não é necessário preencher todos os horários para aproveitar a cidade.",
    "question": "Como escolher uma atividade para a chegada?",
    "answer": "Prefira algo compatível com o cansaço do deslocamento e com o horário de entrada no quarto. Uma caminhada ou refeição próxima pode ser mais prática do que um passeio com saída marcada. Pergunte à pousada sobre a chegada antes de combinar o restante do dia.",
    "links": [
      [
        "/blog/penha-sc-fim-de-semana-roteiro-rapido",
        "Planejar um fim de semana"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/penha-sc-com-criancas-roteiro-familia": {
    "title": "Penha com crianças: menos correria, mais organização",
    "intro": "Informe as idades das crianças na consulta de hospedagem e verifique a configuração das camas. Nos passeios, considere alimentação, descanso e deslocamentos. Um roteiro familiar não precisa repetir o ritmo de uma viagem só de adultos.",
    "question": "O que perguntar antes de reservar um passeio com crianças?",
    "answer": "Consulte idade ou altura exigida, duração, transporte, equipamentos e regras de acompanhamento. No parque, use as orientações da atração. Na praia, siga a sinalização e os guarda-vidas, sem assumir que a descrição de água calma garante segurança.",
    "links": [
      [
        "/blog/melhor-epoca-beto-carrero-world-criancas",
        "Escolher o período da viagem"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/gastronomia-penha-sc-frutos-do-mar": {
    "title": "Frutos do mar: informe preferências e restrições",
    "intro": "Ao escolher um prato, confirme ingredientes, preparo e tamanho da porção no estabelecimento. Se houver alergia ou restrição alimentar, comunique-a antes do pedido e pergunte sobre o risco de contato cruzado. Um roteiro gastronômico não garante que todo restaurante ofereça adaptações.",
    "question": "Posso contar com o mesmo cardápio em qualquer época?",
    "answer": "Não. Disponibilidade e preço precisam ser verificados no dia. Peça uma alternativa quando o produto desejado não estiver disponível e confirme o valor antes de fechar o pedido. Evite inferir procedência ou frescor apenas pela localização próxima ao mar.",
    "links": [
      [
        "/blog/gastronomia-penha",
        "Organizar as refeições"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/ilha-feia-penha-sc-passeio-barco": {
    "title": "Passeio de barco: confirme operador, saída e condições",
    "intro": "Uma saída de barco deve ser combinada com um prestador que informe ponto de embarque, duração, itens incluídos e regras de segurança. A realização pode depender do tempo e das condições do mar. Não considere a presença da ilha no roteiro como garantia de desembarque ou de passeio disponível.",
    "question": "O que verificar antes de pagar pelo passeio?",
    "answer": "Peça identificação do operador, valor total, política para cancelamento e orientações aos passageiros. Confirme se o roteiro contempla apenas observação ou outra atividade. Evite marcar compromissos logo após a previsão de retorno.",
    "links": [
      [
        "/blog/o-que-fazer-em-dias-de-chuva-penha-sc",
        "Preparar uma alternativa"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.defesacivil.sc.gov.br/",
      "Alertas da Defesa Civil de Santa Catarina"
    ]
  },
  "/blog/penha-sc-fim-de-semana-roteiro-rapido": {
    "title": "Fim de semana em Penha: escolha uma prioridade",
    "intro": "Em uma estadia curta, o horário de chegada e de retorno pesa tanto quanto o número de passeios. Se o parque for a prioridade, consulte seu calendário antes de escolher a noite de hospedagem. Se a intenção for descansar, evite preencher os dois dias com deslocamentos longos.",
    "question": "Como aproveitar sem correr entre várias cidades?",
    "answer": "Concentre o roteiro em Penha e selecione poucas atividades próximas entre si. Deixe uma delas como opcional, conforme clima e disposição. Confira check-in e check-out e combine com a equipe qualquer necessidade fora do previsto.",
    "links": [
      [
        "/blog/roteiro-3-dias-penha",
        "Adaptar um roteiro mais longo"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/maricultura-penha-sc-turismo": {
    "title": "Maricultura e turismo: conheça sem interferir no trabalho",
    "intro": "O cultivo de moluscos faz parte do contexto produtivo de Penha, mas áreas de trabalho não são automaticamente atrações abertas à visitação. Para uma experiência relacionada ao tema, procure informações locais e confirme se existe atividade organizada para visitantes no período.",
    "question": "Posso visitar qualquer área de cultivo?",
    "answer": "Não presuma acesso livre. Respeite sinalização, propriedades, embarcações e orientações dos responsáveis. Caso encontre uma visita oferecida, confira responsável, logística e condições antes de contratar. Na gastronomia, pergunte ao restaurante sobre o produto servido.",
    "links": [
      [
        "/blog/gastronomia-penha-sc-frutos-do-mar",
        "Conhecer a gastronomia"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/praias-tranquilas-litoral-norte-sc": {
    "title": "Tranquilidade na praia não é uma condição permanente",
    "intro": "Movimento, vento, ondas e acesso variam ao longo do dia e do ano. Para descansar, compare a possibilidade de chegar e sair com calma e tenha uma alternativa próxima. Uma praia pouco movimentada pode não oferecer os serviços de que sua família precisa.",
    "question": "Praia vazia significa melhor escolha para banho?",
    "answer": "Não. Avalie condições do mar, sinalização e balneabilidade. A ausência de outras pessoas não comprova segurança ou infraestrutura. Se o objetivo for apenas contemplar, mantenha distância de costões molhados e respeite áreas sinalizadas.",
    "links": [
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Checar o ponto de banho"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/blog/temporada-verao-penha-sc-2027": {
    "title": "Verão 2027: monte a viagem com confirmações atuais",
    "intro": "Comece pelo período em que o grupo pode viajar e consulte hospedagem e parque para essas datas. Planeje pausas entre passeios e uma alternativa para chuva. A organização antecipada ajuda a comparar propostas, mas não garante desconto, sol ou ausência de filas.",
    "question": "O que precisa estar definido antes de fechar as férias?",
    "answer": "Datas de entrada e saída, composição do grupo, valor total e condições de cancelamento da hospedagem. Consulte separadamente ingressos e transporte. Eventos futuros só devem entrar como compromisso depois de anúncio confirmado pelo organizador.",
    "links": [
      [
        "/blog/o-que-fazer-em-dias-de-chuva-penha-sc",
        "Plano para mudança de clima"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/como-chegar-penha-sc-dicas-transporte": {
    "title": "Do aeroporto à pousada: confirme o endereço de destino",
    "intro": "Ao pesquisar o traslado, use o endereço completo da hospedagem, não apenas Penha. Considere a retirada de bagagem e o tempo necessário até o ponto de embarque. Compare propostas para o grupo inteiro e informe necessidades de transporte com antecedência.",
    "question": "Devo marcar o transporte para o horário exato do pouso?",
    "answer": "Combine com o prestador como funciona a espera e o acompanhamento de atrasos. O horário de pouso não equivale ao momento de saída do terminal. No retorno, siga a antecedência indicada pela companhia aérea e confira as condições do trajeto.",
    "links": [
      [
        "/blog/curitiba-ate-beto-carrero-world-quanto-tempo",
        "Alternativa de viagem rodoviária"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://aeroportos.motiva.com.br/navegantes-sc/o-aeroporto/como-chegar-e-sair/",
      "Acesso ao Aeroporto de Navegantes"
    ]
  },
  "/blog/pousada-perto-beto-carrero-como-escolher": {
    "title": "Compare localização e condições, não só a diária",
    "intro": "Uma pousada pode atender bem ao seu roteiro quando a localização, o quarto e as condições da reserva combinam com o grupo. Verifique o trajeto real até a entrada do parque e se pretende fazê-lo de carro ou outro transporte. Proximidade no mapa não garante uma caminhada adequada.",
    "question": "Qual informação pedir para comparar duas propostas?",
    "answer": "Peça o valor total das mesmas datas e ocupação, a categoria do quarto, itens incluídos e cancelamento. Confirme necessidades específicas antes de pagar. Uma tarifa menor pode ter condições diferentes; compare o conjunto, não apenas o número anunciado.",
    "links": [
      [
        "/blog/pousada-perto-beto-carrero-world-penha-sc",
        "Planejar a estadia perto do parque"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": null
  },
  "/blog/penha-sc-baixa-temporada-vantagens": {
    "title": "Baixa temporada: compare datas reais",
    "intro": "Viajar fora dos períodos mais disputados pode ser uma preferência de quem tem flexibilidade, mas preço, clima e movimento precisam ser consultados para cada data. Confira principalmente o calendário das atividades que motivam a viagem antes de fechar a hospedagem.",
    "question": "Baixa temporada garante diária menor e parque vazio?",
    "answer": "Não. Tarifas e procura variam com feriados, eventos e disponibilidade. Solicite propostas para períodos alternativos e compare o custo total. Considere também o funcionamento das atrações e a previsão próxima da viagem.",
    "links": [
      [
        "/blog/melhor-epoca-beto-carrero-world-criancas",
        "Escolher o período"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/mirante-praia-vermelha-penha-vista": {
    "title": "Fotografar a paisagem: acesso e retorno vêm primeiro",
    "intro": "Antes de buscar um ponto alto ou uma vista da Praia Vermelha, confirme o acesso permitido e as condições do percurso. Prefira horários que permitam retorno com boa visibilidade. Um enquadramento bonito não justifica ultrapassar barreiras ou aproximar-se de bordas.",
    "question": "É preciso fazer trilha para conseguir boas fotos?",
    "answer": "Não necessariamente. Escolha pontos acessíveis e autorizados compatíveis com a mobilidade do grupo. Se o passeio exigir caminhada, verifique percurso e condições locais. Não confunda uma imagem ilustrativa com a situação atual de um acesso.",
    "links": [
      [
        "/blog/trilhas-ecologicas-penha-sc",
        "Planejar caminhadas"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.defesacivil.sc.gov.br/",
      "Alertas da Defesa Civil de Santa Catarina"
    ]
  },
  "/blog/curitiba-ate-beto-carrero-world-quanto-tempo": {
    "title": "Curitiba a Penha: planeje uma janela, não uma promessa",
    "intro": "O tempo de viagem muda com o ponto de saída, as paradas, o trânsito e o clima. Consulte a rota para o endereço da pousada e as condições das rodovias próximo da partida. Evite vincular o horário de chegada a uma estimativa única encontrada em um artigo.",
    "question": "É melhor ir direto ao parque depois da estrada?",
    "answer": "Avalie descanso, horário de funcionamento e disposição do motorista. Se houver pouco tempo ou previsão de chegada incerta, considerar uma noite anterior pode facilitar o planejamento. Confirme a hospedagem para a data correta e não presuma entrada antecipada.",
    "links": [
      [
        "/blog/roteiro-3-dias-penha",
        "Distribuir os dias"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.arteris.com.br/nossas-rodovias/litoral-sul/em-tempo-real/",
      "Condições da rodovia na Arteris Litoral Sul"
    ]
  },
  "/blog/melhor-epoca-beto-carrero-world-criancas": {
    "title": "A melhor época depende da família",
    "intro": "Disponibilidade escolar, orçamento, clima e funcionamento das atrações devem ser comparados juntos. Não existe mês que garanta filas pequenas ou tempo estável. Escolha datas em que o roteiro permita descanso e que sejam compatíveis com as condições do parque.",
    "question": "Como comparar duas datas com crianças?",
    "answer": "Consulte o calendário oficial, os preços aplicáveis ao grupo e as condições de hospedagem. Considere tempo de viagem e pausas. Se as datas forem flexíveis, peça propostas separadas para comparar sem misturar categorias ou duração da estadia.",
    "links": [
      [
        "/blog/penha-sc-com-criancas-roteiro-familia",
        "Organizar o ritmo familiar"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/pousada-perto-beto-carrero-world-penha-sc": {
    "title": "Descanso antes e depois do parque",
    "intro": "Ao escolher uma pousada em Penha para visitar o Beto Carrero, pense na noite anterior e no retorno. Uma reserva bem definida informa quarto, ocupação e período. Confirme a localização e como será o deslocamento, em vez de decidir apenas pela expressão perto do parque.",
    "question": "Como consultar a Vila D’Itália para essa viagem?",
    "answer": "Envie à central as datas de entrada e saída, adultos e idades das crianças. Pergunte sobre a configuração do quarto e as condições do período. Não presuma ingresso ou transporte incluído; esses itens precisam estar descritos expressamente na proposta.",
    "links": [
      [
        "/blog/pousada-perto-beto-carrero-como-escolher",
        "Checklist para comparar hospedagem"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": null
  },
  "/blog/roteiro-litoral-norte-sc-saindo-de-londrina": {
    "title": "Saindo de Londrina: combine estrada e descanso",
    "intro": "Organize a viagem rodoviária com pausas e um horário de chegada realista. Separe o dia de deslocamento das atividades com ingresso ou hora marcada quando o tempo de viagem for incerto. Antes de partir, confira o caminho até a hospedagem e as condições das rodovias utilizadas.",
    "question": "Vale incluir várias cidades na mesma estadia?",
    "answer": "Compare as distâncias atuais e o tempo que sobra para aproveitar cada destino. Para um grupo que quer parque e praia, concentrar as noites em uma base pode simplificar a bagagem. Não transforme todas as atrações em compromissos obrigatórios.",
    "links": [
      [
        "/blog/guia-completo-penha-sc-beto-carrero",
        "Organizar a base em Penha"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.arteris.com.br/nossas-rodovias/litoral-sul/em-tempo-real/",
      "Condições da rodovia na Arteris Litoral Sul"
    ]
  },
  "/blog/dicas-beto-carrero-world-familia": {
    "title": "Combine prioridades antes de entrar no parque",
    "intro": "Cada pessoa pode escolher uma atividade importante, e o grupo pode definir como se reunir caso se divida. Consulte as regras de cada atração e mantenha os ingressos e informações essenciais acessíveis. Pausas fazem parte do roteiro, principalmente com crianças ou pessoas que precisam de mais descanso.",
    "question": "Como lidar com uma atração indisponível?",
    "answer": "Tenha alternativas e acompanhe os avisos oficiais no dia. Não conte com todas as atividades operando em qualquer condição. Reorganize as prioridades sem comprometer o horário combinado para o retorno à hospedagem.",
    "links": [
      [
        "/blog/beto-carrero-world-dicas-guia-2026",
        "Conferir ingresso e regras"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/praia-armacao-penha-sc": {
    "title": "Praia da Armação: organize uma visita a partir da pousada",
    "intro": "Para conhecer a Armação, defina se o objetivo é caminhar, observar a paisagem ou entrar no mar. O planejamento muda conforme o trecho escolhido e as condições do dia. Consulte o ponto no mapa e leve em conta o trajeto de volta, especialmente se estiver com crianças.",
    "question": "Posso combinar praia e parque no mesmo dia?",
    "answer": "Pode ser possível conforme horários e disposição, mas não é uma obrigação. Um dia inteiro de parque já exige deslocamento e caminhada. Se preferir a praia em outro período, confira novamente clima, balneabilidade e sinalização antes de sair.",
    "links": [
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Consultar a praia antes de sair"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/blog/roteiro-maringa-beto-carrero-world": {
    "title": "Maringá a Penha: organize a chegada antes das atrações",
    "intro": "Uma viagem a partir de Maringá precisa considerar estrada, pausas e acomodação do grupo. Consulte o percurso atualizado e combine a previsão de chegada com a pousada. Evite marcar uma atividade de horário rígido imediatamente após um deslocamento longo.",
    "question": "Quais dados enviar à hospedagem antes da viagem?",
    "answer": "Informe as datas e a previsão de chegada, além do número de hóspedes e idades das crianças. Confirme como proceder em caso de atraso. Registre o endereço e os contatos da pousada para não depender apenas de uma pesquisa durante o trajeto.",
    "links": [
      [
        "/blog/como-chegar-penha-sc-dicas-transporte",
        "Checklist de chegada"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.arteris.com.br/nossas-rodovias/litoral-sul/em-tempo-real/",
      "Condições da rodovia na Arteris Litoral Sul"
    ]
  },
  "/blog/festas-eventos-penha-regiao-agosto-dezembro-2026": {
    "title": "Eventos no segundo semestre: confirme o anúncio vigente",
    "intro": "Este guia cobre meses com eventos de perfis diferentes e inclui períodos já encerrados. Ao escolher uma atividade, verifique o ano, a cidade e a programação publicada pelo organizador. Não trate a proximidade entre municípios como garantia de retorno rápido após um evento.",
    "question": "Como combinar um evento com hospedagem em Penha?",
    "answer": "Consulte a rota e o transporte para o horário de saída previsto. Compare se a base em Penha atende ao conjunto da viagem, incluindo parque ou praia. Leia as condições de cancelamento caso a programação do evento seja alterada.",
    "links": [
      [
        "/blog/penha-sc-fim-de-semana-roteiro-rapido",
        "Organizar uma estadia curta"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/oktoberfest-blumenau-marejada-itajai-2026-base-penha": {
    "title": "Oktoberfest e Marejada: separe a edição do planejamento",
    "intro": "Uma publicação sobre 2026 não confirma datas de 2027 nem demonstra que todas as atividades previstas ocorreram. Para organizar uma próxima visita, confirme o anúncio da edição e compare o deslocamento entre Penha e a cidade do evento.",
    "question": "Penha é sempre a melhor base para esses eventos?",
    "answer": "Depende do objetivo da viagem. Se o evento for a única atividade, compare também o tempo de retorno e as opções próximas ao local. Se a viagem incluir Beto Carrero e praias, avalie o conjunto antes de escolher as noites de hospedagem.",
    "links": [
      [
        "/blog/festas-eventos-penha-regiao-agosto-dezembro-2026",
        "Consultar o calendário regional"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://oktoberfestblumenau.com.br/",
      "Oktoberfest Blumenau"
    ]
  },
  "/blog/reveillon-2026-2027-penha-balneario-camboriu": {
    "title": "Virada 2026/2027: reserve com condições claras",
    "intro": "Escolha onde pretende passar a virada e confirme programação e acessos no anúncio oficial. Consulte a hospedagem para todo o período, incluindo eventuais exigências de número de noites, sem presumir que elas existam. Combine transporte e retorno antes de contratar atividades.",
    "question": "O guia confirma festa, fogos ou ceia na pousada?",
    "answer": "Não. Qualquer evento, refeição especial ou pacote precisa de confirmação direta e expressa na proposta. A programação pública também depende do município e do organizador. Use o artigo para planejar perguntas, não como comprovante de contratação.",
    "links": [
      [
        "/blog/temporada-verao-penha-sc-2027",
        "Planejar férias após a virada"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/natal-2026-penha-balneario-camboriu-blumenau": {
    "title": "Natal na região: confirme local e horário de cada atividade",
    "intro": "Decorações, apresentações e atrações podem ter calendários próprios. Verifique o anúncio da edição de 2026 antes de escolher o deslocamento. Para uma viagem com crianças, combine horários de passeio com alimentação e retorno, evitando percursos extensos em sequência.",
    "question": "Posso incluir uma ceia na reserva da pousada?",
    "answer": "Pergunte à equipe se há alguma condição específica para a data. Não presuma ceia, programação ou refeições especiais a partir deste guia. Caso deseje reservar um restaurante, confirme diretamente menu, horário, valor e regras.",
    "links": [
      [
        "/blog/gastronomia-penha",
        "Organizar as refeições"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/feriados-prolongados-2026-penha-beto-carrero": {
    "title": "Feriado e folga: confira o calendário do seu grupo",
    "intro": "Um feriado não torna automaticamente os dias vizinhos livres. Verifique compromissos profissionais e escolares antes de reservar. Depois consulte funcionamento do parque, transporte e hospedagem para o intervalo real em que todos podem viajar.",
    "question": "Como evitar uma reserva com datas erradas?",
    "answer": "Escreva dia da semana e data na consulta, confira entrada e saída e peça o valor total do período. Guarde as condições combinadas. Se precisar mudar depois, consulte a política da contratação em vez de presumir remarcação gratuita.",
    "links": [
      [
        "/blog/penha-sc-fim-de-semana-roteiro-rapido",
        "Montar uma viagem curta"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.betocarrero.com.br/duvidas-frequentes",
      "Dúvidas oficiais do Beto Carrero"
    ]
  },
  "/blog/festa-nacional-do-marisco-2027-penha-sc": {
    "title": "Festa do Marisco 2027: acompanhe a confirmação oficial",
    "intro": "Uma edição futura exige anúncio próprio. Antes de viajar por causa da festa, confirme datas, local e programação no canal municipal ou do organizador. Não use a agenda de uma edição anterior como confirmação de atrações ou ingressos para 2027.",
    "question": "Posso reservar a hospedagem antes da divulgação?",
    "answer": "Você pode consultar condições, mas precisa considerar a incerteza do evento e as regras da reserva. Peça à pousada as condições aplicáveis e decida se pretende viajar mesmo que a programação não coincida com as datas escolhidas.",
    "links": [
      [
        "/blog/maricultura-penha-sc-turismo",
        "Conhecer o tema da maricultura"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/blog/trilhas-ecologicas-penha-sc": {
    "title": "Caminhadas em Penha: planeje acesso e retorno",
    "intro": "Antes de escolher uma trilha, procure informação atual sobre o percurso, permissão de acesso e condição do terreno. Avalie a experiência e a mobilidade do grupo. Leve em conta previsão do tempo e horário de retorno, sem depender de um tempo universal de caminhada.",
    "question": "Uma trilha citada no blog está sempre aberta?",
    "answer": "Não. Acesso e condições podem mudar. Respeite sinalização e orientação local, não entre em propriedades sem autorização e evite iniciar um percurso sem informação suficiente. Para um passeio mais simples, considere pontos acessíveis sem trilha.",
    "links": [
      [
        "/blog/penha-mobilidade-reduzida-planejamento-viagem",
        "Planejar conforme a mobilidade"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.defesacivil.sc.gov.br/",
      "Alertas da Defesa Civil de Santa Catarina"
    ]
  },
  "/blog/o-que-fazer-em-dias-de-chuva-penha-sc": {
    "title": "Chuva: reorganize antes de sair",
    "intro": "Veja a previsão e os alertas, depois confirme se a atividade contratada será realizada. Use o período para descansar ou escolher um programa compatível com as condições, sem deslocamentos desnecessários. Uma atração coberta também pode ter horário, capacidade ou acesso sujeitos a mudança.",
    "question": "O ingresso do parque muda automaticamente por causa da chuva?",
    "answer": "Não presuma remarcação ou reembolso. Consulte as condições da compra e os avisos oficiais. Se houver dúvida, fale com o canal em que adquiriu o ingresso antes de alterar o roteiro. A pousada não substitui o atendimento do operador.",
    "links": [
      [
        "/blog/dicas-beto-carrero",
        "Revisar o planejamento do parque"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.defesacivil.sc.gov.br/",
      "Alertas da Defesa Civil de Santa Catarina"
    ]
  },
  "/blog/por-do-sol-penha-sc": {
    "title": "Pôr do sol: escolha uma composição, não só um horário",
    "intro": "A luz e a visibilidade variam com a época e o tempo. Verifique a previsão próxima do passeio e escolha um local autorizado com retorno simples. Para fotografar, chegue com margem para observar a paisagem sem correr em pedras ou áreas molhadas.",
    "question": "O pôr do sol será sobre o mar em qualquer praia?",
    "answer": "Não. A posição do observador, a orientação do trecho e a época influenciam o enquadramento. Observe o mapa e adapte a composição à paisagem disponível. Não conte com uma fotografia de referência como garantia de céu, cor ou posição do sol.",
    "links": [
      [
        "/blog/mirante-praia-vermelha-penha-vista",
        "Planejar fotos da paisagem"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://www.defesacivil.sc.gov.br/",
      "Alertas da Defesa Civil de Santa Catarina"
    ]
  },
  "/blog/penha-sc-para-casais": {
    "title": "Viagem a dois: combine descanso e interesses",
    "intro": "Antes de fechar o roteiro, escolham uma prioridade de cada pessoa e deixem períodos livres. A consulta de hospedagem deve informar datas e preferências de acomodação. Refeições, passeios e eventuais pedidos especiais precisam ser combinados diretamente com quem os oferece.",
    "question": "A pousada oferece decoração ou pacote romântico?",
    "answer": "Consulte a equipe antes de contar com esse serviço. Uma sugestão de roteiro para casais não confirma decoração, brindes ou refeições especiais. Solicite uma proposta clara caso queira adicionar algo à estadia.",
    "links": [
      [
        "/blog/gastronomia-penha",
        "Planejar uma refeição"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": null
  },
  "/blog/balneabilidade-praias-penha-como-consultar": {
    "title": "Leia o ponto de coleta e a data do resultado",
    "intro": "No painel do IMA, selecione o município e identifique o ponto que corresponde ao local do passeio. Confira a data e a classificação, não apenas o nome da praia. O relatório é uma informação sobre qualidade da água, não uma avaliação completa das condições do mar naquele momento.",
    "question": "Um resultado próprio elimina outros cuidados?",
    "answer": "Não. Ondas, correntes, pedras e sinalização precisam ser observados no local. Siga a orientação dos guarda-vidas e não extrapole o resultado de um ponto para todos os trechos da praia. Se houver dúvida, procure informação atual antes do banho.",
    "links": [
      [
        "/blog/praias-de-penha-sc-guia-completo",
        "Explorar os guias de praias"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/blog/penha-mobilidade-reduzida-planejamento-viagem": {
    "title": "Mobilidade: confirme medidas e percurso, não rótulos",
    "intro": "Descreva suas necessidades concretas antes de reservar: tipo de acesso, circulação, banheiro, cama e transporte. Fotos gerais não mostram todas as medidas nem cada obstáculo. Peça confirmação sobre a unidade e o trajeto que efetivamente utilizará durante a estadia.",
    "question": "Como avaliar um quarto sem presumir acessibilidade?",
    "answer": "Faça perguntas específicas sobre degraus, portas, banheiro e apoio necessário. Solicite imagens ou medidas se forem decisivas e confirme a resposta com a equipe. Este guia não certifica acessibilidade da pousada ou dos passeios.",
    "links": [
      [
        "/blog/como-chegar-penha-sc-dicas-transporte",
        "Organizar o transporte"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ]
    ],
    "source": null
  },
  "/bairros-penha/armacao": {
    "title": "Armação: praia e hospedagem no mesmo roteiro",
    "intro": "Ao planejar um passeio pela Armação, marque no mapa o trecho que pretende conhecer. O nome é usado em uma área ampla, por isso a distância depende do destino exato. Para hóspedes da Vila D’Itália, vale comparar uma caminhada curta com outros passeios do dia.",
    "question": "Como escolher o ponto de encontro?",
    "answer": "Compartilhe um endereço ou localização precisa, não apenas o nome da praia. Combine a volta e confirme as condições para banho antes de sair.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/praia-alegre": {
    "title": "Praia Alegre: organize o período à beira-mar",
    "intro": "Defina se a visita será para caminhar, contemplar ou entrar na água. Cada objetivo exige cuidados diferentes com horário, acesso e condições do dia. Planeje também alimentação e retorno, sem depender de serviços cuja abertura não foi confirmada.",
    "question": "O que consultar antes de um banho?",
    "answer": "Localize o ponto de monitoramento aplicável no IMA e confira data e resultado. No local, observe a sinalização e siga as orientações de segurança.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/praia-grande": {
    "title": "Praia Grande: passeio com tempo para observar as condições",
    "intro": "O planejamento de uma visita à Praia Grande deve considerar o trecho e o acesso escolhido. Evite assumir que toda a extensão tem a mesma estrutura ou condição. Se pretende fotografar ou caminhar, escolha um ponto que permita retorno tranquilo.",
    "question": "Uma indicação para surf serve também para banho?",
    "answer": "Não necessariamente. Atividades diferentes exigem avaliação específica. Observe sinalização e condições locais; uma recomendação genérica não garante adequação para crianças ou banhistas.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/quilombo": {
    "title": "Quilombo: escolha o trecho antes de sair",
    "intro": "Ao incluir o Quilombo no roteiro, diferencie um passeio pela orla de uma visita a áreas rochosas. Defina onde pretende chegar e como voltar. Isso ajuda a organizar o tempo e evita procurar um acesso já no fim do dia.",
    "question": "Posso usar qualquer costão para tirar fotos?",
    "answer": "Respeite barreiras e sinalização. Não avance em pedras molhadas ou trechos expostos apenas para reproduzir uma imagem. Prefira pontos autorizados e compatíveis com a mobilidade do grupo.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/praia-vermelha": {
    "title": "Praia Vermelha: acesso, paisagem e retorno",
    "intro": "Uma visita à Praia Vermelha pode ser organizada em torno da paisagem, sem tornar o banho uma obrigação. Confirme o acesso e avalie as condições do dia. Se houver caminhada, reserve margem para a volta e não inicie o percurso sem informação suficiente.",
    "question": "Como combinar praia e fotografia?",
    "answer": "Escolha primeiro um ponto seguro e permitido. Confira previsão e visibilidade, leve apenas o necessário e preserve o tempo de retorno. A foto do guia não garante as condições atuais.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/poa": {
    "title": "Poá: organize uma parada que caiba no roteiro",
    "intro": "Para conhecer o Poá, escolha o ponto desejado no mapa e confirme o acesso. Uma parada curta para observar a paisagem pede uma organização diferente de um período de banho. Evite acrescentar muitas praias sem considerar o tempo entre elas.",
    "question": "O que fazer se o acesso estiver diferente do planejado?",
    "answer": "Respeite a sinalização e procure orientação local. Não entre por propriedades ou caminhos sem autorização. Mantenha outra atividade possível para o mesmo período.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/cancela": {
    "title": "Cancela: confirme o destino exato no mapa",
    "intro": "Ao buscar a Cancela, confira se a localização encontrada corresponde ao trecho que deseja visitar em Penha. Compartilhe esse ponto com quem viajará com você. Endereços precisos ajudam na consulta de transporte e na combinação de retorno.",
    "question": "Como planejar uma visita curta?",
    "answer": "Defina um horário de volta e deixe as necessidades de alimentação e transporte resolvidas. Se considerar entrar no mar, consulte o ponto de balneabilidade e as condições locais antes.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/cascalho": {
    "title": "Cascalho: conheça a paisagem com atenção ao terreno",
    "intro": "Antes de caminhar junto à água ou em áreas de pedras, observe o piso e as condições do local. O passeio pode ser voltado à contemplação, sem exigir acesso a todo trecho. Escolha o percurso conforme o conforto e a mobilidade do grupo.",
    "question": "O que considerar ao levar crianças?",
    "answer": "Avalie o caminho, a proximidade da água e os pontos de apoio disponíveis no dia. Não use a descrição de tranquilidade como garantia de segurança ou de infraestrutura.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/saudade": {
    "title": "Saudade: planeje o passeio pelo tempo disponível",
    "intro": "Uma visita à Saudade pode fazer parte de um roteiro mais simples por Penha. Antes de combinar outras paradas, confira o trajeto entre os pontos e preserve tempo para descansar. A decisão de entrar no mar deve ser tomada com informação atual.",
    "question": "Como evitar um roteiro corrido?",
    "answer": "Escolha uma atividade principal e deixe a próxima como opcional. Compare o tempo de permanência desejado com os deslocamentos e o horário de retorno à hospedagem.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/bacia-da-vovo": {
    "title": "Bacia da Vovó: confira informações atuais para a visita",
    "intro": "Ao pesquisar a Bacia da Vovó, consulte o ponto de coleta e a data no painel do IMA. Certificações ou notícias antigas não substituem essa consulta nem as condições vistas no local. Planeje o acesso e o retorno de acordo com seu grupo.",
    "question": "Uma certificação antiga garante água própria hoje?",
    "answer": "Não. Verifique o resultado atual do ponto e observe a sinalização. Qualidade da água, ondas e segurança do banho são avaliações diferentes; uma informação não substitui as demais.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/fortaleza": {
    "title": "Fortaleza: confirme qual trecho pretende conhecer",
    "intro": "Nomes de praias e pontos locais podem aparecer de formas diferentes em mapas e relatos. Para visitar a Fortaleza em Penha, identifique o destino e confirme o acesso antes de partir. Isso evita deslocamentos baseados apenas em uma descrição genérica.",
    "question": "Como conferir uma indicação recebida por mensagem?",
    "answer": "Peça a localização e compare com o mapa. Pergunte sobre acesso permitido e retorno. Se houver dúvida sobre o ponto, não improvise caminhos por áreas fechadas.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/manguinho": {
    "title": "Manguinho: uma visita com respeito ao entorno",
    "intro": "Organize a passagem pelo Manguinho sem interferir em atividades locais ou acessos de moradores. Escolha áreas permitidas e confirme o ponto de chegada. Para um passeio fotográfico, observe o movimento antes de posicionar o grupo.",
    "question": "Posso fotografar embarcações e pessoas de perto?",
    "answer": "Respeite a privacidade e peça autorização quando necessário. Não suba em embarcações nem entre em áreas de trabalho. Prefira registros da paisagem feitos a partir de acesso público permitido.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/monge": {
    "title": "Monge: confira acesso antes de montar o passeio",
    "intro": "Ao pesquisar o Monge, separe informações práticas de histórias ou descrições informais. O que importa para a visita é saber o ponto exato, o caminho permitido e como retornar. Planeje conforme o tempo e as condições encontradas.",
    "question": "Relatos sobre o lugar confirmam infraestrutura?",
    "answer": "Não. Verifique diretamente as condições de acesso e os serviços de que precisa. Leve em conta água, alimentação e transporte sem presumir que haverá oferta no destino.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/lucas": {
    "title": "Lucas: escolha um passeio compatível com o grupo",
    "intro": "Para incluir o Lucas no roteiro, confirme a localização e o tipo de acesso. Uma indicação de lugar reservado não informa, por si só, se o percurso atende a crianças, idosos ou pessoas com mobilidade reduzida. Pergunte sobre obstáculos antes de sair.",
    "question": "Como saber se o percurso atende à minha mobilidade?",
    "answer": "Procure informações específicas sobre terreno, distância e degraus. Se não conseguir confirmar, escolha uma opção com acesso conhecido. Evite tratar uma fotografia como avaliação completa do caminho.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/sao-miguel": {
    "title": "São Miguel: considere o deslocamento de ida e volta",
    "intro": "Ao organizar uma visita a São Miguel, use o endereço da hospedagem como ponto de partida e confira a rota atual. Planeje tempo para permanecer no destino, em vez de avaliar apenas a distância indicada no mapa.",
    "question": "Vale combinar São Miguel com o parque no mesmo dia?",
    "answer": "Compare horários, trânsito e disposição do grupo. Se o dia do parque já estiver cheio, reserve outro período para o passeio. Não presuma que deslocamentos curtos serão rápidos em qualquer horário.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/gravata": {
    "title": "Gravatá: diferencie o ponto de Penha dos outros resultados",
    "intro": "O nome Gravatá pode aparecer associado a diferentes trechos e municípios nos resultados de busca. Confirme o ponto que pretende visitar antes de pedir transporte. Compartilhe a localização precisa com o grupo e confira a previsão de retorno.",
    "question": "Como evitar escolher o destino errado no aplicativo?",
    "answer": "Verifique município, mapa e endereço, não só o nome exibido. Compare com a indicação recebida e confirme com o prestador antes de iniciar o trajeto.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/paciencia": {
    "title": "Paciência: prepare o passeio sem presumir serviços",
    "intro": "Para conhecer a Paciência, confirme acesso e condições com antecedência. Não conte com estrutura turística apenas porque o local aparece em um guia. Defina quanto tempo pretende ficar e organize transporte e itens pessoais conforme a visita.",
    "question": "O que fazer quando faltam informações sobre o acesso?",
    "answer": "Procure orientação atual e escolha outra opção se não houver confirmação suficiente. Evite improvisar caminhos, especialmente com tempo instável ou pouca luz para o retorno.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/cordas": {
    "title": "Cordas: confirme o nome e o acesso local",
    "intro": "Ao receber uma indicação para o Cordas, peça o ponto no mapa e confira se corresponde ao passeio desejado. Denominações e relatos podem variar. Para organizar a visita, priorize localização, acesso permitido e condições do dia.",
    "question": "Posso seguir apenas uma descrição de moradores?",
    "answer": "Use a indicação como ponto de partida, mas confirme o trajeto e respeite áreas privadas. Se houver atividade de pesca, não bloqueie passagens nem manuseie equipamentos.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://balneabilidade.ima.sc.gov.br/",
      "Boletins de balneabilidade do IMA"
    ]
  },
  "/bairros-penha/retiro": {
    "title": "Retiro: confirme a denominação antes do deslocamento",
    "intro": "Esta página utiliza uma denominação local que deve ser conferida no mapa e com orientação atual. Não considere o nome como comprovação de praia oficial, infraestrutura ou acesso público. Antes de incluir o ponto no roteiro, peça uma localização precisa.",
    "question": "E se o aplicativo não encontrar esse nome?",
    "answer": "Não escolha automaticamente um resultado parecido. Solicite o endereço ou coordenada do local indicado e confirme o acesso. Se a dúvida persistir, prefira um ponto identificado em fonte oficial.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/bairros-penha/farol": {
    "title": "Farol: a referência precisa indicar um lugar exato",
    "intro": "Um nome associado a farol pode designar pontos diferentes. A visita exige confirmação de localização e acesso, sem presumir entrada em instalações ou áreas restritas. Consulte a referência recebida antes de planejar fotos ou caminhada.",
    "question": "O nome permite concluir que há um farol visitável?",
    "answer": "Não. Uma denominação informal não comprova equipamento aberto ao público. Procure indicação oficial e respeite as restrições de acesso encontradas no local.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/bairros-penha/pescadores": {
    "title": "Pescadores: conheça sem atrapalhar atividades locais",
    "intro": "Esta denominação deve ser confirmada antes de orientar um trajeto. Em áreas associadas à pesca, mantenha passagens livres e respeite pessoas, redes e embarcações. A observação do cotidiano não significa autorização para entrar em estruturas de trabalho.",
    "question": "Como organizar uma visita respeitosa?",
    "answer": "Confirme onde visitantes podem circular, evite bloquear acessos e peça permissão para fotografias próximas. Não manuseie equipamentos ou embarcações sem autorização.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/bairros-penha/fundinho": {
    "title": "Fundinho: não confunda nome informal com endereço",
    "intro": "Antes de procurar o Fundinho, confirme a localização exata e a denominação utilizada por quem indicou o passeio. Este guia não garante que o nome corresponda a uma praia oficialmente delimitada. Planeje somente depois de saber como chegar e retornar.",
    "question": "O que registrar antes de sair?",
    "answer": "Guarde o ponto de destino, uma referência de acesso permitido e o trajeto de volta. Não dependa de sinal de internet para descobrir o caminho quando já estiver no local.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/bairros-penha/mirante": {
    "title": "Mirante: defina o ponto de observação",
    "intro": "Mirante pode ser uma descrição de uso, não um endereço único. Para organizar a visita, confira qual local está sendo indicado e se o acesso está autorizado. A melhor escolha é aquela que permite contemplação sem ultrapassar barreiras ou limites do terreno.",
    "question": "Posso contar com estacionamento ou estrutura no mirante?",
    "answer": "Somente após confirmação específica. Não deduza serviços pela palavra mirante. Pergunte sobre o percurso e prefira um retorno com boa visibilidade.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/bairros-penha/costao-quilombo": {
    "title": "Costão do Quilombo: contemplação com atenção",
    "intro": "Uma referência a costão indica um tipo de paisagem, mas não garante caminho autorizado ou condição para caminhar sobre pedras. Confirme o ponto de observação e mantenha distância de áreas expostas. Não use este guia como recomendação de entrada no mar.",
    "question": "Como escolher um local para fotografar o costão?",
    "answer": "Prefira acessos permitidos e piso estável, sem ultrapassar sinalização. Se o mar ou o terreno dificultar o passeio, mude o ponto de observação em vez de insistir no enquadramento.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  },
  "/bairros-penha/canto-armacao": {
    "title": "Canto da Armação: identifique qual extremidade visitar",
    "intro": "A expressão canto da praia depende da referência de quem fala. Confirme no mapa qual trecho da Armação foi indicado, principalmente ao combinar transporte ou encontro. Não presuma que toda a área tenha as mesmas condições de acesso e banho.",
    "question": "Como combinar um encontro sem desencontro?",
    "answer": "Compartilhe o ponto exato e uma referência visível. Confirme também o horário e a alternativa de retorno. Evite usar apenas o nome informal em uma solicitação de transporte.",
    "links": [
      [
        "/bairros-penha",
        "Explorar praias e localidades"
      ],
      [
        "/acomodacoes",
        "Comparar acomodações"
      ],
      [
        "/blog/balneabilidade-praias-penha-como-consultar",
        "Antes do banho: consultar o IMA"
      ]
    ],
    "source": [
      "https://turismo.penha.sc.gov.br/",
      "Turismo de Penha"
    ]
  }
};
