<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'provider', 'provider_id', 'stimpack_io_token', 'nickname'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', /* stimpack_io_token */
    ];

    function packs() {
        return $this->hasMany('App\Pack');
    }

    public function getHasAcceptedGdprAttribute($value)
    {
        return (boolean) ((int) $value);
    }
}
