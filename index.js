exports.getDisplayNameMap = function() {
    var components = arguments;
    var ComponentMap = {};
  
    Array.prototype.forEach.call(components, function(component) {
      ComponentMap[component.displayName || component.name] = component;
    });
  
    return ComponentMap;
  };
  