# penhaligons  :rocket:

### background  :bell:
Customers feedback survey showed that users were finding it difficult to find the basket when adding an item to their basket

### objective :book:
By adding an animation feature to the mini-basket when a  user adds an item to their basket will help users know where to click to view their basket; which will lead to users clicking to the checkout funnel and ultimately increase conversion. 

### targeting
www.penhaligons.com
desktop only/ chrome 45+, firefox 45+, e10, safari



### notes
- all variation changes completed => one.js file
- changes 'proceed to checkout' cta color (no hexa value has been provided)
- sets display block to the dropdown checkout and notifications 'item added'
  when you click 'add to bag' cta
- re arranges price to the top (done with ajax) so it neeeded
  a few extra tweaks to get the timing right (along with style display block to push it)
- font size larger => class added using a for loop (no font size provided either):changed to 1.5ems
- experiment working ok
- Updated functionality for items listing page. Now when clicking CTA on top of re-arranging shopping cart items in the fly, it also scrolls up to the top of page.

--more fixes:
- mouse in and out shopping bag image to view basket summary
- cookie banner changes and basket summary position
- add to cta button positions basket summary under shopping bag image whatever browser screen width
  (it does not suppose to resize on the fly)
- list items collected with promises
- /page/basket => comes up when you click on 'proceed to checkout' (previous page)
  If you decide not to go with that, (because 'interferes' with site overlay), then remove line [51-54] and basket summary will only show on mouse over in this page.
- 'super user friendly' => mouse out basket to hide basket summary  
- line 28 => adds conditional statment for engrave me cta (so that popup wont appear under site's popup)	



### remains to be done
metrics - completed
GA Universal Slot 3 

<br/>




<kbd>desktop</kbd>  :rocket:     

![](/images/finaldraft.png) 

<kbd>desktop</kbd>  :rocket:     

![](/images/listingPg.png) 



