// This substitutes the empty navHTML class Tag with the inner html
const header = document.querySelector(".topOfPageContent");

const headerContent = document.createElement("headerImg");

header.innerHTML =
  '<img class="logo" title="Life Work Balance Logo" src="/media/img/potentialLogoUpdate.png" alt="Life Work Balance Logo" />;';
nav.parentNode.replaceChild(theHeaderContent, header);

/* 

Steps to modify the navBar and then use the join lines command 

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
