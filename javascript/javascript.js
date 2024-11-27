var txtvalor = window.document.querySelector("input#txtvalorinvestido")

var msg = window.document.querySelector("div#mensagem")

var verificar = window.document.querySelector("input#cal")

verificar.addEventListener("click", calcular)

txtvalor.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();  // Impede o envio do formulário
        calcular();  // Chama a função de cálculo ao pressionar Enter
    }
});


function calcular(){
    var palavras = window.document.getElementById("frase")
    var numvalor = Number(txtvalor.value)
    palavras.innerHTML = "Detalhes."
    palavras.style.textAlign = "center"
    msg.innerHTML = `R$${numvalor}`
    
}