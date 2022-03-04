# Our Story
	src/views/ourstory/

![Our Story](images/our-story.png)

The content under the different links change when clicking them. 

Each of these links have an event listener `activateTab` that when clicked, the following happen:

- toggle the background image:
	`let currentImage = event.target.dataset.background;`
    `$(".backgroundImage").hide();`
    `$('.' + currentImage).show();`

- add the `active` class to the links and timelines:
	`$(".active").removeClass('active');`
    `$(currentTimelineLink).addClass('active');`

- toggling the content:
	`let targetDiv = event.target.dataset.target;`
	`$(".tabContent").hide();`
    `$('#' + targetDiv).show();`

