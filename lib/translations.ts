export type Language = "en" | "pt"

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Matheus Alves",
      subtitle:
        "A creative Software Engineer focused on building modern and robust applications.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      p1: "I am a Software Engineer, I like working with different technologies, opening web projects based on a defined Design and developing applications: front-end, and back-end. I love studying Software Development.",
      p2: "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.",
    },
    experience: {
      title: "Work Experience",
      present: "present",
      jobs: [
        {
          role: "Full Stack Engineer",
          period: "mar 2026 - present",
          company: "TradeToWorld",
          description: "",
        },
        {
          role: "Software Engineer",
          period: "dec 2024 - mar 2026",
          company: "FutebolCard.",
          description:
            "Developed payment systems and website automation systems using PHP (PHP5, PHP7, PHP8) and Zend Framework. Improved transaction handling efficiency by optimizing existing codebases. Collaborated with front-end teams to ensure seamless integration of backend services.",
        },
        {
          role: "Software Engineer",
          period: "Nov 2023 - Jul 2025",
          company: "Anoto.",
          description:
            "Created and maintained open-source projects with over 50 contributors. Designed REST APIs for seamless integration with various applications. Facilitated collaboration by implementing version control best practices using Git.",
        },
        {
          role: "Software Engineer Internship",
          period: "Jul 2023 - dec 2023",
          company: "Muniz Auto Center.",
          description:
            "Developed responsive web applications using React and Vue.js, improving user experience and accessibility by 15%. Implemented SEO best practices to increase website traffic by 20%. Created CI/CD processes to streamline deployment workflows.",
        },
      ],
    },
    projects: {
      title: "My Projects",
      codePrivate: "Code(Private)",
      code: "Code",
      liveDemo: "Live Demo",
      items: [
        {
          name: "FutebolCard",
          description:
            "Provides tailored solutions to top football clubs and stadiums in Brazil and the US, enhancing the fan experience.",
        },
        {
          name: "Anoto",
          description:
            "Anoto is an organization that serves as a notebook, bringing together various projects in one place.",
        },
        {
          name: "Muniz Auto Center",
          description:
            "The largest auto center franchise in Brazil — and the fastest-growing. A 100% Brazilian business with over 150 stores nationwide.",
        },
        {
          name: "RealCripto",
          description:
            "This website is an informational platform focused on providing data and insights about the cryptocurrency market.",
        },
        {
          name: "TradeToWorld",
          description:
            "TradeToWorld is a tech B2B SaaS Marketplace enabling SMEs' access to international markets through trade process automation, marketing tools and full trade operations support on demand.",
        },
      ],
    },
    skills: {
      title: "Skills & Technologies",
      other: "Other",
    },
    contact: {
      title: "Get In Touch",
      cardTitle: "Contact Information",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      experience: "Experiência",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou Matheus Alves",
      subtitle:
        "Engenheiro de Software criativo, focado em criar aplicações modernas e robustas.",
      viewWork: "Ver Meus Projetos",
      contactMe: "Fale Comigo",
    },
    about: {
      title: "Sobre Mim",
      p1: "Sou Engenheiro de Software, gosto de trabalhar com diferentes tecnologias, criando projetos web a partir de um Design definido e desenvolvendo aplicações: front-end e back-end. Adoro estudar Desenvolvimento de Software.",
      p2: "Quando não estou codando, você pode me encontrar explorando novas tecnologias, contribuindo com projetos open-source ou aproveitando atividades ao ar livre.",
    },
    experience: {
      title: "Experiência Profissional",
      present: "presente",
      jobs: [
        {
          role: "Engenheiro Full Stack",
          period: "mar 2026 - presente",
          company: "TradeToWorld",
          description: "",
        },
        {
          role: "Engenheiro de Software",
          period: "dez 2024 - mar 2026",
          company: "FutebolCard.",
          description:
            "Desenvolvi sistemas de pagamento e automação de sites usando PHP (PHP5, PHP7, PHP8) e Zend Framework. Melhorei a eficiência no processamento de transações otimizando as bases de código existentes. Colaborei com times de front-end para garantir integração perfeita dos serviços de back-end.",
        },
        {
          role: "Engenheiro de Software",
          period: "nov 2023 - jul 2025",
          company: "Anoto.",
          description:
            "Criei e mantive projetos open-source com mais de 50 colaboradores. Projetei APIs REST para integração com diversas aplicações. Facilitei a colaboração implementando boas práticas de controle de versão com Git.",
        },
        {
          role: "Estágio em Engenharia de Software",
          period: "jul 2023 - dez 2023",
          company: "Muniz Auto Center.",
          description:
            "Desenvolvi aplicações web responsivas com React e Vue.js, melhorando a experiência do usuário e acessibilidade em 15%. Implementei boas práticas de SEO para aumentar o tráfego do site em 20%. Criei processos de CI/CD para otimizar fluxos de deploy.",
        },
      ],
    },
    projects: {
      title: "Meus Projetos",
      codePrivate: "Código(Privado)",
      code: "Código",
      liveDemo: "Demo ao Vivo",
      items: [
        {
          name: "FutebolCard",
          description:
            "Oferece soluções personalizadas para os principais clubes de futebol e estádios do Brasil e dos EUA, aprimorando a experiência do torcedor.",
        },
        {
          name: "Anoto",
          description:
            "Anoto é uma organização que funciona como um caderno, reunindo diversos projetos em um só lugar.",
        },
        {
          name: "Muniz Auto Center",
          description:
            "A maior franquia de auto center do Brasil — e a que mais cresce. Um negócio 100% brasileiro com mais de 150 lojas em todo o país.",
        },
        {
          name: "RealCripto",
          description:
            "Este site é uma plataforma informativa focada em fornecer dados e insights sobre o mercado de criptomoedas.",
        },
        {
          name: "TradeToWorld",
          description:
            "TradeToWorld is a tech B2B Saas Marketplace enabling SMEs' access to international markets through trade process automation, marketing tools and full trade operations support on demand.",
        },
      ],
    },
    skills: {
      title: "Habilidades & Tecnologias",
      other: "Outros",
    },
    contact: {
      title: "Entre em Contato",
      cardTitle: "Informações de Contato",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
}
