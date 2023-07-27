
const button = document.querySelector("#btn-somar");

button.addEventListener('click', function somar() {
    const credito = parseFloat(document.querySelector("#credito").value);
    const debito = parseFloat(document.querySelector("#debito").value);
    
    if (isNaN(credito) || isNaN(debito)) {
        // Verifica se os valores são números válidos
        alert('Por favor, insira números válidos em "Crédito" e "Débito".');
        return;
    }
    
    const resultado = credito + debito;
    
    document.querySelector("#total").value = resultado;
    
    // Agora você pode usar a variável 'resultado' aqui ou fazer o que quiser com ela.
    console.log(resultado);
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const buttonCal=document.getElementById('calcular')
// buttonCal.addEventListener('click', calcularQuantidadeFinalComDesconto)

const buttonCal = document.getElementById('calcular');
buttonCal.addEventListener('click', calcularQuantidadeFinalComDesconto);

function calcularQuantidadeFinalComDesconto() {
    var total = parseFloat(document.getElementById('total').value);
    var preco = parseFloat(document.getElementById('preco').value);

    if (total <= 0 || preco <= 0) {
        return 0;
    }

    var quantidadeFinal = Math.ceil(total / preco);
    var valorTotalFinal = quantidadeFinal * preco;
    var desconto = valorTotalFinal - total;

    quantidadeFinal = Number(quantidadeFinal.toFixed(0));
    desconto = Number(desconto.toFixed(2));

    document.getElementById('quantidadeFinal').value =  quantidadeFinal;
    document.getElementById('desconto').value =  desconto;
}