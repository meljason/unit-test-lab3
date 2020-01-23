//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
 function checkHumbrid(HumbrIn){
   "use strict";
   let validID = false;
   if (isNan(HumbrIn) || HumberIn === undefined){
     validID = false;
   }else if (HumberIn.match(/(n|N)\d{8}/)){
     validID = true;
   }
return validID;

 }
