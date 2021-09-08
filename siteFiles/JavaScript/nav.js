/* 
  ********************************************************************************

  Author: Lawrence Darwin Reid

  ********************************************************************************
 */

// This substitutes the empty navHTML class Tag with the inner html. The directions for this project prevented us from using any snippets of
// PHP code that would have served the same purpose.

const nav = document.querySelector(".navHTML");

const navBar = document.createElement("nav");

navBar.innerHTML =
  '<div class="navLinksToTheRight"> <a href="1-index.html">Home</a> <a href="2-bestPractices.html">Best Practices</a> <a href="3-timeManagmentApp.html">Time Management App</a> <a href="4-ShopAndAffiliateLinks.html">Shop-Affiliates</a> <a href="5-Contact.html">Contact</a> </div>';
nav.parentNode.replaceChild(navBar, nav);

/* 

Steps to modify the navBar: 

*use the join lines command* 

1. Highlight Lines, Open the Command Palette Ctrl + Shift + P 

or:

a) Top Left of screen

b) View Menu

c) Click Command Palette

2. type Join Lines, then pres enter

3. cut and paste line between the single quotes ''

//////////////////////////////////////

current nav structure:

<div class="navLinksToTheRight">
  <a href="/index.html">Home</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
 

*/
