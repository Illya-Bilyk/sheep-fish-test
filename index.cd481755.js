!function(){var o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function e(){if(o.modal.classList.toggle("is-hidden"),document.documentElement.style.getPropertyValue("--scroll-y"),o.modal.classList.contains("is-hidden")){var e=o.body.style.top;o.body.style.position="",o.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}else o.body.style.position="fixed",o.body.style.top=20;window.addEventListener("scroll",(function(){document.documentElement.style.setProperty("--scroll-y","".concat(window.scrollY,"px"))}))}o.openModalBtn.addEventListener("click",e),o.closeModalBtn.addEventListener("click",e)}();
//# sourceMappingURL=index.cd481755.js.map
