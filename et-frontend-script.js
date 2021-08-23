jQuery(document).ready(function(){
        jQuery('.et-main-blog-wrapper').each(function(){
            var wrapWidth = jQuery(this).width();
            //console.log(wrapWidth);
            if(wrapWidth<=768){
                jQuery(this).addClass('small-wrapper');
            }
        });
    });