// gmap
var API_KEY = "AIzaSyAxX4IXvIl4fWbKcnU-mHFagd4GRKLvc84";
var loadLocalAPI = function() {
	var apiurl = "https://maps.google.com/maps/api/js?key=" + API_KEY + "&language=" + getLanguage2();
	document.write('<' + 'script src="' + apiurl + '"' + ' type="text/javascript"><' + '/script>');
};
