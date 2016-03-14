$(document).ready(function() {

  // Hide the promt telling the user that data is being fetched.
  $(".working").hide();

  // Handlers for search field.
  $("#search").click(function() {
    var searchText = $("#name").val();
    if(searchText == "") {
      $("#name").addClass("error");
    }
    else {
      searchList(searchText);
    }
  });

  // User presses enter.
  $("#name").keypress(function(event) {
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '13'){
  	$("#search").trigger('click');	
  }
  });

  // If the user focuses on the search field, remove any indication of bad entry.
  $("#name").focus(function(){
    $(this).removeClass("error");
  });

  // Handler for displaying inspection details.
  $(".display").on("click", ".details", function() {
    getInspectionDetails($(this).attr("id"));
  });

  // If ID parameter used, display detailed results.
  var id = url_query('id');
  if(id) {
    getInspectionDetails(id);
  } 
  
  // Display worst offenders and most recent inspections on home page.
  else {
    worstOffenders();
    mostRecent();
  }

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

// Method to get list of inspections.
function getPlaceList (url, id, title) {
  requestJSON(url, function(json) {
    results.title = title
    results.places = json
    placesList = Handlebars.templates.list({ Places : results });
    $(id).append(placesList);
    $("#search").text("Search");
  })
}

// Get details of specific inspection.
function getInspectionDetails(id) {
  var url = base_url + '?nys_health_operation_id=' + id;
  requestJSON(url, function(json) {
    $("#results").append("<h4>Details</h4>");
    details = Handlebars.templates.detail({ Details : json[0] });
    $("#results").append(details);  
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
}

// Parse URL Queries
function url_query( query ) {
    query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var expr = "[\\?&]"+query+"=([^&#]*)";
    var regex = new RegExp( expr );
    var results = regex.exec( window.location.href );
    if ( results !== null ) {
        return results[1];
    } else {
        return false;
    }
}

