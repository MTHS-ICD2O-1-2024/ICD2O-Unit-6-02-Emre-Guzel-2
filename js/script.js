// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: May 8 2025
// This file contains the JS functions for index.html

"use strict"

// Setting the cookieClickedBtn function
function cookieClickedBtn() {
  let cookieNumber = parseInt(document.getElementById("cokie-button").value);
  // Setting the variables 

  cookieNumber ++
  document.getElementById("cokie-button").value = cookieNumber
  // Display result
  document.getElementById("result").innerHTML =
    "You have clicked " + (cookieNumber) + " times.";
}
