(function(){
    document.addEventListener("DOMContentLoaded", fnOnload());
})();

//화면 시작시
function fnOnload(){
    let elBody = document.querySelector("body");
    elBody.classList.add("show");
};