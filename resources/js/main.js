window.myApp = {
    showPreview: () => {
        Neutralino.app.open("http://localhost:3000/");
    },
    onWindowClose: () => {
        Neutralino.app.exit();
    }
};

// Initialize native API communication. This is non-blocking
// use 'ready' event to run code on app load.
// Avoid calling API functions before init or after init.
Neutralino.init(); 

Neutralino.events.on("windowClose", myApp.onWindowClose);

setTimeout( function() {
    window.location="http://localhost:3000/"
    // window.myApp.showPreview();
    //Neutralino.app.open("https://www.php.net");
}, 1000 )

// window.myApp.showPreview()