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

function comprobar(arg){
	if(arg[0] === '1')
		document.getElementById("s1").innerHTML=arg[1];
		document.getElementById("s2").innerHTML=arg[2];
	if(arg[0] === '4')
		document.getElementById("aviso").innerHTML=arg[1];
	if(arg[0] === '5')
		document.getElementById("verhist").innerHTML=arg[1];
}

  function onMessageArrived(message){
	  var rec=message.payloadString;
	comprobar(rec);
  }  
