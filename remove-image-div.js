function setup() {
  let els = document.getElementsByClassName('image')
  console.log(els)
  for(let i =0 ; i< els.length ; i ++){
    els[i].addEventListener('click', function(){
    		this.remove()
    })
  }
}


document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;

setup();

//document.getElementsByClassName("remove")[0].click();
//console.log(document.body.innerHTML);
