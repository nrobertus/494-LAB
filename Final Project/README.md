# CSCI-494 Final Project
	Here I will provide a rundown of the objectives for this project, and how they were fulfilled. 
##Planning Elements

###Sitemap
	This is included in the folder called Design
	
###Website Strategy
	This is a sub-section inside the included SiteDocumentation.pdf in the Design folder
	
###Target Users
	This is also in the same SiteDocumentation.pdf
	
###Wireframes
	These are all in Design/Wireframes. I created them in Balsamiq, and included the .bmpr file associated with Balsamiq.

###Email the teacher
	This was done on November 16th.
	
##Design Elements
	These are all fairly subjective, but I will point to specific instances of each.
	
###Well-designed look and feel
	Everything included in the site follows a color scheme, font set, and general "feel", as outlined in the SiteDocumentation.pdf.
	
###A layout build for mobile devices and tablets
	The entire site is very responsive, and can be scaled nearly infinitely while still maintaining general readability and structure.
	
###Simple, professional look for a positive user experience
	I tried to keep things as clean as possible, without garish buttons or overt typography. Many things are responsive and interactive, but it is all generally clean and well-kempt.
	
###Including the logo as a reference for the user when clicking around pages
	Anytime the logo is clicked, the user is taken back to the home page. Also, the favicon is taken directly from the logo. 
	
###Format list and categories for easy scanning
	The lists of menu items, employees, social media outlets, and others are all formatted appropriately for each application. Menu items are more bold and important, while social media outlets are clean and usable.
	
##Technical Elements
	
###Valid code
	No errors are thrown on this site, and everything is up to strict HTML5 standards.

###Separation of concert for the site
	The .js libraries are not included until the end of index.html, thus allowing the browser to download them after the page has loaded. 
	An MVC design paradigm is not totally appropriate for this site, as it is not really a web application, but all styling has been encapsulated into .css files. None is in the .html files.

###A well-constructed homepage
	The homepage is simple and clean, with some fun parallax-esque scrolling effects. 

###Responsive layout on 3 separate pages
	There are 4 pages here (the html being totally included in index.html, with content being swapped via javascript). Each of the four is totally responsive, and can be scaled to basically any amount.

###Javascript elements

####Scrolling
	I implemented a natural scrolling library, which is especially noticeable on touch-screen devices. Also, parallax-esque scrolling effects are present in the homepage. In addition, there is an elevator icon at the bottom of the page. When clicked (this works especially well when the page is resized to make it very long), elevator music will play as the site scrolls itself to the top, and it will ding when it finally gets there.

####Tabs/Accordions/Sliders
	The top nav is based off of the idea of a tab, but no accordions or sliders are used. 

####Changing the rendering and content as the user interacts with it by displaying hidden content dynamically
	This is being done to swap out the main body content. As users click the nav tabs, the body content fades out, new content is selected, and it is faded in.

####Modals
	In the "menu" tab, if a menu item is clicked on, a modal will appear with additional information on the particualr product.
	
####Functional, readable code
	All of the .css is categorized, as well as the javascript. Barely any javascript was written, as it was very efficient to use jQuery.

##Fast load times
	
###Reduce and reuse code in .js/html/css
	This was done judiciously. Most of the .css rules are used in multiple locations. Implementation of the Bootstrap framework was also very helpful in this.

###Reduce download size of the images
	The main logo is incredibly fast to download, as it is an svg, not an actual image format. The largest images does take a bit to download, but the site is still complete in the meantime.
	I also reduced the largest image I was using from 4.34 MB to 0.32 MB when I converted it to grayscale. Both are included, but only the grayscale version is downloaded.

###Implement minificaiton on the server
	All imported javascript libraries are minified. My javascript file is only 17 lines long, so I didn't feel the need to minify it.

##Compatibility with other browsers

###Use vendor prefixes for .css that is not supported on all browsers
	This is done in many places to keep things working in Chrome, Firefox, Opera and Internet Explorer / Edge

###Don't use .js functions that aren't supported by all browsers.
	I did not.

###Don’t code the HTML / CSS poorly so that it might work in Chrome and not IE
	I did my best to not code anything poorly.

###Provide shims to retrofits older browsers for modern CSS and HTML
	This was done in a few places in global.css.

#Content Elements
	
##Effective site content free from spelling and grammatical errors
	I did my best to spell-check and proofread everything. 

##Carefully chosen words and clear statement from the strategy
	The strategy details the tone and vibe I wanted to present with the site, and the language chosen reflects that.

##Clear call to action areas and buttons
	While this is a site for a restaurant, I did my best to implement this. The menu items change color on hover, in an attempt to make it clear that they are clickable.

##Website sections and categories present information in a way that is easy for users to find.
	The entire site is very simple, so hopefully it is not difficult to navigate.

#Functional elements

##Navigation that appear consistent on all browsers and devices
	Because it is responsive, this is the case. I have tested it on any many devices as I can, and I havent broken it yet.

##Quickly locate content that is important for the target users.
	The tabs help users do this categorically. 

##Can a user scan through key parts of the page quickly
	Yes, they are clean, and don't have much non-essential information. In the menu, more can be gathered upon request, but only essential information is available initally.

##Multiple ways to find content with good internal linking
	Each page can be accessed from any other page. The modals can be closed by click the "close" button or clicking outside the modal.

##Overall organization and how easy it is for to use.
	The whole site is laid out in a generally sensible manner, and shouldn't be too confusing to use.