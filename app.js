// var count = 5;
// var button = document.querySelector(".next");


var newselectedvalue = 6;


document.querySelector(".pagination").addEventListener("click", function (e) {

   
    
    if( e.path[0].innerHTML == ""){
        newselectedvalue = 1;
        return newselectedvalue;
    } else{
        e.path[0].className = "active";
        var newselectedvalue = e.path[0].innerHTML;
    }
    

    

    console.log(e.path);

    resetpost();

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (res) => res.json())
    .then( (results)  => {

    var mappost = results.map( (abc) => {

    if( abc.id < newselectedvalue*window.itemstoshow && abc.id >= newselectedvalue*window.itemstoshow - window.itemstoshow) {
    document.getElementById("posts").innerHTML += `<div class="card-ui"> 
  
    <div class="title">  ${abc.id}. ${abc.title} </div>  

    <div class="body" > ${abc.body} </div> <br> <br> 


    </div>`;
    }

    } )
    })

    .catch( (err) => console.log(err))
})





function newdata(value){

     resetpost();

     window.itemstoshow = value;

     fetch('https://jsonplaceholder.typicode.com/posts')
     .then( (res) => res.json())
     .then( (results)  => {

     var mappost = results.map( (abc) => {

     if( abc.id <= window.itemstoshow) {
     document.getElementById("posts").innerHTML += `<div class="card-ui"> 
  
     <div class="title">  ${abc.id}. ${abc.title} </div>  

     <div class="body" > ${abc.body} </div> <br> <br> 


     </div>`;
     }

     } )
     })

     .catch( (err) => console.log(err))
}

newdata(5);



function resetpost(){
    document.getElementById("posts").innerHTML = '';
}

var newcounter = 1;

function next(){
    
    newcounter++
    newselectedvalue++

    document.getElementById("pagi").innerHTML = `
    <a class="prev" href="#" onclick="previus()"></a>
    <a class="link" href="#">${newcounter}</a>
    <a class="link" href="#">${newcounter + 1}</a>
    <a href="#"  class="link">${newcounter + 2}</a>

    <a href="#" class=" next" onclick="next()"></a>
    `;

    console.log(newcounter)
}

function previus(){
    
    

    if ( newcounter >= 4 ){
        newcounter--
        document.getElementById("pagi").innerHTML = `
        <a class="prev" href="#" onclick="previus()"></a>
        <a class="link" href="#">${newcounter - 2}</a>
        <a href="#"  class="link">${newcounter - 1}</a>
        <a href="#" class="link">${newcounter}</a>
    
        <a href="#" class=" next" onclick="next()"></a>
        `;
    }

    console.log(newcounter)

   
}


    







