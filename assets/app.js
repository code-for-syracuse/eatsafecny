$(document).ready(function() {

  $(".working").hide();
  worstOffenders();
  mostRecent();
  
  $("#search").click(function() {
    var searchText = $("#name").val();
    if(searchText == "") {
      clearContents();
      $("#results").append("<div class=\"alert alert-warning working\" role=\"alert\">Enter a name or partial name</div>");
    }
    else {
      searchList(searchText);
    }
  });

  $("#clear").click(function() {
    clearContents();
  });

  $(".display").on("click", ".details", function() {
    getInspectionDetails($(this).attr("id"));
  });
});

// Base URL for API calls.
var base_url = 'https://health.data.ny.gov/resource/cnih-y5dw.json';

// Display worst offenders on page load.
function worstOffenders() {
  var url = base_url + '?county=Onondaga&$select=operation_name,%20nys_health_operation_id,%20facility_address,%20city,%20date&$order=total_critical_violations%20DESC&$limit=5';
  getPlaceList(url, "#worst", "Worst Offenders");
}

// Get most recent inspections on page load.
function mostRecent() {
  var url = base_url + '?county=Onondaga&$select=operation_name,%20nys_health_operation_id,%20facility_address,%20city,%20date&$order=date%20DESC&$limit=5';
  getPlaceList(url, "#recent", "Most Recent");
}

// Get list of inspections by name.
function searchList(name) {
  var url = base_url + '?county=Onondaga&$select=operation_name,%20nys_health_operation_id,%20facility_address,%20city,%20date&$where=starts_with(operation_name,%20%27' + name + '%27)';
  getPlaceList(url, "#results", "Results");
}

// Get details of specific inspection.
function getInspectionDetails(id) {
  var url = base_url + '?nys_health_operation_id=' + id;
  requestJSON(url, function(json) {
    var address_string = toTitleCase(json[0].facility_address) + " " + json[0].city + ", " + json[0].food_service_facility_state + " " + json[0].zip_code;
    $("#results").append("<h4>Details</h4>");
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

// Method to get list of inspections.
function getPlaceList (url, id, title) {
  requestJSON(url, function(json) {
    if(json.length > 0) {
      $(id).append("<h4>" + title + "</h4>");
      $(id).append("<table class=\"table table-striped table-bordered table-hover\">");
      $(id + " table").append("<tr><th>Name</th><th>Address</th><th>City</th><th>Date</th></tr>");
      for(var i=0; i<json.length; i++) {
        $(id + " table").append("<tr><td><a class=\"details\" id=\"" + json[i].nys_health_operation_id + "\" href=\"#\">" + json[i].operation_name + "</td><td>" + toTitleCase(json[i].facility_address) + "</td><td>" + json[i].city + "</td><td>" + formatDate(new Date(json[i].date)) + "</td></tr>");
      }
      $(id + " table").append("</table>");
    }
    else {
      $("#results").append("<div class=\"alert alert-warning working\" role=\"alert\">No results found</div>");
    }
  });
}

// Method to make API call.
function requestJSON(url, callback) {
  $.ajax({
    url: url,
    beforeSend: function() {
      clearContents();
      $(".working").show();
    },
    complete: function(xhr) {
       $(".working").hide();
      callback.call(null, xhr.responseJSON);
    }
  });
}

// Utility method to clear div contents
function clearContents() {
  $(".display div").empty();
  $("#name").val("");
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
	return str.replace(/;/g, '<br/><br/>')
  .replace(/Critical Violation/g, '<strong>Critical Violation</strong>')
	.replace(/RED/g, '<span class="red">RED</span>');
}

