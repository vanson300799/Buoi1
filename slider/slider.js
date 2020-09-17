$(function() {
    thoigian = setInterval(function () {  
        var sau = $('.active').next();

        // xu ly phan nut
        var vitri = $('.do').index() + 1;
        $('.nut-slide ul li').removeClass('do');
        if(vitri == $('.nut-slide ul li').length){
            vitri = 0;
        }
        $('.nut-slide ul li:nth-child('+(vitri+1)+')').addClass('do');
        if(vitri == 4){
            $('.chuyen-slide').addClass('di-chuyen-sang-trai');
        }
        if(vitri == 0){
            $('.chuyen-slide').removeClass('di-chuyen-sang-trai');
        }

        // xu ly phan slide
        if(sau.length == 0){
            $('.active').addClass('troi-sang-trai').one('webkitAnimationEnd', function (event) {
                $('.troi-sang-trai').removeClass('troi-sang-trai');
            });
            $('.anh-slide ._1slide:first-child').addClass('vao-ben-phai').one('webkitAnimationEnd', function (event) { 
                $('.active').removeClass('active');
                $('.vao-ben-phai').addClass('active').removeClass('vao-ben-phai');
             });
        }
        else{
        $('.active').addClass('troi-sang-trai').one('webkitAnimationEnd', function (event) {
            $('.troi-sang-trai').removeClass('troi-sang-trai');
        });
        sau.addClass('vao-ben-phai').one('webkitAnimationEnd', function (event) { 
            $('.active').removeClass('active');
            $('.vao-ben-phai').addClass('active').removeClass('vao-ben-phai');
         });
        }},2500);


    // nut next
    $('.next').click(function (event) { 
        clearInterval(thoigian);
        var sau = $('.active').next();

        // xu ly phan nut
        var vitri = $('.do').index() + 1;
        $('.nut-slide ul li').removeClass('do');
        if(vitri == $('.nut-slide ul li').length){
            vitri = 0;
        }
        $('.nut-slide ul li:nth-child('+(vitri+1)+')').addClass('do');
        if(vitri == 4){
            $('.chuyen-slide').addClass('di-chuyen-sang-trai');
        }
        if(vitri == 0){
            $('.chuyen-slide').removeClass('di-chuyen-sang-trai');
        }

        // xu ly phan slide
        if(sau.length == 0){
            $('.active').addClass('troi-sang-trai').one('webkitAnimationEnd', function (event) {
                $('.troi-sang-trai').removeClass('troi-sang-trai');
            });
            $('.anh-slide ._1slide:first-child').addClass('vao-ben-phai').one('webkitAnimationEnd', function (event) { 
                $('.active').removeClass('active');
                $('.vao-ben-phai').addClass('active').removeClass('vao-ben-phai');
             });
        }
        else{
        $('.active').addClass('troi-sang-trai').one('webkitAnimationEnd', function (event) {
            $('.troi-sang-trai').removeClass('troi-sang-trai');
        });
        sau.addClass('vao-ben-phai').one('webkitAnimationEnd', function (event) { 
            $('.active').removeClass('active');
            $('.vao-ben-phai').addClass('active').removeClass('vao-ben-phai');
         });
        }
    });
    // nut prev
    $('.prev').click(function (event) { 
        clearInterval(thoigian);
        var truoc  = $('.active').prev();
        // xu ly phan nut
        var vitri = $('.do').index() + 1;
        $('.nut-slide ul li').removeClass('do');
        if(vitri == 1){
            vitri = $('.nut-slide ul li').length + 1;
        }

        $('.nut-slide ul li:nth-child('+(vitri-1)+')').addClass('do');
        if(vitri == 5 ){
            $('.chuyen-slide').removeClass('di-chuyen-sang-trai');
        }
        if(vitri == 9){
            $('.chuyen-slide').addClass('di-chuyen-sang-trai');
        }

        // xu ly phan slide
        if(truoc.length == 0){
            $('.active').addClass('troi-sang-phai').one('webkitAnimationEnd', function (event) {
                $('.troi-sang-phai').removeClass('troi-sang-phai');
            });
            $('.anh-slide ._1slide:last-child').addClass('vao-ben-trai').one('webkitAnimationEnd', function (event) { 
                $('.active').removeClass('active');
                $('.vao-ben-trai').addClass('active').removeClass('vao-ben-trai');
             });
        }
        else{
        $('.active').addClass('troi-sang-phai').one('webkitAnimationEnd', function (event) {
            $('.troi-sang-phai').removeClass('troi-sang-phai');
        });
        truoc.addClass('vao-ben-trai').one('webkitAnimationEnd', function (event) { 
            $('.active').removeClass('active');
            $('.vao-ben-trai').addClass('active').removeClass('vao-ben-trai');
         });
        }
    });
    // nut chuyen slide
    $('.nut-slide ul li').click(function(event){
        clearInterval(thoigian);
        $('.nut-slide ul li').removeClass('do');
        $(this).addClass('do');

        // xu ly cho slide
        // cho slide hien tai bien mat
        $('.active').addClass('troi-sang-phai').one('webkitAnimationEnd', function (event) {
            $('.troi-sang-phai').removeClass('troi-sang-phai');
        });
        $('.anh-slide ._1slide:nth-child('+ ($(this).index() + 1) +')').addClass('vao-ben-trai').one('webkitAnimationEnd', function (event) { 
            $('.active').removeClass('active');
            $('.vao-ben-trai').addClass('active').removeClass('vao-ben-trai');
         });
    });
});