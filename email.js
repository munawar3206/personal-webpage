

function send() {
    var params={
        name: document.getElementById('nameinput1').value,
        email: document.getElementById('nameinput2').value,
       
        message: document.getElementById('nameinput3').value
    }
    if(params.name==""|params.email==""|params.message==""){
        alert('Please text message and email')
    }
    else{


    emailjs.send('service_ekze0lc', 'template_ul7zeit', params,'5Dp77_PhJ9_lOMXGo')

    .then(function(response) {
        document.getElementById('nameinput1').value=""
        document.getElementById('nameinput2').value=""
        document.getElementById('nameinput3').value=""
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}}



