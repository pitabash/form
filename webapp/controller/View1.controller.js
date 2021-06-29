sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("form.controller.View1", {
			onInit: function () {
                // Ctreating Model Object
                var oModel = new sap.ui.model.json.JSONModel();
                //Loading data into JSON Model
                oModel.loadData("model/mockData/address.json");
                //Set the data into View
                this.getView().setModel(oModel);


			}
		});
	});
