import{u as d,a as _,o as r,c as i,b as o}from"./index.a7548080.js";const m={class:"modal-item__content modal-item__content--recovery-start"},u=o("div",{class:"modal__title"}," \u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F ",-1),p={class:"modal__body"},b=o("input",{class:"jolly-input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email"},null,-1),h=o("button",{class:"jolly-button jolly-button--green"},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",-1),M={__name:"RecoveryStartModal",props:["modal"],setup(l){const n=l;d();const t=_(),e=()=>t.removeModal(n.modal.id),c=s=>{e(),t.createModal({name:s})};return(s,a)=>(r(),i("div",m,[o("div",{class:"modal__header"},[u,o("button",{class:"modal__header__button-close",onClick:e})]),o("div",p,[b,h,o("button",{onClick:a[0]||(a[0]=v=>c("Login")),class:"go-back"},"\u041D\u0430\u0437\u0430\u0434")])]))}};export{M as default};
