function zero(){
  return [];
}


function succ(a){
  a.push(true)
  return a;
}



function n(b){
  if(b < 0){
    return null
  }
  var a = zero();
  var i = 0;

    while(a.length < b){
    a = succ(a);
  }

  return a;
}
