!function(){function e(e){console.log("modal -> event:",!0);var o={closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function t(){if(o.modal.classList.toggle("is-hidden"),o.modal.classList.contains("is-hidden")){var e=o.body.style.top;o.body.style.position="",o.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}else o.body.style.position="fixed",o.body.style.top=0;window.addEventListener("scroll",(function(){document.documentElement.style.setProperty("--scroll-y","".concat(window.scrollY,"px"))}))}t(),o.closeModalBtn.addEventListener("click",t),o.closeModalBtn.addEventListener("click",t)}var o=document.querySelector("#sub-form");o.addEventListener("submit",(function(t){o.validate({rules:{email:{required:!0,email:!0}}}),e(t.currentTarget.email.value),t.preventDefault(),o.reset()}))}();
//# sourceMappingURL=index.ddd42dc7.js.map
