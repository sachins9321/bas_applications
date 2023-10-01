/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"myapp/pro01_comandlineapptemp/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
