<script>    
    let user = {!! $user->toJson() !!};
    console.log(user);
</script>