		//set up markers 
		var myMarkers = {"markers": [
				{"latitude": "39.996526", "longitude":"-82.836383", "icon": "img/map-marker2.png"}
			]
		};
		
		//set up map options
		$("#map").mapmarker({
			zoom	: 12,
			center	: '800 Cross Pointe Road, Suite A',
			markers	: myMarkers
		});

