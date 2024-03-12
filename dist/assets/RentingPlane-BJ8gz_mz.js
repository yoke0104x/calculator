import{_ as A,r as E,w as N,t as P,o as a,c as o,a as l,b,v as L,u as d,i as k,d as M,F as g,e as h,f as Y,g as c,p as O,h as T}from"./index-CFh7pV8F.js";import{i as r,d as x,_ as q}from"./dayjs.min-CsRNn5du.js";const v=w=>(O("data-v-7fdc315c"),w=w(),T(),w),z={class:"container"},G={class:"logo"},H=v(()=>l("img",{src:q,alt:""},null,-1)),J=v(()=>l("span",{class:"title"},"租机堂（商家）",-1)),K={class:"form"},Q=v(()=>l("div",{class:"for_title"}," 输入设备价格,租期,押金比例! ",-1)),W={class:"select"},X=v(()=>l("option",{class:"inp_2",value:0,disabled:"",selected:""},"请输入租赁方式",-1)),Z=["value"],$={class:"select"},ee=v(()=>l("option",{class:"inp_2",value:0,disabled:"",selected:""},"选择分期期数",-1)),le=["value"],te=["value"],se={key:0,class:"select"},ae=v(()=>l("option",{class:"inp_2",value:0,disabled:"",selected:""},"选择首交期数",-1)),oe=["value"],ne={class:"table"},ue=v(()=>l("div",{class:"th"},[l("div",null,"期数"),l("div",null,"付款日"),l("div",null,"租金")],-1)),ie={__name:"RentingPlane",setup(w){const s=E({price:void 0,model:0,periods:0,payment:void 0,periods1:0,list:[],periodsList2:[]}),V=[{label:"月租模式",value:1},{label:"首付模式",value:2}],F={12:[3,4,5],9:[3,4],6:[2]};N(()=>s.periods,n=>{var e;let t=(e=F[n])==null?void 0:e.map((i,C)=>({label:i+"期",value:i}));s.periodsList2=t,s.periods1=0,s.list=[]});const S=[6,9,12].map((n,t)=>({label:n+"期",value:n})),U=[3,4,5,6,7,8,9,10,12].map((n,t)=>({label:n+"期",value:n})),I=[{key:12,key1:3,value:9.24},{key:12,key1:4,value:9.72},{key:12,key1:5,value:10.14},{key:9,key1:3,value:7.55},{key:9,key1:4,value:7.91},{key:6,key1:2,value:5.23}],{price:p,model:_,periods:u,payment:m,periods1:f,periodsList2:B}=P(s);document.title="租金计算器 - 租机堂（商家）";const j=()=>{var n;if(!_.value)return alert("请选择租赁方式");if(!u.value)return alert("请选择租赁期数");if(!p.value)return alert("请输入设备零售价");if(_.value===1){if(!f.value)return alert("请选择首付期数");const t=(n=I.find(R=>R.key===u.value&&R.key1===f.value))==null?void 0:n.value,e=new r.Calculator().divide(p.value,t).getResult(),i=new r.Calculator().divide(200,u.value).getResult(),C=new r.Calculator().add(e,i).getResult(),D=[...Array(u.value).keys()].map((R,y)=>({label:"第"+(y+1)+"期",value:(C*1).toFixed(0),time:x(Date.now()).add(y,"M").format("YYYY-MM-DD")}));s.list=D}if(_.value===2){if(!m.value)return alert("请输入首付金额");const t=new r.Calculator().subtract(p.value,m.value).getResult(),e=new r.Calculator().add(1,new r.Calculator().multiply(u.value,.04).getResult()*1,.04).getResult(),i=new r.Calculator().subtract(u.value,1).getResult(),C=new r.Calculator().multiply(t,e).add(200).divide(i).getResult();console.log(t,e,i);const D=[...Array(u.value).keys()].map((R,y)=>y==0?{label:"首付款",value:Math.ceil(m.value),time:x(Date.now()).format("YYYY-MM-DD")}:{label:"第"+(y+1)+"期",value:(C*1).toFixed(0),time:x(Date.now()).add(y,"M").format("YYYY-MM-DD")});s.list=D}};return(n,t)=>(a(),o("div",z,[l("div",G,[H,J,l("b",{class:"title_sub",onClick:t[0]||(t[0]=()=>console.log(s))},"租金计算器")]),l("div",K,[Q,b(l("input",{class:"inp number",type:"number",placeholder:"请输入设备零售价","onUpdate:modelValue":t[1]||(t[1]=e=>k(p)?p.value=e:null)},null,512),[[L,d(p)]]),l("div",W,[b(l("select",{class:"inp inp_1","onUpdate:modelValue":t[2]||(t[2]=e=>k(_)?_.value=e:null),onChange:t[3]||(t[3]=()=>{s.periods=0})},[X,(a(),o(g,null,h(V,e=>l("option",{key:e.value,value:e.value},c(e.label),9,Z)),64))],544),[[M,d(_)]])]),l("div",$,[b(l("select",{class:"inp inp_1","onUpdate:modelValue":t[4]||(t[4]=e=>k(u)?u.value=e:null)},[ee,s.model===1?(a(!0),o(g,{key:0},h(d(S),e=>(a(),o("option",{key:e.value,value:e.value},c(e.label),9,le))),128)):Y("",!0),s.model===2?(a(!0),o(g,{key:1},h(d(U),e=>(a(),o("option",{key:"else-"+e.value,value:e.value},c(e.label),9,te))),128)):Y("",!0)],512),[[M,d(u)]])]),s.model===1?(a(),o("div",se,[b(l("select",{class:"inp inp_1","onUpdate:modelValue":t[5]||(t[5]=e=>k(f)?f.value=e:null)},[ae,(a(!0),o(g,null,h(d(B),e=>(a(),o("option",{key:"else-"+e.value,value:e.value},c(e.label),9,oe))),128))],512),[[M,d(f)]])])):Y("",!0),s.model===2?b((a(),o("input",{key:1,class:"inp number",type:"number",placeholder:"请输入首付金额","onUpdate:modelValue":t[6]||(t[6]=e=>k(m)?m.value=e:null)},null,512)),[[L,d(m)]]):Y("",!0),l("button",{class:"inp btn",onClick:j}," 立即计算 ")]),l("div",ne,[ue,l("div",null,[(a(!0),o(g,null,h(s.list,(e,i)=>(a(),o("div",{class:"th tr",key:i},[l("div",null,c(e.label),1),l("div",null,c(e.time),1),l("div",null,c(e.value+"元"),1)]))),128))])])]))}},ce=A(ie,[["__scopeId","data-v-7fdc315c"]]);export{ce as default};
