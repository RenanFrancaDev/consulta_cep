const cep = document.getElementById('cep');


cep.addEventListener('blur', (e) => {
    let search = cep.value.replace("-","")
    fetchCep(search)
    })

    const showData = (result) => {
        for(const campo in result){
            if(document.getElementById(campo)){
                document.getElementById(campo).value = result[campo]
            }
        }
    }

   



