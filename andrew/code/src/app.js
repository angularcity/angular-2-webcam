console.log('App.js loaded')

var user  = {
    name : 'hari',
    age: 32,
    location: 'Kochin'
}

var template = (
    <div> 
         <p>   { user.name ? user.name : 'Anonymous' } </p> 
         <h1>  { user.age } </h1> 
         { 
             getLocation(user.location) 
         }
         
    </div>
)

function getLocation(location) {
    if(location){
        return <p> Location { location } </p>;
    }else{
        return undefined;
    }
}


ReactDOM.render(template, document.getElementById('root'))

