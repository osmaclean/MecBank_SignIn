

const forgotToggleModal = document.querySelectorAll("[data-modal-forgot]");

for (let i = 0; i < forgotToggleModal.length; i++){

    forgotToggleModal[i].addEventListener("click", function(){
        let valueDataModalControl = forgotToggleModal[i].getAttribute("data-modal-forgot");
        document.getElementById(valueDataModalControl).classList.toggle("show-modal");
    });
}

const buttonReset = document.getElementById("button-reset");

buttonReset.addEventListener("click", function () {
    alert(`Senha redefinida com sucesso!`);
});

