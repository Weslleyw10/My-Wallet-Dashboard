(this["webpackJsonpmy-wallet"]=this["webpackJsonpmy-wallet"]||[]).push([[0],{348:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(71),o=t.n(c),i=t(16),s={title:"dark",colors:{primary:"#1B1F38",secondary:"#252A48",tertiary:"#313862",white:"#FFF",black:"#000",gray:"#BFBFBF",success:"#4E41F0",info:"#F7931B",warning:"#E44C4E"}},d={title:"light",colors:{primary:"#DCDCDC",secondary:"#FFFFFF",tertiary:"#F5F5F5",white:"#000",black:"#FFFFFF",gray:"#BFBFBF",success:"#03BB85",info:"#3B5998",warning:"#FF6961"}},u=t(1),l=Object(r.createContext)({}),p=function(e){var n=e.children,t=Object(r.useState)((function(){var e=localStorage.getItem("@my-wallet:theme");return e?JSON.parse(e):s})),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(u.jsx)(l.Provider,{value:{toggleTheme:function(){"dark"===c.title?(o(d),localStorage.setItem("@my-wallet:theme",JSON.stringify(d))):(o(s),localStorage.setItem("@my-wallet:theme",JSON.stringify(s)))},theme:c},children:n})};function b(){return Object(r.useContext)(l)}var j=Object(r.createContext)({}),m=function(e){var n=e.children,t=Object(r.useState)((function(){return!!localStorage.getItem("@my-wallet:logged")})),a=Object(i.a)(t,2),c=a[0],o=a[1];return Object(u.jsx)(j.Provider,{value:{logged:c,signIn:function(e,n){"weslley.silva@email.com"===e&&"123"===n?(localStorage.setItem("@my-wallet:logged","true"),o(!0)):alert("Senha ou usu\xe1rio inv\xe1lidos.")},signOut:function(){localStorage.removeItem("@my-wallet:logged"),o(!1)}},children:n})};function h(){return Object(r.useContext)(j)}var f,x,g,O,y,v,w,q,C,F,E,k,S,M,D,N,z,B,T,I,P,A,L,Y,R,J,V,K,H,W,U,Q,X,$,G,Z,_,ee,ne,te,re,ae,ce,oe,ie,se,de,ue,le,pe,be,je,me,he,fe,xe=t(5),ge=t(4),Oe=Object(ge.b)(f||(f=Object(xe.a)(["\n\n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    *, button, input {\n        border: 0;\n        outline: 0;\n        font-family: 'Roboto', sans-serif;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]))),ye=t(93),ve=t(20),we=ge.c.div(x||(x=Object(xe.a)(["\n    display: grid;\n\n    grid-template-columns: 250px auto;\n    grid-template-rows: 70px auto;\n\n    grid-template-areas:\n    'AS MH'\n    'AS CT';\n\n    height: 100vh;\n\n\n"]))),qe=ge.c.div(g||(g=Object(xe.a)(["\n    grid-area: MH;\n\n    color: ",";\n    background: ",";\n\n    padding: 0 10px;\n    border-bottom: 1px solid ",";\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.gray})),Ce=ge.c.div(O||(O=Object(xe.a)(["\n\n\n"]))),Fe=ge.c.div(y||(y=Object(xe.a)([""]))),Ee=ge.c.div(v||(v=Object(xe.a)([""]))),ke=t(172),Se=t.n(ke),Me=ge.c.div(w||(w=Object(xe.a)(["\n    display: flex;\n    align-items: center;\n"]))),De=ge.c.span(q||(q=Object(xe.a)(["\n    color: ",";\n"])),(function(e){return e.theme.colors.white})),Ne=Object(ge.c)(Se.a).attrs((function(e){var n=e.theme;return{onColor:n.colors.info,offColor:n.colors.warning}}))(C||(C=Object(xe.a)(["\n        margin: 0 10px;\n    "]))),ze=function(e){var n=e.labelLeft,t=e.labelRight,r=e.checked,a=e.onChange;return Object(u.jsxs)(Me,{children:[Object(u.jsx)(De,{children:n}),Object(u.jsx)(Ne,{checked:r,uncheckedIcon:!1,checkedIcon:!1,onChange:a}),Object(u.jsx)(De,{children:t})]})},Be=["\ud83e\udd11","\ud83d\ude0d","\ud83d\ude0e","\ud83d\ude04"],Te=function(){var e=b(),n=e.toggleTheme,t=e.theme,a=Object(r.useState)((function(){return"dark"===t.title})),c=Object(i.a)(a,2),o=c[0],s=c[1],d=Object(r.useMemo)((function(){var e=Math.floor(Math.random()*Be.length);return Be[e]}),[]);return Object(u.jsxs)(qe,{children:[Object(u.jsx)(ze,{labelLeft:"Light",labelRight:"Dark",checked:o,onChange:function(){s(!o),n()}}),Object(u.jsxs)(Ce,{children:[Object(u.jsxs)(Fe,{children:["Ol\xe1, ",d]}),Object(u.jsx)(Ee,{children:"Weslley L Silva"})]})]})},Ie=t(83),Pe=ge.c.div(F||(F=Object(xe.a)(["\n    grid-area: AS;\n\n    color: ",";\n    background: ",";\n\n    padding: 0 10px;\n\n    border-right: 1px solid ","\n\n\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.gray})),Ae=ge.c.header(E||(E=Object(xe.a)(["\n    height: 70px;\n    display: flex;\n    align-items: center;\n"]))),Le=ge.c.img(k||(k=Object(xe.a)(["\n    width: 40px;\n    height: 40px;\n"]))),Ye=ge.c.h1(S||(S=Object(xe.a)(["\n    color: ",";\n    margin-left: 10px;\n    font-size: 22px;\n"])),(function(e){return e.theme.colors.white})),Re=ge.c.nav(M||(M=Object(xe.a)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 50px;\n    padding: 0 10px;\n"]))),Je=ge.c.a(D||(D=Object(xe.a)(["\n    display: flex;\n    align-items: center;\n\n    color: ",";\n    text-decoration: none;\n    transition: opacity .3s;  \n\n    margin: 7px 0;     \n\n    &:hover {\n        opacity: .7;\n    }\n\n    > svg {\n        margin-right: 5px;\n    }\n\n"])),(function(e){return e.theme.colors.info})),Ve=ge.c.button(N||(N=Object(xe.a)(["\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n\n    color: ",";\n    background: transparent;\n    border: none;\n\n    transition: opacity .3s; \n\n    margin: 7px 0;     \n\n    &:hover {\n        opacity: .7;\n    }\n\n    > svg {\n        margin-right: 5px;\n    }\n\n"])),(function(e){return e.theme.colors.info})),Ke=t.p+"static/media/logo.10858377.svg",He=function(){var e=h().signOut;return Object(u.jsxs)(Pe,{children:[Object(u.jsxs)(Ae,{children:[Object(u.jsx)(Le,{src:Ke,alt:"Logo minha carteira"}),Object(u.jsx)(Ye,{children:"Minha carteira"})]}),Object(u.jsxs)(Re,{children:[Object(u.jsxs)(Je,{href:"/",children:[Object(u.jsx)(Ie.c,{}),"Dashboard"]}),Object(u.jsxs)(Je,{href:"/list/entry-balance",children:[Object(u.jsx)(Ie.b,{}),"Entradas"]}),Object(u.jsxs)(Je,{href:"/list/exit-balance",children:[Object(u.jsx)(Ie.a,{}),"Sa\xeddas"]}),Object(u.jsxs)(Ve,{onClick:e,children:[Object(u.jsx)(Ie.d,{}),"Sair"]})]})]})},We=ge.c.div(z||(z=Object(xe.a)(["\n    grid-area: CT;\n\n    color: ",";\n    background: ",";\n\n    padding: 25px;\n\n    height: calc(100vh - 70px);\n\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar {\n        width: 10px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: ",";\n        border-radius: 10px;\n    }\n\n    ::-webkit-scrollbar-track {\n        background: ",";\n        }\n\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.tertiary})),Ue=function(e){var n=e.children;return Object(u.jsx)(We,{children:n})},Qe=function(e){var n=e.children;return Object(u.jsxs)(we,{children:[Object(u.jsx)(Te,{}),Object(u.jsx)(He,{}),Object(u.jsx)(Ue,{children:n})]})},Xe=t(56),$e=ge.c.div(B||(B=Object(xe.a)([""]))),Ge=ge.c.div(T||(T=Object(xe.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n"]))),Ze=t.p+"static/media/happy.4fa8a8fd.svg",_e=t.p+"static/media/sad.9bc00580.svg",en=t.p+"static/media/grinning.24353869.svg",nn=t.p+"static/media/dizzy.9659f0dd.svg",tn=[{description:"Sal\xe1rio",amount:"1300.52",type:"entrada",frequency:"recorrente",date:"2020-01-10"},{description:"Freela",amount:"150.13",type:"entrada",frequency:"eventual",date:"2020-01-17"},{description:"Sal\xe1rio",amount:"2500.23",type:"entrada",frequency:"recorrente",date:"2020-02-10"},{description:"Freela site",amount:"900.23",type:"entrada",frequency:"eventual",date:"2020-02-21"},{description:"Freela app",amount:"950.92",type:"entrada",frequency:"eventual",date:"2020-02-23"},{description:"Sal\xe1rio",amount:"2500.25",type:"entrada",frequency:"recorrente",date:"2020-03-10"},{description:"Sal\xe1rio",amount:"2500.18",type:"entrada",frequency:"recorrente",date:"2020-04-10"},{description:"Sal\xe1rio",amount:"2500.15",type:"entrada",frequency:"recorrente",date:"2020-05-10"},{description:"Sal\xe1rio",amount:"2500.12",type:"entrada",frequency:"recorrente",date:"2020-06-10"},{description:"Sal\xe1rio",amount:"2500.00",type:"entrada",frequency:"recorrente",date:"2020-07-10"},{description:"Sal\xe1rio",amount:"2500.00",type:"entrada",frequency:"recorrente",date:"2021-07-10"}],rn=[{description:"Energia el\xe9trica",amount:"150.55",type:"sa\xedda",frequency:"recorrente",date:"2020-01-10"},{description:"Energia el\xe9trica",amount:"150.55",type:"sa\xedda",frequency:"recorrente",date:"2021-05-10"},{description:"\xc1gua",amount:"75.55",type:"sa\xedda",frequency:"recorrente",date:"2020-01-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2020-01-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2020-01-23"},{description:"Compras do m\xeas",amount:"625.78",type:"sa\xedda",frequency:"recorrente",date:"2020-01-23"},{description:"Lanche",amount:"45.70",type:"sa\xedda",frequency:"eventual",date:"2020-01-23"},{description:"Blusa",amount:"95.70",type:"sa\xedda",frequency:"eventual",date:"2020-01-23"},{description:"Energia el\xe9trica",amount:"125.55",type:"sa\xedda",frequency:"recorrente",date:"2020-02-10"},{description:"\xc1gua",amount:"90.15",type:"sa\xedda",frequency:"recorrente",date:"2020-02-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2020-02-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2020-02-23"},{description:"Compras do m\xeas",amount:"540.00",type:"sa\xedda",frequency:"recorrente",date:"2020-02-25"},{description:"Parcela do Celular 1/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2020-02-26"},{description:"Cinema",amount:"45.00",type:"sa\xedda",frequency:"eventual",date:"2020-02-23"},{description:"Energia el\xe9trica",amount:"97.00",type:"sa\xedda",frequency:"recorrente",date:"2020-03-10"},{description:"\xc1gua",amount:"100.10",type:"sa\xedda",frequency:"recorrente",date:"2020-03-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2020-03-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2020-03-23"},{description:"Compras do m\xeas",amount:"800.50",type:"sa\xedda",frequency:"recorrente",date:"2020-03-17"},{description:"Parcela do Celular 2/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2020-03-18"},{description:"Troca de Ol\xe9o do carro",amount:"90.00",type:"sa\xedda",frequency:"eventual",date:"2020-03-23"},{description:"Energia el\xe9trica",amount:"75.99",type:"sa\xedda",frequency:"recorrente",date:"2020-04-10"},{description:"\xc1gua",amount:"80.33",type:"sa\xedda",frequency:"recorrente",date:"2020-04-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2020-04-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2020-04-23"},{description:"Compras do m\xeas",amount:"600.00",type:"sa\xedda",frequency:"recorrente",date:"2020-04-25"},{description:"Parcela do Celular 3/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2020-04-26"},{description:"Ebook de React Js",amount:"85.95",type:"sa\xedda",frequency:"eventual",date:"2020-04-13"},{description:"Energia el\xe9trica",amount:"125.55",type:"sa\xedda",frequency:"recorrente",date:"2020-05-10"},{description:"\xc1gua",amount:"90.15",type:"sa\xedda",frequency:"recorrente",date:"2020-05-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2020-05-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2020-05-23"},{description:"Compras do m\xeas",amount:"540.00",type:"sa\xedda",frequency:"recorrente",date:"2020-05-25"},{description:"Parcela do Celular 4/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2020-05-26"},{description:"Blusa Iron Man",amount:"150.00",type:"sa\xedda",frequency:"eventual",date:"2020-01-23"},{description:"Energia el\xe9trica",amount:"200.00",type:"sa\xedda",frequency:"recorrente",date:"2020-06-10"},{description:"\xc1gua",amount:"150.00",type:"sa\xedda",frequency:"recorrente",date:"2020-06-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2020-06-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2020-06-23"},{description:"Compras do m\xeas",amount:"559.15",type:"sa\xedda",frequency:"recorrente",date:"2020-06-25"},{description:"Parcela do Celular 5/5",amount:"150.99",type:"sa\xedda",frequency:"eventual",date:"2020-06-26"},{description:"Perfume",amount:"250.00",type:"sa\xedda",frequency:"eventual",date:"2020-06-21"},{description:"Energia el\xe9trica",amount:"250.00",type:"sa\xedda",frequency:"recorrente",date:"2020-07-10"},{description:"\xc1gua",amount:"90.00",type:"sa\xedda",frequency:"recorrente",date:"2020-07-15"},{description:"Telefone",amount:"99.99",type:"sa\xedda",frequency:"recorrente",date:"2020-07-23"},{description:"Plano de Sa\xfade",amount:"300.00",type:"sa\xedda",frequency:"recorrente",date:"2020-07-23"},{description:"Compras do m\xeas",amount:"700.00",type:"sa\xedda",frequency:"recorrente",date:"2020-07-25"},{description:"Cafeteira",amount:"250.00",type:"sa\xedda",frequency:"eventual",date:"2020-07-26"},{description:"Pizza",amount:"60.00",type:"sa\xedda",frequency:"eventual",date:"2020-07-19"},{description:"Lazer",amount:"1600.00",type:"sa\xedda",frequency:"eventual",date:"2020-07-28"}],an=["Janeiro","Fevereiro","Mar\xe7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],cn=ge.c.div(I||(I=Object(xe.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 25px;\n    \n"]))),on=ge.c.div(P||(P=Object(xe.a)(["\n    > h2 {\n            color: ",';\n            font-size: 22px;\n\n            &::after {\n                content: "";\n                display: block;\n                width: 55px;\n                border-bottom: 10px solid ',";\n            }\n        }\n\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.lineColor})),sn=ge.c.div(A||(A=Object(xe.a)(["\n    display: flex;\n\n    > button {\n        margin: 0 5px;\n    }\n"]))),dn=function(e){var n=e.title,t=e.lineColor,r=e.children;return Object(u.jsxs)(cn,{children:[Object(u.jsx)(on,{lineColor:t,children:Object(u.jsx)("h2",{children:n})}),Object(u.jsx)(sn,{children:r})]})},un=ge.c.div(L||(L=Object(xe.a)(["\n\n    > select {\n        padding: 7px 10px;\n        border-radius: 5px;\n\n        margin-left: 7px;\n\n    }\n\n"]))),ln=function(e){var n=e.options,t=e.onChange,r=e.defaultValue;return Object(u.jsx)(un,{children:Object(u.jsx)("select",{onChange:t,defaultValue:r,children:n.map((function(e){return Object(u.jsx)("option",{value:e.value,children:e.label},e.value)}))})})},pn=t(173),bn=t.n(pn),jn=ge.c.div(Y||(Y=Object(xe.a)(["\n    width: calc(33% - 1%);\n    height: 150px;\n    margin: 10px 0;\n    position: relative;    \n\n    background: ",";\n    border-radius: 7px;\n    padding: 10px 20px;\n\n    overflow: hidden;\n\n    > img {\n        height: 110%;\n        position: absolute;\n        \n        top: -10px;\n        right: -30px;\n        opacity: .3;\n    }\n\n    > span {\n        font-size: 18px;\n        font-weight: 500;\n    }\n\n    > small {\n        font-size: 12px;\n        position: absolute;\n        bottom: 10px;\n    }\n\n\n"])),(function(e){return e.color})),mn=(ge.c.div(R||(R=Object(xe.a)([""]))),t.p+"static/media/dolar.2cf70fb6.svg"),hn=t.p+"static/media/arrow-up.ecf59a6d.svg",fn=t.p+"static/media/arrow-down.4c8b7832.svg",xn=function(e){var n=e.title,t=e.amount,a=e.footerLabel,c=e.color,o=e.icon,i=Object(r.useMemo)((function(){switch(o){case"arrowUp":return hn;case"arrowDown":return fn;default:return mn}}),[o]);return Object(u.jsxs)(jn,{color:c,children:[Object(u.jsx)("span",{children:n}),Object(u.jsx)("h1",{children:Object(u.jsx)(bn.a,{end:t,prefix:"R$ ",separator:".",decimal:",",decimals:2})}),Object(u.jsx)("small",{children:a}),Object(u.jsx)("img",{src:i,alt:n})]})},gn=function(e){return e.toLocaleString("pt-br",{style:"currency",currency:"BRL"})},On=t(349),yn=t(350),vn=t(354),wn=t(98),qn=t(84),Cn=t(186),Fn=ge.c.div(J||(J=Object(xe.a)(["\n    width: 100%;\n    height: 300px;\n    display: flex;\n    flex-direction: column;\n    \n    margin: 10px 0;\n    padding: 30px 20px;\n\n    background: ",";    \n    border-radius: 7px;\n\n\n\n    \n"])),(function(e){return e.theme.colors.tertiary})),En=ge.c.div(V||(V=Object(xe.a)(["\n    flex: 1;\n    height: 260px;\n"]))),kn=ge.c.div(K||(K=Object(xe.a)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 20px;\n\n    > h2 {\n        padding-left: 16px;\n    }\n\n"]))),Sn=ge.c.div(H||(H=Object(xe.a)(["\n    display: flex;\n    padding-right: 16px;\n"]))),Mn=ge.c.ul(W||(W=Object(xe.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 7px;\n    \n    font-size: 14px;    \n    list-style: none;\n    \n"]))),Dn=ge.c.li(U||(U=Object(xe.a)(["    \n    \n    background: ",";\n    \n    margin-right: 7px;\n\n    &:first-child {\n        width: 30px;\n        height: 30px;\n        line-height: 30px;\n        border-radius: 5px;\n        text-align: center;\n        font-size: 14px;\n    }\n    \n"])),(function(e){return e.color})),Nn=function(e){var n=e.data,t=e.lineColorAmountEntry,r=e.lineColorAmountOutput;return Object(u.jsxs)(Fn,{children:[Object(u.jsxs)(kn,{children:[Object(u.jsx)("h2",{children:"Hist\xf3rico de saldo"}),Object(u.jsxs)(Sn,{children:[Object(u.jsxs)(Mn,{children:[Object(u.jsx)(Dn,{color:t,children:"30%"}),Object(u.jsx)(Dn,{children:"Entradas"})]}),Object(u.jsxs)(Mn,{children:[Object(u.jsx)(Dn,{color:r,children:"30%"}),Object(u.jsx)(Dn,{children:"Sa\xeddas"})]})]})]}),Object(u.jsx)(En,{children:Object(u.jsx)(On.a,{children:Object(u.jsxs)(yn.a,{data:n,margin:{top:5,bottom:5,right:20,left:20},children:[Object(u.jsx)(vn.a,{strokeDasharray:"3 3",stroke:"#cecece"}),Object(u.jsx)(wn.a,{dataKey:"month",stroke:"#cecece"}),Object(u.jsx)(qn.a,{formatter:gn}),Object(u.jsx)(Cn.a,{type:"monotone",dataKey:"amountEntry",name:"Entradas",stroke:t,strokeWidth:5,dot:{r:5},activeDot:{r:8}}),Object(u.jsx)(Cn.a,{type:"monotone",dataKey:"amountOutput",name:"Sa\xeddas",stroke:r,strokeWidth:5,dot:{r:5},activeDot:{r:8}})]})})})]})},zn=ge.c.div(Q||(Q=Object(xe.a)(["\n    width: 48%;\n    height: 260px;\n\n    background: ",";\n    color: ",";\n\n    border-radius: 7px;\n\n    margin: 10px 0;\n    padding: 30px 20px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    > header img {\n        width: 35px;\n        margin-left: 10px;\n    }\n\n    > header p {\n        font-size: 26px;\n        font-weight: bold;\n    }\n\n"])),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.white})),Bn=function(e){var n=e.title,t=e.description,r=e.footerText,a=e.icon;return Object(u.jsxs)(zn,{children:[Object(u.jsxs)("header",{children:[Object(u.jsxs)("h1",{children:[n,Object(u.jsx)("img",{src:a,alt:n,title:n})]}),Object(u.jsx)("p",{children:t})]}),Object(u.jsx)("footer",{children:Object(u.jsx)("span",{children:r})})]})},Tn=t(357),In=t(188),Pn=t(100),An=ge.c.div(X||(X=Object(xe.a)(["\n    width: 48%;\n    height: 260px;\n\n    margin: 10px 0;\n    padding-right: 5px;\n\n    background: ",";\n    color: ",";\n    border-radius: 7px;\n    display: flex;\n"])),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.white})),Ln=ge.c.aside($||($=Object(xe.a)(["\n    padding: 30px 20px;\n\n    > h2 {\n        margin-bottom: 20px;\n    }\n\n"]))),Yn=ge.c.div(G||(G=Object(xe.a)(["\n    padding: 5px;\n    max-height: 170px;\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar {\n        width: 5px;\n    }\n\n    ::-webkit-scrollbar-thumb {\n        background: ",";\n        border-radius: 10px;\n    }\n\n    ::-webkit-scrollbar-track {\n        background: ",";\n\n    }\n\n\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.tertiary})),Rn=ge.c.ul(Z||(Z=Object(xe.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 7px;\n    font-size: 14px;\n    \n    list-style: none;\n    \n"]))),Jn=ge.c.li(_||(_=Object(xe.a)(["    \n    \n    background: ",";\n    \n    margin-right: 7px;\n\n    &:first-child {\n        width: 40px;\n        height: 40px;\n        line-height: 40px;\n        border-radius: 5px;\n        text-align: center;\n        font-size: 16px;\n    }\n    \n"])),(function(e){return e.color})),Vn=ge.c.div(ee||(ee=Object(xe.a)(["   \n    display: flex;\n    flex: 1;\n    justify-content: center;\n\n\n"]))),Kn=function(e){var n=e.data;return Object(u.jsxs)(An,{children:[Object(u.jsxs)(Ln,{children:[Object(u.jsx)("h2",{children:"Rela\xe7\xe3o"}),Object(u.jsx)(Yn,{children:n.map((function(e){return Object(u.jsxs)(Rn,{children:[Object(u.jsxs)(Jn,{color:e.color,children:[e.percent,"%"]}),Object(u.jsx)(Jn,{children:e.name})]},e.name)}))})]}),Object(u.jsx)(Vn,{children:Object(u.jsx)(On.a,{children:Object(u.jsx)(Tn.a,{children:Object(u.jsx)(In.a,{data:n,dataKey:"percent",children:n.map((function(e){return Object(u.jsx)(Pn.a,{fill:e.color},e.name)}))})})})})]})},Hn=t(355),Wn=t(192),Un=ge.c.div(ne||(ne=Object(xe.a)(["\n    width: calc(50% - 1rem);\n    height: 260px;\n    margin: 10px 0;\n    display: flex;\n\n    background: ",";\n    color: ",";\n    border-radius: 7px;\n\n"])),(function(e){return e.theme.colors.tertiary}),(function(e){return e.theme.colors.white})),Qn=ge.c.aside(te||(te=Object(xe.a)(["\n    padding: 30px;\n    position: relative;\n"]))),Xn=ge.c.div(re||(re=Object(xe.a)(["    \n    max-height: 170px;\n    position: absolute;\n    top: 80px;\n"]))),$n=ge.c.ul(ae||(ae=Object(xe.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 7px;\n\n    font-size: 12px;\n    list-style: none;\n    \n"]))),Gn=ge.c.li(ce||(ce=Object(xe.a)(["    \n    background: ",";\n    \n    margin-right: 7px;\n\n    &:first-child {\n        width: 30px;\n        height: 30px;\n        line-height: 30px;\n        border-radius: 5px;\n        text-align: center;\n        font-size: 12px;\n    }\n    \n"])),(function(e){return e.color})),Zn=ge.c.main(oe||(oe=Object(xe.a)(["\n    flex: 1;\n"]))),_n=function(e){var n=e.title,t=e.data;return Object(u.jsxs)(Un,{children:[Object(u.jsxs)(Qn,{children:[Object(u.jsx)("h2",{children:n}),Object(u.jsx)(Xn,{children:t.map((function(e){return Object(u.jsxs)($n,{children:[Object(u.jsxs)(Gn,{color:e.color,children:[e.percent,"%"]}),Object(u.jsx)(Gn,{children:e.name})]},e.name)}))})]}),Object(u.jsx)(Zn,{children:Object(u.jsx)(On.a,{children:Object(u.jsxs)(Hn.a,{data:t,children:[Object(u.jsx)(Wn.a,{dataKey:"amount",name:"Valor",children:t.map((function(e){return Object(u.jsx)(Pn.a,{fill:e.color},e.name)}))}),Object(u.jsx)(qn.a,{formatter:gn,cursor:{fill:"none"}})]})})})]})},et=function(){var e=Object(r.useState)((new Date).getMonth()+1),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)((new Date).getFullYear()),o=Object(i.a)(c,2),s=o[0],d=o[1],l=Object(r.useCallback)((function(e){try{var n=Number(e);a(n)}catch(t){throw new Error("invalid month value. Is accept 0 - 12.")}}),[]),p=Object(r.useCallback)((function(e){try{var n=Number(e);d(n)}catch(t){throw new Error("invalid month value. Is accept integer numbers.")}}),[]),b=Object(r.useMemo)((function(){var e=[];return[].concat(Object(Xe.a)(rn),Object(Xe.a)(tn)).forEach((function(n){var t=new Date(n.date).getMonth();e.includes(t)||e.push(t)})),e.map((function(e){return{value:e+1,label:an[e]}})).sort()}),[]),j=Object(r.useMemo)((function(){var e=[];return[].concat(Object(Xe.a)(rn),Object(Xe.a)(tn)).forEach((function(n){var t=new Date(n.date).getFullYear();e.includes(t)||e.push(t)})),e.map((function(e){return{value:e,label:e}})).sort()}),[]),m=Object(r.useMemo)((function(){var e=0;return rn.forEach((function(n){var r=new Date(n.date),a=r.getFullYear();if(r.getMonth()+1===t&&a===s)try{e+=Number(n.amount)}catch(c){throw new Error("Invalid amount! Amount must be number.")}})),e}),[t,s]),h=Object(r.useMemo)((function(){var e=0;return tn.forEach((function(n){var r=new Date(n.date),a=r.getFullYear();if(r.getMonth()+1===t&&a===s)try{e+=Number(n.amount)}catch(c){throw new Error("Invalid amount! Amount must be number.")}})),e}),[t,s]),f=Object(r.useMemo)((function(){return h-m}),[m,h]),x=Object(r.useMemo)((function(){return f<0?{title:"Que triste!!",description:"Neste m\xeas, voc\xea gastou mais do que deveria.",footerText:"Verifique seus gasto e tente cortar algumas despesas.",icon:_e}:0===h&&0===m?{title:"Oopps",description:"Neste m\xeas, n\xe3o h\xe1 registros de entradas e sa\xeddas",footerText:"Voc\xea n\xe3o realizou lan\xe7amentos no m\xeas selecionado.",icon:nn}:0===f?{title:"Na trave!!",description:"Neste m\xeas, voc\xea gastou exatamente o que ganhou.",footerText:"Tenha mais cuidado. No pr\xf3ximo m\xeas tente poupar o seu dinheiro.",icon:en}:{title:"Muito bem!!",description:"Neste m\xeas, sua carteira fechou com saldo positivo.",footerText:"Continue assim. Tamb\xe9m considere investir seu saldo.",icon:Ze}}),[f,h,m]),g=Object(r.useMemo)((function(){var e=h+m,n=Number((h/e*100).toFixed(0)),t=Number((m/e*100).toFixed(0));return[{name:"Entradas",value:h,percent:n||0,color:"#F7931B"},{name:"Sa\xeddas",value:m,percent:t||0,color:"#E44C4E"}]}),[h,m]),O=Object(r.useMemo)((function(){return an.map((function(e,n){var t=0;tn.forEach((function(e){var r=new Date(e.date),a=r.getMonth(),c=r.getFullYear();if(a===n&&c===s)try{t+=Number(e.amount)}catch(o){throw new Error("amountEntry is invalid. amountEntry must be valid number.")}}));var r=0;return rn.forEach((function(e){var t=new Date(e.date),a=t.getMonth(),c=t.getFullYear();if(a===n&&c===s)try{r+=Number(e.amount)}catch(o){throw new Error("amountOutput is invalid. amountOutput must be valid number.")}})),{monthNumber:n,month:an[n].substr(0,3),amountEntry:t,amountOutput:r}})).filter((function(e){var n=(new Date).getMonth(),t=(new Date).getFullYear();return s===t&&e.monthNumber<=n||s<t}))}),[s]),y=Object(r.useMemo)((function(){var e=0,n=0;rn.filter((function(e){var n=new Date(e.date),r=n.getMonth()+1,a=n.getFullYear();return r===t&&a===s})).forEach((function(t){return"recorrente"===t.frequency?e+=Number(t.amount):"eventual"===t.frequency?n+=Number(t.amount):void 0}));var r=e+n,a=Number((e/r*100).toFixed(0)),c=Number((n/r*100).toFixed(0));return[{name:"Recorrentes",amount:e,percent:a||0,color:"#F7931B"},{name:"Eventual",amount:n,percent:c||0,color:"#E44C4E"}]}),[s,t]),v=Object(r.useMemo)((function(){var e=0,n=0;tn.filter((function(e){var n=new Date(e.date),r=n.getMonth()+1,a=n.getFullYear();return r===t&&a===s})).forEach((function(t){return console.log(t),"recorrente"===t.frequency?e+=Number(t.amount):"eventual"===t.frequency?n+=Number(t.amount):void 0}));var r=e+n,a=Number((e/r*100).toFixed(0)),c=Number((n/r*100).toFixed(0));return[{name:"Recorrentes",amount:e,percent:a||0,color:"#F7931B"},{name:"Eventuais",amount:n,percent:c||0,color:"#E44C4E"}]}),[s,t]);return Object(u.jsx)("div",{children:Object(u.jsxs)($e,{children:[Object(u.jsxs)(dn,{title:"Dashboard",lineColor:"#F7931B",children:[Object(u.jsx)(ln,{options:b,onChange:function(e){return l(e.target.value)},defaultValue:t}),Object(u.jsx)(ln,{options:j,onChange:function(e){return p(e.target.value)},defaultValue:s})]}),Object(u.jsxs)(Ge,{children:[Object(u.jsx)(xn,{title:"Saldo",amount:f,footerLabel:"Atualizado com base nas entradas e sa\xeddas",color:"#4E41F0",icon:"dolar"}),Object(u.jsx)(xn,{title:"Entradas",amount:h,footerLabel:"Atualizado com base nas entradas e sa\xeddas",color:"#F7931B",icon:"arrowUp"}),Object(u.jsx)(xn,{title:"Sa\xeddas",amount:m,footerLabel:"Atualizado com base nas entradas e sa\xeddas",color:"#E44C4E",icon:"arrowDown"}),Object(u.jsx)(Bn,{title:x.title,description:x.description,footerText:x.footerText,icon:x.icon}),Object(u.jsx)(Kn,{data:g}),Object(u.jsx)(Nn,{data:O,lineColorAmountEntry:"#F7931B",lineColorAmountOutput:"#E44C4E"}),Object(u.jsx)(_n,{title:"Sa\xeddas",data:y}),Object(u.jsx)(_n,{title:"Entradas",data:v})]})]})})},nt=ge.c.li(ie||(ie=Object(xe.a)(["\n    background: ",";\n    list-style: none;\n\n    border-radius: 5px;\n    margin: 10px 0;\n    padding: 12px 10px;\n\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n\n    cursor: pointer;\n\n    position: relative;\n\n    transition: all .3s;\n\n    &:hover {\n        opacity: .7;\n        transform: translateX(10px);\n    }\n\n    > div {\n        display:flex;\n        flex-direction: column;\n        justify-content: space-between;\n\n        padding-left: 18px;\n\n        > span {\n            font-size: 12px;\n        }\n        \n    }\n\n"])),(function(e){return e.theme.colors.tertiary})),tt=ge.c.div(se||(se=Object(xe.a)(["\n    max-width: 10px;\n    height: 30px;\n    background: ",";\n\n    position: absolute;\n    left: 0;\n\n"])),(function(e){return e.color})),rt=function(e){var n=e.tagColor,t=e.title,r=e.subtitle,a=e.amount;return Object(u.jsxs)(nt,{children:[Object(u.jsx)(tt,{color:n}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:t}),Object(u.jsx)("span",{children:r})]}),Object(u.jsx)("span",{children:a})]})},at=function(e){var n=new Date(e),t=n.getDate(),r=n.getMonth()+1,a=n.getFullYear(),c=t<10?"0".concat(t):t,o=r<10?"0".concat(r):r;return"".concat(c,"/").concat(o,"/").concat(a)},ct=ge.c.div(de||(de=Object(xe.a)([""]))),ot=ge.c.main(ue||(ue=Object(xe.a)([""]))),it=ge.c.div(le||(le=Object(xe.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-bottom: 32px;\n\n    .tag-filter {\n        margin: 0 10px;\n        font-size: 18px;\n        font-weight: 500;\n        background: none;\n        color: ",";\n        opacity: 0.5;\n        transition: opacity .2s;\n\n        &:hover {\n            opacity: .7;\n        }      \n\n    }\n\n    .tag-filter-recurrent::after {\n        content: '';\n        display: block;\n        width: 55px;\n        margin: 0 auto;\n\n        border-bottom: 5px solid ",";\n    }\n\n    .tag-filter-eventual::after {\n        content: '';\n        display: block;\n        width: 55px;\n        margin: 0 auto;\n        \n        border-bottom: 5px solid ",";\n    }\n\n    .tag-actived {\n        opacity: 1;\n    }\n\n\n\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.success}),(function(e){return e.theme.colors.warning})),st=function(e){var n=e.match,t=Object(r.useState)([]),a=Object(i.a)(t,2),c=a[0],o=a[1],s=Object(r.useState)(String((new Date).getMonth()+1)),d=Object(i.a)(s,2),l=d[0],p=d[1],b=Object(r.useState)(String((new Date).getFullYear())),j=Object(i.a)(b,2),m=j[0],h=j[1],f=Object(r.useState)(["recorrente","eventual"]),x=Object(i.a)(f,2),g=x[0],O=x[1],y=n.params.type,v=Object(r.useMemo)((function(){return"entry-balance"===y?{title:"Entradas",lineColor:"#4E41F0"}:{title:"Sa\xeddas",lineColor:"#E44C4C"}}),[y]),w=Object(r.useMemo)((function(){return"entry-balance"===y?tn:rn}),[y]),q=Object(r.useMemo)((function(){var e=[];return w.forEach((function(n){var t=new Date(n.date).getMonth()+1;e.includes(t)||e.push(t)})),e.map((function(e){return{value:e+1,label:an[e]}})).sort()}),[]),C=Object(r.useMemo)((function(){var e=[];return w.forEach((function(n){var t=new Date(n.date).getFullYear();e.includes(t)||e.push(t)})),e.map((function(e){return{value:e,label:e}})).sort()}),[]),F=function(e){var n=g.findIndex((function(n){return n===e}));if(console.log(g),n>=0){var t=g.filter((function(n){return n!==e}));O(t),console.log(t)}else O((function(n){return[].concat(Object(Xe.a)(n),[e])}));console.log(g)};return Object(r.useEffect)((function(){var e=w.filter((function(e){var n=new Date(e.date),t=String(n.getMonth()+1),r=String(n.getFullYear());return t===l&&r===m&&g.includes(e.frequency)})),n=e.map((function(n){return{id:String(Math.random()*e.length),description:n.description,amountFormatted:gn(Number(n.amount)),frequency:n.frequency,dateFormatted:at(n.date),tagColor:"recorrente"===n.frequency?"#4E41F0":"#E44C4C"}}));o(n)}),[w,l,m,c.length,g]),Object(u.jsx)("div",{children:Object(u.jsxs)(ct,{children:[Object(u.jsxs)(dn,{title:v.title,lineColor:v.lineColor,children:[Object(u.jsx)(ln,{options:q,onChange:function(e){return p(e.target.value)},defaultValue:l}),Object(u.jsx)(ln,{options:C,onChange:function(e){return h(e.target.value)},defaultValue:m})]}),Object(u.jsxs)(it,{children:[Object(u.jsx)("button",{className:"tag-filter tag-filter-recurrent\n                        ".concat(g.includes("recorrente")&&"tag-actived"),onClick:function(){return F("recorrente")},children:"Recorrentes"}),Object(u.jsx)("button",{className:"tag-filter tag-filter-eventual\n                        ".concat(g.includes("eventual")&&"tag-actived"),onClick:function(){return F("eventual")},children:"Eventuais"})]}),Object(u.jsx)(ot,{children:c.map((function(e){return Object(u.jsx)(rt,{tagColor:e.tagColor,title:e.description,subtitle:e.dateFormatted,amount:e.amountFormatted},e.id)}))})]})})},dt=function(){return Object(u.jsx)(Qe,{children:Object(u.jsxs)(ve.c,{children:[Object(u.jsx)(ve.a,{path:"/",exact:!0,component:et}),Object(u.jsx)(ve.a,{path:"/list/:type",exact:!0,component:st})]})})},ut=ge.c.div(pe||(pe=Object(xe.a)(["\n    height: 100vh;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: ",";\n    color: ",";\n"])),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.white})),lt=ge.c.div(be||(be=Object(xe.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 30px;\n\n    > h3 {\n        margin: 7px;\n    }\n\n    > img {\n        width: 40px;\n        height: 40px;\n    }\n\n"]))),pt=ge.c.form(je||(je=Object(xe.a)(["\n    width: 300px;\n    height: 300px;\n    padding: 30px;\n\n    border-radius: 10px;\n\n    background: ",";\n"])),(function(e){return e.theme.colors.tertiary})),bt=ge.c.h1(me||(me=Object(xe.a)(["\n    &::after {\n        content: '';\n        display: block;\n        width: 55px;\n        border-bottom: 10px solid ",";\n        margin-bottom: 10px;\n    }\n"])),(function(e){return e.theme.colors.warning})),jt=t(80),mt=ge.c.input(he||(he=Object(xe.a)(["\n  width: 100%;\n  margin: 7px 0;\n  padding: 10px;\n  border-radius: 5px;\n"]))),ht=function(e){var n=Object.assign({},e);return Object(u.jsx)(mt,Object(jt.a)({},n))},ft=t(194),xt=ge.c.button(fe||(fe=Object(xe.a)(["\n    width: 100%;\n    margin: 7px 0;\n    padding: 10px;\n    border-radius: 5px;\n    color: ",";\n    background: ",";\n    transition: opacity .3s;\n\n    &:hover {\n        opacity: .7;\n    }\n"])),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.warning})),gt=function(e){var n=e.children,t=Object(ft.a)(e,["children"]);return Object(u.jsx)(xt,Object(jt.a)(Object(jt.a)({},t),{},{children:n}))},Ot=function(){var e=Object(r.useState)(""),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(""),o=Object(i.a)(c,2),s=o[0],d=o[1],l=h().signIn;return Object(u.jsxs)(ut,{children:[Object(u.jsxs)(lt,{children:[Object(u.jsx)("img",{src:Ke,alt:"Minha carteira"}),Object(u.jsx)("h3",{children:"Minha Carteira"})]}),Object(u.jsxs)(pt,{onSubmit:function(){l(t,s)},children:[Object(u.jsx)(bt,{children:"Entrar"}),Object(u.jsx)(ht,{type:"email",name:"email",placeholder:"Email",onChange:function(e){a(e.target.value)}}),Object(u.jsx)(ht,{type:"password",name:"password",placeholder:"Password",onChange:function(e){d(e.target.value)}}),Object(u.jsx)(gt,{type:"submit",children:"Acessar"})]})]})},yt=function(){return Object(u.jsx)(ve.c,{children:Object(u.jsx)(ve.a,{path:"/",component:Ot})})},vt=function(){var e=h().logged;return console.log(e),Object(u.jsx)(ye.a,{children:e?Object(u.jsx)(dt,{}):Object(u.jsx)(yt,{})})},wt=function(){var e=b().theme;return Object(u.jsxs)(ge.a,{theme:e,children:[Object(u.jsx)(Oe,{}),Object(u.jsx)(vt,{})]})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{children:Object(u.jsx)(m,{children:Object(u.jsx)(wt,{})})})}),document.getElementById("root"))}},[[348,1,2]]]);
//# sourceMappingURL=main.6b27086c.chunk.js.map