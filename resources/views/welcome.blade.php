<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="css/app.css" rel="stylesheet">
</head>
<body>
  <div id="main">
    <script>
        let data = {!! $data->toJson() !!};
        let user = {!! ($user) ? $user->toJson() : "null"  !!};
        let stimpack_client_url = "{{ $stimpack_client_url }}";
    </script>

  <script src="{{asset('js/app.js')}}" ></script>
</body>
