<div style="text-align: center; margin-top: 40px;">
  <h1>Lets browse some packs</h1>
  <img src="img/stimpack_favicon.png">
  <ul>
  @foreach($packs as $pack)
      <li>{{$pack->name}}</li>
  @endforeach
  </ul>
</div>
