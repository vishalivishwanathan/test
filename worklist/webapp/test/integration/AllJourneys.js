sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./arrangements/FLP",
	"./NavigationJourney",
	"sap/ui/test/opaQunit"
], function (Opa5, Startup, FLP) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new FLP(),
		assertions: new FLP(),
		viewNamespace: "worklist.worklist.view."
	});

});
