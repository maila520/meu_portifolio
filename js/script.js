// Dados dos projetos e desafios
const projects = [
  {
    title: 'Sistema de Cadastro de Corretores ',
    description: 'Mini site com banco de dados MySQL que permite cadastrar, editar e excluir corretores através de uma interface com validações de formulário, garantindo praticidade e integridade dos dados.',
     link: 'https://github.com/maila520/Projeto_Imovel_Guide'
  },
  {
    title: 'Site de Turismo – Desafio Acadêmico',
    description: 'Site com informações de destinos turísticos, incluindo presença de banheiros, restaurantes próximos e custo estimado da visita, representado com ícones de moeda para fácil visualização.',
    link: 'https://github.com/maila520/bootcamp-trabalho-final-Maila'
  },
  // Adicione mais projetos aqui
];

const challenges = [
  {
    title: 'Desafios do curso Front-End',
    description: 'Repositório com desafio acadêmico.',
    link: 'https://github.com/UnifelDesenvolvimentoWeb/vanillaChallengesJS'
  },
  {
    title: 'Desafios do curso Back-End',
    description: 'Repositório com desafio acadêmico.',
    link: 'https://github.com/UnifelDesenvolvimentoWeb/magic-functions'
  },
  // Adicione mais desafios aqui
];

const certificates = [
  {
    title: 'Certificação do Curso de Web Front-End',
    description: 'Certificado de conclusão do curso de Front- End pela Instituição Unifel + SalvadorTech.',
    link: 'https://drive.google.com/file/d/1t95Z68Hxl_PxuKTCmVJu_DEdxGas9flS/view?usp=drivesdk'
  },
  {
    title: 'Certificação do curso de Back-End',
    description: 'Programa New Thinkers, edição Drupal, turma de 2024',
    link: 'https://drive.google.com/file/d/1tFZ_uTcR8JtNdAUZhGnYaVkFBnbKzvpF/view?usp=drivesdk'
  },

   {
    title: 'Certificação do curso de Drupal',
    description: 'Certificado de conclusão do curso de Front- End pela Instituição Unifel + SalvadorTech.',
    link: 'https://drive.google.com/file/d/1SImCRKs-wjNiYxatPXz185-oDs4jN_6K/view?usp=drivesdk'
  },
    {
    title: 'Certificação do curso de Inglês',
    description: 'Certificado de conclusão do curso de Inglês pela Instituição Microlins.',
    link: 'https://drive.google.com/file/d/1rF8QRz7TYRI1r9MqtVjP8CuFzfAOgoa1/view?usp=sharing'
  },

    {
    title: 'Certificação do curso de Gestão Empresarial Jr',
    description: 'Certificado de conclusão do curso de Gestão Empresarial pela Instituição Microlins.',
    link: 'https://drive.google.com/file/d/1LrNLkNOZofUYTwlH1_SyfgzZ7BBf8_n9/view?usp=sharing'
  },
  
    {
    title: 'Certificação do curso de Designer Gráfico',
    description: 'Certificado de conclusão do curso de Designer Gráfico pela Instituição Microlins.',
    link: 'https://drive.google.com/file/d/1-0TqGmNBFURhNQ9S1xDi4dvx-GckyyHx/view?usp=sharing'
  },

      {
    title: 'Certificação do curso de Informática Essencial',
    description: 'Certificado de conclusão do curso de Informática Essencial pela Instituição Microlins.',
    link: 'https://drive.google.com/file/d/1sJC59hOeUXrBdXw4IqEbMe-0iGkjKcJX/view?usp=sharing'
  }
    
];

// Função para criar cards HTML
function createCard(item) {
  const card = document.createElement('div');
  card.classList.add('card');

  const title = document.createElement('h3');
  title.textContent = item.title;

  const desc = document.createElement('p');
  desc.textContent = item.description;

  card.appendChild(title);
  card.appendChild(desc);

  if (item.link) {
    const linkBtn = document.createElement('a');
    linkBtn.href = item.link;
    linkBtn.target = "_blank";
    linkBtn.rel = "noopener";
    linkBtn.textContent = "Vizualizar";
    linkBtn.classList.add('card-link');
    card.appendChild(linkBtn);
  }

  return card;

}


const certificatesContainer = document.getElementById('certificates-container');

certificates.forEach(cert => {
  const card = createCard(cert);
  certificatesContainer.appendChild(card);
});




// Inserir projetos e desafios na página
const projectsContainer = document.getElementById('projects-container');
const challengesContainer = document.getElementById('challenges-container');

projects.forEach(project => {
  const card = createCard(project);
  projectsContainer.appendChild(card);
});

challenges.forEach(challenge => {
  const card = createCard(challenge);
  challengesContainer.appendChild(card);
});

