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
    $("#results").append("<h4>Details</h4>");
    details = Handlebars.templates.detail({ Details : json[0] });
    $(results).append(details);
  });
}

// Method to get list of inspections.
function getPlaceList (url, id, title) {
  requestJSON(url, function(json) {
    results.title = title
    results.places = json
    placesList = Handlebars.templates.list({ Places : results });
    $(id).append(placesList);
  })
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

