
const getData =  () => {
    axios.get('http://212.39.115.5:8585/genesisrest.svc/v1.0/type/address/full', {
    
            
            auth: {
              username: 'student1',
              password: 'student1'
            }
            
    }).then(response => {
        
        console.log(response);

        function append_json(response){
            var table = document.getElementById('table');
            response.data.forEach(function(object) {
                
                var tr = document.createElement('tr');
                table.appendChild(tr);
                tr.innerHTML = '<td>' + object.fields.CHRISTIANNAME + '</td>' +
                '<td>' + object.fields.NAME + '</td>' +
                '<td>' + object.fields.MAILFIELDSTR1 + '</td>' +
                '<td>' + object.fields.STREET2 + '</td>';
                table.appendChild(tr);
            });
        }
        append_json(response);
    });

}



document.addEventListener('DOMContentLoaded', getData);







