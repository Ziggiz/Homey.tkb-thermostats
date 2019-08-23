'use strict'

const Homey = require('homey')

class TKBThermostatApp extends Homey.App {
	
	onInit() {
		this.log('TKB Thermostat app is running...')
	}
	
}

module.exports = TKBThermostatApp