//https://www.eclipse.org/paho/clients/js/
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
  }

  function doFail(e){
    console.log(e);
  }

  function onConnectionLost(responseObject){
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  function onMessageArrived(message){
	var msg=message.payloadString;
	var op=msg.indexOf(0);
	var arg;
	if(op === '1')
		arg=msg.slice(1);
		s=arg.split("-");
		document.getElementById("s1").innerHTML=s[0];
		document.getElementById("s2").innerHTML=s[1];
	if(op === '4')
		arg=msg.slice(1);
		document.getElementById("aviso").innerHTML=arg2;
	if(op === '5')
		arg=msg.slice(1)+"<br>";
		document.getElementById("verhist").innerHTML=arg2;
  }  

