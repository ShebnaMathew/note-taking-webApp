(this.webpackJsonpassignment_2=this.webpackJsonpassignment_2||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),l=c.n(a),n=c(6),s=c.n(n),r=c(2),i=c(7),o="text",d="link",b="no project",u=Object(i.a)({"Learn React":[{type:o,title:"Create a new project",text:"cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"},{type:d,url:"https://reactjs.org/docs/getting-started.html",text:"React docs"},{type:d,url:"https://reactstrap.github.io/",text:"Reactstrap docs"}]},b,[{type:o,title:"Lorem ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Justo nec ultrices dui sapien eget mi proin sed libero. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas. Nisi quis eleifend quam adipiscing. Sit amet tellus cras adipiscing enim eu. Tincidunt tortor aliquam nulla facilisi cras fermentum. Orci phasellus egestas tellus rutrum. Tortor dignissim convallis aenean et. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Purus semper eget duis at tellus. Ut consequat semper viverra nam libero justo laoreet sit amet. Sed enim ut sem viverra aliquet eget. Amet volutpat consequat mauris nunc congue nisi. Aliquet nibh praesent tristique magna."},{type:d,url:"https://loremipsum.io/generator/",text:"Lorem Ipsum generator"}]),j=c(0),m=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"btn btn-info","data-bs-toggle":"modal","data-bs-target":"#addNote",children:"Show complete text"}),Object(j.jsx)("div",{className:"modal fade",tabindex:"-1","aria-labelledby":"addNote","aria-hidden":"true",children:Object(j.jsx)("div",{className:"modal-dialog",children:Object(j.jsxs)("div",{className:"modal-content",children:[Object(j.jsxs)("div",{className:"modal-header",children:[Object(j.jsx)("h5",{className:"modal-title",id:"addNote",children:"Complete text"}),Object(j.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(j.jsx)("div",{className:"modal-body",children:e.text}),Object(j.jsx)("div",{className:"modal-footer",children:Object(j.jsx)("button",{type:"button",className:"btn btn-info","data-bs-dismiss":"modal",children:"Close"})})]})})})]})},p=function(e){var t="card text-dark mb-3 "+e.bg;return Object(j.jsx)("div",{className:"col-lg-3",children:Object(j.jsxs)("div",{className:t,children:[Object(j.jsx)("div",{className:"card-header font-weight-bold",children:e.project}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:e.title}),Object(j.jsx)("p",{className:"card-text",children:e.text.length<100?e.text:Object(j.jsx)(m,{text:e.text})})]})]})})},x=function(e){var t,c="card text-dark mb-3 "+e.bg;return t=e.text?e.text:e.url,Object(j.jsx)("div",{className:"col-lg-3",children:Object(j.jsxs)("div",{className:c,children:[Object(j.jsx)("div",{className:"card-header font-weight-bold",children:e.project}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("a",{className:"card-text",href:e.url,children:t})})]})})},h=function(e){return e.type===o?Object(j.jsx)(p,{project:e.project,text:e.text,title:e.title,bg:e.bg?e.bg:"bg-warning"}):e.type===d?Object(j.jsx)(x,{project:e.project,text:e.text,url:e.url,bg:e.bg?e.bg:"bg-light"}):null},O=function(e){var t=e.notes;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"row row-cols-2 row-cols-sm-3 row-cols-md-4",children:Object.keys(t).map((function(c,a){return Object(j.jsx)(h,{project:e.project,type:t[c].type,text:t[c].text,title:t[c].title,url:t[c].url},a)}))})})},g=(c(14),c(15),function(e){return Object(j.jsxs)("div",{className:"input-group mb-3",children:[Object(j.jsx)("div",{className:"input-group-prepend",children:Object(j.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupSelect01",children:"Project"})}),Object(j.jsxs)("select",{className:"custom-select",onChange:function(t){return e.callback(t.target.value)},children:[Object(j.jsx)("option",{selected:!0,children:"..."}),Object.keys(e.projects).map((function(t,c){return Object(j.jsx)("option",{value:e.projects[t],children:e.projects[t]})}))]})]})}),v=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h6",{children:"Type of Note:"}),Object(j.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(j.jsx)("input",{type:"radio",id:"customRadioInline1",name:"customRadioInline1",className:"custom-control-input",value:o,onChange:function(t){e.resetUrl(""),e.enable(!1),e.callback(t.target.value)}}),Object(j.jsx)("label",{className:"custom-control-label",htmlFor:"customRadioInline1",children:"Text"})]}),Object(j.jsxs)("div",{className:"custom-control custom-radio custom-control-inline",children:[Object(j.jsx)("input",{type:"radio",id:"customRadioInline2",name:"customRadioInline1",className:"custom-control-input",value:d,onChange:function(t){e.resetText(""),e.resetTitle(""),e.enable(!1),e.callback(t.target.value)}}),Object(j.jsx)("label",{className:"custom-control-label",htmlFor:"customRadioInline2",children:"Link"})]})]})},f=function(e){var t=Object(a.useState)("form-control"),c=Object(r.a)(t,2),l=c[0],n=c[1];return Object(j.jsxs)("div",{className:"form-group align-center",children:[Object(j.jsx)("label",{htmlFor:"formGroupExampleInput",children:e.field}),Object(j.jsx)("input",{type:"text",class:l,placeholder:e.field,onChange:function(t){"Create new Project"!==e.field?(t.target.value.length>0&&e.setValue(t.target.value),e.type===o?("Title"===e.field||"Text"===e.field)&&t.target.value.length>0?e.enable(!0):(n("form-control red-border"),e.enable(!1)):"url"===e.field&&t.target.value.length>0?e.enable(!0):(n("form-control red-border"),e.enable(!1))):e.setValue(t.target.value)}})]})},N=c(8),y=function(e){var t="btn btn-info btn-lg "+(e.enable?"":"disabled");return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{"data-bs-toggle":"collapse","data-bs-target":"#collapseAdd",children:[Object(j.jsx)("div",{className:t,tabindex:"-1",role:"button","aria-disabled":"true",onClick:function(){var t={project:e.project,type:e.type,title:e.title,text:e.text,url:e.url,color:e.color};e.callback([].concat(Object(N.a)(e.data),[t]))},children:"Add"}),Object(j.jsx)("div",{className:"btn btn-light btn-lg",tabindex:"-1",role:"button",children:"Cancel"})]})})},k=function(e){return Object(j.jsxs)("div",{className:"input-group mb-3",children:[Object(j.jsx)("div",{className:"input-group-prepend",children:Object(j.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupSelect01",children:"Color"})}),Object(j.jsxs)("select",{className:"custom-select",id:"inputGroupSelect01",onChange:function(t){return e.callback(t.target.value)},children:[Object(j.jsx)("option",{selected:!0,value:"bg-warning",children:"Yellow"}),Object(j.jsx)("option",{value:"bg-info",children:"Blue"}),Object(j.jsx)("option",{value:"bg-light",children:"White"})]})]})},w=function(e){var t=Object(a.useState)(b),c=Object(r.a)(t,2),l=c[0],n=c[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],d=i[1],u=Object(a.useState)(""),m=Object(r.a)(u,2),p=m[0],x=m[1],h=Object(a.useState)(""),O=Object(r.a)(h,2),N=O[0],w=O[1],C=Object(a.useState)(""),S=Object(r.a)(C,2),T=S[0],F=S[1],I=Object(a.useState)(""),q=Object(r.a)(I,2),A=q[0],R=q[1],L=Object(a.useState)("bg-warning"),P=Object(r.a)(L,2),V=P[0],B=P[1],G=Object(a.useState)(!1),U=Object(r.a)(G,2),J=U[0],E=U[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(g,{projects:e.projects,callback:n}),Object(j.jsx)(f,{field:"Create new Project",setValue:d}),Object(j.jsx)(v,{selectedType:e.selectedType,callback:x,resetText:w,resetTitle:F,resetUrl:R,enable:E}),Object(j.jsx)(f,{field:"Title",setValue:F,type:p,enable:E}),Object(j.jsx)(f,{field:"Text",setValue:w,type:p,enable:E}),Object(j.jsx)(f,{field:"url",setValue:R,type:p,enable:E}),Object(j.jsx)(k,{callback:B}),Object(j.jsx)(y,{enable:J,data:e.data,callback:e.callback,project:o.length>0?o:l,type:p,title:T,url:A,text:N,color:V})]})})},C=[];Object.keys(u).map((function(e,t){C.push(e)}));var S=function(){var e=Object(a.useState)(C),t=Object(r.a)(e,2),c=t[0],l=t[1],n=Object(a.useState)([]),s=Object(r.a)(n,2),i=s[0],o=s[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)("nav",{className:"navbar navbar-light bg-light",children:Object(j.jsx)("div",{className:"container-fluid",children:Object(j.jsx)("span",{className:"navbar-brand mb-0 h1 mx-auto",children:"All we do is take notes."})})}),Object(j.jsx)("div",{id:"projects",className:"text-center bg-light",children:Object(j.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Buttons for projects",children:[Object.keys(i).map((function(e,t){return C.includes(i[e].project)||null===i[e].project?"":C.push(i[e].project)})),Object.keys(i).map((function(e,t){return C.includes(i[e].project)?Object(j.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){return l([i[e].project])},children:i[e].project}):""})),Object.keys(u).map((function(e,t){return e!==b?Object(j.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){return l([e])},children:e}):""})),Object(j.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){return l(C)},children:"All Notes"}),Object(j.jsx)("button",{type:"button",className:"btn btn-info","data-bs-toggle":"collapse","data-bs-target":"#collapseAdd",children:"+ Add"})]})}),Object(j.jsx)("div",{className:"collapse mx-auto",id:"collapseAdd",children:Object(j.jsx)(w,{callback:o,projects:C,data:i})}),Object(j.jsxs)("div",{className:"container",children:[Object.keys(u).map((function(e,t){return c.includes(e)?Object(j.jsx)(O,{project:e,notes:u[e]},t):""})),Object(j.jsx)("div",{className:"row row-cols-2 row-cols-sm-3 row-cols-md-4",children:Object.keys(i).map((function(e,t){return c.includes(i[e].project)?Object(j.jsx)(h,{project:i[e].project,type:i[e].type,text:i[e].text,title:i[e].title,url:i[e].url,bg:i[e].color}):""}))})]})]})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,l=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),l(e),n(e),s(e)}))};s.a.render(Object(j.jsx)(l.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),T()}},[[16,1,2]]]);
//# sourceMappingURL=main.23e4dd78.chunk.js.map