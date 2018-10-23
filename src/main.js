let clickers = 50;
let startTime = Date.now();

//position element in the DOM
function sync (dom, pos){
  dom.style.left = '${pos.x}px';
  dom.style.top = '${pos.y}px';
}
'${pos.x}px'

function addClicker() {
  pos = {
    x: Math.random() * 5000,
    y: Math.random() * 3000
  };

const img = new Image(); //loading image
img.src = "res/images/rick.png"; //file path
img.style.position = "sticky";//what does this do?
img.addEventListener("click", removeClicker, false);//ability to click image

document.querySelector("#board").appendChild(img); // put image on board
sync(img,pos);

}

function removeClicker(e){
  e.target.parentNode.removeChild(e.target);
  clickers--;
  checkGameOver();
}


function checkGameOver(){
  document.querySelector("#remain").innerHTML = clickers;
  if(clickers == 0){
    const taken = Math.round((Date.now() - startTime) / 1000);
    alert('Finished in ' + taken + ' seconds!');
  }
}

//adding the ricks!

for(let i = 0; i < clickers; i ++){
  addClicker();
}
//-- -t [ babelify --presets [ env ] ]
