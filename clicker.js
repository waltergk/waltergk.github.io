    
    x=0;
    valor=1;
    upgrade=10;
    upgrade2=25;
    intervalo=1000;

        function Ocultar(){
            $('#juego').hide();
            $('#upgrades').hide();
        }
        function Mostrar(){
            $('#juego').slideToggle();
            $('#upgrades').slideToggle();
        }
        
        function Apretar(){
            x+=valor;
            $('h1').text(x);
            $("#image").stop();
            $("#image").animate({height: '85px', width:'85px'},50);
            $("#image").animate({height:"80px" ,width:'80px'},50); 
            
            if (x>=10 && $('#upgrade').length<1){
                $('#upgrades').append('<a id="Boton" class="button" onclick="Autoclick()">Autoclick</a>');
                $('#upgrades').append('<a id="upgrade">Upgrade cost 10</a>');               
            }
            if (x>=25 && $('#upgrade2').length<1){
                $('#upgrade').after('<a id="upgrade2">Upgrade cost 25</a>');
                $('#upgrade').after('<a id="Boton" class="button" onclick="Doblear()">2x income</a>');
   
            }
        }
        function Doblear(){
            if(x>=upgrade2){
                x-=upgrade2;
                valor*=2;
                upgrade2=Math.round(Math.log(upgrade2)*upgrade2);
                $('h1').text(x);
                $('#upgrade2').text('Upgrade cost '+ upgrade2);
            }
        }
        
        function Autoclick(){
            if(x>=upgrade){
                x-=upgrade;
                upgrade+=Math.round(upgrade/2);
                setInterval(Apretar,intervalo);
                $('h1').text(x);
                $('#upgrade').text('Upgrade cost '+ upgrade);
            }
        }