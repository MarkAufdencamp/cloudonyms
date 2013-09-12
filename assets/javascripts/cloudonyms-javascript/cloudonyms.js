var CLOUDONYMS = (function() {

	var Networks = Backbone.Model.extend({
		defaults: {
			title: 'Cloud Networks',
			state: 'Disconnected',
			icon: 'Network.png',
			disconnectedIconClass: 'network-disconnected',
			connectedIconClass: 'network-connected'			
		}	
	});
	
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
	
	var ServiceProviders = Backbone.Model.extend({
		
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
		networks: function() {
				return Networks;
		},
		servers: function() {
				return Servers;
		},
		domains: function() {
			return function() {
				return Domains;
			}		
		},
		serviceProviders: function() {
			return function() {
				return ServiceProviders;
			}			
		}
	}
})();


CLOUDONYMS.mainMenu = (function() {

	var Networks = "Networks";
	var Servers = "Servers";
	var Domains = "Domains";
	var ServiceProviders = "ServiceProviders";
	
	return {
		networks: function(brWindow) {
				console.log( Networks );
		},
		servers: function() {
				console.log( Servers );
		},
		domains: function() {
				console.log( Domains );
		},
		serviceProviders: function() {
				console.log( ServiceProviders );
		}
	}
})();

CLOUDONYMS.networksMenu = (function(){
	
	return {
		refresh: function() {
			
		}
	}
	
})();

CLOUDONYMS.serversMenu = (function(){
	return {
		refresh: function() {
			
		}
	}	
})();

CLOUDONYMS.domainskMenu = (function(){
	return {
		refresh: function() {
			
		}
	}	
})();

CLOUDONYMS.serviceProvidersMenu = (function(){
	return {
		refresh: function() {
			
		}
	}
})();