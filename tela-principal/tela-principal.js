
function replaceCart(image)
{
    cart.src=image;
}
function replaceProfile(image)
{
    profile.src=image;
}
function replaceBoxes(image)
{
    boxes.src=image;
}
function replaceAffiliate(image)
{
    affiliate.src=image;
}

function validateCEP() 
{
    expressao = /^[0-9]{5}-[0-9]{3}$/g;
    texto = cep.value
    resposta = expressao.test(texto);
    if (resposta == false) 
    {
        cep.classList.remove('certo');
        cep.classList.add('errado');
    }
    if (resposta == true) 
    {
        cep.classList.remove('errado');
        cep.classList.add('certo');
    }
}
function calculateShipping() 
{
    expressao = /^[0-9]{5}-[0-9]{3}$/g;
    texto = cep.value
    resposta = expressao.test(texto);
    if (resposta == true) 
    {
        const cep = document.getElementById("cep").value;
        const shipping = Math.random() * 50; // valor de frete fictício
        const freteFormatado = shipping.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("frete").textContent = `O valor do frete para o CEP: ${cep} é de ${freteFormatado}.`;
    }
}  




