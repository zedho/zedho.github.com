(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{kY2p:function(t,n,i){"use strict";i.r(n),i.d(n,"ManagerPageModule",(function(){return W}));var e=i("ofXK"),o=i("3Pt+"),c=i("TEn/"),a=i("tyNb"),b=i("fXoL"),r=i("mrSG"),s=i("JZFu");function l(t,n){1&t&&b.Ib(0,"ion-spinner")}function d(t,n){if(1&t&&(b.Kb(0,"span",9),b.lc(1),b.Jb()),2&t){const t=b.Ub().$implicit;b.xb(1),b.oc("",t.type," X ",t.selected,"")}}function g(t,n){if(1&t&&(b.Kb(0,"span",11),b.lc(1),b.Jb()),2&t){const t=b.Ub().index;b.xb(1),b.nc("Text ",t,": ")}}function p(t,n){1&t&&(b.Kb(0,"span"),b.lc(1,","),b.Jb())}function u(t,n){1&t&&(b.Kb(0,"span"),b.Ib(1,"br"),b.Jb())}function h(t,n){if(1&t&&(b.Kb(0,"span"),b.jc(1,g,2,1,"span",10),b.lc(2),b.jc(3,p,2,0,"span",0),b.jc(4,u,2,0,"span",0),b.Jb()),2&t){const t=n.$implicit,i=n.index,e=b.Ub().$implicit;b.xb(1),b.ac("ngIf",t),b.xb(1),b.nc("",t," "),b.xb(1),b.ac("ngIf",t&&i+1!=e.reqtxt.length),b.xb(1),b.ac("ngIf",t&&i+1==e.reqtxt.length)}}function f(t,n){if(1&t&&(b.Kb(0,"span"),b.Ib(1,"img",12),b.Jb()),2&t){const t=n.$implicit;b.xb(1),b.ac("src",t,b.hc)}}function m(t,n){if(1&t&&(b.Kb(0,"span"),b.jc(1,d,2,2,"span",8),b.Kb(2,"div"),b.jc(3,h,5,4,"span",2),b.jc(4,f,2,1,"span",2),b.Jb(),b.Jb()),2&t){const t=n.$implicit;b.xb(1),b.ac("ngIf",t.selected&&t.selected>0),b.xb(2),b.ac("ngForOf",t.reqtxt),b.xb(1),b.ac("ngForOf",t.reqImg)}}function J(t,n){if(1&t&&(b.Kb(0,"span"),b.Ib(1,"hr"),b.Kb(2,"div",4),b.Kb(3,"ion-avatar",5),b.Ib(4,"img",6),b.Jb(),b.Kb(5,"ion-label",7),b.lc(6),b.jc(7,m,5,3,"span",2),b.Jb(),b.Jb(),b.Jb()),2&t){const t=n.$implicit;b.xb(4),b.ac("src",t.src,b.hc),b.xb(2),b.nc("",t.name," "),b.xb(1),b.ac("ngForOf",t.variants)}}function K(t,n){if(1&t&&(b.Kb(0,"div"),b.Kb(1,"ion-card"),b.Kb(2,"div",3),b.lc(3," Order placed "),b.Jb(),b.Kb(4,"ion-card-header"),b.Kb(5,"ion-card-subtitle"),b.lc(6),b.Vb(7,"date"),b.Jb(),b.Jb(),b.Kb(8,"ion-card-content"),b.Kb(9,"div"),b.jc(10,J,8,3,"span",2),b.Jb(),b.Jb(),b.Jb(),b.Ib(11,"hr"),b.Jb()),2&t){const t=n.$implicit;b.xb(6),b.pc("",t.delivery.name," - Pincode ",t.delivery.pincode," - Date (",b.Wb(7,4,t.date),")"),b.xb(4),b.ac("ngForOf",t.items)}}function x(t,n){if(1&t&&(b.Kb(0,"div"),b.jc(1,K,12,6,"div",2),b.Jb()),2&t){const t=b.Ub();b.xb(1),b.ac("ngForOf",t.historyList)}}function w(t,n){1&t&&(b.Kb(0,"p",13),b.lc(1," No previous orders found.. "),b.Jb())}let v=(()=>{class t{constructor(t){this.alertController=t,this.historyList=[],this.status=!1,this.showSpin=!0}ngOnInit(){let t=localStorage.getItem("zphone");console.log(t),t?this.initDatas(t):this.alertController.create({header:"Login To Continue",message:"User must be logged in",buttons:["OK"]}).then(t=>{t.present()})}initDatas(t){return Object(r.a)(this,void 0,void 0,(function*(){this.historyList=[];let t=s.a.firestore().collection("orders");yield t.get().then(t=>{this.showSpin=!1,t.empty?(this.status=!0,this.historyList=[]):(t.forEach(t=>{this.historyList.push(t.data())}),this.historyList.sort((t,n)=>{let i=new Date(t.date),e=new Date(n.date);return i<e?1:i>e?-1:0}))}).catch((function(t){console.log("Error getting documents: ",t)}))}))}}return t.\u0275fac=function(n){return new(n||t)(b.Hb(c.b))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-all-orders"]],decls:3,vars:3,consts:[[4,"ngIf"],["style","padding-left: 15px;",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"statuz"],[1,"chipz"],[1,"avatarz"],[3,"src"],["text-wrap","",1,"labelz",2,"font-weight","600"],["style","font-weight: 300;",4,"ngIf"],[2,"font-weight","300"],["style","font-weight: 600;",4,"ngIf"],[2,"font-weight","600"],[2,"height","25px","width","auto","border-radius","8px",3,"src"],[2,"padding-left","15px"]],template:function(t,n){1&t&&(b.jc(0,l,1,0,"ion-spinner",0),b.jc(1,x,2,1,"div",0),b.jc(2,w,2,0,"p",1)),2&t&&(b.ac("ngIf",n.showSpin),b.xb(1),b.ac("ngIf",n.historyList&&n.historyList.length>0),b.xb(1),b.ac("ngIf",n.status&&n.historyList&&0==n.historyList.length))},directives:[e.k,c.O,e.j,c.j,c.l,c.m,c.k,c.d,c.A],pipes:[e.d],styles:[".avatarz[_ngcontent-%COMP%]{width:19%;height:auto}.avatarz[_ngcontent-%COMP%], .labelz[_ngcontent-%COMP%]{display:inline-block}.labelz[_ngcontent-%COMP%]{width:75%;margin-left:5%}.chipz[_ngcontent-%COMP%]{margin-bottom:10px}.statuz[_ngcontent-%COMP%]{text-align:right;margin-right:20px;color:#bd7304;font-weight:600}ion-spinner[_ngcontent-%COMP%]{width:50px;height:50px;stroke:#444;fill:#222;margin-left:47%;margin-top:3%;margin-bottom:3%}"]}),t})();function y(t,n){if(1&t){const t=b.Lb();b.Kb(0,"div"),b.Kb(1,"p",5),b.lc(2),b.Jb(),b.Kb(3,"input",6,7),b.Sb("ngModelChange",(function(n){return b.gc(t),b.Ub().currentUpload=n})),b.Jb(),b.Kb(5,"ion-button",8),b.Sb("click",(function(){b.gc(t);const n=b.fc(4);return b.Ub().copytoclip(n)})),b.lc(6,"Copy"),b.Jb(),b.Jb()}if(2&t){const t=b.Ub();b.xb(2),b.mc(t.currentUpload),b.xb(1),b.ac("ngModel",t.currentUpload)}}function I(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-button",9),b.Sb("click",(function(){return b.gc(t),b.Ub().category()})),b.lc(1,"Category"),b.Jb()}}function M(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-button",9),b.Sb("click",(function(){return b.gc(t),b.Ub().products()})),b.lc(1,"Products"),b.Jb()}}function C(t,n){1&t&&b.Ib(0,"ion-spinner")}function S(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-item"),b.Kb(1,"ion-avatar",13),b.Ib(2,"img",14),b.Jb(),b.Kb(3,"ion-label"),b.Kb(4,"h2"),b.lc(5),b.Jb(),b.Kb(6,"p"),b.lc(7),b.Jb(),b.Kb(8,"div"),b.lc(9," Image - "),b.Kb(10,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.img=i})),b.Jb(),b.Jb(),b.Kb(11,"div"),b.lc(12," Category - "),b.Kb(13,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.cat=i})),b.Jb(),b.Jb(),b.Kb(14,"div"),b.lc(15," Id - "),b.Kb(16,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.id=i})),b.Jb(),b.Jb(),b.Kb(17,"div"),b.Kb(18,"ion-button",16),b.Sb("click",(function(){b.gc(t);const i=n.index;return b.Ub(2).removeCat(i)})),b.lc(19,"Remove"),b.Jb(),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=n.$implicit,i=n.index;b.xb(2),b.ac("src",t.img,b.hc),b.xb(3),b.mc(t.cat),b.xb(2),b.nc("ID - ",t.id,""),b.xb(3),b.ac("ngModel",t.img)("name","catDa"+i),b.xb(3),b.ac("ngModel",t.cat)("name","catDa1"+i),b.xb(3),b.ac("ngModel",t.id)("name","catDa2"+i)}}function j(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-content"),b.Kb(1,"ion-list"),b.Kb(2,"ion-list-header"),b.lc(3," Categories "),b.Jb(),b.Kb(4,"ion-item"),b.Kb(5,"ion-label"),b.Kb(6,"p"),b.lc(7,"Name - "),b.Kb(8,"input",10),b.Sb("ngModelChange",(function(n){return b.gc(t),b.Ub().catData.name=n})),b.Jb(),b.Jb(),b.Kb(9,"p"),b.lc(10,"Phone - "),b.Kb(11,"input",10),b.Sb("ngModelChange",(function(n){return b.gc(t),b.Ub().catData.phone=n})),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.jc(12,S,20,9,"ion-item",11),b.Kb(13,"ion-item"),b.Kb(14,"ion-button",12),b.Sb("click",(function(){b.gc(t);const n=b.Ub();return n.addCat(n.catData.catalogue)})),b.lc(15,"Add Category"),b.Jb(),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=b.Ub();b.xb(8),b.ac("ngModel",t.catData.name),b.xb(3),b.ac("ngModel",t.catData.phone),b.xb(1),b.ac("ngForOf",t.catData.catalogue)}}function U(t,n){if(1&t&&(b.Kb(0,"option",20),b.lc(1),b.Jb()),2&t){const t=n.$implicit;b.ac("value",t.id),b.xb(1),b.mc(t.cat)}}function O(t,n){if(1&t){const t=b.Lb();b.Kb(0,"div"),b.Kb(1,"table"),b.Kb(2,"tr",21),b.Kb(3,"td"),b.lc(4,"Type"),b.Jb(),b.Kb(5,"td"),b.Kb(6,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.type=i})),b.Jb(),b.Jb(),b.Jb(),b.Kb(7,"tr",21),b.Kb(8,"td"),b.lc(9,"Price"),b.Jb(),b.Kb(10,"td"),b.Kb(11,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.price=i})),b.Jb(),b.Jb(),b.Jb(),b.Kb(12,"tr",21),b.Kb(13,"td"),b.lc(14,"Unit"),b.Jb(),b.Kb(15,"td"),b.Kb(16,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.unit=i})),b.Jb(),b.Jb(),b.Jb(),b.Kb(17,"tr",21),b.Kb(18,"td"),b.Kb(19,"ion-button",16),b.Sb("click",(function(){b.gc(t);const i=n.index,e=b.Ub().$implicit;return b.Ub(2).removeVrnt(e.variants,i)})),b.lc(20,"Remove"),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Ib(21,"div",22),b.Jb()}if(2&t){const t=n.$implicit,i=b.Ub().index;b.xb(6),b.ac("ngModel",t.type)("name","in"+i),b.xb(5),b.ac("ngModel",t.price)("name","in1"+i),b.xb(5),b.ac("ngModel",t.unit)("name","in2"+i)}}function D(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-item"),b.Kb(1,"ion-avatar",13),b.Ib(2,"img",14),b.Jb(),b.Kb(3,"ion-label"),b.Kb(4,"h2"),b.lc(5,"Name -"),b.Kb(6,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.name=i})),b.Jb(),b.Jb(),b.Kb(7,"p"),b.lc(8,"Image -"),b.Kb(9,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.src=i})),b.Jb(),b.Jb(),b.Kb(10,"p"),b.lc(11,"Category - "),b.Kb(12,"select",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.category=i})),b.jc(13,U,2,2,"option",17),b.Jb(),b.Jb(),b.Kb(14,"p"),b.lc(15,"Text - "),b.Kb(16,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.requirements.texts=i})),b.Jb(),b.Jb(),b.Kb(17,"p"),b.lc(18,"Images - "),b.Kb(19,"input",15),b.Sb("ngModelChange",(function(i){return b.gc(t),n.$implicit.requirements.images=i})),b.Jb(),b.Jb(),b.Kb(20,"p"),b.lc(21,"Variants - "),b.Jb(),b.jc(22,O,22,6,"div",11),b.Kb(23,"ion-button",16),b.Sb("click",(function(){b.gc(t);const i=n.$implicit;return b.Ub(2).addVar(i.variants)})),b.lc(24,"Add Variant"),b.Jb(),b.Ib(25,"br"),b.Ib(26,"hr"),b.Kb(27,"ion-button",18),b.Sb("click",(function(){b.gc(t);const i=n.index;return b.Ub(2).removeProd(i)})),b.lc(28,"Remove"),b.Jb(),b.Ib(29,"div",19),b.Jb(),b.Jb()}if(2&t){const t=n.$implicit,i=n.index,e=b.Ub(2);b.xb(2),b.ac("src",t.src,b.hc),b.xb(4),b.ac("ngModel",t.name)("name","prod1"+i),b.xb(3),b.ac("ngModel",t.src)("name","prodi"+i),b.xb(3),b.ac("ngModel",t.category)("name","prod2"+i),b.xb(1),b.ac("ngForOf",e.catData.catalogue),b.xb(3),b.ac("ngModel",t.requirements.texts)("name","prod3"+i),b.xb(3),b.ac("ngModel",t.requirements.images)("name","prod4"+i),b.xb(3),b.ac("ngForOf",t.variants)}}function k(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-content"),b.Kb(1,"ion-list"),b.Kb(2,"ion-list-header"),b.lc(3," Products "),b.Jb(),b.jc(4,D,30,13,"ion-item",11),b.Kb(5,"ion-item"),b.Kb(6,"ion-button",12),b.Sb("click",(function(){b.gc(t);const n=b.Ub();return n.addProd(n.prodData)})),b.lc(7,"Add Product"),b.Jb(),b.Jb(),b.Jb(),b.Jb()}if(2&t){const t=b.Ub();b.xb(4),b.ac("ngForOf",t.prodData)}}let P=(()=>{class t{constructor(){this.showSpin=!0,this.prodData={},this.catData={},this.showWhat="cat",this.currentUpload=""}ngOnInit(){}category(){return Object(r.a)(this,void 0,void 0,(function*(){this.showSpin=!0,this.showWhat="cat";let t=s.a.firestore().collection("shop").doc("digiCat"),n=yield t.get();n.exists?(this.catData=n.data(),this.showSpin=!1,console.log(this.catData)):console.log("EMPTY")}))}products(){return Object(r.a)(this,void 0,void 0,(function*(){this.showSpin=!0,this.showWhat="prod";let t=s.a.firestore().collection("shop").doc("digiProd"),n=yield t.get();n.exists?(this.prodData=n.data().data,this.showSpin=!1,console.log(this.prodData)):console.log("EMPTY")}))}addVar(t){t.push({type:"",price:0,unit:"",selected:0})}addCat(t){t.push({cat:"",id:0,img:""})}addProd(t){t.push({name:"",src:"",desc:"",category:0,variants:[],requirements:{texts:0,images:0}})}removeProd(t){let n=prompt("Enter 'yes' ",t);console.log(n),"yes"==n&&this.prodData.splice(t,1)}removeCat(t){let n=prompt("Enter 'yes' ",t);console.log(n),"yes"==n&&this.catData.catalogue.splice(t,1)}removeVrnt(t,n){let i=prompt("Enter 'yes' ",n);console.log(i),"yes"==i&&t.splice(n,1)}filechange(t){t.target&&t.target.files[0]&&t.target.files[0].name&&(console.log(t.target.files[0]),t.target.files[0].size>6e5?alert("File size is BIG, should be less than 600kb"):s.a.storage().ref().child("newImages/"+t.target.files[0].name+(new Date).getTime()).put(t.target.files[0]).then(t=>Object(r.a)(this,void 0,void 0,(function*(){console.log("Uploaded a blob or file!",t),"success"==t.state&&t&&t.ref&&(this.currentUpload=yield t.ref.getDownloadURL())}))))}copytoclip(t){t.select(),document.execCommand("copy"),t.setSelectionRange(0,0),this.currentUpload=""}update(){return Object(r.a)(this,void 0,void 0,(function*(){"yes"==prompt("Enter 'yes' ")&&("cat"==this.showWhat?s.a.firestore().collection("shop").doc("digiCat").set(this.catData).then(t=>{console.log("val",t),alert("cat DONE "+t)}):"prod"==this.showWhat&&s.a.firestore().collection("shop").doc("digiProd").set({data:this.prodData}).then(t=>{console.log("val",t),alert("prod DONE "+t)}))}))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["app-update-view"]],decls:12,vars:6,consts:[["type","file","accept","image/*",3,"change"],[4,"ngIf"],["color","success",2,"width","49%"],["style","width:48%",3,"click",4,"ngIf"],["color","danger",2,"width","100%",3,"click"],[2,"font-size","8px"],["type","text",2,"position","absolute","top","-900px",3,"ngModel","ngModelChange"],["eleInp",""],["color","danger",3,"click"],[2,"width","48%",3,"click"],["type","text",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[2,"width","100%",3,"click"],["slot","start"],[3,"src"],[3,"ngModel","name","ngModelChange"],[3,"click"],[3,"value",4,"ngFor","ngForOf"],[1,"warning",3,"click"],[1,"splitRed"],[3,"value"],["width","100%"],[1,"split"]],template:function(t,n){1&t&&(b.Kb(0,"input",0),b.Sb("change",(function(t){return n.filechange(t)})),b.Jb(),b.jc(1,y,7,2,"div",1),b.Kb(2,"ion-card"),b.Kb(3,"ion-button",2),b.lc(4,"Download Current Data"),b.Jb(),b.jc(5,I,2,0,"ion-button",3),b.jc(6,M,2,0,"ion-button",3),b.Kb(7,"ion-button",4),b.Sb("click",(function(){return n.update()})),b.lc(8,"Update Current Data"),b.Jb(),b.Jb(),b.jc(9,C,1,0,"ion-spinner",1),b.jc(10,j,16,3,"ion-content",1),b.jc(11,k,8,1,"ion-content",1)),2&t&&(b.xb(1),b.ac("ngIf",n.currentUpload&&""!=n.currentUpload),b.xb(4),b.ac("ngIf","cat"!=n.showWhat),b.xb(1),b.ac("ngIf","cat"==n.showWhat),b.xb(3),b.ac("ngIf",n.showSpin),b.xb(1),b.ac("ngIf",!n.showSpin&&"cat"==n.showWhat),b.xb(1),b.ac("ngIf",!n.showSpin&&"prod"==n.showWhat))},directives:[e.k,c.j,c.h,o.a,o.e,o.f,c.O,c.o,c.B,c.C,c.z,c.A,e.j,c.d,o.i,o.g,o.j],styles:[".split[_ngcontent-%COMP%]{background-color:#00f}.split[_ngcontent-%COMP%], .splitRed[_ngcontent-%COMP%]{height:15px;width:100%}.splitRed[_ngcontent-%COMP%]{background-color:red}"]}),t})();function $(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-item"),b.Kb(1,"ion-button",3),b.Sb("click",(function(){b.gc(t);const n=b.Ub();return n.histView=!n.histView})),b.lc(2,"Update Products"),b.Jb(),b.Jb()}}function L(t,n){if(1&t){const t=b.Lb();b.Kb(0,"ion-item"),b.Kb(1,"ion-button",3),b.Sb("click",(function(){b.gc(t);const n=b.Ub();return n.histView=!n.histView})),b.lc(2,"View Orders"),b.Jb(),b.Jb()}}function F(t,n){1&t&&b.Ib(0,"app-all-orders")}function V(t,n){1&t&&b.Ib(0,"app-update-view")}const z=[{path:"",component:(()=>{class t{constructor(){this.histView=!0}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["app-manager"]],decls:12,vars:4,consts:[["slot","start"],["defaultHref","home"],[4,"ngIf"],[2,"width","100%","font-size","16px",3,"click"]],template:function(t,n){1&t&&(b.Kb(0,"ion-header"),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",0),b.Ib(3,"ion-back-button",1),b.Jb(),b.Kb(4,"ion-title"),b.lc(5,"Manager"),b.Jb(),b.Jb(),b.Jb(),b.Kb(6,"ion-content"),b.Kb(7,"ion-list"),b.jc(8,$,3,0,"ion-item",2),b.jc(9,L,3,0,"ion-item",2),b.Jb(),b.jc(10,F,1,0,"app-all-orders",2),b.jc(11,V,1,0,"app-update-view",2),b.Jb()),2&t&&(b.xb(8),b.ac("ngIf",n.histView),b.xb(1),b.ac("ngIf",!n.histView),b.xb(1),b.ac("ngIf",n.histView),b.xb(1),b.ac("ngIf",!n.histView))},directives:[c.t,c.V,c.i,c.e,c.f,c.U,c.o,c.B,e.k,c.z,c.h,v,P],styles:[""]}),t})()}];let E=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},imports:[[a.j.forChild(z)],a.j]}),t})(),W=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},imports:[[e.b,o.b,c.W,E]]}),t})()}}]);