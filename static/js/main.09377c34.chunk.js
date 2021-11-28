(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){t.exports={App:"App_App__2Fbwo"}},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(9),c=n.n(a),r=n(12),s=n.n(r),i=(n(19),n(15)),o=n(3),u=n(4),l=n(6),b=n(5),m=n(1),d=n(2),h=n(13),p=n(7),j=n.n(p),f=n(0),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(d.a)(),t.numberInputId=Object(d.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:j.a.contactForm,onSubmit:this.handleSubmit,children:[Object(f.jsxs)("label",{htmlFor:this.nameInputId,className:j.a.label,children:["Name",Object(f.jsx)("input",{className:j.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:this.nameInputId})]}),Object(f.jsxs)("label",{htmlFor:this.numberInputId,className:j.a.label,children:["Number",Object(f.jsx)("input",{className:j.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:this.numberInputId})]}),Object(f.jsx)("button",{className:j.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(m.Component),C=O,v=n(8),x=n.n(v),g=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)("ul",{className:x.a.ContactList,children:this.props.contacts.map((function(e){return Object(f.jsxs)("li",{className:x.a.item,children:[Object(f.jsx)("span",{className:x.a.star,children:"\u272f"}),e.name,":",Object(f.jsx)("span",{className:x.a.number,children:e.number}),Object(f.jsx)("button",{className:x.a.btn,onClick:function(){return t.props.onDeleteBtn(e.name)},type:"button",children:"Delete"})]},Object(d.a)())}))})}}]),n}(m.Component),y=g,I=n(11),_=n.n(I),N=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).filterInputId=Object(d.a)(),t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("label",{htmlFor:this.filterInputId,className:_.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:_.a.input,type:"text",value:this.props.filter,onChange:this.props.onFilterChange,id:this.filterInputId})]})}}]),n}(m.Component),F=N,A=n(14),S=n.n(A),w=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name===n})))alert("".concat(n," is already in contacts"));else{var c={id:Object(d.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))}},t.onFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}))},t.reset=function(){t.setState({name:"",number:""})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.name!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getVisibleContacts();return Object(f.jsxs)("div",{className:S.a.App,children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(C,{contacts:this.state.contacts,onSubmit:this.addContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(F,{filter:this.state.filter,onFilterChange:this.onFilterChange}),Object(f.jsx)(y,{contacts:t,onDeleteBtn:this.deleteContact})]})}}]),n}(m.Component),k=w;s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3JLFd"}},8:function(t,e,n){t.exports={item:"ContactList_item__3yXcn",number:"ContactList_number__25UvR",btn:"ContactList_btn__33ivu",star:"ContactList_star__1i3IL"}}},[[21,1,2]]]);
//# sourceMappingURL=main.09377c34.chunk.js.map