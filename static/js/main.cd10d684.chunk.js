(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{102:function(t,e,c){},103:function(t,e,c){},104:function(t,e,c){},113:function(t,e,c){},114:function(t,e,c){"use strict";c.r(e);var a=c(1),i=c.n(a),s=c(38),n=c.n(s),j=(c(102),c(103),c(6)),r=c(16),l=c(87),o=c(88),h=c(92),d=c(90),b=(c(104),c(0)),x=function(t){Object(h.a)(c,t);var e=Object(d.a)(c);function c(){return Object(l.a)(this,c),e.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{class:"back",children:Object(b.jsx)("div",{class:"tittle",children:Object(b.jsx)("h1",{children:"PICK ME \u98f2\u6599\u9177"})})})})}}]),c}(i.a.Component),p=c(143);function O(){return Object(b.jsxs)("div",{className:"drinkType",children:[Object(b.jsx)("center",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)(j.b,{to:"/allblacktea",children:Object(b.jsx)(p.a,{onclick:"style.display = 'none'",children:"\u7d05\u8336"})}),Object(b.jsx)(j.b,{to:"/allgreentea",children:Object(b.jsx)(p.a,{children:"\u7da0\u8336"})}),Object(b.jsx)(j.b,{to:"/alloolong",children:Object(b.jsx)(p.a,{children:"\u70cf\u9f8d\u8336"})}),Object(b.jsx)(j.b,{to:"/allmilk",children:Object(b.jsx)(p.a,{children:"\u5976\u985e"})})]})}),Object(b.jsx)("center",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)(j.b,{to:"/allcoffee",children:Object(b.jsx)(p.a,{children:"\u5496\u5561"})}),Object(b.jsx)(j.b,{to:"/allfruit",children:Object(b.jsx)(p.a,{children:"\u6c34\u679c"})}),Object(b.jsx)(j.b,{to:"/allsmoothie",children:Object(b.jsx)(p.a,{children:"\u51b0\u6c99"})}),Object(b.jsx)(j.b,{to:"/allelse",children:Object(b.jsx)(p.a,{children:"\u5176\u4ed6"})}),Object(b.jsx)(j.b,{to:"/allelsetea",children:Object(b.jsx)(p.a,{children:"\u5176\u4ed6\u8336"})})]})}),Object(b.jsx)("h1",{children:"\u8acb\u9078\u64c7\u98f2\u6599\u7a2e\u985e!"})]})}var u=c(144),m=c(145),f=c(146),g=c(147),v=c(15),y=c.n(v),_=c(3),D=c.n(_),k=[];function I(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:5,gap:60,children:k.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n            ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"blackteachange",children:Object(b.jsx)(j.b,{to:"/blacktea/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/blacktea/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),onClick:function(){var e;e=t.id,window.console.log("click"),window.console.log(e)},children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}D.a.ajax({url:"http://54.88.4.245/api_drink_blacktea.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.Picture,title:e.D_NAME,id:e.D_ID};k.push(c)}))}});var N=[];function w(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:5,gap:60,children:N.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n            ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"greenteachange",children:Object(b.jsx)(j.b,{to:"/greentea/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/greentea/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}D.a.ajax({url:" http://54.88.4.245/api_drink_greentea.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.Picture,title:e.D_NAME,id:e.D_ID};N.push(c)}))}});var T=[];function S(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:5,gap:60,children:T.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n            ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"storeChange",children:Object(b.jsx)(j.b,{to:"/oolong/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/oolong/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}D.a.ajax({url:"http://54.88.4.245/api_drink_oolongtea.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.Picture,title:e.D_NAME,id:e.D_ID};T.push(c)}))}});var P=[];function C(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:5,gap:60,children:P.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n            ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"storeChange",children:Object(b.jsx)(j.b,{to:"/milk/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/milk/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}D.a.ajax({url:"http://54.88.4.245/api_drink_milk.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.Picture,title:e.D_NAME,id:e.D_ID};P.push(c)}))}});var $=[];function M(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:5,gap:60,children:$.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n            ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"storeChange",children:Object(b.jsx)(j.b,{to:"/coffee/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/coffee/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}D.a.ajax({url:"http://54.88.4.245/api_drink_coffee.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.Picture,title:e.D_NAME,id:e.D_ID};$.push(c)}))}});var F=[];function z(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:5,gap:60,children:F.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n            ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"storeChange",children:Object(b.jsx)(j.b,{to:"/fruit/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/fruit/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}D.a.ajax({url:"http://54.88.4.245/api_drink_fruit.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.Picture,title:e.D_NAME,id:e.D_ID};F.push(c)}))}});var A=[];function E(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:5,gap:60,children:A.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n            ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"storeChange",children:Object(b.jsx)(j.b,{to:"/smoothie/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/smoothie/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}D.a.ajax({url:"http://54.88.4.245/api_drink_ smoothie.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.Picture,title:e.D_NAME,id:e.D_ID};A.push(c)}))}});var V=[];function R(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:5,gap:60,children:V.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n            ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"storeChange",children:Object(b.jsx)(j.b,{to:"/else/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/else/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}D.a.ajax({url:"http://54.88.4.245/api_drink_other.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.Picture,title:e.D_NAME,id:e.D_ID};V.push(c)}))}});var B=[];function L(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:5,gap:60,children:B.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n            ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"storeChange",children:Object(b.jsx)(j.b,{to:"/elsetea/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/elsetea/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}D.a.ajax({url:"http://54.88.4.245/api_drink_othertea.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.Picture,title:e.D_NAME,id:e.D_ID};B.push(c)}))}});var H=[];function J(){return Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:1e3,height:850},cols:4,gap:8,children:H.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{srcSet:"".concat(t.img,"?w=248&fit=crop&auto=format 1x,\n                ").concat(t.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:t.title,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.title,subtitle:t.author,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"storeChange",children:Object(b.jsx)(j.b,{to:"/storedetail/".concat(t.id),children:Object(b.jsx)(g.a,{component:j.b,to:"/storedetail/".concat(t.id),sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.title),onClick:function(){var e;e=t.id,window.console.log("click"),window.console.log(e)},children:Object(b.jsx)(y.a,{})})})})})})]},t.img)}))})})}function K(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"hello"}),Object(b.jsx)("a",{href:"http://54.88.4.245/user/login.php",children:"Login"})]})}function q(){return Object(b.jsx)("div",{className:"listPage",children:Object(b.jsx)("h1",{children:"this is the list page"})})}D.a.ajax({url:"http://54.88.4.245/api_store_all.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){var c={img:e.img,title:e.S_name,id:e.S_ID};H.push(c)}))}});var G=c(137),Z=c(142),U=function(t){return{root:{display:"flex","& > *":{margin:t.spacing(2)}},large:{width:t.spacing(10),height:t.spacing(10)}}};function W(t){var e=Object(G.a)(U);return Object(b.jsx)("div",{className:e.root,children:Object(b.jsx)(Z.a,{alt:"Remy Sharp",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvksDFCgTDaZgfOCKgZM6Tb8JaSbO1HhO6Cw&usqp=CAU",className:e.large})})}function Q(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)(W,{}),Object(b.jsx)("h1",{children:"PICK ME \u98f2\u6599\u9177"}),Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsx)(p.a,{children:"\u9996\u9801"})}),Object(b.jsx)(j.b,{to:"/Drink_c",children:Object(b.jsx)(p.a,{children:"\u98f2\u6599"})}),Object(b.jsx)(j.b,{to:"/Store_c",children:Object(b.jsx)(p.a,{children:"\u5e97\u5bb6"})}),Object(b.jsx)(j.b,{to:"/SignIn",children:Object(b.jsx)(p.a,{children:"\u767b\u5165"})}),Object(b.jsx)(j.b,{to:"/List",children:Object(b.jsx)(p.a,{children:"\u5fc3\u9858\u6e05\u55ae"})}),Object(b.jsx)(j.b,{to:"/Manage",children:Object(b.jsx)(p.a,{children:"\u7ba1\u7406\u8005\u4ecb\u9762"})})]})]})}c(30);var X=c(89),Y=c.n(X);function tt(){var t=window.location.pathname.split("/")[2],e=0,c=[];D.a.ajax({url:"http://54.88.4.245/api/drink/blacktea_intro.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(a){a&&D.a.each(a,(function(a,i){if(i.D_ID===t){var s={img:i.Picture,title:i.D_Name,id:i.D_ID,vol:i.Volume,cal:i.Cal,pri:i.Price};e+=1,c.push(s)}}))}});var a=0,i=[];D.a.ajax({url:"http://54.88.4.245/api/drink/blacktea_fact.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(e){e&&D.a.each(e,(function(e,c){if(c.D_ID===t){var s={id:c.D_ID,fact:c.I_Name};a+=1,i.push(s)}}))}});for(var s=[],n=0;n<8;n++)s[n]="";for(var j=0;j<a;j++)for(var r=0;r<7;r++)t===i[j].id&&(s[r]=i[j].fact);for(var l=0;l<e;l++)c[l].img;return console.log("drinkid",t),console.log(c[0]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c[0].title}),Object(b.jsx)("input",{type:"button",value:"\u52a0\u5165\u5fc3\u9858\u6e05\u55ae",className:"hopebt"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"drinkimg",src:c[0].img})}),Object(b.jsxs)("h4",{children:["\u539f\u6599:",s[0]," ",s[1]," ",s[2]," ",s[3]," ",s[4]," ",s[5]," ",s[6]," ",s[7]]}),Object(b.jsxs)("table",{class:"tb1",children:[Object(b.jsx)("colgroup",{span:"3"}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{id:"name",colspan:"3",children:"\u5546\u54c1\u8cc7\u8a0a"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u5bb9\u91cf"}),Object(b.jsx)("th",{children:"\u71b1\u91cf"}),Object(b.jsx)("th",{children:"\u50f9\u9322"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c[0].vol}),Object(b.jsxs)("td",{children:[c[0].cal,"cal"]}),Object(b.jsxs)("td",{children:["$",c[0].pri]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"cal"}),Object(b.jsx)("td",{children:"$"})]})]})]})}function et(){var t=window.location.pathname.split("/")[2],e=0,c=[];D.a.ajax({url:"http://54.88.4.245/api/drink/coffee_intro.php  ",type:"post",cache:!1,async:!1,dataType:"json",success:function(a){a&&D.a.each(a,(function(a,i){if(i.D_ID===t){var s={img:i.Picture,title:i.D_Name,id:i.D_ID,vol:i.Volume,cal:i.Cal,pri:i.Price};e+=1,c.push(s)}}))}});var a=0,i=[];D.a.ajax({url:"http://54.88.4.245/api/drink/coffee_fact.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(e){e&&D.a.each(e,(function(e,c){if(c.D_ID===t){var s={id:c.D_ID,fact:c.I_Name};a+=1,i.push(s)}}))}});for(var s=[],n=0;n<8;n++)s[n]="";for(var j=0;j<a;j++)for(var r=0;r<7;r++)t===i[j].id&&(s[r]=i[j].fact);for(var l=0;l<e;l++)c[l].img;return console.log("drinkid",t),console.log(c[0]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c[0].title}),Object(b.jsx)("input",{type:"button",value:"\u52a0\u5165\u5fc3\u9858\u6e05\u55ae",className:"hopebt"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"drinkimg",src:c[0].img})}),Object(b.jsxs)("div",{className:"detail",children:[Object(b.jsxs)("h4",{children:["\u539f\u6599:",s[0]," ",s[1]," ",s[2]," ",s[3]," ",s[4]," ",s[5]," ",s[6]," ",s[7]]}),Object(b.jsxs)("table",{class:"tb1",children:[Object(b.jsx)("colgroup",{span:"3"}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{id:"name",colspan:"3",children:"\u5546\u54c1\u8cc7\u8a0a"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u5bb9\u91cf"}),Object(b.jsx)("th",{children:"\u71b1\u91cf"}),Object(b.jsx)("th",{children:"\u50f9\u9322"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c[0].vol}),Object(b.jsxs)("td",{children:[c[0].cal,"cal"]}),Object(b.jsxs)("td",{children:["$",c[0].pri]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"cal"}),Object(b.jsx)("td",{children:"$"})]})]})]})]})}function ct(){var t=window.location.pathname.split("/")[2],e=0,c=[];D.a.ajax({url:"http://54.88.4.245/api/drink/other_intro.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(a){a&&D.a.each(a,(function(a,i){if(i.D_ID===t){var s={img:i.Picture,title:i.D_Name,id:i.D_ID,vol:i.Volume,cal:i.Cal,pri:i.Price};e+=1,c.push(s)}}))}});var a=0,i=[];D.a.ajax({url:"http://54.88.4.245/api/drink/other_fact.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(e){e&&D.a.each(e,(function(e,c){if(c.D_ID===t){var s={id:c.D_ID,fact:c.I_Name};a+=1,i.push(s)}}))}});for(var s=[],n=0;n<8;n++)s[n]="";for(var j=0;j<a;j++)for(var r=0;r<7;r++)t===i[j].id&&(s[r]=i[j].fact);for(var l=0;l<e;l++)c[l].img;return console.log("drinkid",t),console.log(c[0]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c[0].title}),Object(b.jsx)("input",{type:"button",value:"\u52a0\u5165\u5fc3\u9858\u6e05\u55ae",className:"hopebt"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"drinkimg",src:c[0].img})}),Object(b.jsxs)("h4",{children:["\u539f\u6599:",s[0]," ",s[1]," ",s[2]," ",s[3]," ",s[4]," ",s[5]," ",s[6]," ",s[7]]}),Object(b.jsxs)("table",{class:"tb1",children:[Object(b.jsx)("colgroup",{span:"3"}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{id:"name",colspan:"3",children:"\u5546\u54c1\u8cc7\u8a0a"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u5bb9\u91cf"}),Object(b.jsx)("th",{children:"\u71b1\u91cf"}),Object(b.jsx)("th",{children:"\u50f9\u9322"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c[0].vol}),Object(b.jsxs)("td",{children:[c[0].cal,"cal"]}),Object(b.jsxs)("td",{children:["$",c[0].pri]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"cal"}),Object(b.jsx)("td",{children:"$"})]})]})]})}function at(){var t=window.location.pathname.split("/")[2],e=0,c=[];D.a.ajax({url:"http://54.88.4.245/api/drink/othertea_intro.php  ",type:"post",cache:!1,async:!1,dataType:"json",success:function(a){a&&D.a.each(a,(function(a,i){if(i.D_ID===t){var s={img:i.Picture,title:i.D_Name,id:i.D_ID,vol:i.Volume,cal:i.Cal,pri:i.Price};e+=1,c.push(s)}}))}});var a=0,i=[];D.a.ajax({url:"http://54.88.4.245/api/drink/othertea_fact.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(e){e&&D.a.each(e,(function(e,c){if(c.D_ID===t){var s={id:c.D_ID,fact:c.I_Name};a+=1,i.push(s)}}))}});for(var s=[],n=0;n<8;n++)s[n]="";for(var j=0;j<a;j++)for(var r=0;r<7;r++)t===i[j].id&&(s[r]=i[j].fact);for(var l=0;l<e;l++)c[l].img;return console.log("drinkid",t),console.log(c[0]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c[0].title}),Object(b.jsx)("input",{type:"button",value:"\u52a0\u5165\u5fc3\u9858\u6e05\u55ae",className:"hopebt"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"drinkimg",src:c[0].img})}),Object(b.jsxs)("h4",{children:["\u539f\u6599:",s[0]," ",s[1]," ",s[2]," ",s[3]," ",s[4]," ",s[5]," ",s[6]," ",s[7]]}),Object(b.jsxs)("table",{class:"tb1",children:[Object(b.jsx)("colgroup",{span:"3"}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{id:"name",colspan:"3",children:"\u5546\u54c1\u8cc7\u8a0a"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u5bb9\u91cf"}),Object(b.jsx)("th",{children:"\u71b1\u91cf"}),Object(b.jsx)("th",{children:"\u50f9\u9322"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c[0].vol}),Object(b.jsxs)("td",{children:[c[0].cal,"cal"]}),Object(b.jsxs)("td",{children:["$",c[0].pri]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"cal"}),Object(b.jsx)("td",{children:"$"})]})]})]})}function it(){var t=window.location.pathname.split("/")[2],e=0,c=[];D.a.ajax({url:"http://54.88.4.245/api/drink/fruit_intro.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(a){a&&D.a.each(a,(function(a,i){if(i.D_ID===t){var s={img:i.Picture,title:i.D_Name,id:i.D_ID,vol:i.Volume,cal:i.Cal,pri:i.Price};e+=1,c.push(s)}}))}});var a=0,i=[];D.a.ajax({url:"http://54.88.4.245/api/drink/fruit_fact.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(e){e&&D.a.each(e,(function(e,c){if(c.D_ID===t){var s={id:c.D_ID,fact:c.I_Name};a+=1,i.push(s)}}))}});for(var s=[],n=0;n<8;n++)s[n]="";for(var j=0;j<a;j++)for(var r=0;r<7;r++)t===i[j].id&&(s[r]=i[j].fact);for(var l=0;l<e;l++)c[l].img;return console.log("drinkid",t),console.log(c[0]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c[0].title}),Object(b.jsx)("input",{type:"button",value:"\u52a0\u5165\u5fc3\u9858\u6e05\u55ae",className:"hopebt"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"drinkimg",src:c[0].img})}),Object(b.jsxs)("h4",{children:["\u539f\u6599:",s[0]," ",s[1]," ",s[2]," ",s[3]," ",s[4]," ",s[5]," ",s[6]," ",s[7]]}),Object(b.jsxs)("table",{class:"tb1",children:[Object(b.jsx)("colgroup",{span:"3"}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{id:"name",colspan:"3",children:"\u5546\u54c1\u8cc7\u8a0a"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u5bb9\u91cf"}),Object(b.jsx)("th",{children:"\u71b1\u91cf"}),Object(b.jsx)("th",{children:"\u50f9\u9322"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c[0].vol}),Object(b.jsxs)("td",{children:[c[0].cal,"cal"]}),Object(b.jsxs)("td",{children:["$",c[0].pri]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"cal"}),Object(b.jsx)("td",{children:"$"})]})]})]})}function st(){var t=window.location.pathname.split("/")[2],e=0,c=[];D.a.ajax({url:" http://54.88.4.245/api/drink/greentea_intro.php  ",type:"post",cache:!1,async:!1,dataType:"json",success:function(a){a&&D.a.each(a,(function(a,i){if(i.D_ID===t){var s={img:i.Picture,title:i.D_Name,id:i.D_ID,vol:i.Volume,cal:i.Cal,pri:i.Price};e+=1,c.push(s)}}))}});var a=0,i=[];D.a.ajax({url:"http://54.88.4.245/api/drink/greentea_fact.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(e){e&&D.a.each(e,(function(e,c){if(c.D_ID===t){var s={id:c.D_ID,fact:c.I_Name};a+=1,i.push(s)}}))}});for(var s=[],n=0;n<8;n++)s[n]="";for(var j=0;j<a;j++)for(var r=0;r<7;r++)t===i[j].id&&(s[r]=i[j].fact);for(var l=0;l<e;l++)c[l].img;return console.log("drinkid",t),console.log(c[0]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c[0].title}),Object(b.jsx)("input",{type:"button",value:"\u52a0\u5165\u5fc3\u9858\u6e05\u55ae",className:"hopebt"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"drinkimg",src:c[0].img})}),Object(b.jsxs)("h4",{children:["\u539f\u6599:",s[0]," ",s[1]," ",s[2]," ",s[3]," ",s[4]," ",s[5]," ",s[6]," ",s[7]]}),Object(b.jsxs)("table",{class:"tb1",children:[Object(b.jsx)("colgroup",{span:"3"}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{id:"name",colspan:"3",children:"\u5546\u54c1\u8cc7\u8a0a"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u5bb9\u91cf"}),Object(b.jsx)("th",{children:"\u71b1\u91cf"}),Object(b.jsx)("th",{children:"\u50f9\u9322"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c[0].vol}),Object(b.jsxs)("td",{children:[c[0].cal,"cal"]}),Object(b.jsxs)("td",{children:["$",c[0].pri]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"cal"}),Object(b.jsx)("td",{children:"$"})]})]})]})}function nt(){var t=window.location.pathname.split("/")[2],e=0,c=[];D.a.ajax({url:"http://54.88.4.245/api/drink/milk_intro.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(a){a&&D.a.each(a,(function(a,i){if(i.D_ID===t){var s={img:i.Picture,title:i.D_Name,id:i.D_ID,vol:i.Volume,cal:i.Cal,pri:i.Price};e+=1,c.push(s)}}))}});var a=0,i=[];D.a.ajax({url:"http://54.88.4.245/api/drink/milk_fact.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(e){e&&D.a.each(e,(function(e,c){if(c.D_ID===t){var s={id:c.D_ID,fact:c.I_Name};a+=1,i.push(s)}}))}});for(var s=[],n=0;n<8;n++)s[n]="";for(var j=0;j<a;j++)for(var r=0;r<7;r++)t===i[j].id&&(s[r]=i[j].fact);for(var l=0;l<e;l++)c[l].img;return console.log("drinkid",t),console.log(c[0]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c[0].title}),Object(b.jsx)("input",{type:"button",value:"\u52a0\u5165\u5fc3\u9858\u6e05\u55ae",className:"hopebt"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"drinkimg",src:c[0].img})}),Object(b.jsxs)("h4",{children:["\u539f\u6599:",s[0]," ",s[1]," ",s[2]," ",s[3]," ",s[4]," ",s[5]," ",s[6]," ",s[7]]}),Object(b.jsxs)("table",{class:"tb1",children:[Object(b.jsx)("colgroup",{span:"3"}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{id:"name",colspan:"3",children:"\u5546\u54c1\u8cc7\u8a0a"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u5bb9\u91cf"}),Object(b.jsx)("th",{children:"\u71b1\u91cf"}),Object(b.jsx)("th",{children:"\u50f9\u9322"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c[0].vol}),Object(b.jsxs)("td",{children:[c[0].cal,"cal"]}),Object(b.jsxs)("td",{children:["$",c[0].pri]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"cal"}),Object(b.jsx)("td",{children:"$"})]})]})]})}function jt(){var t=window.location.pathname.split("/")[2],e=0,c=[];D.a.ajax({url:"http://54.88.4.245/api/drink/oolongtea_intro.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(a){a&&D.a.each(a,(function(a,i){if(i.D_ID===t){var s={img:i.Picture,title:i.D_Name,id:i.D_ID,vol:i.Volume,cal:i.Cal,pri:i.Price};e+=1,c.push(s)}}))}});var a=0,i=[];D.a.ajax({url:"http://54.88.4.245/api/drink/oolongtea_fact.php  ",type:"post",cache:!1,async:!1,dataType:"json",success:function(e){e&&D.a.each(e,(function(e,c){if(c.D_ID===t){var s={id:c.D_ID,fact:c.I_Name};a+=1,i.push(s)}}))}});for(var s=[],n=0;n<8;n++)s[n]="";for(var j=0;j<a;j++)for(var r=0;r<7;r++)t===i[j].id&&(s[r]=i[j].fact);for(var l=0;l<e;l++)c[l].img;return console.log("drinkid",t),console.log(c[0]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c[0].title}),Object(b.jsx)("input",{type:"button",value:"\u52a0\u5165\u5fc3\u9858\u6e05\u55ae",className:"hopebt"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"drinkimg",src:c[0].img})}),Object(b.jsxs)("h4",{children:["\u539f\u6599:",s[0]," ",s[1]," ",s[2]," ",s[3]," ",s[4]," ",s[5]," ",s[6]," ",s[7]]}),Object(b.jsxs)("table",{class:"tb1",children:[Object(b.jsx)("colgroup",{span:"3"}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{id:"name",colspan:"3",children:"\u5546\u54c1\u8cc7\u8a0a"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u5bb9\u91cf"}),Object(b.jsx)("th",{children:"\u71b1\u91cf"}),Object(b.jsx)("th",{children:"\u50f9\u9322"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c[0].vol}),Object(b.jsxs)("td",{children:[c[0].cal,"cal"]}),Object(b.jsxs)("td",{children:["$",c[0].pri]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"cal"}),Object(b.jsx)("td",{children:"$"})]})]})]})}function rt(){var t=window.location.pathname.split("/")[2],e=0,c=[];D.a.ajax({url:"http://54.88.4.245/api/drink/smoothie_intro.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(a){a&&D.a.each(a,(function(a,i){if(i.D_ID===t){var s={img:i.Picture,title:i.D_Name,id:i.D_ID,vol:i.Volume,cal:i.Cal,pri:i.Price};e+=1,c.push(s)}}))}});var a=0,i=[];D.a.ajax({url:"http://54.88.4.245/api/drink/smoothie_fact.php  ",type:"post",cache:!1,async:!1,dataType:"json",success:function(e){e&&D.a.each(e,(function(e,c){if(c.D_ID===t){var s={id:c.D_ID,fact:c.I_Name};a+=1,i.push(s)}}))}});for(var s=[],n=0;n<8;n++)s[n]="";for(var j=0;j<a;j++)for(var r=0;r<7;r++)t===i[j].id&&(s[r]=i[j].fact);for(var l=0;l<e;l++)c[l].img;return console.log("drinkid",t),console.log(c[0]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:c[0].title}),Object(b.jsx)("input",{type:"button",value:"\u52a0\u5165\u5fc3\u9858\u6e05\u55ae",className:"hopebt"}),Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"drinkimg",src:c[0].img})}),Object(b.jsxs)("h4",{children:["\u539f\u6599:",s[0]," ",s[1]," ",s[2]," ",s[3]," ",s[4]," ",s[5]," ",s[6]," ",s[7]]}),Object(b.jsxs)("table",{class:"tb1",children:[Object(b.jsx)("colgroup",{span:"3"}),Object(b.jsx)("tr",{children:Object(b.jsx)("th",{id:"name",colspan:"3",children:"\u5546\u54c1\u8cc7\u8a0a"})}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"\u5bb9\u91cf"}),Object(b.jsx)("th",{children:"\u71b1\u91cf"}),Object(b.jsx)("th",{children:"\u50f9\u9322"})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:c[0].vol}),Object(b.jsxs)("td",{children:[c[0].cal,"cal"]}),Object(b.jsxs)("td",{children:["$",c[0].pri]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{}),Object(b.jsx)("td",{children:"cal"}),Object(b.jsx)("td",{children:"$"})]})]})]})}var lt=c(17),ot=c(138),ht=c(149),dt=c(148),bt=c(141),xt=c(46),pt=c.n(xt),Ot=function(t){return{root:{width:"100%"},heading:{fontSize:t.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:t.typography.pxToRem(15),color:t.palette.text.secondary}}},ut=window.location.pathname.split("/")[2],mt=[];function ft(){var t,e=Object(G.a)(Ot),c=i.a.useState(!1),a=Object(lt.a)(c,2),s=a[0],n=a[1];return console.log(ut),Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(ot.a,{expanded:"panel1"===s,onChange:(t="panel1",function(e,c){n(!!c&&t)}),children:[Object(b.jsxs)(dt.a,{expandIcon:Object(b.jsx)(pt.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[Object(b.jsx)(bt.a,{className:e.heading,children:"\u9580\u5e02\u8cc7\u8a0a"}),Object(b.jsx)(bt.a,{className:e.secondaryHeading,children:"(\u5206\u5e97)"})]}),Object(b.jsx)(ht.a,{children:Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:2,gap:60,children:mt.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:t.name}),Object(b.jsxs)("p",{children:["\u96fb\u8a71:",t.tel]}),Object(b.jsxs)("p",{children:["\u5730\u5740:",t.location]}),Object(b.jsx)("p",{children:"\u71df\u696d\u6642\u9593:"}),Object(b.jsxs)("p",{children:["\u661f\u671f\u4e00:",t.mont,"     \u661f\u671f\u4e8c:",t.tuet,"     \u661f\u671f\u4e09:",t.wedt]}),Object(b.jsxs)("p",{children:["\u661f\u671f\u56db:",t.thut,"     \u661f\u671f\u4e94:",t.frit,"     \u661f\u671f\u516d:",t.satt,"     \u661f\u671f\u65e5:",t.sunt]}),Object(b.jsx)("a",{href:t.map,children:"\u9ede\u6211\u770b\u5730\u5716"})]})}))})})})]})})}D.a.ajax({url:"http://54.88.4.245/api_branch.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){if(e.S_ID===ut){var c={id:e.S_ID,name:e.B_Name,tel:e.Phone,map:e.Google_Map,block:e.Area,location:e.Address,mont:e.Mon,tuet:e.Tue,wedt:e.Wed,thut:e.Thu,frit:e.Fri,satt:e.Sat,sunt:e.Sun};1,mt.push(c)}}))}});c(113);var gt=window.location.pathname.split("/")[2],vt=0,yt=[];function _t(){for(var t=0;t<vt;t++)yt[t].img;return Object(b.jsxs)("div",{class:"INTRO",children:[Object(b.jsx)("div",{class:"Tittle",children:Object(b.jsx)("h2",{children:yt[0].tittle})}),Object(b.jsx)("img",{className:"storepic",src:yt[0].Img,width:"20%"}),Object(b.jsx)("p",{class:"word",children:yt[0].intro})]})}D.a.ajax({url:"http://54.88.4.245/api_store_name.php ",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){if(e.S_ID===gt){var c={id:e.S_ID,tittle:e.S_name,intro:e.desc,Img:e.img};vt+=1,yt.push(c)}}))}});var Dt=window.location.pathname.split("/")[2],kt=[];D.a.ajax({url:"http://54.88.4.245/api_store_menu.php",type:"post",cache:!1,async:!1,dataType:"json",success:function(t){t&&D.a.each(t,(function(t,e){if(e.S_ID===Dt){var c={id:e.S_ID,did:e.D_ID,drink:e.D_Name,Img:e.Picture};1,kt.push(c)}}))}});var It=function(t){return{root:{width:"100%"},heading:{fontSize:t.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:t.typography.pxToRem(15),color:t.palette.text.secondary}}};function Nt(){var t,e=Object(G.a)(It),c=i.a.useState(!1),a=Object(lt.a)(c,2),s=a[0],n=a[1];return console.log(kt[0].tittle),console.log(Dt),Object(b.jsx)("div",{className:e.root,children:Object(b.jsxs)(ot.a,{expanded:"panel1"===s,onChange:(t="panel1",function(e,c){n(!!c&&t)}),children:[Object(b.jsx)(dt.a,{expandIcon:Object(b.jsx)(pt.a,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(b.jsx)(bt.a,{className:e.heading,children:"\u83dc\u55ae"})}),Object(b.jsx)(ht.a,{children:Object(b.jsx)("center",{children:Object(b.jsx)(u.a,{sx:{width:"80%",height:"90%"},cols:4,gap:60,children:kt.map((function(t){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)("img",{src:t.Img,loading:"lazy"}),Object(b.jsx)(f.a,{title:t.drink,actionIcon:Object(b.jsx)("div",{className:"links",children:Object(b.jsx)("div",{className:"storeChange",children:Object(b.jsx)(g.a,{sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(t.drink),onClick:function(){var e;e=t.id,window.console.log("click"),window.console.log(e)},children:Object(b.jsx)(y.a,{})})})})})]},t.Img)}))})})})]})})}function wt(){return console.log("hi"),Object(b.jsx)(j.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)(r.a,{exact:!0,path:"/",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(x,{})]}),Object(b.jsxs)(r.a,{path:"/Drink_c",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(O,{})]}),Object(b.jsxs)(r.a,{path:"/Store_c",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(J,{})]}),Object(b.jsxs)(r.a,{path:"/storedetail/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(_t,{}),Object(b.jsx)(ft,{}),Object(b.jsx)(Nt,{})]}),Object(b.jsx)(r.a,{path:"/SignIn",children:Object(b.jsx)(K,{})}),Object(b.jsxs)(r.a,{path:"/Manage",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(Y.a,{})]}),Object(b.jsxs)(r.a,{path:"/List",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(q,{})]}),Object(b.jsxs)(r.a,{path:"/allblacktea",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(I,{})]}),Object(b.jsxs)(r.a,{path:"/blacktea/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(tt,{})]}),Object(b.jsxs)(r.a,{path:"/allgreentea",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(w,{})]}),Object(b.jsxs)(r.a,{path:"/greentea/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(st,{})]}),Object(b.jsxs)(r.a,{path:"/alloolong",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(S,{})]}),Object(b.jsxs)(r.a,{path:"/oolong/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(jt,{})]}),Object(b.jsxs)(r.a,{path:"/allmilk",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(C,{})]}),Object(b.jsxs)(r.a,{path:"/milk/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(nt,{})]}),Object(b.jsxs)(r.a,{path:"/allcoffee",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(M,{})]}),Object(b.jsxs)(r.a,{path:"/coffee/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(et,{})]}),Object(b.jsxs)(r.a,{path:"/allfruit",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(z,{})]}),Object(b.jsxs)(r.a,{path:"/fruit/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(it,{})]}),Object(b.jsxs)(r.a,{path:"/allsmoothie",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(E,{})]}),Object(b.jsxs)(r.a,{path:"/smoothie/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(rt,{})]}),Object(b.jsxs)(r.a,{path:"/allelse",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(R,{})]}),Object(b.jsxs)(r.a,{path:"/else/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(ct,{})]}),Object(b.jsxs)(r.a,{path:"/allelsetea",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(L,{})]}),Object(b.jsxs)(r.a,{path:"/elsetea/:id",children:[Object(b.jsx)(Q,{}),Object(b.jsx)(at,{})]})]})})}var Tt=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,150)).then((function(e){var c=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,n=e.getTTFB;c(t),a(t),i(t),s(t),n(t)}))};n.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(wt,{})}),document.getElementById("root")),Tt()},30:function(t,e,c){},89:function(t,e){}},[[114,1,2]]]);
//# sourceMappingURL=main.cd10d684.chunk.js.map