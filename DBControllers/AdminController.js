var models = require("../models");
var express = require('express');
module.exports = {
	createAdmin : function createAdmin(newAdmin)
	{
		var new_admin = models.Admin.create(newAdmin);
		return new_admin;
	}
};
