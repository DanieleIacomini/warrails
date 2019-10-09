var db;
var dbCreated = false;
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log("Device ready...");
    var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
    
}

