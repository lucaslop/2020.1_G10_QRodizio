(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{469:function(e,a,o){"use strict";o.r(a);var s=o(42),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"grasps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grasps"}},[e._v("#")]),e._v(" GRASPS")]),e._v(" "),o("h2",{attrs:{id:"historico-de-versao"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#historico-de-versao"}},[e._v("#")]),e._v(" Histórico de Versão")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Data")]),e._v(" "),o("th",[e._v("Autor(es)")]),e._v(" "),o("th",[e._v("Descrição")]),e._v(" "),o("th",[e._v("Versão")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("26/10/2020")]),e._v(" "),o("td",[e._v("\n        Caio César Beleza("),o("a",{attrs:{target:"blank",href:"https://github.com/Caiocbeleza"}},[e._v("Caiocbeleza")]),e._v(")\n      ")]),e._v(" "),o("td",[e._v("Adicionando introdução GRASPS ")]),e._v(" "),o("td",[e._v("0.1")])]),e._v(" "),o("tr",[o("td",[e._v("26/10/2020")]),e._v(" "),o("td",[e._v("\n        Cauê("),o("a",{attrs:{target:"blank",href:"https://github.com/caue96"}},[e._v("caue96")]),e._v(")\n      ")]),e._v(" "),o("td",[e._v("Adicionando pontos do código de aplicação dos padrões GRASP(s)")]),e._v(" "),o("td",[e._v("0.2")])]),e._v(" "),o("tr",[o("td",[e._v("15/11/2020")]),e._v(" "),o("td",[e._v("\n        Lucas Midlhey("),o("a",{attrs:{target:"blank",href:"https://github.com/lucasmidlhey"}},[e._v("lucasmidlhey")]),e._v(")\n      ")]),e._v(" "),o("td",[e._v("justificativas e reflexoes do grupo")]),e._v(" "),o("td",[e._v("0.3")])])])]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"introducao"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introducao"}},[e._v("#")]),e._v(" Introdução")]),e._v(" "),o("p",{attrs:{align:"justify"}},[e._v(" \nOs padrões GRASPS foram criados com o intuito de  tornar o código mais flexível, facilitando a manutenção e a extensibilidade.\n")]),e._v(" "),o("p",{attrs:{align:"justify"}},[e._v(' \nA sigla GRASPS vem de "General Responsibility Assignment Software Patterns", eles consistem em uma série de princípios baseados em conceitos para atribuição de responsabilidades a classes e objetos na construção de bons softwares usando programação orientada a objetos.\n')]),e._v(" "),o("h3",{attrs:{id:"grasps-aplicados-no-projeto-qrodizio"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grasps-aplicados-no-projeto-qrodizio"}},[e._v("#")]),e._v(" GRASPS aplicados no projeto (QRodízio)")]),e._v(" "),o("ul",[o("li",[e._v("Information Expert(Especialista de informação): Determina quando devemos delegar a responsabilidade para um outro objeto que seja especialista naquele domínio."),o("br"),e._v(" "),o("ul",[o("li",[e._v("A classe "),o("a",{attrs:{href:"https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/menus.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Menu"),o("OutboundLink")],1),e._v(" é especialista da classe "),o("a",{attrs:{href:"https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/menus.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Item"),o("OutboundLink")],1),e._v(";")]),e._v(" "),o("li",[e._v("A classe "),o("a",{attrs:{href:"https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/tables.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("TableSession"),o("OutboundLink")],1),e._v(' é especialista da classe "Conta", classe essa que ainda não foi implementada;')]),e._v(" "),o("li",[e._v('A classe "Conta", que ainda não foi implementada, é especialista da classe '),o("a",{attrs:{href:"https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/demands.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Demand"),o("OutboundLink")],1),e._v(".")])])])]),e._v(" "),o("p",[e._v("De forma muito simples nos implementamos o modelo de especialista sem um conhecimento profunda e quando estudado sobre foi percebemos as vantagens em utilizar, tais como, conhecer as responsabilidades por objetos, metodos e campos cumputados.")]),e._v(" "),o("ul",[o("li",[e._v("Creator(Criador): Determina qual classe deve ser responsável pela criação certos objetos.\n"),o("ul",[o("li",[e._v("A classe "),o("a",{attrs:{href:"https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/users.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("User"),o("OutboundLink")],1),e._v(" é criadora da classe "),o("a",{attrs:{href:"https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/master/qrodizio/models/payments.py",target:"_blank",rel:"noopener noreferrer"}},[e._v("Payment"),o("OutboundLink")],1)])])])]),e._v(" "),o("p",[e._v("A criação de objetos por outra classe é a forma mais clara de orientação a objetos, devido a isso pudemos evidenciar neste Criador que as instancias em Payment contem, agregam e as instancias de User, provando o uso do GRASP criador.")]),e._v(" "),o("ul",[o("li",[e._v("Polimorfism(Polimorfismo): As responsabilidades devem ser atribuídas a abstrações e não a objetos concretos, permitindo que eles possam variar conforme a necessidade.\n"),o("ul",[o("li",[e._v("A função de notificação, ainda não implementada, utilizará do polimorfismos para envio de mensagens tanto para usuários quanto para funcionários que irá variar de acordo com o que se deseja. Exemplo: a mesma função retornará mensagens diferentes para quando o usuário fizer um pedido, para quando um usuário fechar a conta, para quando o usuário pagar a conta, etc, sempre mostrando diferentes mensagens a depender de onde a requisição venha.")])])])]),e._v(" "),o("p",[e._v("Analisando a função do polimorfismo é possível perceber o quanto é necessário para um software que possui inúmeras rotas e classes, podendo criar apenas um objeto mudando seu paramento analisando sua necessidade, fizemos disso um padrão mais utilizado em nosso sistema.")]),e._v(" "),o("h2",{attrs:{id:"referencias"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#referencias"}},[e._v("#")]),e._v(" Referências")]),e._v(" "),o("ul",[o("li",[e._v("\nMEDIUM. Padrões GRASP — Padrões de Atribuir Responsabilidades. Disponível em: https://medium.com/@leandrovboas/padr%C3%B5es-grasp-padr%C3%B5es-de-atribuir-responsabilidades-1ae4351eb204 . Acesso em: 26 de outubro. 2020.\n")]),e._v(" "),o("li",[e._v("\nDEVMEDIA. Desenvolvimento com qualidade com GRASP. https://www.devmedia.com.br/desenvolvimento-com-qualidade-com-grasp/28704 . Acesso em: 26 de outubro. 2020.\n")])])])}),[],!1,null,null,null);a.default=r.exports}}]);