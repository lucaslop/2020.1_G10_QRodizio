module.exports = {
  base: "/2020.1_G10_QRodizio/",

  title: "QRodízio",

  themeConfig: {
    logo: "/Logov.png",
    nav: [
      { text: "Documentação", link: "/documentacao" },
      {
        text: "Github",
        link: "https://github.com/UnBArqDsw/2020.1_G10_QRodizio",
      },
    ],

    /*
    sidebar: {
      "/Base/":["5W2H", "mapa_mental.md", "rich_picture.md"],
    },
    */
    sidebar: [
      
      {
        title: "Base", // required
        // path: "/base/", // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
          "/base/5W2H",
          "/base/mapa_mental",
          "/base/rich_picture",
          "/base/diagrama_ishikawa",
          "/base/brainstorming",
          "/base/design_sprint",
          "/base/lexicos",
          "/base/metodologia",
          "/base/modelagem_BPMN",
        
        {
          title: "Termo de Abertura",
          path: "/termo_de_abertura",
        },
        {
          title: "Plano de Gerenciamento de Riscos",
          path: "/gerenciamento_risco",
        },
        {
          title: "Iniciativas extra",
          collapsable: true,
          children: [
            "/iniciativas_extra/branches",
            "/iniciativas_extra/issues",
            "/iniciativas_extra/CODE_OF_CONDUCT",
            "/iniciativas_extra/NFR"
          ],
        },
        ],
      },
      {
        title: "Modelagem",
        collapsable: true,
        children: [
          {
            title: "Diagramas Dinâmicos",
            collapsable: true,
            children: [
              "/modelagem/diagramas_dinamicos/diagramas_atividade",
              "/modelagem/diagramas_dinamicos/diagrama_sequencia",
              "/modelagem/diagramas_dinamicos/diagramas_estado",
              "/modelagem/diagramas_dinamicos/diagrama_casos_de_uso",
            ],
          },
          {
            title: "Diagramas Estáticos",
            collapsable: true,
            children: [
              "/modelagem/diagramas_estaticos/diagrama_classes",
              "/modelagem/diagramas_estaticos/diagramas_pacote",
              "/modelagem/diagramas_estaticos/diagrama_componentes",
            ],
          },
        ],
      },

      {
        title: "Design Patterns",
        collapsable: true,
        children: [
          {
            title: "Correções",
            path: "/design_patterns/iniciativas_extra/documentos_corrigidos",
          },
          {
            title: "GRASP(s)",
            path: "/design_patterns/grasps/grasps",
          },
          {
            title: "Comportamentais",
            collapsable: true,
            children: [
              "/design_patterns/padroes_comportamentais/strategy",
              "/design_patterns/padroes_comportamentais/observer",
            ],
          },
          {
            title: "Criacionais",
            collapsable: true,
            children: [
              "/design_patterns/padoes_criacionais/builder",
              "/design_patterns/padoes_criacionais/factory",
              "/design_patterns/padoes_criacionais/singleton",
            ]
          },
          {
            title: "Estruturais",
            collapsable: true,
            children: [
              "/design_patterns/padroes_estruturais/decorator",
              "/design_patterns/padroes_estruturais/proxy",
            ]
          },
          {
            title: "Backlog",
            collapsable: true,
            children: [
              {
                title: "Backlog v1",
                path: "/backlog/backlog_produtov1.md",
              },
              {
                title: "Backlog v2",
                path: "/backlog/backlog_produtov2.md",
              },
            ],
          },
          {
            title: "Iniciativas extras",
            collapsable: true,
            children: [
              "/base/diagrama_comunicacao",
              "/prototipo",
            ]
          },
        ],
      },
      {
        title: "Arquitetura de Software e Reutilização",
        collapsable: true,
        children: [
          {
            title: "Documento de Arquitetura",
            path: "/documento_de_arquitetura"
          },
          {
            title: "Reutilização de Software",
            path: "/arquitetura_de_software_e_reutilizacao/reutilizacao",
          },
          {
            title: "Iniciativas extras",
            path: "/arquitetura_de_software_e_reutilizacao/iniciativas_extra",
          },
        ],
      }, 
      {
        title: "Reuniões",
        collapsable: true,
        children: [
          "/reunioes/sprint0",
          "/reunioes/sprint1",
          "/reunioes/sprint2",
          "/reunioes/sprint3",
          "/reunioes/sprint4",
          "/reunioes/sprint5",
          "/reunioes/sprint6",
          "/reunioes/sprint7",
          "/reunioes/sprint8",
          "/reunioes/sprint9",
          "/reunioes/sprint10",
          "/reunioes/sprint11",
          "/reunioes/sprint12",

        ],
      },
    ],
  },
};
