(function() { 
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['detail'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing;

  return "<table class=\"table table-bordered table-striped \">\n  <tr><td class=\"col-xs-2\">Facility name</td><td><strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.operation_name : stack1), depth0))
    + "<strong></td></tr>\n  <tr><td class=\"col-xs-2\">Address</td><td><a title=\"Opens in Google Maps\" target=\"_blank\" href=\"https://www.google.com/maps/place/"
    + ((stack1 = (helpers.makeAddressString || (depth0 && depth0.makeAddressString) || alias4).call(alias3,(depth0 != null ? depth0.Details : depth0),{"name":"makeAddressString","hash":{},"data":data})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (helpers.makeAddressString || (depth0 && depth0.makeAddressString) || alias4).call(alias3,(depth0 != null ? depth0.Details : depth0),{"name":"makeAddressString","hash":{},"data":data})) != null ? stack1 : "")
    + "</a></td></tr>\n  <tr><td class=\"col-xs-2\">Inspection Date</td><td>"
    + ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.date : stack1),{"name":"formatDate","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n  <tr><td class=\"col-xs-2\">Critical violations</td><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.total_critical_violations : stack1), depth0))
    + "</td></tr>\n  <tr><td class=\"col-xs-2\">Critical &amp; not corrected</td><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.total_crit_not_corrected : stack1), depth0))
    + "</td></tr>\n  <tr><td class=\"col-xs-2\">Inspection Details</td><td>"
    + ((stack1 = (helpers.highlightCritical || (depth0 && depth0.highlightCritical) || alias4).call(alias3,((stack1 = (depth0 != null ? depth0.Details : depth0)) != null ? stack1.violations : stack1),{"name":"highlightCritical","hash":{},"data":data})) != null ? stack1 : "")
    + "</td></tr>\n</table>";
},"useData":true});
templates['list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h4>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Places : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n<table class=\"table table-striped table-bordered table-hover\">\n<thead>\n	<tr>\n	  <th>Name</th>\n	  <th>Address</th>\n	  <th>City</th>\n	  <th>Date</th>\n	</tr>\n</thead>\n<tbody>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Places : depth0)) != null ? stack1.places : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\n</table>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "	<tr>\n	  <td class=\"col-xs-3\"><a class=\"details\" href=\""
    + ((stack1 = ((helper = (helper = helpers.getBaseUrl || (depth0 != null ? depth0.getBaseUrl : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getBaseUrl","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "?id="
    + alias4(((helper = (helper = helpers.nys_health_operation_id || (depth0 != null ? depth0.nys_health_operation_id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nys_health_operation_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.operation_name || (depth0 != null ? depth0.operation_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"operation_name","hash":{},"data":data}) : helper)))
    + "</td>\n	  <td class=\"col-xs-3\">"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias2).call(alias1,(depth0 != null ? depth0.facility_address : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n	  <td class=\"col-xs-3\">"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias2).call(alias1,(depth0 != null ? depth0.city : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n	  <td class=\"col-xs-3\">"
    + ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || alias2).call(alias1,(depth0 != null ? depth0.date : depth0),{"name":"formatDate","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n	</tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"alert alert-danger\" role=\"alert\">No results found</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.Places : depth0)) != null ? stack1.places : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
})();
