(this["webpackJsonpgoit-react-hw-06-phonebook-class-redux-toolkit"]=this["webpackJsonpgoit-react-hw-06-phonebook-class-redux-toolkit"]||[]).push([[0],{27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n(0),o=n.n(r),i=n(7),s=n.n(i),u=(n(27),n(8)),l=n(9),b=n(12),j=n(10),d=n(3),m=n(41),h=n(4),O=Object(h.b)("contacts/add",(function(e,t){return{payload:{id:Object(m.a)(),name:e,number:t}}})),f=Object(h.b)("contacts/delete"),p=Object(h.b)("contacts/changeFilter"),x=(n(33),Object(d.b)((function(e){var t=e.contacts,n=t.filter,c=t.contact,a=n.toLowerCase().trim();return{contacts:c.filter((function(e){return e.name.toLowerCase().includes(a)}))}}),(function(e){return{onDeleteContact:function(t){return e(f(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(a.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(a.jsxs)("li",{className:"item__contact",children:[Object(a.jsx)("p",{className:"item__text",children:c}),Object(a.jsx)("p",{className:"item__text",children:r}),Object(a.jsx)("button",{className:"item__buttom",onClick:function(){return n(t)},children:"\u0441\u0442\u0435\u0440\u0442\u0438"})]},t)}))})}))),v=n(6),C=(n(34),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:""},e.handleChange=function(t){var n=t.currentTarget,c=n.name,a=n.value;e.setState(Object(v.a)({},c,a))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,c=n.name,a=n.number,r=e.props,o=r.contact,i=r.onSubmit;if(o.find((function(e){return e.name.toLowerCase()===c.toLowerCase()})))return alert("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(c," \u0437 \u0442\u0430\u043a\u0438\u043c \u0456\u043c\u2019\u044f\u043c \u0432\u0436\u0435 \u0454.")),void e.reset();i(c,a),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(a.jsxs)("form",{className:"item__form",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{children:["\u0406\u043c\u2019\u044f",Object(a.jsx)("input",{className:"item__input",type:"text",name:"name",placeholder:"Jony Dep",value:t,onChange:this.handleChange})]}),Object(a.jsxs)("label",{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",Object(a.jsx)("input",{className:"item__input",type:"text",name:"number",placeholder:"111-11-11",value:n,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",disabled:""===t||""===n,children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}]),n}(r.Component)),g=Object(d.b)((function(e){return{contact:e.contacts.contact}}),(function(e){return{onSubmit:function(t,n){return e(O(t,n))}}}))(C),_=(n(35),Object(d.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(p(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("label",{className:"item__filter",children:[Object(a.jsx)("p",{className:"item__text-filter",children:"\u041f\u043e\u0448\u0443\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0456\u0432"}),Object(a.jsx)("input",{className:"item__element",type:"text",value:t,onChange:n})]})}))),y=(n(36),function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.contact;return Object(a.jsxs)("div",{className:"Containet",children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(g,{}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(_,{}),!e.length&&Object(a.jsx)("div",{children:"\u041d\u0435\u043c\u0430\u0454 \u0436\u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0443, \u0434\u043e\u0434\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),Object(a.jsx)(x,{})]})}}]),n}(o.a.Component)),k=Object(d.b)((function(e){return{contact:e.contacts.contact}}))(y),N=n(11),w=n(2),S=n(5),D=n(19),L=n.n(D),A=Object(h.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(v.a)(c,O,(function(e,t){var n=t.payload;return[].concat(Object(N.a)(e),[n])})),Object(v.a)(c,f,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),J=Object(h.c)("",Object(v.a)({},p,(function(e,t){return t.payload}))),E=Object(w.c)({contact:A,filter:J}),T=n(20),z=n.n(T),B=[].concat(Object(N.a)(Object(h.d)({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}})),[L.a]),F={key:"root",storage:z.a,blacklist:["filter"]},H=Object(w.c)({contacts:E}),I=Object(S.g)(F,H),K=Object(h.a)({reducer:I,devTools:!1,middleware:B}),M=Object(S.h)(K),P=n(21);s.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(d.a,{store:K,children:Object(a.jsx)(P.a,{loading:null,persistor:M,children:Object(a.jsx)(k,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.c987301c.chunk.js.map