topico = "ContatoMysteryFood";

client = new Paho.MQTT.Client("broker.hivemq.com", Number(8000), "");

client.onConnectionLost = ConexaoPerdida;
client.onMessageArrived = MensagemRecebida;

client.connect({onSuccess:Conectar});

function Conectar() 
{
  client.subscribe(topico);  
}

function ConexaoPerdida(responseObject) 
{
  if (responseObject.errorCode !== 0) {
    resposta.innerHTML += "Desconectado";
  }
}

function MensagemRecebida(message) 
{
    resposta.innerHTML += "<br><br>" + message.payloadString;
    resposta.scrollTop = resposta.scrollHeight;
}
function Send()
{
  texto = mensagem.value;
  message = new Paho.MQTT.Message(texto);
  message.destinationName = topico;
  if (texto != "")
  {
    client.send(message);
    mensagem.value = ""
  }
}
function searchKeyPress(e)
{
  e = e || window.event;
  if (e.keyCode == 13)
  {
      document.getElementById('botao').click();
      return false;
  }
  return true;
}

var v = document.getElementById("profile");
function toggleProfileWindow()
{
    if (profilewindow.style.display === "none") 
    {
        profilewindow.style.display = "block";
    } 
    else 
    {
        profilewindow.style.display = "none";
    }
}
function replaceName(image)
{
    namejs.src=image;
}
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

var mtqq = document.getElementById("MTQQ");
function toggleScreen()
{
    if (MTQQ.style.display === "none") 
    {
        MTQQ.style.display = "block";
    } 
    else 
    {
        MTQQ.style.display = "none";
    }
}


