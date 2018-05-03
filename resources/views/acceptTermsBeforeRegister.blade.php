<script
src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
integrity="sha256-3edrmyuQ0w65f8gfBsqowzjJe2iM6n0nKciPUp8y+7E="
crossorigin="anonymous"></script>

<p>I accept stimpack.io stores personal data...</p>
<button id="ok">Ok</button>


<script>

    let user = JSON.parse('{!! json_encode($user) !!}');
    element = document.getElementById("ok");
    element.addEventListener('click', function() {
        confirm()
        
    }, false);

    function confirm() {
        $.ajax({
            type: "GET",
            url: "/save/" + this.state.name + ".json",
            data: {
                user: user
            },
            success: function(result){
                window.location = "auth/you/did/not/come/here/by/accident/register";        
            },
            error: function(error) {
                console.log("Failed with message: '" + error.responseJSON.message + "'");
            }
        });                
    }


</script>