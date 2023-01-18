$(document).ready(function () {    
    $('header button').click(function() {
      $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newImageLink = $('#link-new-img').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${newImageLink}" />`).appendTo(newItem);
        $(`
            <div class="overlay-img-link">
                <a href="${newImageLink}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(newItem);

        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);

        $('#link-new-img').val('');
    })
})

