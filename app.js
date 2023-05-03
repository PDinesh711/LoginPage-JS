// function submit(){
//      var userName = document.getElementById('uname').value;
//     var userPassword = document.getElementById('upass').value;
//     localStorage.setItem('name',userName);
//     localStorage.setItem('pass',userPassword);
// }
// document.getElementById('tname').innerHTML=localStorage.getItem('name').concat(' kumar')
// document.getElementById('tpassword').innerHTML=localStorage.getItem('pass').concat(' password')
 
function submit(){
    var name2 = document.getElementById('name').value;
    var pass2 = document.getElementById('pass').value;
    localStorage.setItem('name1',name2)   
    localStorage.setItem('pass1',pass2);
}
// store the input from the input Field 
document.getElementById('resname').innerHTML=localStorage.getItem('name1')
document.getElementById('respass').innerHTML=localStorage.getItem('pass1')
