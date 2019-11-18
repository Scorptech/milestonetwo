# Impact Earth - Testing details

Main README.md file (https://github.com/Scorptech/milestonetwo/blob/master/README.md)

View website in GitHub Pages (https://github.com/Scorptech/MilestoneTwo)

### Testing

* [W3C CSS validation](https://validator.w3.org/)
* [W3C Markup Validation](https://jigsaw.w3.org/css-validator/)

The developer used W3C CSS Validation Service and W3C Markup Validation Service to check the validity of the website code.

### User Stories Testing:

#### Most common path through the website:

Home 

Each menu link navigates you to each section on the same page 

### The "Chart" page offers information about the asteroids. Four charts are provided to give a visitor a good overview of information.

### Testing user stories from UX section of README.md

As a new visitor to the website, I want to easily navigate the site, so I can find what I need efficiently.
No matter what section the new visitor lands on, they can easily find and use the navigation bar.
    
As a visitor to the website, they will see the header image, a navigation bar, four charts, a contact form and footer with copyright and social media icons.
  
As an interested visitor, I want an easy to fill in contact form, so I can make contact with the website owner for general
enquiries. A clearly labelled contact page is easy to find in the website navigation.

As an interested visitor, I want to follow the website owner on social media, so I can keep up with their latest news.
6 social media icons can be found on the footer of the website.

As a returning visitor to the website, who has already decided to contact the owner, I want to be able to request information easily.

### Manual (logical) testing of all elements and functionality on every page.

The build of the website followed bootstrap guidelines. I originally started off using D3 for the charts and used cross filtering but
after speaking to my old mentor, he suggested using chartjs as D3 was not responsive and although this is a d3 system problem,
he said that I would be marked down for this, so I decided to use chartjs as they are responsive. Chartjs also seemed easier to 
work with although it has limitations which I found out regarding cross filtering and limited labeling which would of been nice to use.  

### Home Page:

####  Banner Header:
Go to "Home" page from a desktop.
Reduce and expand width of window to make sure the the text resizes depending on the how it is being viewed.
Added media queries for banner re-sizing

####  Navigation bar:
Used the standard bootstrap navbar code.  Changes had to be made to the font colours and active links.  
Go to the "Home" page from a company logo.
Change the screen size from desktop to tablet to verify that the navigation bar is responsive and switches from in line menu to burger icon dropdown menu at the appropriate place.  Had to give burger icon some spacing with media queries. 
Click on each navigation menu item and verify that it links to the correct section.
Change screen size to small and click burger icon, verify that the menu drops down and that the menu text is centred.
Repeat verification of functionality and responsiveness on my mobile phone and tablet.

####  Asteroid Impact Information section:
Reduce and expand width of window to confirm that the text on the home page responds correctly and looks good on all device widths.

####  Charts:
Checked charts for mobile first and table re-sizing.  

####  Footer:
Hover over each social media icon and confirm colour and size transitions expected.
Reduce and expand width of window to verify that the footer is responsive and looks good on all device widths.
Added website links to the social icons.  

Review all functionality and responsiveness on my mobile phone and tablet.

####  Contact form:
Reduce and expand width of window to verify that the form display 
behaves and centres the way expected, and that it looks good on all device widths.
Test that emails are being sent and the form works

####  Footer:
Testing already completed.

Review all functionality and responsiveness on my mobile phone and tablet.

### Further Testing:

I could not find any information to allow cross filtering between the charts like D3. 
There are other features I would of liked to have added but these features do not seem to be available.  
 
I viewed the website on several browsers and formatting was consistant.

Namaste

Alan