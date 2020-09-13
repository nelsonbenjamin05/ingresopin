//https://www.eclipse.org/paho/clients/js/
  
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
   
  function onConnect(){
    console.log("Conectado...");
    client.subscribe("nelsonbenjamin05@gmail.com/ts1");
	message = new Paho.MQTT.Message("hola web");
    message.destinationName = "nelsonbenjamin05@gmail.com/ts";
    client.send(message);
  }

  function doFail(e){
    console.log(e);
  }

  function onConnectionLost(responseObject){
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

function entrar(){
	var msg=new String(document.getElementById("contrasena").value);
	msg="1"+msg;
    message = new Paho.MQTT.Message(msg);
    message.destinationName = "nelsonbenjamin05@gmail.com/ts";
    client.send(message);		
}

function cambio(){
	var msg=new String(document.getElementById("contrasena").value);
	msg="2"+msg;
    message = new Paho.MQTT.Message(msg);
    message.destinationName = "nelsonbenjamin05@gmail.com/ts";
    client.send(message);
}

function historial(){
	var msg=new String(document.getElementById("contrasena").value);
	msg="3"+msg;
    message = new Paho.MQTT.Message(msg);
    message.destinationName = "nelsonbenjamin05@gmail.com/ts";
    client.send(message);
}

  function onMessageArrived(message){
	var msg=message.payloadString;
	var op=msg.indexOf(0);
	if(op === '1')
		document.getElementById("s1").innerHTML="s1";
		document.getElementById("s2").innerHTML="s2";
	if(op === '4')
		document.getElementById("aviso").innerHTML="aviso";
	if(op === '5')
		var argt=arg[1]+"<br>";
		document.getElementById("verhist").innerHTML="verhist";
  }
