chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('card.html', {
		bounds: {
			width: 256,
			height: 256
		},
		frame: 'none',
		transparentBackground: true,
		resizable: false
	});
});