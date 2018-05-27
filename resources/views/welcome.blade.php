<head>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <link href="css/app.css" rel="stylesheet">
</head>
<body>
  <div id="main">
    <script>
        let data = {!! $data->toJson() !!};
        let user = {!! ($user) ? $user->toJson() : "null"  !!};
        let stimpack_client_url = "{{ $stimpack_client_url }}";
        let defaultPage = "{{ $defaultPage }}";
    </script>

  <script src="{{asset('js/app.js')}}" ></script>
</body>
