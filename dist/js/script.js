$(document).ready(function () {

    $('.add_to_cart').on('click', function () {
        let cart = $('.cart');
        let item = $('.cart-item');
        let add = item.attr('data-totalitems');
        let addtot = parseInt(add) + 1;

        let imgtodrag = $(this).parent('.item').find("img").eq(0);
        if (imgtodrag) {
            let imgclone = imgtodrag.clone()
                .offset({
                    top: imgtodrag.offset().top,
                    left: imgtodrag.offset().left
                })
                .css({
                    'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                })
                .appendTo($('body'))
                .animate({
                    'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
                }, 1000, 'easeInOutExpo');

            setTimeout(function () {
                item.attr('data-totalitems', addtot);
                cart.effect("shake", {
                    times: 1
                }, 00);
            }, 500);

            imgclone.animate({
                'width': 0,
                'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });

    $('.add_to_cart').on('click', function () {
        let dataparent = $(this).parents('.cards').attr('data-parent');
        let dataname = $(this).siblings('.stats').find('.stats-container').find('.product_name').attr('data-name');
        let datadescri = $(this).siblings('.stats').find('.stats-container').find('.product_descri').attr('data-descri');
        let dataprice = $(this).siblings('.stats').find('.stats-container').find('.product_price').attr('data-price');
        let dataimg = $(this).siblings('.images').attr('data-img');

        // console.log(dataparent);
        // console.log(dataname);
        // console.log(datadescri);
        // console.log(dataprice);
        // console.log(dataimg);

        $('#cart').append('<div class="cartitems flex"><span class="img-produit w-25"><img class="h-14 w-12 object-cover" src="' + dataimg + '" alt=""></span><div class="noms px-5"><div class="nom-produit text-base font-medium">' + dataname + '</div><div class="descri-produit text-sm font-medium pt-[2px] pb-[20px] text-gray-400">' + datadescri + '</div></div><div class="prix-produit font-bold product_price float-right text-amber-500 text-2xl">' + dataprice + '</div><div class="remove"><img class="h-4 mt-2 ml-4 w-auto" src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/></div></div>');
        $('.empty').hide();

    });

    $("#cart").delegate(".remove", "click", function () {
        $(this).parentsUntil("#cart").remove();
        let val = $('.cart-item').attr('data-totalitems')
        // console.log(val)
        val -= 1
        $('.cart-item').attr('data-totalitems', val)

        if (val == "0") {
            $('.empty').show();
        }
    })

})