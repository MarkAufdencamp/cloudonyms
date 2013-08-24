var Cloudonyms = (function() {

	var Servers = Backbone.Model.extend({
		defaults: {
			title: 'Cloud Server',
			state: 'Down',
			icon: 'server.png',
			offIconClass: 'server-on',
			initIconClass: 'server-init',
			onIconClass: 'server-on'
		}	
	});
	
	var Domains = Backbone.Model.extend({
		
	});
	
	var DomainServices = Backbone.Model.extend({
		
	});
	
	var ServiceDictionary = Backbone.Model.extend({
		
	});
	
	var Providers = Backbone.Model.extend({
		
	});
	
	var ProviderDictionary = Backbone.Model.extend({
		
	});
	
	return {
		signup: function() {
			return function() {
				
			}
		},
		signin: function() {
			return function() {
				
			}
		},
		servers: function() {
			return function() {
				return this.Servers;
			}
		},
		domains: function() {
			return function() {
				return Domains;
			}		
		},
		providers: function() {
			return function() {
				return Providers;
			}			
		}
		
	}
})();

	
