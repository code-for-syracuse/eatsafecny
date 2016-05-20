$(document).ready(function() {

  // If ID parameter used, display detailed results.
  if(url_query('id')) {
    getInspectionDetails(url_query('id'));
  }

  // If search parameter used, display search results.
  else if(url_query('search')) {
    searchList(url_query('search'));
  }

  // If latest parameter is used, display most recent results.
  else if(url_query('latest')) {
    mostRecent(url_query('limit'));
  }

  // If worst parameter is used, display worst results.
  else if(url_query('worst')) {
    worstOffenders(url_query('limit'));
  }

  // Handlers for search field.
  $("#search").click(function() {
    var searchText = $("#name").val();
    if(searchText == "") {
      $("#name").addClass("error");
    }
    else {
      window.location.replace(url_base(window.location.href) + '?search=' + searchText);
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

});

// Base URL for API calls.
var base_url = 'https://health.data.ny.gov/resource/cnih-y5dw.json';
var query_base = '?county=Onondaga&$select=operation_name,%20nys_health_operation_id,%20facility_address,%20city,%20date';

// Display worst offenders on page load.
function worstOffenders(limit) {
  var url = base_url + query_base + '&$order=total_critical_violations%20DESC&$limit=' + limit;
  getPlaceList(url, "worst-list", "Worst Offenders");
}

// Get latest inspections on page load.
function mostRecent(limit) {
  var url = base_url +  query_base + '&$order=date%20DESC&$limit=' + limit;
  getPlaceList(url, "recent-list", "Most Recent");
}

// Get list of inspections by name.
function searchList(name) {
  var url = base_url +  query_base + '&$where=starts_with(operation_name,%20%27' + name + '%27)';
  getPlaceList(url, "search-list", "Results");
}

// Method to get list of inspections.
function getPlaceList (url, id, title) {
  requestJSON(url, function(json) {
    results.title = title
    results.places = json
    placesList = Handlebars.templates.list({ Places : results });
    $("#results").append('<div id="' + id + '"></div>');
    $('#' + id).append(placesList);
  })
}

// Method to get details of specific inspection.
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
      $('.alert-warning').removeClass('hide');
    },
    complete: function(xhr) {
       $('.alert-warning').addClass('hide');
      callback.call(null, xhr.responseJSON);
    }
  });
}

// Utility method to clear div contents
function clearContents() {
  $("#results div").empty();
}

// Parse URL Queries
function url_query(query) {
    query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var expr = "[\\?&]" + query + "=([^&#]*)";
    var regex = new RegExp( expr );
    var results = regex.exec( window.location.href );
    if ( results !== null ) {
        return results[1];
    } else {
        return false;
    }
}

// Get base URL without querystring parameters.
function url_base(url) {
  return window.location.href.split('?')[0];
}

