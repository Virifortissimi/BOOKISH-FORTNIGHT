
    jQuery(document).ready(function($) {
        
       $('.top_2').hide();
        
        $('.login_1').click(function(){
           $('.top_1').hide();
            $('.top_2').show();
        });
        
        $('.login_2').click(function(){
           $('.top_1').show();
            $('.top_2').hide();
        });
        
        
        
        
    });