$(document).ready(function() {

  // Concise parameter-based routing
  const params = new URLSearchParams(window.location.search);
  if (params.get('id')) return getInspectionDetails(params.get('id'));
  if (params.get('search')) return searchList(params.get('search'));
  if (params.get('latest')) return mostRecent(params.get('limit'));
  if (params.get('worst')) return worstOffenders(params.get('limit'));

  // Handlers for search field.
  $("#search").click(function() {
    var searchText = $("#name").val();
    if(searchText == "") {
      $("#name").addClass("error");
    }
    else {
      // Use URLSearchParams to construct the query string
      const params = new URLSearchParams(window.location.search);
      params.set('search', searchText);
      window.location.replace(url_base(window.location.href) + '?' + params.toString());
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
var base_url = 'https://health.data.ny.gov/resource/tbxv-5tbd.json';
var query_base = '?county=ONONDAGA&$select=operation_name,%20nys_health_operation_id,%20facility_address,%20city,%20date';

// Get list of worst offenders.
function worstOffenders(limit) {
  var url = base_url + query_base + '&$where=total_critical_violations>0&$order=total_critical_violations%20DESC&$limit=' + limit;
  getPlaceList(url, "worst-list", "Worst Offenders");
}

// Get list of latest inspections.
function mostRecent(limit) {
  var url = base_url +  query_base + '&$order=date%20DESC&$limit=' + limit;
  getPlaceList(url, "recent-list", "Most Recent");
}

// Get list of inspections by name.
function searchList(name) {
  var url = base_url +  query_base + '&$where=contains(operation_name,%20%27' + name + '%27)';
  getPlaceList(url, "search-list", "Results");
}

// Method to get list of inspections.
function getPlaceList (url, id, title) {
  requestJSON(url, function(json) {
    results.title = title;
    results.places = json;
    placesList = Handlebars.templates.list({ Places : results });
    $("#results").append('<div id="' + id + '"></div>');
    $('#' + id).append(placesList);
  });
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
    // Use URLSearchParams for parsing query parameters
    const params = new URLSearchParams(window.location.search);
    return params.get(query) || false;
}

// Get base URL without querystring parameters.
function url_base(url) {
  // Remove query string from URL
  return url.split('?')[0];
}

