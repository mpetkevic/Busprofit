

$(document).ready(function() {
    var close = $('#close');

    close.click(function(){
        //console.log("It's closed");
        $(".modal").hide();
    })

    var modal = $('.modal');
    var tel = $('.phone-num');
    tel.mask('+7 (999) 99 99 999')
    //console.log(modal);
        //E-mail Ajax Send
        $("form").submit(function() { //Change
            var th = $(this);
            event.preventDefault();
            //alert(th.attr('id'));
            
            $.ajax({
                type: "POST",
                url: "mail.php", //Change
                data: th.serialize()
            }).done(function() {
                $(".modal").show();
                //alert("Thank you!");
                setTimeout(function() {
                    // Done Functions
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        });
    
    });

