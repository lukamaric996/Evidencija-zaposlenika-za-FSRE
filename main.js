const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


const searchStates = (searchText) => axios.get('http://212.39.115.5:8585/genesisrest.svc/v1.0/type/address/full', {
    
            
    auth: {
      username: 'student1',
      password: 'student1'
    }
    
}).then(states => {
    let matches = states.data.filter(state => {
        const regex = new RegExp(`^${searchText}`,'gi');
        if(state.fields.COMPNAME=="gost"){
            return;
        };

        return state.fields.CHRISTIANNAME.match(regex) || state.fields.NAME.match(regex);
    });
    if(searchText.length === 0){
        mathces = []
        document.getElementById("match-list").innerHTML = "";
    } else {
        console.log(matches);
        outputHtml(matches);
    }
});




const outputHtml = matches => {
    if(matches.length >0){
        const html = matches.map(match => `
        <div class="text-left card card-body mb-1">
        <div class="pt-2 pl-4">
            <h3 class="card-title">Ime i prezime: ${match.fields.CHRISTIANNAME} ${match.fields.NAME} </h3>
            <h4 class="card-text">Studij: ${match.fields.COMPNAME} </h4>
            <h5 class="card-text">Email: ${match.fields.MAILFIELDSTR1} </h5>
            <h5 class="card-text">Broj ureda: ${match.fields.STREET2} </h5>
            
            </div>
            </div>
        `).join('');
        matchList.innerHTML = html;

    }
}
search.addEventListener('input', () => searchStates(search.value));