(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{397:function(t,a,s){t.exports=s.p+"assets/img/decorator.b1881fd9.png"},480:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"decorator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decorator"}},[t._v("#")]),t._v(" Decorator")]),t._v(" "),e("h2",{attrs:{id:"historico-de-versao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#historico-de-versao"}},[t._v("#")]),t._v(" Histórico de Versão")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Data")]),t._v(" "),e("th",[t._v("Autor(es)")]),t._v(" "),e("th",[t._v("Descrição")]),t._v(" "),e("th",[t._v("Versão")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("26/10/2020")]),t._v(" "),e("td",[t._v("\n        Fábio Teixeira("),e("a",{attrs:{target:"blank",href:"https://github.com/fabio1079"}},[t._v("fabio1079")]),t._v(")\n      ")]),t._v(" "),e("td",[t._v("Adicionando utilização do decorator no projeto")]),t._v(" "),e("td",[t._v("0.1")])]),t._v(" "),e("tr",[e("td",[t._v("27/10/2020")]),t._v(" "),e("td",[t._v("\n        Fábio Teixeira("),e("a",{attrs:{target:"blank",href:"https://github.com/fabio1079"}},[t._v("fabio1079")]),t._v(")\n      ")]),t._v(" "),e("td",[t._v("Correções básicas")]),t._v(" "),e("td",[t._v("0.2")])]),t._v(" "),e("tr",[e("td",[t._v("16/11/2020")]),t._v(" "),e("td",[t._v("\n        Lucas("),e("a",{attrs:{target:"blank",href:"https://github.com/lucasmidlhey"}},[t._v("lucasmidlhey")]),t._v(")\n      ")]),t._v(" "),e("td",[t._v("Justificativa")]),t._v(" "),e("td",[t._v("0.4")])])])]),t._v(" "),e("h2",{attrs:{id:"introducao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introducao"}},[t._v("#")]),t._v(" Introdução")]),t._v(" "),e("p",{attrs:{align:"justify"}},[t._v(" \nO Decorator é um padrão de projeto estrutural que permite acoplar novos comportamentos para objetos ao colocá-los dentro de invólucros de objetos que contém os comportamentos.\n")]),t._v(" "),e("p",{attrs:{align:"justify"}},[t._v(" \n“Envoltório” ou “wrapper é o apelido alternativo para o padrão Decorator que expressa claramente a ideia principal dele. Um envoltório é um objeto que pode ser ligado com outro objeto alvo. O envoltório contém o mesmo conjunto de métodos que o alvo e delega a ele todos os pedidos que recebe. Contudo, o envoltório pode alterar o resultado fazendo alguma coisa ou antes ou depois de passar o pedido para o alvo.\n")]),t._v(" "),e("p",{attrs:{align:"justify"}},[t._v(" \nO envoltório implementa a mesma interface que o objeto envolvido. É por isso que da perspectiva do cliente esses objetos são idênticos. É necessário fazer o campo de referência do envoltório aceitar qualquer objeto que segue aquela interface. Com isso será permitido cobrir um objeto em múltiplos envoltórios, adicionando o comportamento combinado de todos os envoltórios a ele.\n")]),t._v(" "),e("h2",{attrs:{id:"estrutura"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#estrutura"}},[t._v("#")]),t._v(" Estrutura")]),t._v(" "),e("p",[e("img",{attrs:{src:s(397),alt:"Estrutura decorator"}})]),t._v(" "),e("h2",{attrs:{id:"aplicacoes-no-projeto-qrodizio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aplicacoes-no-projeto-qrodizio"}},[t._v("#")]),t._v(" Aplicações no Projeto(QRodízio)")]),t._v(" "),e("h3",{attrs:{id:"disclaimer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disclaimer"}},[t._v("#")]),t._v(" Disclaimer")]),t._v(" "),e("p",[t._v("Primeiramente é bom deixar claro que nosso projeto está utilizando de linguagens multi-paradigmas(python e javascript) sendo assim, adaptações aos padrões são necessárias para não fugir do estilo do código utilizado.")]),t._v(" "),e("p",[t._v('A Linguem python possui em seu "zen of python" a seguinte declaração: "Simple is better than complex". Seguindo essa filosifia, decidimos que, se algo pode ser feito em uma função, então será feito em uma função. Assim mantendo um código mais limpo, simples e fácil de manter.')]),t._v(" "),e("h3",{attrs:{id:"utilizacao"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#utilizacao"}},[t._v("#")]),t._v(" Utilização")]),t._v(" "),e("p",[t._v("A linguem python possui uma forma bem singular de decorar funções e classes. E que é muito util para fazer validações antes que uma função seja executada, sendo assim optamos por utilizar do decorator para autentificação de usuário na API.")]),t._v(" "),e("p",[t._v("Segue um exemplo do uso de decorator no código do qrcode:")]),t._v(" "),e("h3",{attrs:{id:"definicao-do-decorator-em-authentication-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#definicao-do-decorator-em-authentication-py"}},[t._v("#")]),t._v(" Definição do decorator em "),e("a",{attrs:{href:"https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/develop/qrodizio/ext/authentication.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("authentication.py"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth_required")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("role"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("EmployeeRole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basic"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n    Verifies if request has a valid token.\n    Then calls a permission strategy\n    """')]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decorated")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@wraps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrapper")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                token "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _get_token_from_headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n                pure_token "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer "')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                decoded "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jwt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("decode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pure_token"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" get_secret_key"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                current_employee "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Employee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("decoded"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _role_check"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" current_employee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" role"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" jwt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExpiredSignatureError"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"expired token"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" UserUnauthorizedException "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"User unauthorized"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status_code\n            "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" Exception"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" jsonify"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invalid token"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" wrapper\n\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" decorated\n")])])]),e("h3",{attrs:{id:"exemplo-de-utilizacao-do-decorator-em-api-auth-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-de-utilizacao-do-decorator-em-api-auth-py"}},[t._v("#")]),t._v(" Exemplo de utilização do decorator em "),e("a",{attrs:{href:"https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/develop/qrodizio/views/api/auth.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("api/auth.py"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@auth_bp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/register"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@auth_required")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("role"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("EmployeeRole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("auth_register_employee")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current_employee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),e("h3",{attrs:{id:"exemplo-de-utilizacao-do-decorator-em-api-demands-py"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exemplo-de-utilizacao-do-decorator-em-api-demands-py"}},[t._v("#")]),t._v(" Exemplo de utilização do decorator em "),e("a",{attrs:{href:"https://github.com/UnBArqDsw/2020.1_G10_QRodizio_Backend/blob/develop/qrodizio/views/api/demands.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("api/demands.py"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@demands_bp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/<demand_status>"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" methods"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@auth_required")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("list_demands_by_status")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("current_employee"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" demand_status"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),e("h2",{attrs:{id:"justificativa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#justificativa"}},[t._v("#")]),t._v(" Justificativa")]),t._v(" "),e("p",[t._v("Decorator é muito simples quando se utiliza python, ja que a linguagem ja pre estabelece que o mais simples é o melhor jeito. Desta forma utilizar o decorator para autenticação se torna mais pratico no decorrer de quando necessário na aplicação atraves das views utilizadas.")]),t._v(" "),e("h2",{attrs:{id:"referencias"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#referencias"}},[t._v("#")]),t._v(" Referências")]),t._v(" "),e("ul",[e("li",[t._v("\nREFACTORING.GURU. Strategy. Disponível em: https://refactoring.guru/pt-br/design-patterns/decorator . Acesso em: 26 de outubro. 2020.\n")])])])}),[],!1,null,null,null);a.default=n.exports}}]);