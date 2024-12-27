import{i as P,r as p,o as U,j as $,k as E,f as i,c as u,b as e,l as L,e as n,n as g,m as O,p as k,q as w,w as x,t as m,T as I,F as v,d as C,g as _,s as F,v as j,x as M,y as R,N as G,S as H,C as V,a as q}from"./index-CZBArast.js";const h=P("admin",()=>{const y=p(!0),t=p(1),r=p(0),a=p(),d=p({id:"",open:!1,title:"",description:"",number:0}),l=p([]),o=p([]),s=p({title:"",content:"",sendNoifyForGuest:!1,image:null}),c=p({mobile:null,message:null}),f=p(!1),D=p(!1),A=async(b,N,T,z)=>{const{data:S}=await $.get("api/news",{params:{page:b,category:N,sort_by:T,search:z}});l.value.push(...S.data),S.data[0]===void 0?f.value=!1:f.value=!0};U(async()=>{await A(1)});const B=async(b,N,T,z)=>{const{data:S}=await $.get("api/admin/contactUs",{params:{page:b,category:N,sort_by:T,search:z}});o.value.push(...S.data),S.data[0]===void 0?D.value=!1:D.value=!0};return U(async()=>{await B(1)}),{contactUsData:c,notifications:a,getIndexNews:A,allNews:l,newsData:s,formPostNews:async()=>{const{data:b}=await $.post("api/news",s.value);return b},getShowNews:async()=>{const{data:b}=await $.get("api/news");s.value=b.data},formPutNews:async b=>{const{data:N}=await $.put(`api/news/${b}`,s.value);return N},formDeleteNews:async b=>{const{data:N}=await $.delete(`api/news/${b}`);return N},alert:d,dashStep:t,openForm:r,slidOpen:y,allContactUs:o,getIndexContactUs:B,scrollStatusNews:f,scrollStatusContactUs:D}}),W={class:"text-primary-950 font-bold h-fit grid gap-3 p-10 text-right duration-100"},J={__name:"SideBar",setup(y){const t=E(),r=h(),a=()=>{localStorage.clear(),t.push("/")};return(d,l)=>(i(),u("main",{class:g([n(r).slidOpen===!0?"right-0":"right-[-20rem]","duration-200 z-50 fixed w-80 right-0 top-0 h-screen bg-white py-2"])},[l[6]||(l[6]=e("div",{class:"w-full flex justify-center"},[e("img",{class:"w-14 h-14",src:L,alt:""})],-1)),e("div",W,[l[4]||(l[4]=e("h1",{class:"text-secondary-500 font-light text-sm"},"Dashboards",-1)),e("button",{onClick:l[0]||(l[0]=o=>n(r).dashStep=1),class:g([n(r).dashStep===1?"text-main-50":"text-secondary-950 hover:text-primary-950","text-right duration-150"]),type:"button"},l[2]||(l[2]=[O("الاخبار "),e("i",{class:"fa-solid fa-newspaper"},null,-1)]),2),e("button",{onClick:l[1]||(l[1]=o=>n(r).dashStep=2),class:g([n(r).dashStep===2?"text-main-50":"text-secondary-950 hover:text-primary-950","text-right duration-150"]),type:"button"},l[3]||(l[3]=[O("التواصل "),e("i",{class:"fa-regular fa-envelope"},null,-1)]),2)]),e("div",{class:"h-fit w-full px-10 absolute bottom-8"},[e("button",{onClick:a,class:"text-right duration-150 w-full p-2 mt-2 text-secondary-950 bg-secondary-100 text-sm hover:bg-red-100 hover:text-red-700 rounded",type:"button"},l[5]||(l[5]=[O("log out "),e("i",{class:"mx-0.5 fa-solid fa-arrow-right-from-bracket"},null,-1)]))])],2))}},K={class:"flex items-center justify-end h-16 px-6"},Q={__name:"NavBarAdmin",setup(y){const t=h();return(r,a)=>(i(),u("header",{class:g([n(t).slidOpen===!0?"pr-80":"pr-0","z-40 fixed top-0 left-0 w-full h-16 bg-white shadow-md duration-200 shadow-secondary-50 overflow-hidden"])},[e("nav",K,[n(t).slidOpen===!0?(i(),u("button",{key:0,onClick:a[0]||(a[0]=d=>n(t).slidOpen===!0?n(t).slidOpen=!1:n(t).slidOpen=!0),type:"button",class:"text-xl text-secondary-950 transition-opacity duration-150"},a[2]||(a[2]=[e("i",{class:"fa-solid fa-bars-staggered"},null,-1)]))):n(t).slidOpen===!1?(i(),u("button",{key:1,onClick:a[1]||(a[1]=d=>n(t).slidOpen===!0?n(t).slidOpen=!1:n(t).slidOpen=!0),type:"button",class:"text-xl text-secondary-950 transition-opacity duration-150"},a[3]||(a[3]=[e("i",{class:"fa-solid fa-bars"},null,-1)]))):k("",!0)])],2))}},X={key:0,class:"fixed justify-center items-center flex top-0 left-0 z-50 w-full min-h-screen"},Y={class:"bg-white duration-150 justify-center min-w-96 z-50 p-4 rounded h-fit"},Z={class:"w-full justify-center"},tt={class:"text-right py-1.5 px-1 grid gap-1"},et={class:"w-full text-center"},st={class:"font-bold text-xl text-primary-950 my-4"},nt={class:"text-secondary-950 font-light text-sm"},ot={class:"flex justify-center pt-8 pb-4 items-center gap-4"},at={__name:"Alert",emits:["alertFunction"],setup(y,{emit:t}){const r=h(),a=t,d=()=>{a("alertFunction")};return(l,o)=>(i(),w(I,null,{default:x(()=>[n(r).alert.open===!0?(i(),u("div",X,[e("div",{onClick:o[0]||(o[0]=s=>n(r).alert.open=!1),class:"w-full cursor-pointer absolute top-0 z-50 left-0 h-full bg-primary-300 backdrop-blur-sm"}),e("div",Y,[e("div",Z,[e("div",tt,[e("div",et,[e("h2",st,m(n(r).alert.title),1),e("p",nt,m(n(r).alert.description),1)]),e("div",ot,[e("button",{onClick:o[1]||(o[1]=s=>n(r).alert.open=!1),type:"button",class:"w-3/4 bg-secondary-500 py-1.5 text-white rounded"},"الغاء"),e("button",{onClick:o[2]||(o[2]=s=>d()),type:"button",class:"w-3/4 bg-main-50 py-1.5 text-white rounded"},"تاكيد")])])])])])):k("",!0)]),_:1}))}},lt={class:"h-full w-full p-2.5 rounded"},rt={class:"p-2 bg-white"},it={class:"table-fixed w-full"},dt={class:"text-center text-primary-950"},ut={class:"flex items-center gap-3 justify-center"},ct=["onClick"],pt=["onClick"],mt={class:"tableHid"},ft={class:"tableHid"},yt={class:"py-3 text-main-50"},bt={class:"tableHid"},xt={__name:"TNews",setup(y){const t=h(),r=async(o,s)=>{t.alert.description="هل تريد حذف الخير ?",t.alert.title=" حذف الخير ?",t.alert.id=o,t.alert.open=!0,t.alert.number=s},a=async()=>{await t.formDeleteNews(t.alert.id),t.allNews.splice(t.alert.number,1),t.alert.open=!1},d=async o=>{t.form_status="put",t.openForm=t.dashStep,t.newsData={title:t.allNews[o].title,content:t.allNews[o].content,sendNoifyForGuest:!1,image:null},t.alert.id=t.allNews[o].id,t.alert.number=o},l=async()=>{t.form_status="post",t.openForm=t.dashStep,t.newsData={title:"",content:"",sendNoifyForGuest:!1,image:null}};return(o,s)=>(i(),u(v,null,[e("div",lt,[e("div",{class:"w-full mb-4 py-2 px-4 rounded flex items-center justify-end bg-white"},[e("button",{onClick:l,type:"button",class:"px-4 bg-main-50 py-1 text-white rounded"},"add")]),e("div",rt,[e("table",it,[s[0]||(s[0]=e("thead",{class:"border-b-2 border-secondary-100 text-secondary-950 text-sm font-bold"},[e("tr",null,[e("th",{class:"p-2"},"الاعدادات"),e("th",{class:"p-2"},"تاريخ"),e("th",{class:"p-2"},"الوصف"),e("th",{class:"p-2"},"العنوان"),e("th",{class:"p-2 tableHid"},"التسلسل")])],-1)),e("tbody",dt,[(i(!0),u(v,null,C(n(t).allNews,(c,f)=>(i(),u("tr",{class:g(f%2!==0?"bg-secondary-100":"bg-none"),key:f},[e("td",null,[e("div",ut,[e("i",{onClick:D=>r(c.id,f),class:"fa-regular fa-trash-can hover:text-red-500 duration-150 text-sm cursor-pointer"},null,8,ct),e("i",{onClick:D=>d(f),class:"fa-solid fa-pencil hover:text-amber-500 duration-150 text-sm cursor-pointer"},null,8,pt)])]),e("td",mt,m(c.created_at),1),e("td",ft,m(c.content.length>20?c.content.slice(0,20)+" ... ":c.content),1),e("td",yt,m(c.title),1),e("td",bt,m(f+1),1)],2))),128))])])])]),_(at,{onAlertFunction:a})],64))}},wt={class:"h-full w-full bg-white p-2.5 rounded"},_t={class:"table-fixed w-full"},gt={class:"text-center text-primary-950"},ht=["onClick"],vt={class:"tableHid"},$t={class:"py-3"},kt={class:"py-3"},Ct={class:"tableHid"},Nt={__name:"TContact",setup(y){const t=h(),r=a=>{t.openForm=t.dashStep,t.contactUsData=t.allContactUs[a]};return(a,d)=>(i(),u("div",wt,[e("table",_t,[d[0]||(d[0]=e("thead",{class:"border-b-2 border-secondary-100 text-secondary-950 text-sm font-bold"},[e("tr",null,[e("th",{class:"p-2 tableHid"},"تاريخ"),e("th",{class:"p-2"},"الوصف"),e("th",{class:"p-2"},"الرقم"),e("th",{class:"p-2"},"الاسم"),e("th",{class:"p-2 tableHid"},"التسلسل")])],-1)),e("tbody",gt,[(i(!0),u(v,null,C(n(t).allContactUs,(l,o)=>(i(),u("tr",{class:g(["cursor-pointer",o%2!==0?"bg-secondary-100":"bg-none"]),onClick:s=>r(o),key:o},[e("td",vt,m(l.created_at),1),e("td",null,m(l.message.length>20?l.message.slice(0,20)+" ... ":l.message),1),e("td",$t,m(l.mobile),1),e("td",kt,m(l.name),1),e("td",Ct,m(o+1),1)],10,ht))),128))])])]))}},Ft={class:"w-full overflow-hidden justify-center"},Dt={class:"text-right"},St={class:"flex gap-2 mt-0.5 text-sm"},Ut={class:"flex gap-2 mt-0.5 text-sm"},jt={class:"flex justify-end gap-2 mt-4 text-sm"},Tt={class:"mt-3"},zt={class:"flex justify-center pt-8 pb-4 items-center gap-4"},Ot={__name:"FormNews",setup(y){const t=h(),r=o=>{t.newsData.image=o.target.files[0]},a=async()=>{const o=new FormData;o.append("title",t.newsData.title),o.append("content",t.newsData.content),o.append("sendNoifyForGuest",t.newsData.sendNoifyForGuest),o.append("image",t.newsData.image);const s=await $.post("api/news",o,{headers:{"Content-Type":"multipart/form-data"}});t.allNews.push(s.data.data)},d=async o=>{const s=new FormData;s.append("title",t.newsData.title),s.append("content",t.newsData.content),s.append("sendNoifyForGuest",t.newsData.sendNoifyForGuest),s.append("image",t.newsData.image);const c=await $.put(`api/news/${o}`,s,{headers:{"Content-Type":"multipart/form-data"}});console.log(t.newsData),t.allNews[t.alert.number]=c.data.data},l=async()=>{console.log(t.form_status),t.form_status==="post"?(await a(),t.openForm=0):t.form_status==="put"&&(await d(t.alert.id),t.openForm=0)};return(o,s)=>(i(),u("div",Ft,[e("form",Dt,[s[7]||(s[7]=e("label",{class:"text-secondary-950"},"title",-1)),e("div",St,[F(e("input",{"onUpdate:modelValue":s[0]||(s[0]=c=>n(t).newsData.title=c),type:"text",class:"outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"},null,512),[[j,n(t).newsData.title]])]),s[8]||(s[8]=e("label",{class:"text-secondary-950"},"content",-1)),e("div",Ut,[F(e("textarea",{"onUpdate:modelValue":s[1]||(s[1]=c=>n(t).newsData.content=c),type:"text",class:"scrollbar-hide outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"},null,512),[[j,n(t).newsData.content]])]),e("div",jt,[s[5]||(s[5]=e("p",{class:"text-secondary-950 w-full"},"sendNoifyForGuest",-1)),F(e("input",{"onUpdate:modelValue":s[2]||(s[2]=c=>n(t).newsData.sendNoifyForGuest=c),type:"checkbox",class:"outline-none text-right border-secondary-950 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"},null,512),[[M,n(t).newsData.sendNoifyForGuest]])]),e("div",Tt,[s[6]||(s[6]=e("h2",{class:"mb-1"},"image",-1)),e("input",{class:"w-full",type:"file",onChange:r},null,32)]),e("div",zt,[e("button",{onClick:s[3]||(s[3]=c=>n(t).openForm=0),type:"button",class:"w-3/4 bg-secondary-500 py-1.5 font-bold text-white rounded"},"الغاء"),e("button",{onClick:s[4]||(s[4]=c=>l()),type:"button",class:"w-3/4 bg-main-50 py-1.5 font-bold text-white rounded"},"تاكيد")])])]))}},Gt={class:"max-w-[30rem] overflow-hidden justify-center"},Ht={class:"text-right py-1"},Vt={class:"mt-0.5 text-sm"},At=["onClick"],Bt={class:"mt-0.5 text-sm"},It=["onClick"],Pt={class:"mt-0.5 text-sm"},Et=["onClick"],Lt={class:"flex justify-center pt-6 pb-4 items-center gap-4"},Mt={__name:"Filter",setup(y){const t=h(),r=p({category:"",sort_by:"",sort_order:""}),a=p();U(async()=>{a.value=await t.getIndexCategory()});const d=async()=>{t.dashStep===1&&await t.getIndexProduct(r.value.category,r.value.sort_by,r.value.sort_by),t.openForm=0};return(l,o)=>(i(),u("div",Gt,[o[5]||(o[5]=e("h2",{class:"text-secondary-950 w-full text-center"},"Filter",-1)),o[6]||(o[6]=e("hr",{class:"w-full"},null,-1)),e("form",Ht,[o[2]||(o[2]=e("h2",{class:"text-secondary-950 my-3"},"category",-1)),e("div",Vt,[_(n(V),{class:"px-9","items-to-show":2.5,wrapAround:!1,transition:500,loop:!0},{addons:x(()=>[_(n(G))]),default:x(()=>[(i(!0),u(v,null,C(a.value,(s,c)=>(i(),w(n(H),{key:s.id},{default:x(()=>[e("button",{class:g([r.value.category===s.name?"border-main-50 text-main-50 border-solid":"border-secondary-500 text-secondary-950 border-dashed","duration-150 slider-w border-2 px-3 py-0.5 rounded"]),onClick:f=>r.value.category=s.name,type:"button"},m(s.name),11,At)]),_:2},1024))),128))]),_:1}),(i(!0),u(v,null,C(a.value,(s,c)=>(i(),u("div",{key:s.id}))),128))]),o[3]||(o[3]=e("h2",{class:"text-secondary-950 my-3"},"sort_by",-1)),e("div",Bt,[_(n(V),{class:"px-9","items-to-show":2.5,wrapAround:!1,transition:500,loop:!0},{addons:x(()=>[_(n(G))]),default:x(()=>[(i(!0),u(v,null,C(a.value,(s,c)=>(i(),w(n(H),{key:s.id},{default:x(()=>[e("button",{class:g([r.value.category===s.name?"border-main-50 text-main-50 border-solid":"border-secondary-500 text-secondary-950 border-dashed","duration-150 slider-w border-2 px-3 py-0.5 rounded"]),onClick:f=>r.value.category=s.name,type:"button"},m(s.name),11,It)]),_:2},1024))),128))]),_:1}),(i(!0),u(v,null,C(a.value,(s,c)=>(i(),u("div",{key:s.id}))),128))]),o[4]||(o[4]=e("h2",{class:"text-secondary-950 my-3"},"sort_order",-1)),e("div",Pt,[_(n(V),{class:"px-9","items-to-show":2.5,wrapAround:!1,transition:500,loop:!0},{addons:x(()=>[_(n(G))]),default:x(()=>[(i(!0),u(v,null,C(a.value,(s,c)=>(i(),w(n(H),{key:s.id},{default:x(()=>[e("button",{class:g([r.value.category===s.name?"border-main-50 text-main-50 border-solid":"border-secondary-500 text-secondary-950 border-dashed","duration-150 slider-w border-2 px-3 py-0.5 rounded"]),onClick:f=>r.value.category=s.name,type:"button"},m(s.name),11,Et)]),_:2},1024))),128))]),_:1}),(i(!0),u(v,null,C(a.value,(s,c)=>(i(),u("div",{key:s.id}))),128))]),e("div",Lt,[e("button",{onClick:o[0]||(o[0]=s=>n(t).openForm=0),type:"button",class:"w-3/4 bg-secondary-500 py-1.5 font-bold text-white rounded"},"close"),e("button",{onClick:o[1]||(o[1]=s=>d()),type:"button",class:"w-3/4 bg-main-50 py-1.5 font-bold text-white rounded"},"Save")])])]))}},Rt=R(Mt,[["__scopeId","data-v-764cda75"]]),qt={class:"w-full justify-center"},Wt={class:"text-right"},Jt={class:"flex gap-2 mt-0.5 text-sm"},Kt={class:"flex justify-center pt-8 pb-4 items-center gap-4"},Qt={__name:"Search",setup(y){const t=h(),r=async()=>{t.form_status==="post"?(console.log(t.form_status),await t.postCreateTag(),t.openForm=0):t.form_status==="put"&&(console.log(t.form_status),await t.putUpdateTag(t.formTag_id),t.openForm=0)};return(a,d)=>(i(),u("div",qt,[d[4]||(d[4]=e("h2",{class:"text-secondary-950 w-full text-center"},"Tag",-1)),d[5]||(d[5]=e("hr",{class:"w-full"},null,-1)),e("form",Wt,[d[3]||(d[3]=e("label",{class:"text-secondary-950"},"name",-1)),e("div",Jt,[F(e("input",{"onUpdate:modelValue":d[0]||(d[0]=l=>n(t).formTag_name=l),type:"text",class:"outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md",placeholder:"الاسم الاول"},null,512),[[j,n(t).formTag_name]])]),e("div",Kt,[e("button",{onClick:d[1]||(d[1]=l=>n(t).openForm=0),type:"button",class:"w-3/4 bg-secondary-500 py-1.5 font-bold text-white rounded"},"close"),e("button",{onClick:d[2]||(d[2]=l=>r()),type:"button",class:"w-3/4 bg-main-50 py-1.5 font-bold text-white rounded"},"add to card")])])]))}},Xt={class:"w-full overflow-hidden justify-center"},Yt={class:"text-right"},Zt={class:"flex gap-2 mt-0.5 text-sm"},te={class:"flex gap-2 mt-0.5 text-sm"},ee={__name:"FormContact",setup(y){const t=h();return(r,a)=>(i(),u("div",Xt,[e("form",Yt,[a[2]||(a[2]=e("label",{class:"text-secondary-950"},"title",-1)),e("div",Zt,[F(e("input",{"onUpdate:modelValue":a[0]||(a[0]=d=>n(t).contactUsData.mobile=d),type:"text",class:"outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"},null,512),[[j,n(t).contactUsData.mobile]])]),a[3]||(a[3]=e("label",{class:"text-secondary-950"},"content",-1)),e("div",te,[F(e("textarea",{"onUpdate:modelValue":a[1]||(a[1]=d=>n(t).contactUsData.message=d),type:"text",class:"scrollbar-hide outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"},null,512),[[j,n(t).contactUsData.message]])])])]))}},se={class:"bg-secondary-100 min-h-screen block lg:flex"},ne={key:0,class:"fixed justify-center items-center flex top-0 left-0 z-50 w-full min-h-screen"},oe={class:"bg-white duration-150 justify-center w-full mx-4 md:w-[30rem] z-50 p-4 rounded h-fit"},ue={__name:"Admin",setup(y){const t=h();U(()=>{window.innerWidth<=1200&&(t.slidOpen=!1)});const r=p(null),a=p(1),d=p(1);U(()=>{window.addEventListener("scroll",l)}),q(()=>{window.removeEventListener("scroll",l)});const l=o=>{let s=r.value;t.scrollStatusNews===!0&&t.dashStep===1?s.getBoundingClientRect().bottom<window.innerHeight&&(t.scrollStatusNews=!1,a.value+=1,t.getIndexNews(a.value)):t.scrollStatusContactUs===!0&&t.dashStep===2&&s.getBoundingClientRect().bottom<window.innerHeight&&(t.scrollStatusContactUs=!1,d.value+=1,t.getIndexContactUs(d.value))};return(o,s)=>(i(),u("main",{ref_key:"scrollComponent",ref:r},[e("div",se,[_(J),_(Q),e("div",{class:g([n(t).slidOpen===!0?"mr-80":"mr-0","w-full duration-200 h-fit px-6 py-20 mb-4 lg:p-18"])},[n(t).dashStep===1?(i(),w(xt,{key:0})):n(t).dashStep===2?(i(),w(Nt,{key:1})):k("",!0)],2)]),_(I,null,{default:x(()=>[n(t).openForm!==0?(i(),u("div",ne,[e("div",{onClick:s[0]||(s[0]=c=>n(t).openForm=0),class:"w-full cursor-pointer absolute top-0 z-50 left-0 h-full bg-primary-300 backdrop-blur-sm"}),e("div",oe,[n(t).openForm===1?(i(),w(Ot,{key:0})):k("",!0),n(t).openForm===2?(i(),w(ee,{key:1})):k("",!0),n(t).openForm===10?(i(),w(Qt,{key:2})):k("",!0),n(t).openForm===11?(i(),w(Rt,{key:3})):k("",!0)])])):k("",!0)]),_:1})],512))}};export{ue as default};
