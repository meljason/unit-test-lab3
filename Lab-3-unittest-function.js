//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
// alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
function checkHumbrid(idIn) {
  "use strict";

 
  // regex = new RegExp(idIn, '/(n|N)\d{8}/');

  let validID = false;

  if (!isNaN(idIn) || idIn === undefined) {
    validID = false;
  } 

  else if (/^(n|N)\d{8}$/.test(idIn)) {
    validID = true;
  }
  return validID;

}
