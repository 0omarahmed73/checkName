let input = document.querySelector('input')
let getText = input.placeholder 
input.addEventListener('focus' , function() {
  input.value = '';
  input.placeholder = '';
})
input.onblur = function(){
  if (!input.value){
    input.placeholder = getText;
  }
let thingsToDo = new XMLHttpRequest();
thingsToDo.open("GET" , `https://api.genderize.io/?name=${input.value}` );
thingsToDo.send();
console.log(thingsToDo)
thingsToDo.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    let ourData = JSON.parse(this.responseText)
    let getLetter = ourData.gender.toString().slice(0,1).toUpperCase();
    ourData.gender = getLetter + ourData.gender.slice(1);
      document.querySelector('.getGender').innerHTML = `<p class="item">Name : ${ourData.name}</p>
      <p class="item">Gender : ${ourData.gender}</p>`  
  }
}

}
