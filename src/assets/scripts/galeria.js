const gallery  =document.querySelector('.galeriaFotos');
const overlay =document.querySelector('.encima');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');


//para generar html con altura y ancho
function generarHTML([h,v]){
  return `
    <div class="item h${h} v${v}">
      <img src="https://picsum.photos/500/300?random=${randomNum(44)}">
      <div class="item__overlay">
        <button>Ver ↣</button>
      </div>
    </div>
  `;  
}

function randomNum(limit) {
  return Math.floor(Math.random()*limit) +1;
}

const nums = Array.from({length:50},() => [randomNum(4),randomNum(4)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]]);
// console.log(nums);
const html = nums.map(generarHTML).join('');
// console.log(html);
gallery.innerHTML = html;
