import{_ as j,r as A,w as E,t as H,o as a,c as o,a as l,b as k,v as x,u as d,i as b,d as C,F as f,e as h,f as Y,g as r,p as N,h as O}from"./index-Cc1oit3A.js";import{i as g,d as R,_ as T}from"./dayjs.min-CsRNn5du.js";const v=M=>(N("data-v-3524e6a6"),M=M(),O(),M),q={class:"container"},z={class:"logo"},G=v(()=>l("img",{src:T,alt:""},null,-1)),J=v(()=>l("span",{class:"title"},"租机堂（商家）",-1)),K={class:"form"},P=v(()=>l("div",{class:"for_title"},"输入设备价格,租期,押金比例!",-1)),Q={class:"select"},W=v(()=>l("option",{class:"inp_2",value:0,disabled:"",selected:""},"请输入租赁方式",-1)),X=["value"],Z={class:"select"},$=v(()=>l("option",{class:"inp_2",value:0,disabled:"",selected:""},"选择分期期数",-1)),ee=["value"],le=["value"],te={key:0,class:"select"},se=v(()=>l("option",{class:"inp_2",value:0,disabled:"",selected:""},"选择首交期数",-1)),ae=["value"],oe={class:"table"},ne=v(()=>l("div",{class:"th"},[l("div",null,"期数"),l("div",null,"付款日"),l("div",null,"租金")],-1)),ie={__name:"RentingMachineHall",setup(M){const s=A({price:void 0,model:0,periods:0,payment:void 0,periods1:0,list:[],periodsList2:[]}),L=[{label:"月租模式",value:1},{label:"首付模式",value:2}],V={12:[3,4,5],9:[2,3,4],6:[2]};E(()=>s.periods,n=>{var e;let t=(e=V[n])==null?void 0:e.map((u,m)=>({label:u+"期",value:u}));s.periodsList2=t,s.periods1=0,s.list=[]});const F=[6,9,12].map((n,t)=>({label:n+"期",value:n})),S=[3,4,5,6,7,8,9,10,12].map((n,t)=>({label:n+"期",value:n})),U=[{key:12,key1:3,value:8.71},{key:12,key1:4,value:9.24},{key:12,key1:5,value:9.74},{key:9,key1:2,value:6.74},{key:9,key1:3,value:7.21},{key:9,key1:4,value:7.64},{key:6,key1:2,value:5.02}],{price:c,model:p,periods:i,payment:_,periods1:y,periodsList2:I}=H(s);document.title="租金计算器 - 租机堂（商家）";const B=()=>{var n;if(!p.value)return alert("请选择租赁方式");if(!i.value)return alert("请选择租赁期数");if(!c.value)return alert("请输入设备零售价");if(p.value===1){if(!y.value)return alert("请选择首付期数");const t=(n=U.find(m=>m.key===i.value&&m.key1===y.value))==null?void 0:n.value,e=new g.Calculator().divide(c.value,t).getResult(),u=[...Array(i.value).keys()].map((m,w)=>({label:"第"+(w+1)+"期",value:(e*1).toFixed(0),time:R(Date.now()).add(w,"M").format("YYYY-MM-DD")}));s.list=u}if(p.value===2){if(!_.value)return alert("请输入首付金额");const t=new g.Calculator().subtract(c.value,_.value).getResult(),e=new g.Calculator().add(i.value,1.5).multiply(.05).add(1).getResult(),u=new g.Calculator().subtract(i.value,1).getResult(),m=new g.Calculator().multiply(t,e).divide(u).getResult(),w=[...Array(i.value).keys()].map((ue,D)=>D==0?{label:"首付款",value:Math.ceil(_.value),time:R(Date.now()).format("YYYY-MM-DD")}:{label:"第"+(D+1)+"期",value:(m*1).toFixed(0),time:R(Date.now()).add(D,"M").format("YYYY-MM-DD")});s.list=w}};return(n,t)=>(a(),o("div",q,[l("div",z,[G,J,l("b",{class:"title_sub",onClick:t[0]||(t[0]=()=>console.log(s))},"租金计算器")]),l("div",K,[P,k(l("input",{class:"inp number",type:"number",placeholder:"请输入设备零售价","onUpdate:modelValue":t[1]||(t[1]=e=>b(c)?c.value=e:null)},null,512),[[x,d(c)]]),l("div",Q,[k(l("select",{class:"inp inp_1","onUpdate:modelValue":t[2]||(t[2]=e=>b(p)?p.value=e:null),onChange:t[3]||(t[3]=()=>{s.periods=0})},[W,(a(),o(f,null,h(L,e=>l("option",{key:e.value,value:e.value},r(e.label),9,X)),64))],544),[[C,d(p)]])]),l("div",Z,[k(l("select",{class:"inp inp_1","onUpdate:modelValue":t[4]||(t[4]=e=>b(i)?i.value=e:null)},[$,s.model===1?(a(!0),o(f,{key:0},h(d(F),e=>(a(),o("option",{key:e.value,value:e.value},r(e.label),9,ee))),128)):Y("",!0),s.model===2?(a(!0),o(f,{key:1},h(d(S),e=>(a(),o("option",{key:"else-"+e.value,value:e.value},r(e.label),9,le))),128)):Y("",!0)],512),[[C,d(i)]])]),s.model===1?(a(),o("div",te,[k(l("select",{class:"inp inp_1","onUpdate:modelValue":t[5]||(t[5]=e=>b(y)?y.value=e:null)},[se,(a(!0),o(f,null,h(d(I),e=>(a(),o("option",{key:"else-"+e.value,value:e.value},r(e.label),9,ae))),128))],512),[[C,d(y)]])])):Y("",!0),s.model===2?k((a(),o("input",{key:1,class:"inp number",type:"number",placeholder:"请输入首付金额","onUpdate:modelValue":t[6]||(t[6]=e=>b(_)?_.value=e:null)},null,512)),[[x,d(_)]]):Y("",!0),l("button",{class:"inp btn",onClick:B},"立即计算")]),l("div",oe,[ne,l("div",null,[(a(!0),o(f,null,h(s.list,(e,u)=>(a(),o("div",{class:"th tr",key:u},[l("div",null,r(e.label),1),l("div",null,r(e.time),1),l("div",null,r(e.value+"元"),1)]))),128))])])]))}},ve=j(ie,[["__scopeId","data-v-3524e6a6"]]);export{ve as default};
