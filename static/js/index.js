//https://www.eclipse.org/paho/clients/js/
function entrar() {
		var msg=document.getElementById("contrasena").value;
		msg='1'+msg;
        message = new Paho.MQTT.Message(msg);
        message.destinationName = "nelsonbenjamin05@gmail.com/ts";
        client.send(message);		
}

function cambio() {
		var msg=document.getElementById("contrasena").value;
		msg='2'+msg;
        message = new Paho.MQTT.Message(msg);
        message.destinationName = "nelsonbenjamin05@gmail.com/ts";
        client.send(message);
}

function historial() {
		var msg=document.getElementById("contrasena").value;
		msg='3'+msg;
        message = new Paho.MQTT.Message(msg);
        message.destinationName = "nelsonbenjamin05@gmail.com/ts";
        client.send(message);
}

function comprobar(arg){
	var op=arg.indexOf(0):
	if(op === '1')
		arg=arg.slice(1);
		s=arg.split(-);
		document.getElementById("s1").innerHTML=s[0];
		document.getElementById("s2").innerHTML=s[1];
	if(op === '4')
		arg=arg.slice(1);
		document.getElementById("aviso").innerHTML=arg;
	if(op === '5')
		arg=arg.slice(1);
		argt=argt+arg;
		document.getElementById("verhist").innerHTML=argt;
}
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  
  var options = {
   useSSL: false,
    userName: "nelsonbenjamin05@gmail.com",
    password: "123456789",
    onSuccess:onConnect,
    onFailure:doFail
  }

  client.connect(options);
   
  function onConnect() {
    console.log("Conectado...");
    client.subscribe("nelsonbenjamin05@gmail.com/ts1");
  }

  function doFail(e){
    console.log(e);
  }

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
	var msg=message.payloadString;
	comprobar(msg)
  }
  
