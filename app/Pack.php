<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pack extends Model
{
    function user() {
        return $this->belongsTo('App\User');
    }
}
