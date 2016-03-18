// Helper function to format a date.
Handlebars.registerHelper('formatDate', function(date) {
  var d = new Date(date)
  return d.getMonth()+1 + '/' + d.getDate() + '/' + d.getFullYear();
});	

// Helper function to titlecase strings
Handlebars.registerHelper('toTitleCase', function(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
});

// Helper method to highlight critical violations.
Handlebars.registerHelper('highlightCritical', function(str) {
	return str.replace(/;/g, '<br/><br/>')
  	.replace(/Critical Violation/g, '<strong>Critical Violation</strong>')
	.replace(/RED/g, '<span class="red">RED</span>');
});

// Helper method to make a full address string.
Handlebars.registerHelper('makeAddressString', function(str) {
	return Handlebars.helpers.toTitleCase(str.facility_address) + " " + Handlebars.helpers.toTitleCase(str.city) + ", " + str.food_service_facility_state + " " + str.zip_code;
});

// Helper method to render base URL for site.
Handlebars.registerHelper('getBaseUrl', function() {
	return window.location.href.split('?')[0];
});