
// Question 5:
//(Adding interactivity features on apple.com website’s footer section)
// The following question is based on the responsive Apple website you built back in phase 1. As
// we didn't cover JavaScript back then, we didn't implement some of the interactive features of
// the website that are provided by JavaScript. You can use apple.com’s responsive code we wrote
// from the link provided below to implement the interactivity of apple.com's footer section.
// Responsive code for apple.com:
// ● https://evangadi.com/files/apple/responsive-code-jquery-for-footer.zip
// You can refer to apple.com’s live website to check how the footer behaves:
// ● https://www.apple.com/
// In summary, the footer fully displays all the five columns in expanded state while viewed on
// desktop or tablet size devices. You are required to implement the following mobile size
// features.
// Features on mobile size devices:
// ● Each of the five columns collapse to a single column. Make these columns collapse to
// a single column.
// ● All the sub-links under each <h3> are hidden. Hide these sub-links
// ● There is also a newly added "+" sign on the right side of each <h3> to trigger the
// expansion of the sub-links upon onclick event. Add the added "+" sign on the right
// side of each <h3>. (Hint: everything up to this point can be achieved without using
// any JavaScript at all. Bootstrap and CSS would be enough to achieve these).
// ● When users click on the "+" sign, the hidden sub-links under the respective <h3>
// slide down and show. Then the "+" sign changes to the "x" sign. (Hint: Use jQuery to
// implement the following feature)
// ● When users click on the "+" sign, the sub-links slide up and get hidden. Note: this
// interactivity only happens on mobile size devices. (Hint: Use jQuery to implement
// the following feature)
// Hint on how to organize your folders and files
// File organization for Questions 1 to 4
// ● Download the “jQuery-Practice” zipped file, extract it and save it under your
// “Evangadi” folder. The zipped file contains the “jQuery-Practice” folder. Inside this
// folder, you will find an “index.html” file and a css folder containing a “styles.css”.
// The document doesn't have the jQuery and your custom JavaScript files included on
// it.
// ○ Inside of the ““jQuery-Practice” folder, create a folder called “js”.
// ○ Inside the “js”folder,
// ■ Create a JavaScript file called “script.js”
// ■ Download the latest version of jQuery and save it under your "js"
// folder.
// ○ Include/link both your “script.js” and jQuery files at the bottom of your
// “index.html”. Note: Make sure you put your “script.js” file below the jQuery
// in your “index.html”.
// ○ Just to make sure you have successfully loaded your “script.js” file in your
// “index.html”, console the "jQuery Testing ..." message, check if you get the
// message on your browser when inspecting.
// ● You will be writing your JavaScript code on the “scripts.js” file.
// ● Now you can start working on your assignment. Happy coding!
// File organization for
// Question 5
// ● The 5th question is based on the responsive Apple website you built back in phase 1
// ● All you need to do is download the “responsive-code-jquery-for-footer 2” zipped
// folder from the link below, extract it and save it under your “Evangadi” folder.
// ○ https://evangadi.com/files/apple/responsive-code-jquery-for-footer.zip
// ● Inside the “responsive-code-jquery-for-footer 2” folder, we have already included
// for you:
// ○ A “bootstrap.js” file
// ○ A JavaScript file, called “cusotm.js” where you write your JavaScript code
// ○ A “bootstrap.css” file
// ○ A CSS file, called “styles.css” where you write your CSS code
// ● We have also included in the HTML document, the jQuery and Bootstrap library
// links, the “custom.js”, “bootstrap.js” and “styles.css” files for you
// ● All you need to do is write your JavaScript code in the “cusotm.js” and your CSS
// code in the “styles.css”


let footerLink = $(".footer-links-wrapper h3");
footerLink.click(function () {
  if ($(window).width() <= 768) {
    $(this).next("ul").slideToggle();
    $(this).slideToggle("expanded");
  }
});

$(window).on("resize", function () {
  location.reload();
});
