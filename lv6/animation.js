document.addEventListener('DOMContentLoaded', function() {
    jQuery('.box').stop(true).animate( { width:'toggle'},'slow',function(){
        jQuery('.box_msg').stop(true).animate( { opacity:'+=1'},'slow');
    });
    
});