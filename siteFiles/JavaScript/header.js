/* 
  ********************************************************************************

  Author: Lawrence Darwin Reid

  ********************************************************************************
 */

// This substitutes the empty navHTML class Tag with the inner html. The directions for this project prevented us from using any snippets of
// PHP code that would have served the same purpose

const header = document.querySelector(".topOfPageContent");

const headerContent = document.createElement("headerImg");

header.innerHTML =
  '<a href="1-index.html"><img class="logo" title="Life Work Balance Logo" src="/media/img/potentialLogoUpdate.png" alt="Life Work Balance Logo" /></a>';
nav.parentNode.replaceChild(theHeaderContent, header);

/* 
   
            

          

Steps to modify the navBar:

*use the join lines command *

1. Highlight Lines, Open the Command Palette Ctrl + Shift + P 

or:

a) Top Left of screen

b) View Menu

c) Click Command Palette

2. type Join Lines, then pres enter

3. cut and paste line between the single quotes ''

//////////////////////////////////////

current header content

    <img class="logo"
        title="Life Work Balance Logo"
        src="/media/img/potentialLogo.png"
        alt="Life Work Balance Logo"
      />

*/
