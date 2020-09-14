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
		document.getElementById("s1").innerHTML=arg[2]+arg[3]+arg[4];
		document.getElementById("s2").innerHTML=arg[6]+arg[7]+arg[8];
	if(arg[0] === '4')
		var ms='--';
		for (var i=2;i<21;i++){
			ms=ms+arg[i]
		}
		document.getElementById("aviso").innerHTML=ms;
	if(arg[0] === '5')
		var ms='--';
		for (var i=2;i<21;i++){
			ms=ms+arg[i]
		}
		ms="<li>"+ms+"</li>";
		document.getElementById("verhist").innerHTML=ms;
}

  function onMessageArrived(message){
	  var rec=message.payloadString;
	comprobar(rec);
  }  
