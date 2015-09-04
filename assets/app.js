$(document).ready(function() {
	$(".working").hide();
	
	$(".btn").click(function() {
      $("#results").empty();
      getPlaceList($("#name").val());
    });

    $("#results").on("click", ".details", function() {
    	$("#results").empty();
      	getInspectionDetails($(this).attr("id"));
    });
});

var base_url = 'https://health.data.ny.gov/resource/cnih-y5dw.json';

// Get list of inspections by name
function getPlaceList(name) {
	var url = base_url + '?county=Onondaga&$select=operation_name,%20nys_health_operation_id,%20facility_address,%20city&$where=starts_with(operation_name,%20%27' + name + '%27)';
	requestJSON(url, function(json) {
		$("#results").append("<table class=\"table table-striped table-bordered table-hover\">");
        $("#results table").append("<tr><th>Name</th><th>Address</th><th>City</th></tr>");
        for(var i=0; i<json.length; i++) {
          $("#results table").append("<tr><td><a class=\"details\" id=\"" + json[i].nys_health_operation_id + "\" href=\"#\">" + json[i].operation_name + "</td><td>" + toTitleCase(json[i].facility_address) + "</td><td>" + json[i].city + "</td></tr>");
        }
        $("#results table").append("</table>");
	});
}

// Get details of specific inspection
function getInspectionDetails(id) {
	var url = base_url + '?nys_health_operation_id=' + id;
	requestJSON(url, function(json) {
    var address_string = toTitleCase(json[0].facility_address) + " " + json[0].city + ", " + json[0].food_service_facility_state + " " + json[0].zip_code;
		$("#results").append("<table class=\"table table-bordered table-hover\">");
		$("#results table").append("<tr><td>Facility name</td><td><strong>" + json[0].operation_name + "<strong></td></tr>");
		$("#results table").append("<tr><td>Address</td><td><a target=\"_blank\" href=\"https://www.google.com/maps/place/" + address_string + "\">" + address_string + "</a></td></tr>");
		$("#results table").append("<tr><td>Inspection Date</td><td>" + formatDate(new Date(json[0].date)) + "</td></tr>");
		$("#results table").append("<tr><td>Critical violations</td><td>" + json[0].total_critical_violations + "</td></tr>");
		$("#results table").append("<tr><td>Critical & not corrected</td><td>" + json[0].total_crit_not_corrected + "</td></tr>");
		$("#results table").append("<tr><td>Inspction Details</td><td>" + highlightCritical(json[0].violations) + "</td></tr>");
		$("#results table").append("</table>");
	});
}

// Utility method to make API call.
function requestJSON(url, callback) {
  $.ajax({
    url: url,
    beforeSend: function() {
      $(".working").show();
    },
    complete: function(xhr) {
       $(".working").hide();
      callback.call(null, xhr.responseJSON);
    }
  });
}

// Utility function to format a date.
function formatDate(date) {
  return date.getMonth()+1 + '/' + date.getDate() + '/' + date.getFullYear();
}

// Utility function to titlecase strings
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

// Utility method to highlight critical violations.
function highlightCritical(str) {
	return str.replace('Critical Violation', '<strong>Critical Violation</strong>')
	.replace('[RED]', '<span class="red">[RED]</span>')
	.replace(/;/g, '<br/><br/>');
}

