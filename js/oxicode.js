	function crea_modal (argument) {
		$modal_editar = $('<div/>',{'class':"modal hide fade",'data-backdrop':"dinamic",'role':"dialog",'id':"editar"})
		$($modal_editar).appendTo('body');
		$modal_header = $('<div/>',{'class':"modal-header"})
		$($modal_header).append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>')
		$($modal_header).append('<h3>Cargando</h3>')

		$modal_header.appendTo($modal_editar)

		$modal_body = $('<div/>',{'class':"modal-body"})
		$urlcorta = $('<div/>', { html: $('<label/>',{html:'Url Corta:'}) }).appendTo('#new_url_form').appendTo($modal_body)
		$urllarga = $('<div/>', { html: $('<label/>',{html:'Url Larga:'}) }).appendTo('#new_url_form').appendTo($modal_body)
		$titulo = $('<div/>', { html: $('<label/>',{html:'Titulo:'}) }).appendTo('#new_url_form').appendTo($modal_body)

		$fuente = $('<div/>', { html: $('<label/>',{html:'Fuente de la campaña:'}) }).appendTo('#new_url_form').appendTo($modal_body)
		$medio = $('<div/>', { html: $('<label/>',{html:'Medio de la campaña:'}) }).appendTo('#new_url_form').appendTo($modal_body)
		$termino = $('<div/>', { html: $('<label/>',{html:'Término de la campaña:'}) }).appendTo('#new_url_form').appendTo($modal_body)
		$contenido = $('<div/>', { html: $('<label/>',{html:'Contenido de la campaña:'}) }).appendTo('#new_url_form').appendTo($modal_body)
		$nombre = $('<div/>', { html: $('<label/>',{html:'Nombre de la campaña:'}) }).appendTo('#new_url_form').appendTo($modal_body)

		$('<input/>',{
			id: 'urlcorta',
			type: 'text',
		}).appendTo($urlcorta)
		  .wrap('<div class="input-prepend"></div>')
		  .parent()
		  .prepend('<span class="add-on">upc.pe/</span>')

		$('<textarea/>',{
			id: 'urllarga',
			type: 'text',
		}).appendTo($urllarga)

		$('<input/>',{
			id: 'titulo',
			type: 'text',
		}).appendTo($titulo)

		var $fuente_input = $('<input/>',{
			id: 'utm_source',
			type: 'text',
		}).appendTo($fuente)

		var $medio_input = $('<input/>',{
			id: 'utm_medium',
			type: 'text',
		}).appendTo($medio)

		var $termino_input = $('<input/>',{
			id: 'utm_term',
			type: 'text',
		}).appendTo($termino)

		var $contenido_input = $('<input/>',{
			id: 'utm_content',
			type: 'text',
		}).appendTo($contenido)

		var $nombre_input = $('<input/>',{
			id: 'utm_campaign',
			type: 'text',
		}).appendTo($nombre)

		$modal_body.appendTo($modal_editar)

		$modal_footer = $('<div/>',{'class':"modal-footer"})
		$($modal_footer).append('<a href="#" id="guardar" class="btn btn-primary">Guardar</a>')

		$modal_footer.appendTo($modal_editar)

	}


	function extra_add () {

	}

	function editar (id) {

	//para modificar
	if($("#modal-"+ id).length) window.location.reload()


	$nuevo = $('#editar').clone();
	$nuevo.attr('id', "modal-"+ id);

	$nuevo.find('h3').text($('#edit-title-' + id).val())

	$nuevo.find('#titulo').val($('#edit-title-' + id).val()).on('keyup', '',function(event) {
		$('#edit-title-' + id).val(this.value)
	});
	$nuevo.find('#urlcorta').val($('#edit-keyword-' + id).val()).on('keyup', '', function(event) {
		$('#edit-keyword-' + id).val(this.value)
	});

	$nuevo.find('#urllarga').val($('#edit-url-' + id).val()).on('keyup', '', function(event) {
		$('#edit-url-' + id).val(this.value)
	});

	$nuevo.find('.close').click(function(event) {
		$('#edit-close-' + id).trigger('click')
	});

	$nuevo.find('#guardar').click(function(event) {
		$('#edit-submit-' + id).trigger('click')
	});

	var ruta = $('#edit-url-' + id).val();
	var parametros = ruta.split('?'), ruta = []

	if(parametros.length > 1){
		$nuevo.find('#urllarga').data('real',parametros[0])
		parametros = parametros[1].split('&');

		for(i = 0; i < parametros.length; i++){
			parametros[i] = parametros[i].split('=')
			$nuevo.find('#'+parametros[i][0]).val(parametros[i][1].split('+').join(' '))
		}
	}

	$('#utm_source, #utm_medium, #utm_term, #utm_content, #utm_campaign', $nuevo).keyup(function(event) {

		resultado = $nuevo.find('#urllarga').data('real');

		if($('#utm_source', $nuevo).val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_source=' + $.trim($('#utm_source', $nuevo).val())
		}

		if($('#utm_medium', $nuevo).val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_medium=' + $.trim($('#utm_medium', $nuevo).val())
		}

		if($('#utm_term', $nuevo).val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_campaign=' + $.trim($('#utm_term', $nuevo).val())
		}

		if($('#utm_content', $nuevo).val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_term=' + $.trim($('#utm_content', $nuevo).val())
		}

		if($('#utm_campaign', $nuevo).val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_content=' + $.trim($('#utm_campaign', $nuevo).val())
		}

		$('#urllarga', $nuevo).val(resultado.split(' ').join('+'))
	});


	$nuevo.modal()

	}


