$(document).ready(function() {

	function editar () {

	$modal_editar = $('<div/>',{'class':"modal hide fade",'role':"dialog",'id':"editar"})
	$($modal_editar).appendTo('body');

	$modal_header = $('<div/>',{'class':"modal-header"})
	$($modal_header).append('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>')
	$($modal_header).append('<h3>Cargando</h3>')

	$modal_header.appendTo($modal_editar)

	$modal_body = $('<div/>',{'class':"modal-body"})
  	$($modal_body).append('	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, libero, eos soluta accusantium dolor animi expedita esse! Minima, possimus, illum dolores iusto expedita iure veritatis labore nulla ullam commodi iste.')

	$modal_body.appendTo($modal_editar)

	$modal_footer = $('<div/>',{'class':"modal-footer"})
	$($modal_footer).append('<a href="#" class="btn">Cerrar</a> <a href="#" class="btn btn-primary">Save changes</a>')

	$modal_footer.appendTo($modal_editar)

	$('.button_edit').on('click', '', function(event) {
		event.preventDefault();

		var campos = $(this);
		setTimeout(function() {
				$editamos = "#"+$(campos).attr('id').replace('button-','');
				console.log($($editamos))
				$('#editar').modal()
		}, 1000);

	});



	}

	editar()

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

			resultado += ($tmp.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_source=' + $.trim($fuente_input.val())
		}

		if($medio_input.val().length){

			resultado += ($tmp.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_medium=' + $.trim($medio_input.val())
		}

		if($nombre_input.val().length){

			resultado += ($tmp.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_campaign=' + $.trim($nombre_input.val())
		}

		if($termino_input.val().length){

			resultado += ($tmp.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_term=' + $.trim($termino_input.val())
		}

		if($contenido_input.val().length){

			resultado += ($tmp.split('?').length == 1) ? '?' : '&';
			resultado += 'utm_content=' + $.trim($contenido_input.val())
		}

		$addUrl.val(resultado.split(' ').join('+'))
	}
});