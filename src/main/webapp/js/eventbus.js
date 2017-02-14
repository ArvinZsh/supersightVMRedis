nsEventBus = window.nsEventBus || {};
nsEventBus.eventbus = {
	listeners: {
		list: {},
		add: function(event, fnName, fn) {
			this.list[event] = this.list[event] || {};
			this.list[event][fnName] = fn;
		},
		remove: function(event, fnName) {
			var e = this.list[event];
			if (e) {
				e[fnName] = null;
			}
		}
	},

	subscribe: function(event, fnName, fn) {
		this.listeners.add(event, fnName, fn);
	},

	// == subscribe
	on: function(event, fnName, fn) {
		this.subscribe(event, fnName, fn);
	},

	// == on
	hook: function(event, fnName, fn) {
		this.on(event, fnName, fn);
	},

	broadcast: function(event, args) {
		var e = this.listeners.list[event];
		if (!e) {
			return;
		}
		for(var k in e) {
			var fn = e[k];
			if (fn) {
				if (args) {
					fn(args);
				}else{
					fn();
				}
			}
		}
	},

	// == broadcast
	raise: function(event, args) {
		this.broadcast(event, args);
	},


	unsubscribe: function(event, fnName) {
		this.listeners.remove(event, fnName);
	},

	// == unsubscribe
	unhook: function(event, fnName) {
		this.unsubscribe(event, fnName);
	}
};