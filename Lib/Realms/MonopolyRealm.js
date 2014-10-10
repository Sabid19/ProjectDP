//Package MonopolyRealm.js
var express = require('express');


function MonopolyRealm()
{
    this.description = "This is going to be the monopoly game object";
}
//We need to strategise what we are going to do here of course

module.exports = {
    description: "This is definitely going to the module for monopoly"
};

module.exports.MonopolyObject = MonopolyRealm;