$(document).ready(function() {
		$addUrl = $('#add-url')

		$('<textarea/>',{
			id:'add-url',
			name:'url'
		}).html('http://').insertAfter($addUrl)

		$addUrl.remove()
		$addUrl = $('#add-url')

		$new_url_form = $('#new_url_form').addClass('form-horizontal')
		$addButton = $('#add-button')

		$fuente = $('<div/>', { html: $('<label/>',{html:'Fuente de la campaña:'}) }).appendTo('#new_url_form')
		$medio = $('<div/>', { html: $('<label/>',{html:'Medio de la campaña:'}) }).appendTo('#new_url_form')
		$termino = $('<div/>', { html: $('<label/>',{html:'Término de la campaña:'}) }).appendTo('#new_url_form')
		$contenido = $('<div/>', { html: $('<label/>',{html:'Contenido de la campaña:'}) }).appendTo('#new_url_form')
		$nombre = $('<div/>', { html: $('<label/>',{html:'Nombre de la campaña:'}) }).appendTo('#new_url_form')

		var $fuente_input = $('<input/>',{
			name: 'utm_source',
			type: 'text',
			readonly:'readonly'
		}).appendTo($fuente)

		var $medio_input = $('<input/>',{
			name: 'utm_medium',
			type: 'text',
			readonly:'readonly'
		}).appendTo($medio)

		var $termino_input = $('<input/>',{
			name: 'utm_term',
			type: 'text',
			readonly:'readonly'
		}).appendTo($termino)

		var $contenido_input = $('<input/>',{
			name: 'utm_content',
			type: 'text',
			readonly:'readonly'
		}).appendTo($contenido)

		var $nombre_input = $('<input/>',{
			name: 'utm_campaign',
			type: 'text',
			readonly:'readonly'
		}).appendTo($nombre)

		$addUrl.on('keyup', '', function(event) {
			event.preventDefault();
			$(this).data('real',$(this).val())

			$fuente_input.removeProp('readonly')
			$medio_input.removeProp('readonly')
			$termino_input.removeProp('readonly')
			$contenido_input.removeProp('readonly')
			$nombre_input.removeProp('readonly')
		});

		$nombre.keyup(function(event) { completar() });
		$termino_input.keyup(function(event) { completar() });
		$medio_input.keyup(function(event) { completar() });
		$fuente_input.keyup(function(event) { completar() });
		$contenido_input.keyup(function(event) { completar() });

	crea_modal();
	menu_admin()
	theme_bootstratp()

	function theme_bootstratp () {
		$wrap = $('#wrap')
		$wrap.addClass('container')
	}

	function menu_admin () {
		$admin_menu = $('#admin_menu')

		$('<div/>',{
			'class': 'navbar',
			'html' : $('<div/>',{
				'class': 'navbar-inner',
				'html' : $admin_menu.clone().addClass('nav')
			})
		}).insertBefore($admin_menu)
		$admin_menu.remove()
		$('h1').remove()

		$tmp = $('<a/>',{
			href:'#',
			html: "Hola " + $('#admin_menu_logout_link strong').html()
		})
		$('#admin_menu_logout_link').html($tmp)
		$('<li><a href="?action=logout" title="Cerrar sesión" class="pull-right">Salir</a></li>	').insertAfter('#admin_menu_help_link')

		$('#admin_menu > li > ul').addClass('dropdown-menu').prev().append('<b class="caret"></b>').addClass('dropdown-toggle').attr('data-toggle',"dropdown").end().parent().addClass('dropdown')

		$('.dropdown').hover(function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
		}, function() {
		  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
		});
	}

	function completar () {

		$tmp = $addUrl.data('real')

		resultado = $tmp;

		if($fuente_input.val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_source=' + $.trim($fuente_input.val())
		}

		if($medio_input.val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_medium=' + $.trim($medio_input.val())
		}

		if($nombre_input.val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_campaign=' + $.trim($nombre_input.val())
		}

		if($termino_input.val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_term=' + $.trim($termino_input.val())
		}

		if($contenido_input.val().length){

			resultado += (resultado.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_content=' + $.trim($contenido_input.val())
		}

		$addUrl.val(resultado.split(' ').join('+'))
	}
});