/* Author: Josh Hubi
 */
function get_form(element) {
    while (element) {
        element = element.parentNode
        if (element.tagName.toLowerCase() == "form") {
            //alert( element ) //debug/test
            return element
        }
    }
    return 0; //error: no form found in ancestors
}

// the function that handles the main menu
function burstMenu(title,color,selected) {	
jQuery('.menu-item-'+title).mouseover(function () {
   
    jQuery('.show-item-'+title).css({
        visibility: 'visible',
		'z-index': '2'
    });
	
	
    jQuery('.menu-item-'+title+' > a').css({
        background: color
    })

    jQuery('.show-item-'+title).mouseover(function () {
        jQuery('.show-item-'+title).css({
            visibility: 'visible',
			'z-index': '2'
        });
        jQuery('.menu-item-'+title+' > a').css({
            background: color
        })
    });

    jQuery('.show-item-'+title).mouseout(function () {
        jQuery('.show-item-'+title).css({
            visibility: 'hidden'
        });
        jQuery('.menu-item-'+title+' > a').css({
            background: 'inherit'
        })
    });

});

jQuery('.menu-item-'+title).mouseout(function () {
    jQuery('.show-item-'+title).css({
        visibility: 'hidden'
    });
    jQuery('.menu-item-'+title+' > a').css({
        background: 'inherit'
    })
});

if (selected == true) {
 
jQuery('.show-item-'+title).css('cssText', 'visibility: visible !important');

	 jQuery('.menu-item-'+title+' > a').css({
            background: color
        })
			
	jQuery('.menu-item-'+title).mouseout(function () {
    jQuery('.show-item-'+title).css('cssText', 'visibility: visible !important');
    jQuery('.menu-item-'+title+' > a').css({
       background: color
    })
	
	 jQuery('.show-item-'+title).mouseout(function () {
     jQuery('.show-item-'+title).css('cssText', 'visibility: visible !important');
	 jQuery('.menu-item-'+title+' > a').css({
       background: color
    })
    });
	
});
		
}
	
}