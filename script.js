

async function thirukKural(){
    const url = `https://api-thirukkural.vercel.app/api?num=`;
    for(let i=1; i<=1330; i++){
    const result = fetch(`${url}${i}`).then((res)=> res.json()).then((data)=> getKural(data)).catch((err)=> `Error Exists ${err}`)
         
    }
}

thirukKural()


const getKural= (kural)=>{
    // console.log(kural)

  const division = document.createElement("div");
  division.setAttribute("id", "container");
  division.setAttribute("class", "container"); 

  division.innerHTML = `
  <div class="row col-lg-4 col-sm-12">
  <div class="card card-header card-body" id="card">
    <h5 class="card-title" id="name">${kural.sect_tam}</h5>
    <img src="https://api-thirukkural.vercel.app/res/thiruvalluvar.png" class="card-img-top" alt="Thiruvalluvar">
    <p class="card-text"> ${kural.line1}</p>
    <p class="card-text"> ${kural.line2}</p>
    <p class="card-number">- குறள் - ${kural.number}</p>
    <p class="card-text" >Explanation: <span id="explain">${kural.tam_exp}</span> </p>  
    </div>
</div>
              
    `
    document.body.appendChild(division);
}