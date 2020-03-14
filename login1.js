
        const form = document.forms['forma2'];
        form.addEventListener('submit', function(e){
            e.preventDefault();
            

            const ime = form.querySelector("#ime").value;
            const prezime = form.querySelector("#prezime").value;
            const email = form.querySelector("#email").value;
            const gost = form.querySelector("#gost").value;
            
            console.log(ime, prezime, email, gost);
            axios.post('http://212.39.115.5:8585/genesisrest.svc/v3.0/type/address', {
                "fields": {
                    CHRISTIANNAME: ime,
                    NAME: prezime,
                    MAILFIELDSTR1: email,
                    COMPNAME:gost,
                    
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

        