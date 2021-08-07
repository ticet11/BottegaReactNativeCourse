"use strict";
// Boolean
let paidAccount = false;
// Number
let age = 33;
var taxRate = 7.5;
// String
var fullName = "Jordan Hudgens";
// Array
var ages = [33, 28, 11];
// Tuple
let player;
player = [3, 'Corerra', .333, 33];
// Enum
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Approved"] = 0] = "Approved";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Rejected"] = 2] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
let job = ApprovalStatus.Pending;
// Any
var apiData = [123, 'Jordan', false];
// Void
function printOut(msg) {
    console.log(msg);
}
