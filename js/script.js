// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: May 14 2025
// This file contains the JS functions for index.html

"use strict"

// Setting the cookieNumber
let cookieNumber = 0;

// Setting the cookieClickedBtn function
function cookieClickedBtn() {

  //Increase cookie number
  cookieNumber++
  // // Save the updated value back to localStorage
  localStorage.setItem("cookieNumber", cookieNumber)
  showCookieNumber()

}
function showCookieNumber() {
  let cookieNumberFromStorge = localStorage.getItem("cookieNumber")

  // check local stoge has a value 
  if (cookieNumberFromStorge != null) {
    cookieNumber = parseInt(cookieNumberFromStorge)
  }
  // Display result
  document.getElementById("result").innerHTML =
    "You have clicked " + (cookieNumber) + " times.";

}
