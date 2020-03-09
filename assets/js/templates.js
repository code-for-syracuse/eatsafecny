(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['detail'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<table class=\"table table-bordered table-striped \">\n  <tr><td class=\"col-xs-2\">Facility Name</td><td><strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"Details") : depth0)) != null ? lookupProperty(stack1,"operation_name") : stack1), depth0))
    + "<strong></td></tr>\n  <tr><td class=\"col-xs-2\">Facility Address</td><td><a title=\"Opens in Google Maps\" target=\"_blank\" href=\"https://www.google.com/maps/place/"
    + ((stack1 = (lookupProperty(helpers,"makeAddressString")||(depth0 && lookupProperty(depth0,"makeAddressString"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"Details") : depth0),{"name":"makeAddressString","hash":{},"data":data,"loc":{"start":{"line":3,"column":140},"end":{"line":3,"column":171}}})) != null ? stack1 : "")
    + "\">"
    + ((stack1 = (lookupProperty(helpers,"makeAddressString")||(depth0 && lookupProperty(depth0,"makeAddressString"))||alias4).call(alias3,(depth0 != null ? lookupProperty(depth0,"Details") : depth0),{"name":"makeAddressString","hash":{},"data":data,"loc":{"start":{"line":3,"column":173},"end":{"line":3,"column":204}}})) != null ? stack1 : "")
    + "</a></td></tr>\n  <tr><td class=\"col-xs-2\">Inspection Date</td><td>"
    + ((stack1 = (lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"Details") : depth0)) != null ? lookupProperty(stack1,"date") : stack1),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":4,"column":51},"end":{"line":4,"column":80}}})) != null ? stack1 : "")
    + "</td></tr>\n  <tr><td class=\"col-xs-2\">Critical violations</td><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"Details") : depth0)) != null ? lookupProperty(stack1,"total_critical_violations") : stack1), depth0))
    + "</td></tr>\n  <tr><td class=\"col-xs-2\">Critical &amp; not corrected</td><td>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"Details") : depth0)) != null ? lookupProperty(stack1,"total_crit_not_corrected") : stack1), depth0))
    + "</td></tr>\n  <tr><td class=\"col-xs-2\">Inspection Details</td><td>"
    + ((stack1 = (lookupProperty(helpers,"highlightCritical")||(depth0 && lookupProperty(depth0,"highlightCritical"))||alias4).call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"Details") : depth0)) != null ? lookupProperty(stack1,"violations") : stack1),{"name":"highlightCritical","hash":{},"data":data,"loc":{"start":{"line":7,"column":54},"end":{"line":7,"column":96}}})) != null ? stack1 : "")
    + "</td></tr>\n</table>";
},"useData":true});
templates['list'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<h4>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"Places") : depth0)) != null ? lookupProperty(stack1,"title") : stack1), depth0))
    + "</h4>\n<table class=\"table table-striped table-bordered table-hover\">\n<thead>\n	<tr>\n	  <th>Name</th>\n	  <th>Address</th>\n	  <th>City</th>\n	  <th>Date</th>\n	</tr>\n</thead>\n<tbody>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"Places") : depth0)) != null ? lookupProperty(stack1,"places") : stack1),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":13,"column":1},"end":{"line":20,"column":10}}})) != null ? stack1 : "")
    + "	</tbody>\n</table>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "	<tr>\n	  <td class=\"col-xs-3\"><a class=\"details\" href=\""
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"getBaseUrl") || (depth0 != null ? lookupProperty(depth0,"getBaseUrl") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getBaseUrl","hash":{},"data":data,"loc":{"start":{"line":15,"column":49},"end":{"line":15,"column":65}}}) : helper))) != null ? stack1 : "")
    + "?id="
    + alias4(((helper = (helper = lookupProperty(helpers,"nys_health_operation_id") || (depth0 != null ? lookupProperty(depth0,"nys_health_operation_id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nys_health_operation_id","hash":{},"data":data,"loc":{"start":{"line":15,"column":69},"end":{"line":15,"column":96}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"operation_name") || (depth0 != null ? lookupProperty(depth0,"operation_name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"operation_name","hash":{},"data":data,"loc":{"start":{"line":15,"column":98},"end":{"line":15,"column":116}}}) : helper)))
    + "</td>\n	  <td class=\"col-xs-3\">"
    + ((stack1 = (lookupProperty(helpers,"toTitleCase")||(depth0 && lookupProperty(depth0,"toTitleCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"facility_address") : depth0),{"name":"toTitleCase","hash":{},"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":16,"column":58}}})) != null ? stack1 : "")
    + "</td>\n	  <td class=\"col-xs-3\">"
    + ((stack1 = (lookupProperty(helpers,"toTitleCase")||(depth0 && lookupProperty(depth0,"toTitleCase"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"city") : depth0),{"name":"toTitleCase","hash":{},"data":data,"loc":{"start":{"line":17,"column":24},"end":{"line":17,"column":46}}})) != null ? stack1 : "")
    + "</td>\n	  <td class=\"col-xs-3\">"
    + ((stack1 = (lookupProperty(helpers,"formatDate")||(depth0 && lookupProperty(depth0,"formatDate"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"date") : depth0),{"name":"formatDate","hash":{},"data":data,"loc":{"start":{"line":18,"column":24},"end":{"line":18,"column":45}}})) != null ? stack1 : "")
    + "</td>\n	</tr>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class=\"alert alert-danger\" role=\"alert\">No results found</div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"Places") : depth0)) != null ? lookupProperty(stack1,"places") : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();