var something = '';


// View book data
window.addEventListener('load', function() { // so shit loads and then runs.


            // url to access server
            let url = '';

            // AJAX request 
            let ajax = new XMLHttpRequest();

            ajax.open('get', url);

            ajax.onreadystatechange = function() {


                if (ajax.status == 200 && ajax2.readyState == 4) {
                    //parse string to object
                    let json = JSON.parse(ajax.responseText);

                    // check is status = error
                    if (json.status !== 'error') {
                        console.log('server is good');
                        
                        }

                    } else {
                        console.log('server is no good');
                        console.log(json);
                    }

                } else if (ajax.status != 200) {
                    // AJAX failiure report
                    console.log('ajax error');
                }
                //end ajax
            ajax.send();
            }; 
    )
}; // window event listener done