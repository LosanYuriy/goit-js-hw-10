import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-A92OCY9B.js";const m=document.querySelector(".form");m.addEventListener("submit",t=>{t.preventDefault();const s=t.target.elements.delay.value,o=t.target.elements.state.value;new Promise((e,r)=>{setTimeout(()=>{o==="fulfilled"?e(s):r(s)},s)}).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
