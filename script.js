/*
Instructions to apply the hack as requested:
 
-------Using Firefox browser:---------
1. Run the game
2. Open inspect element window
3. Go to debugger tab
4. On the left side under sources select browser-mobile.js file
5. Press {} icon at the bottom left side near the eye icon to prettify the source
6. Press ctrl+f to search for the correct line or click on the search scripts window on the right side and add #
7. Type query.prorotype.run and press enter if the line is not being found automatically
8. Add the break point next to the var t = this code by clicking on the number next to it (blue arrow appears pointing to the var t = this)
9. Go to the characters menu in the game and equip any character (the game stops, values appears)
10. Press resume once by pressing F8 or by clicking on the blue resume button at the left top (looks like a play icon)
11. Copy any of the scripts below (edit the values if the script requests that. See the comments abowe each script!)
12. Go to the console tab and paste the code (if it does not allow you to paste the code, write allow pasting in the console)
13. Click enter to submit the script to the console
14. Go back to the debugger tab and press resume twice (not too quick)
15. Repeat stage 12 and 13
16. Go back to the debugger tab and click resume once
17. Remove the break point next to the var t = this by clicking on the blue arrow
18. Press resume one more time and the game resumes.
19. If you did everything correctly, you will see the changes depending on what hack you did. If not, see the video https://youtu.be/uqlSG8HEIfU
 
 
 
 
/*
*
* Money, xp, trophies
* Change number inside value after coins, trophies and xp. Do not include any spaces!
* Max coins = 999999, max trophies = 99999, max lvl xp = 1400000
*/
var l = Object.keys(e);
var values = {coins: 999999, trophies: 99999, xp: 1400000};
for (var c = 0; c < l.length; c++) {
    var h = e[l[c]];
    if(h.schemaPrimativeID.includes("currency:trophy")){
      h.balance = values['trophies'];
    }
    else if(h.schemaPrimativeID.includes("stat:xp")){
      h.value = values['xp'];
    }
    else if(h.schemaPrimativeID.includes("currency:coin")){
      h.balance = values['coins'];
    }
}
 
 
/*
*
* Max all sidekicks level and maturity
* You don't need to change anything in this hack
*
*/
var l = Object.keys(e);
for (var c = 0; c < l.length; c++) {
    var h = e[l[c]];
    if(h.schemaPrimativeID.includes("_maturity")){
        h.value = 3;
    }
    else if(h.schemaPrimativeID.includes("_xp")){
        h.maximum = 240000;
        h.value = 240000;
    }
    else if(h.schemaPrimativeID.includes("_zodiac_bonus")){
        h.value = 2;
    }
}
 
 
/*
* NOTE: DO NOT USE THIS HACK IF ANY OF YOUR CHARACTERS ARE QUESTING!
* Increase all characters damage and level
* You don't need to change anything in this hack
*
*/
var l = Object.keys(e);
  for (var c = 0; c < l.length; c++) {
    var h = e[l[c]];
    if(h.schemaPrimativeID.includes("_stat1")){    
      h.maximum = 80;
      h.value = 80;
    }
}
 
 
/*
*
* Swap your sidekicks to any sidekick you wish
* Edit r and t values with your sidekick id's
*
*/
var l = Object.keys(e);
var r = "LC05"; //Sidekick code you wish to have
var t = "FC13"; //Sidekicks code you wish to replace
for (var c = 0; c < l.length; c++) {
    var h = e[l[c]];
    if(h.schemaPrimativeID === "sidekick:"+t+"_zodiac_bonus"){
      h.schemaPrimativeID = "sidekick:"+r+"_zodiac_bonus";
    }
    else if(h.schemaPrimativeID === "sidekick:"+t+"_zodiac"){
      h.schemaPrimativeID = "sidekick:"+r+"_zodiac";
    }
    else if(h.schemaPrimativeID === "sidekick:"+t+"_maturity"){
      h.schemaPrimativeID = "sidekick:"+r+"_maturity";
    }
    else if(h.schemaPrimativeID === "sidekick:"+t+"_xp"){
      h.schemaPrimativeID = "sidekick:"+r+"_xp";
    }
    else if(h.schemaPrimativeID === "sidekick:"+t){
      h.schemaPrimativeID = "sidekick:"+r;
    }  
}
 
 
/*
*
* Unlock all your champions
* You don't need to change anything in this hack
*
*/
var l = Object.keys(e);
for (var c = 0; c < l.length; c++) {
    var h = e[l[c]];
    if(h.schemaPrimativeID.includes("item_character") && h.state.includes("locked")){
       h.state = "idle";
    }
}
