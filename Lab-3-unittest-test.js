//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//  alert("lab 3 UNIT TEST");//please delete this line once connected.

function test__checkHumbrID(valueIn, expected) {
    "use strict";

    var msgPass = " ==PASSED==";
    var msgFail = " xxFAILEDxx";
    var msg;
    
    let result = checkHumbrid(valueIn);

    // let msg = "Value tested: " + valueIn + 
    //           " | Tested Result: " + result + 
    //           " | Expected Result: " + expected + "<br/>";

    if (result == expected) { 
        msg = "Value tested: " + valueIn +
            " | Expected Result: " + expected + "<span style='color: green;'>" + msgPass + "</span><br/>";
    } 

    else { 
        msg = "Value tested: " + valueIn +
            " | Expected Result: " + expected + "<span style='color: red;'>" + msgFail + "</span><br/>";
    }

    let msgBox = document.getElementById("data");
    msgBox.innerHTML += msg;

    // console.log(msgBox)

}

test__checkHumbrID(undefined, false); //test to fail with known failing value
test__checkHumbrID("n01234567", true); //test to pass
test__checkHumbrID("N01234567", true); //test to pass
test__checkHumbrID("x", false); //test fail
test__checkHumbrID("n012345678", false); //test to fail
test__checkHumbrID("n0123456", false); //test to fail
test__checkHumbrID("n01355438", false); //test to fail