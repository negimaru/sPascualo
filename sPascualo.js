//sPascualo 
(function($) {
	
    var self = $.sPascualo = new function(){};
	
    $.extend(self, {

    	sPascualoBG : [
    		'http://img.europapress.net/fotoweb/fotonoticia_20150528144614-15051323919_644.jpg'
    	],

        sPascualoIMGs : [
			'http://i.imgur.com/Qifr003.jpg',
			'http://i.imgur.com/jFNFLqS.png',
			'http://i.imgur.com/3r7XKjF.jpg',
			'http://i.imgur.com/MsgYM8q.jpg',
			'http://i.imgur.com/3jLmTM8.jpg',
			'http://i.imgur.com/KCiQLLj.png'
        ],

        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo : function (bgImgs, time)
        {
			$backgroundImages = $(
            	'[class*=logo], [class*=header], [id*=header], [id*=logo],' +
            	'[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
            	'[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,'+
            	'[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            	)
            	.filter(function() {
            		backgroundImg = $(this).css('background-image');
            		return backgroundImg && backgroundImg != 'none';
            	}
            );

            $backgroundImages.each(function(i, item) {
            	$(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
            	$(item).css('background-position', '0 0');
            	$(item).css('background-repeat', 'no-repeat');
            	$(item).css('background-size', 'contain');
            });
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.sPascualoIMGs, 3000);
     	self.handleLogo(self.sPascualoBG, 3000);
    });
})(jQuery);

/*

'http://i.imgur.com/Qifr003.jpg',
'http://i.imgur.com/jFNFLqS.png',
'http://i.imgur.com/3r7XKjF.jpg',
'http://i.imgur.com/MsgYM8q.jpg',
'http://i.imgur.com/3jLmTM8.jpg',
'http://i.imgur.com/KCiQLLj.png


*/

