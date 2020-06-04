    
    x=0;
    valor=1;
    upgrade=10;
    upgrade2=25;
    intervalo=1000;

        function Ocultar(){
            $('#juego').hide();
        }
        function Mostrar(){
           $('#juego').slideToggle();
        }
        
        function Apretar(){
            x+=valor;
            $('h1').text(x);
            $("#image").stop();
            $("#image").animate({height: '55px'},50);
            $("#image").animate({height:"50px"},50); 
            
            if (x>=10 && $('button').length<1){
                $('#juego').append('<a id="upgrade">Upgrade cost 10</a>');
                $('#juego').append('<button onclick="Autoclick()">Autoclick</button>');
                
            }
            if (x>=25 && $('button').length<2){
                $('#upgrade').after('<a id="upgrade2">Upgrade cost 25</a>');
                $('#upgrade').after('<button  onclick="Doblear()">2x income</button>');
                
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