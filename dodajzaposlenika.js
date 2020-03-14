
        const form = document.forms['forma2'];
        form.addEventListener('submit', function(e){
            e.preventDefault();
            

            const ime = form.querySelector("#ime").value;
            const prezime = form.querySelector("#prezime").value;
            const email = form.querySelector("#email").value;
            const smjer = form.querySelector("#smjer").value;
            const broj_u = form.querySelector("#broj_u").value;
            
            console.log(ime, prezime, email, smjer, broj_u);
            axios.post('http://212.39.115.5:8585/genesisrest.svc/v3.0/type/address', {
                "fields": {
                    CHRISTIANNAME: ime,
                    NAME: prezime,
                    MAILFIELDSTR1: email,
                    COMPNAME:smjer,
                    STREET2:broj_u,
                    
                }
            }, {
                auth: {
                    username: 'Student1',
                    password: 'student1'
                }
              }).then(function(response) {
                console.log('Authenticated');
                window.location.href = "zaposlenici.html";
              }).catch(function(error) {
                console.log('Error on Authentication');
                console.log(error);
              });
        });

        