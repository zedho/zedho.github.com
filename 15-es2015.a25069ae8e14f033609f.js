(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{kY2p:function(t,n,i){"use strict";i.r(n),i.d(n,"ManagerPageModule",(function(){return W}));var e=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),a=i("tyNb"),b=i("fXoL"),r=i("mrSG"),s=i("JZFu");function l(t,n){1&t&&b.Ib(0,"ion-spinner")}function d(t,n){if(1&t&&(b.Kb(0,"span",9),b.kc(1),b.Jb()),2&t){const t=b.Ub().$implicit;b.xb(1),b.nc("",t.type," X ",t.selected,"")}}function p(t,n){if(1&t&&(b.Kb(0,"span",11),b.kc(1),b.Jb()),2&t){const t=b.Ub().index;b.xb(1),b.mc("Text ",t,": ")}}function g(t,n){1&t&&(b.Kb(0,"span"),b.kc(1,","),b.Jb())}function u(t,n){1&t&&(b.Kb(0,"span"),b.Ib(1,"br"),b.Jb())}function f(t,n){if(1&t&&(b.Kb(0,"span"),b.ic(1,p,2,1,"span",10),b.kc(2),b.ic(3,g,2,0,"span",0),b.ic(4,u,2,0,"span",0),b.Jb()),2&t){const t=n.$implicit,i=n.index,e=b.Ub().$implicit;b.xb(1),b.ac("ngIf",t),b.xb(1),b.mc("",t," "),b.xb(1),b.ac("ngIf",t&&i+1!=e.reqtxt.length),b.xb(1),b.ac("ngIf",t&&i+1==e.reqtxt.length)}}function h(t,n){if(1&t&&(b.Kb(0,"span"),b.Ib(1,"img",12),b.Jb()),2&t){const t=n.$implicit;b.xb(1),b.ac("src",t,b.gc)}}function m(t,n){if(1&t&&(b.Kb(0,"span"),b.ic(1,d,2,2,"span",8),b.Kb(2,"div"),b.ic(3,f,5,4,"span",2),b.ic(4,h,2,1,"span",2),b.Jb(),b.Jb()),2&t){const t=n.$implicit;b.xb(1),b.ac("ngIf",t.selected&&t.selected>0),b.xb(2),b.ac("ngForOf",t.reqtxt),b.xb(1),b.ac("ngForOf",t.reqImg)}}function J(t,n){if(1&t&&(b.Kb(0,"span"),b.Ib(1,"hr"),b.Kb(2,"div",4),b.Kb(3,"ion-avatar",5),b.Ib(4,"img",6),b.Jb(),b.Kb(5,"ion-label",7),b.kc(6),b.ic(7,m,5,3,"span",2),b.Jb(),b.Jb(),b.Jb()),2&t){const t=n.$implicit;b.xb(4),b.ac("src",t.src,b.gc),b.xb(2),b.mc("",t.name," "),b.xb(1),b.ac("ngForOf",t.variants)}}function K(t,n){if(1&t&&(b.Kb(0,"div"),b.Kb(1,"ion-card"),b.Kb(2,"div",3),b.kc(3," Order placed "),b.Jb(),b.Kb(4,"ion-card-header"),b.Kb(5,"ion-card-subtitle"),b.kc(6),b.Vb(7,"date"),b.Jb(),b.Jb(),b.Kb(8,"ion-card-content"),b.Kb(9,"div"),b.ic(10,J,8,3,"span",2),b.Jb(),b.Jb(),b.Jb(),b.Ib(11,"hr"),b.Jb()),2&t){const t=n.$implicit;b.xb(6),b.oc("",t.delivery.name," - Pincode ",t.delivery.pincode," - Date (",b.Wb(7,4,t.date),")"),b.xb(4),b.ac("ngForOf",t.items)}}function x(t,n){if(1&t&&(b.Kb(0,"div"),b.ic(1,K,12,6,"div",2),b.Jb()),2&t){const t=b.Ub();b.xb(1),b.ac("ngForOf",t.historyList)}}function k(t,n){1&t&&(b.Kb(0,"p",13),b.kc(1," No previous orders found.. "),b.Jb())}let w=(()=>{class t{constructor(t){this.alertController=t,this.historyList=[],this.status=!1,this.showSpin=!0}ngOnInit(){let t=localStorage.getItem("zphone");console.log(t),t?this.initDatas(t):this.alertController.create({header:"Login To Continue",message:"User must be logged in",buttons:["OK"]}).then(t=>{t.present()})}initDatas(t){return Object(r.a)(this,void 0,void 0,(function*(){this.historyList=[];let t=s.a.firestore().collection("shoporders");yield t.get().then(t=>{this.showSpin=!1,t.empty?(this.status=!0,this.historyList=[]):(t.forEach(t=>{this.historyList.push(t.data())}),this.historyList.sort((t,n)=>{let i=new Date(t.date),e=new Date(n.date);return i<e?1:i>e?-1:0}))}).catch((function(t){console.log("Error getting documents: ",t)}))}))}}return t.\u0275fac=function(n){return new(n||t)(b.Hb(c.b))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-all-orders"]],decls:3,vars:3,consts:[[4,"ngIf"],["style","padding-left: 15px;",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"statuz"],[1,"chipz"],[1,"avatarz"],[3,"src"],["text-wrap","",1,"labelz",2,"font-weight","600"],["style","font-weight: 300;",4,"ngIf"],[2,"font-weight","300"],["style","font-weight: 600;",4,"ngIf"],[2,"font-weight","600"],[2,"height","25px","width","auto","border-radius","8px",3,"src"],[2,"padding-left","15px"]],template:function(t,n){1&t&&(b.ic(0,l,1,0,"ion-spinner",0),b.ic(1,x,2,1,"div",0),b.ic(2,k,2,0,"p",1)),2&t&&(b.ac("ngIf",n.showSpin),b.xb(1),b.ac("ngIf",n.historyList&&n.historyList.length>0),b.xb(1),b.ac("ngIf",n.status&&n.historyList&&0==n.historyList.length))},directives:[e.k,c.O,e.j,c.j,c.l,c.m,c.k,c.d,c.A],pipes:[e.d],styles:[".avatarz[_ngcontent-%COMP%]{width:19%;height:auto}.avatarz[_ngcontent-%COMP%], .labelz[_ngcontent-%COMP%]{display:inline-block}.labelz[_ngcontent-%COMP%]{width:75%;margin-left:5%}.chipz[_ngcontent-%COMP%]{margin-bottom:10px}.statuz[_ngcontent-%COMP%]{text-align:right;margin-right:20px;color:#bd7304;font-weight:600}ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px;stroke:#444;fill:#222;margin-left:47%;margin-top:3%;margin-bottom:3%}"]}),t})();function v(t,n){if(1&t){const t=b.Lb();b.Kb(0,"div"),b.Kb(1,"p",5),b.kc(2),b.Jb(),b.Kb(3,"input",6,7),b.Sb("ngModelChange",(function(n){return b.fc(t),b.Ub().currentUpload=n})),b.Jb(),b.Kb(5,"ion-button",8),b.Sb("click",(function(){b.fc(t);const n=b.ec(4);return b.Ub().copytoclip(n)})),b.kc(6,"Copy"),b.Jb(),b.Jb()}if(2&t){const t=b.Ub();b.xb(2),b.lc(t.currentUpload),b.xb(1),b.ac("ngModel",t.currentUpload)}}function y(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-button",9),b.Sb("click",(function(){return b.fc(t),b.Ub().category()})),b.kc(1,"Category"),b.Jb()}}function I(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-button",9),b.Sb("click",(function(){return b.fc(t),b.Ub().products()})),b.kc(1,"Products"),b.Jb()}}function M(t,n){1&t&&b.Ib(0,"ion-spinner")}function C(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-item"),b.Kb(1,"ion-avatar",13),b.Ib(2,"img",14),b.Jb(),b.Kb(3,"ion-label"),b.Kb(4,"h2"),b.kc(5),b.Jb(),b.Kb(6,"p"),b.kc(7),b.Jb(),b.Kb(8,"div"),b.kc(9," Image - "),b.Kb(10,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.img=i})),b.Jb(),b.Jb(),b.Kb(11,"div"),b.kc(12," Category - "),b.Kb(13,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.cat=i})),b.Jb(),b.Jb(),b.Kb(14,"div"),b.kc(15," Id - "),b.Kb(16,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.id=i})),b.Jb(),b.Jb(),b.Kb(17,"div"),b.Kb(18,"ion-button",16),b.Sb("click",(function(){b.fc(t);const i=n.index;return b.Ub(2).removeCat(i)})),b.kc(19,"Remove"),b.Jb(),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=n.$implicit,i=n.index;b.xb(2),b.ac("src",t.img,b.gc),b.xb(3),b.lc(t.cat),b.xb(2),b.mc("ID - ",t.id,""),b.xb(3),b.ac("ngModel",t.img)("name","catDa"+i),b.xb(3),b.ac("ngModel",t.cat)("name","catDa1"+i),b.xb(3),b.ac("ngModel",t.id)("name","catDa2"+i)}}function S(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-content"),b.Kb(1,"ion-list"),b.Kb(2,"ion-list-header"),b.kc(3," Categories "),b.Jb(),b.Kb(4,"ion-item"),b.Kb(5,"ion-label"),b.Kb(6,"p"),b.kc(7,"Name - "),b.Kb(8,"input",10),b.Sb("ngModelChange",(function(n){return b.fc(t),b.Ub().catData.name=n})),b.Jb(),b.Jb(),b.Kb(9,"p"),b.kc(10,"Phone - "),b.Kb(11,"input",10),b.Sb("ngModelChange",(function(n){return b.fc(t),b.Ub().catData.phone=n})),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.ic(12,C,20,9,"ion-item",11),b.Kb(13,"ion-item"),b.Kb(14,"ion-button",12),b.Sb("click",(function(){b.fc(t);const n=b.Ub();return n.addCat(n.catData.catalogue)})),b.kc(15,"Add Category"),b.Jb(),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=b.Ub();b.xb(8),b.ac("ngModel",t.catData.name),b.xb(3),b.ac("ngModel",t.catData.phone),b.xb(1),b.ac("ngForOf",t.catData.catalogue)}}function U(t,n){if(1&t&&(b.Kb(0,"option",20),b.kc(1),b.Jb()),2&t){const t=n.$implicit;b.ac("value",t.id),b.xb(1),b.lc(t.cat)}}function O(t,n){if(1&t){const t=b.Lb();b.Kb(0,"div"),b.Kb(1,"table"),b.Kb(2,"tr",21),b.Kb(3,"td"),b.kc(4,"Type"),b.Jb(),b.Kb(5,"td"),b.Kb(6,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.type=i})),b.Jb(),b.Jb(),b.Jb(),b.Kb(7,"tr",21),b.Kb(8,"td"),b.kc(9,"Price"),b.Jb(),b.Kb(10,"td"),b.Kb(11,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.price=i})),b.Jb(),b.Jb(),b.Jb(),b.Kb(12,"tr",21),b.Kb(13,"td"),b.kc(14,"Unit"),b.Jb(),b.Kb(15,"td"),b.Kb(16,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.unit=i})),b.Jb(),b.Jb(),b.Jb(),b.Kb(17,"tr",21),b.Kb(18,"td"),b.Kb(19,"ion-button",16),b.Sb("click",(function(){b.fc(t);const i=n.index,e=b.Ub().$implicit;return b.Ub(2).removeVrnt(e.variants,i)})),b.kc(20,"Remove"),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Ib(21,"div",22),b.Jb()}if(2&t){const t=n.$implicit,i=b.Ub().index;b.xb(6),b.ac("ngModel",t.type)("name","in"+i),b.xb(5),b.ac("ngModel",t.price)("name","in1"+i),b.xb(5),b.ac("ngModel",t.unit)("name","in2"+i)}}function D(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-item"),b.Kb(1,"ion-avatar",13),b.Ib(2,"img",14),b.Jb(),b.Kb(3,"ion-label"),b.Kb(4,"h2"),b.kc(5,"Name -"),b.Kb(6,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.name=i})),b.Jb(),b.Jb(),b.Kb(7,"p"),b.kc(8,"Image -"),b.Kb(9,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.src=i})),b.Jb(),b.Jb(),b.Kb(10,"p"),b.kc(11,"Category - "),b.Kb(12,"select",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.category=i})),b.ic(13,U,2,2,"option",17),b.Jb(),b.Jb(),b.Kb(14,"p"),b.kc(15,"Text - "),b.Kb(16,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.requirements.texts=i})),b.Jb(),b.Jb(),b.Kb(17,"p"),b.kc(18,"Images - "),b.Kb(19,"input",15),b.Sb("ngModelChange",(function(i){return b.fc(t),n.$implicit.requirements.images=i})),b.Jb(),b.Jb(),b.Kb(20,"p"),b.kc(21,"Variants - "),b.Jb(),b.ic(22,O,22,6,"div",11),b.Kb(23,"ion-button",16),b.Sb("click",(function(){b.fc(t);const i=n.$implicit;return b.Ub(2).addVar(i.variants)})),b.kc(24,"Add Variant"),b.Jb(),b.Ib(25,"br"),b.Ib(26,"hr"),b.Kb(27,"ion-button",18),b.Sb("click",(function(){b.fc(t);const i=n.index;return b.Ub(2).removeProd(i)})),b.kc(28,"Remove"),b.Jb(),b.Ib(29,"div",19),b.Jb(),b.Jb()}if(2&t){const t=n.$implicit,i=n.index,e=b.Ub(2);b.xb(2),b.ac("src",t.src,b.gc),b.xb(4),b.ac("ngModel",t.name)("name","prod1"+i),b.xb(3),b.ac("ngModel",t.src)("name","prodi"+i),b.xb(3),b.ac("ngModel",t.category)("name","prod2"+i),b.xb(1),b.ac("ngForOf",e.catData.catalogue),b.xb(3),b.ac("ngModel",t.requirements.texts)("name","prod3"+i),b.xb(3),b.ac("ngModel",t.requirements.images)("name","prod4"+i),b.xb(3),b.ac("ngForOf",t.variants)}}function P(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-content"),b.Kb(1,"ion-list"),b.Kb(2,"ion-list-header"),b.kc(3," Products "),b.Jb(),b.ic(4,D,30,13,"ion-item",11),b.Kb(5,"ion-item"),b.Kb(6,"ion-button",12),b.Sb("click",(function(){b.fc(t);const n=b.Ub();return n.addProd(n.prodData)})),b.kc(7,"Add Product"),b.Jb(),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=b.Ub();b.xb(4),b.ac("ngForOf",t.prodData)}}let $=(()=>{class t{constructor(){this.showSpin=!0,this.prodData={},this.catData={},this.showWhat="cat",this.currentUpload=""}ngOnInit(){}category(){return Object(r.a)(this,void 0,void 0,(function*(){this.showSpin=!0,this.showWhat="cat";let t=s.a.firestore().collection("shop").doc("digiCat"),n=yield t.get();n.exists?(this.catData=n.data(),this.showSpin=!1,console.log(this.catData)):console.log("EMPTY")}))}products(){return Object(r.a)(this,void 0,void 0,(function*(){this.showSpin=!0,this.showWhat="prod";let t=s.a.firestore().collection("shop").doc("digiProd"),n=yield t.get();n.exists?(this.prodData=n.data().data,this.showSpin=!1,console.log(this.prodData)):console.log("EMPTY")}))}addVar(t){t.push({type:"",price:0,unit:"",selected:0})}addCat(t){t.push({cat:"",id:0,img:""})}addProd(t){t.push({name:"",src:"",desc:"",category:0,variants:[],requirements:{texts:0,images:0}})}removeProd(t){let n=prompt("Enter 'yes' ",t);console.log(n),"yes"==n&&this.prodData.splice(t,1)}removeCat(t){let n=prompt("Enter 'yes' ",t);console.log(n),"yes"==n&&this.catData.catalogue.splice(t,1)}removeVrnt(t,n){let i=prompt("Enter 'yes' ",n);console.log(i),"yes"==i&&t.splice(n,1)}filechange(t){t.target&&t.target.files[0]&&t.target.files[0].name&&(console.log(t.target.files[0]),t.target.files[0].size>6e5?alert("File size is BIG, should be less than 600kb"):s.a.storage().ref().child("newImages/"+t.target.files[0].name+(new Date).getTime()).put(t.target.files[0]).then(t=>Object(r.a)(this,void 0,void 0,(function*(){console.log("Uploaded a blob or file!",t),"success"==t.state&&t&&t.ref&&(this.currentUpload=yield t.ref.getDownloadURL())}))))}copytoclip(t){t.select(),document.execCommand("copy"),t.setSelectionRange(0,0),this.currentUpload=""}update(){return Object(r.a)(this,void 0,void 0,(function*(){"yes"==prompt("Enter 'yes' ")&&("cat"==this.showWhat?s.a.firestore().collection("shop").doc("digiCat").set(this.catData).then(t=>{console.log("val",t),alert("cat DONE "+t)}):"prod"==this.showWhat&&s.a.firestore().collection("shop").doc("digiProd").set({data:this.prodData}).then(t=>{console.log("val",t),alert("prod DONE "+t)}))}))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["app-update-view"]],decls:12,vars:6,consts:[["type","file","accept","image/*",3,"change"],[4,"ngIf"],["color","success",2,"width","49%"],["style","width:48%",3,"click",4,"ngIf"],["color","danger",2,"width","100%",3,"click"],[2,"font-size","8px"],["type","text",2,"position","absolute","top","-900px",3,"ngModel","ngModelChange"],["eleInp",""],["color","danger",3,"click"],[2,"width","48%",3,"click"],["type","text",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[2,"width","100%",3,"click"],["slot","start"],[3,"src"],[3,"ngModel","name","ngModelChange"],[3,"click"],[3,"value",4,"ngFor","ngForOf"],[1,"warning",3,"click"],[1,"splitRed"],[3,"value"],["width","100%"],[1,"split"]],template:function(t,n){1&t&&(b.Kb(0,"input",0),b.Sb("change",(function(t){return n.filechange(t)})),b.Jb(),b.ic(1,v,7,2,"div",1),b.Kb(2,"ion-card"),b.Kb(3,"ion-button",2),b.kc(4,"Download Current Data"),b.Jb(),b.ic(5,y,2,0,"ion-button",3),b.ic(6,I,2,0,"ion-button",3),b.Kb(7,"ion-button",4),b.Sb("click",(function(){return n.update()})),b.kc(8,"Update Current Data"),b.Jb(),b.Jb(),b.ic(9,M,1,0,"ion-spinner",1),b.ic(10,S,16,3,"ion-content",1),b.ic(11,P,8,1,"ion-content",1)),2&t&&(b.xb(1),b.ac("ngIf",n.currentUpload&&""!=n.currentUpload),b.xb(4),b.ac("ngIf","cat"!=n.showWhat),b.xb(1),b.ac("ngIf","cat"==n.showWhat),b.xb(3),b.ac("ngIf",n.showSpin),b.xb(1),b.ac("ngIf",!n.showSpin&&"cat"==n.showWhat),b.xb(1),b.ac("ngIf",!n.showSpin&&"prod"==n.showWhat))},directives:[e.k,c.j,c.h,o.a,o.e,o.f,c.O,c.o,c.B,c.C,c.z,c.A,e.j,c.d,o.i,o.g,o.j],styles:[".split[_ngcontent-%COMP%]{background-color:#00f}.split[_ngcontent-%COMP%], .splitRed[_ngcontent-%COMP%]{height:15px;width:100%}.splitRed[_ngcontent-%COMP%]{background-color:red}"]}),t})();function L(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-item"),b.Kb(1,"ion-button",3),b.Sb("click",(function(){b.fc(t);const n=b.Ub();return n.histView=!n.histView})),b.kc(2,"Update Products"),b.Jb(),b.Jb()}}function F(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-item"),b.Kb(1,"ion-button",3),b.Sb("click",(function(){b.fc(t);const n=b.Ub();return n.histView=!n.histView})),b.kc(2,"View Orders"),b.Jb(),b.Jb()}}function V(t,n){1&t&&b.Ib(0,"app-all-orders")}function z(t,n){1&t&&b.Ib(0,"app-update-view")}const j=[{path:"",component:(()=>{class t{constructor(){this.histView=!0}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["app-manager"]],decls:12,vars:4,consts:[["slot","start"],["defaultHref","home"],[4,"ngIf"],[2,"width","100%","font-size","16px",3,"click"]],template:function(t,n){1&t&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",0),b.Ib(3,"ion-back-button",1),b.Jb(),b.Kb(4,"ion-title"),b.kc(5,"Manager"),b.Jb(),b.Jb(),b.Jb(),b.Kb(6,"ion-content"),b.Kb(7,"ion-list"),b.ic(8,L,3,0,"ion-item",2),b.ic(9,F,3,0,"ion-item",2),b.Jb(),b.ic(10,V,1,0,"app-all-orders",2),b.ic(11,z,1,0,"app-update-view",2),b.Jb()),2&t&&(b.xb(8),b.ac("ngIf",n.histView),b.xb(1),b.ac("ngIf",!n.histView),b.xb(1),b.ac("ngIf",n.histView),b.xb(1),b.ac("ngIf",!n.histView))},directives:[c.t,c.V,c.i,c.e,c.f,c.U,c.o,c.B,e.k,c.z,c.h,w,$],styles:[""]}),t})()}];let E=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},imports:[[a.j.forChild(j)],a.j]}),t})(),W=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},imports:[[e.b,o.b,c.W,E]]}),t})()}}]);