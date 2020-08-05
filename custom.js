var TicTacToe = {

    counter: 1,

    init: function(e,obj){
        var self = this;

        self.setPlay(e,obj);
        self.validateTicTacToe();
        
    },
    setPlay: function(e,obj){
        var self = this,
            player1 = 'X', player2 = 'O',
            cell = obj || {};

        if ( $(obj).hasClass('player1') ||  $(obj).hasClass('player2') ) {
            e.preventDefault();
            return false;
        }        
        
        if ( TicTacToe.counter % 2 === 0) {
            $(cell).html(player1).addClass('player1 selected');
        } else {
            $(cell).html(player2).addClass('player2 selected');
        }

        if($('td').length - 2 == $('td.selected').length) {

            if( $('.message').is(':hidden') ) {
                $('.message1').fadeIn('slow');
                return false;
            }
          
        }

        TicTacToe.counter++;
    },
    validateTicTacToe: function(){
        var index0 = $('td#zero'),
            index1 = $('td#one'),
            index2 = $('td#two'),
            index3 = $('td#three'),
            index4 = $('td#four'),
            index5 = $('td#five'),
            index6 = $('td#six'),
            index7 = $('td#seven'),
            index8 = $('td#eight');

             if (   $(index0).text() === 'X' 
                &&  $(index1).text() === 'X'
                &&  $(index2).text() === 'X' ||
                    $(index3).text() === 'X'
                &&  $(index4).text() === 'X'
                &&  $(index5).text() === 'X' ||
                    $(index6).text() === 'X'
                &&  $(index7).text() === 'X'
                &&  $(index8).text() === 'X' ||
                    $(index0).text() === 'X'
                &&  $(index3).text() === 'X'
                &&  $(index6).text() === 'X' ||
                    $(index1).text() === 'X'
                &&  $(index4).text() === 'X'
                &&  $(index7).text() === 'X' ||
                    $(index2).text() === 'X'
                &&  $(index5).text() === 'X'
                &&  $(index8).text() === 'X' ||
                    $(index0).text() === 'X'
                &&  $(index4).text() === 'X'
                &&  $(index8).text() === 'X' ||
                    $(index2).text() === 'X'
                &&  $(index4).text() === 'X'
                &&  $(index6).text() === 'X' ||
                    $(index0).text() === 'O' 
                &&  $(index1).text() === 'O'
                &&  $(index2).text() === 'O' ||
                    $(index3).text() === 'O'
                &&  $(index4).text() === 'O'
                &&  $(index5).text() === 'O' ||
                    $(index6).text() === 'O'
                &&  $(index7).text() === 'O'
                &&  $(index8).text() === 'O' ||
                    $(index0).text() === 'O'
                &&  $(index3).text() === 'O'
                &&  $(index6).text() === 'O' ||
                    $(index1).text() === 'O'
                &&  $(index4).text() === 'O'
                &&  $(index7).text() === 'O' ||
                    $(index2).text() === 'O'
                &&  $(index5).text() === 'O'
                &&  $(index8).text() === 'O' ||
                    $(index0).text() === 'O'
                &&  $(index4).text() === 'O'
                &&  $(index8).text() === 'O' ||
                    $(index2).text() === 'O'
                &&  $(index4).text() === 'O'
                &&  $(index6).text() === 'O') {
                    $('.message').fadeIn('slow');
                    $('.message1').hide();
                    $('table').off('click');
            }
        }

};

$(function(){
    $('table').on('click','td', function(e){

        var obj = $(this);
        TicTacToe.init(e,obj);
    });

    $('p.restart').on('click', function (e){
        e.preventDefault();
        $('table').find('td.selected').text('');
        $('table').find('td')
            .removeClass('selected')
            .removeClass('player1')
            .removeClass('player2');
        $('.message').fadeOut('slow');
        $('.message1').fadeOut('slow');
        $('table').on('click','td', function(e){
            var obj = $(this);
            TicTacToe.init(e,obj);
        });
    });

});
