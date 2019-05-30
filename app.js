


document.querySelector(".pagination").addEventListener("click", function (e) {
    // document.querySelector(".link").classList.add("active");
    
    var newselectedvalue = e.path[0].innerHTML;
    console.log(newselectedvalue);
    resetpost();

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (res) => res.json())
    .then( (results)  => {

    var mappost = results.map( (abc) => {

    if( abc.id <= newselectedvalue*window.itemstoshow && abc.id >= newselectedvalue*window.itemstoshow - window.itemstoshow) {
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
      window.itemstoshow = value;

     resetpost();
   

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

// console.log(itemstoshow);


function resetpost(){
    document.getElementById("posts").innerHTML = '';
}



    









console.log(window.itemstoshow);