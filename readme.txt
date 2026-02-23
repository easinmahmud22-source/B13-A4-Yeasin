1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

# getElementById
    * select one element by id
    * id must be unique
    ex,
    const title = document.getElementById("heading");

===================================
#getElementsByClassName
    * select all element with the class
    ex,
    const cards = document.getElementsByClassName("card");

===================================
#querySelector
    *selects first element matching CSS selector.
    ex,
    const firstCard = document.querySelector(".card");
===================================
#querySelectorAll
    *selects all elements matching CSS selector.
    ex,
    let allCards = document.querySelectorAll(".card");


=============================================================================================================
=============================================================================================================    

2. How do you create and insert a new element into the DOM?
    *Create the element
    *Add content or attributes
    *Insert it into the DOM

=============================================================================================================
=============================================================================================================     3. What is Event Bubbling? And how does it work?

    *Event Bubbling is when an event triggered on a child element “bubbles up” and triggers the same event on its parent elements, all the way up to the document root.

    How it works:

    *You click on a nested element (like a button inside a div).

    *The event first runs on the target element.

    *Then it propagates upward to its parent, then the grandparent, and so on.

=============================================================================================================
=============================================================================================================    
4. What is Event Delegation in JavaScript? Why is it useful?


    *Event Delegation is a technique where you attach a single event listener to a parent element instead of adding listeners to multiple child elements. The parent “delegates” the event to the correct child using the event target.

    Why it’s useful:

    *Reduces memory usage (fewer event listeners).

    *Works for dynamically added elements.

    *Keeps code cleaner and easier to manage.

=============================================================================================================
=============================================================================================================    
5. What is the difference between preventDefault() and stopPropagation() methods?
    *preventDefault()
        Stops the default browser action (like following a link or submitting a form)
    *stopPropagation()
        Stops the event from bubbling up (or capturing down) the DOM    