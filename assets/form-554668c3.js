import"./modulepreload-polyfill-3cfb730f.js";document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector(".feedback-form"),s=o.querySelector('input[name="email"]'),l=o.querySelector('textarea[name="message"]'),m=()=>{const e=s.value.trim(),t=l.value.trim(),a={email:e,message:t};localStorage.setItem("feedback-form-state",JSON.stringify(a))};(()=>{const e=localStorage.getItem("feedback-form-state");if(e){const{email:t,message:a}=JSON.parse(e);s.value=t||"",l.value=a||""}})(),o.addEventListener("input",m),o.addEventListener("submit",e=>{e.preventDefault();const t=s.value.trim(),a=l.value.trim();t!==""&&a!==""?(console.log({email:t,message:a}),localStorage.removeItem("feedback-form-state"),o.reset()):alert("Please fill in both fields.")})});
