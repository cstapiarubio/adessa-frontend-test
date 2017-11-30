/*inicio fx jquery*/
$(document).ready(function(){
	/*recorro con forEach mi array*/
	a.forEach(function(el){
		
        var cont= $('<div/>', {'class': 'col s2 m2 l2 lista'});
        var id=el.id;
		var img=$('<img/>', {'src': el.photo});		
		var name= $('<h5/>', {"text": el.name});
		var precio=$('<p/>', {"text": el.price});
		var button=$('<button>Add to cart</button>', {'class': 'boton'});
		
		/*lista de productos*/	
	
	cont.append(img);
	cont.append(name);
	cont.append(precio);
	cont.append(button);
	$('#contenedor').append(cont);
	})

/*al apretar botón se crea un boton "remove"  y todo el contenido (foto, nombre, precio, boton)se añade a un div vacio*/
	$('.boton').click(function(){
			var boton=$('<button>Remove to cart</button>', {'class': 'remove'});
			cont.append(boton);
			$('#mod').append(cont);	
		/*al apretar el boton "remove" me borra los productos*/
		$('.remove').click(function(){
  		var parentItem= $(this).parent();
         $(parentItem).remove();
		});
	});

});
