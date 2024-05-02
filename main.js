
	listajogadores= [];
	
	function submit()
	{
        
        var name1 = document.getElementById("nomedojogador").value;
        

        listajogadores.push(name1);
        

		
		
        document.getElementById("displayName").innerHTML = listajogadores;
        
    

	}


