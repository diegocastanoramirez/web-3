let inmueble=[
{idinmueble:"1",
direccion:"diagonal 29 # 26asur",
telefeno:"336556",
precio:"5000",
estado:"No disponible"
},
{idinmueble:"2",
direccion:"diagonal 29 # 27asur",
telefeno:"336557",
precio:"5001",
estado:"Disponible"
},
{idinmueble:"3",
direccion:"diagonal 29 # 28asur",
telefeno:"336558",
precio:"5002",
estado:"No disponible"
},
{idinmueble:"4",
direccion:"diagonal 29 # 29asur",
telefeno:"336559",
precio:"5003",
estado:"Disponible"
},
{idinmueble:"5",
direccion:"diagonal 29 # 30asur",
telefeno:"336560",
precio:"5004",
estado:"No disponible"
},
{idinmueble:"6",
direccion:"diagonal 29 # 31asur",
telefeno:"336561",
precio:"5005",
estado:"Disponible"
},
{idinmueble:"7",
direccion:"diagonal 29 # 32asur",
telefeno:"336562",
precio:"5006",
estado:"No disponible"
},
{idinmueble:"8",
direccion:"diagonal 29 # 33asur",
telefeno:"336563",
precio:"5007",
estado:"Disponible"
},
{idinmueble:"9",
direccion:"diagonal 29 # 34asur",
telefeno:"336564",
precio:"5008",
estado:"No disponible"
},
{idinmueble:"10",
direccion:"diagonal 29 # 26asur",
telefeno:"336565",
precio:"5009",
estado:"Disponible"
}
]
let $form =document.getElementById('form')
let $id =document.getElementById('id')
let $direc =document.getElementById('direc')
let $tel =document.getElementById('tel')
let $divtel =document.getElementById('divtelefo')
let $divdirec =document.getElementById('divdirec')
let $divid =document.getElementById('divid')
$form.addEventListener('click',function(e){
    console.log(e)
    if (e.id='id'){
        let $p =document.createElement('span')
        $p.textContent='solo se aceptan números'
        $divid.append($p)
    }
    if (e.id='direc'){
        let $p1 =document.createElement('span')
        $p1.textContent='solo se aceptan números'
        $divdirec.append($p1)
    }
    if (e.id='tel'){
        let $p2 =document.createElement('span')
        $p2.textContent='solo se aceptan números'
        $divtel.append($p2)
    }

    
});


