<div style="text-align: center;">
    <h3>Cool, welcome {{$user->nickname}}!</h3>
    <p>First, make sure you have installed stimpack-io/stimpack</p>
    <p>Then, register the token in your local installation by visiting:</p>
    <a href="http://stimpack.test/register/{{$user->stimpack_io_token}}">http://stimpack.test/register/{{$user->stimpack_io_token}}</a>
    <p>If you prefer to do it manually enter the following key/value in your env file</p>
    <p><b>STIMPACK_IO_TOKEN={{$user->stimpack_io_token}}</b></p>
    <p>Good luck!</p>
</div>