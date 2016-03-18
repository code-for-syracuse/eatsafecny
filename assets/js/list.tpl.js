(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h4>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.Places : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h4>\n<table class=\"table table-striped table-bordered table-hover\">\n<thead>\n	<tr>\n	  <th>Name</th>\n	  <th>Address</th>\n	  <th>City</th>\n	  <th>Date</th>\n	</tr>\n</thead>\n<tbody>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.Places : depth0)) != null ? stack1.places : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</tbody>\n</table>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "	<tr>\n	  <td class=\"col-xs-3\"><a class=\"details\" href=\""
    + ((stack1 = ((helper = (helper = helpers.getBaseUrl || (depth0 != null ? depth0.getBaseUrl : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"getBaseUrl","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "?id="
    + alias3(((helper = (helper = helpers.nys_health_operation_id || (depth0 != null ? depth0.nys_health_operation_id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"nys_health_operation_id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.operation_name || (depth0 != null ? depth0.operation_name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"operation_name","hash":{},"data":data}) : helper)))
    + "</td>\n	  <td class=\"col-xs-3\">"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias1).call(depth0,(depth0 != null ? depth0.facility_address : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n	  <td class=\"col-xs-3\">"
    + ((stack1 = (helpers.toTitleCase || (depth0 && depth0.toTitleCase) || alias1).call(depth0,(depth0 != null ? depth0.city : depth0),{"name":"toTitleCase","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n	  <td class=\"col-xs-3\">"
    + ((stack1 = (helpers.formatDate || (depth0 && depth0.formatDate) || alias1).call(depth0,(depth0 != null ? depth0.date : depth0),{"name":"formatDate","hash":{},"data":data})) != null ? stack1 : "")
    + "</td>\n	</tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"alert alert-warning working\" role=\"alert\">No results found</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.Places : depth0)) != null ? stack1.places : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
})();