if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then((reg) => {
    if(reg.Installing) {
      console.log('Servier worker installing');
    }else if(reg.waiting){
      console.log('Servier worker installed');
    }else if(reg.active){
      console.log('Servier worker active');
    }
    console.log("Registered successfully: " + reg.scope);
	})
	.catch((error) => {
		console.log('Registration failed! ' + error);
	});
}
