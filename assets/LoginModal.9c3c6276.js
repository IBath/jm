import{u as _,a as d,o as m,c as u,b as o,d as r}from"./index.463f9086.js";const g={class:"modal-item__content modal-item__content--login"},v=o("div",{class:"modal__title"}," \u0412\u043E\u0439\u0442\u0438 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442 ",-1),b={class:"modal__body"},p=r('<input class="jolly-input" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 email" type="email"><input class="jolly-input" placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043F\u0430\u0440\u043E\u043B\u044C" type="password"><button class="jolly-button jolly-button--green">\u0412\u043E\u0439\u0442\u0438</button><div class="login-social"><div class="login-social__title"> \u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u043E\u0446.\u0441\u0435\u0442\u044C </div><div class="login-social__items"><button class="login-social__item login-social__item--google"></button><button class="login-social__item login-social__item--yandex"></button><button class="login-social__item login-social__item--mailru"></button><button class="login-social__item login-social__item--vk"></button></div></div>',4),y={class:"navigation"},k={__name:"LoginModal",props:["modal"],setup(e){const n=e;_();const s=d(),l=()=>s.removeModal(n.modal.id),a=i=>{l(),s.createModal({name:i})};return(i,t)=>(m(),u("div",g,[o("div",{class:"modal__header"},[v,o("button",{class:"modal__header__button-close",onClick:l})]),o("div",b,[p,o("div",y,[o("button",{onClick:t[0]||(t[0]=c=>a("RecoveryStart")),class:"navigation__item"},"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"),o("button",{onClick:t[1]||(t[1]=c=>a("Register")),class:"navigation__item"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F")])])]))}};export{k as default};
