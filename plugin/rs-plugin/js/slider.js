var revapi;

jQuery(document).ready(function() {

    revapi = jQuery('.tp-banner').revolution(
        {
            delay:5000,
            startwidth:1700,
            startheight:600,
            hideThumbs:true,
            navigationType:"none",
            fullWidth:"on",
            forceFullWidth:"on"
        });

});	//ready