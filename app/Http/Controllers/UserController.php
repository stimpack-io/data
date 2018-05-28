<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\DeleteUserRequest;
use App\Pack;
use App\User;
use Auth;

class UserController extends Controller
{
    public function delete() {
        Auth::user()->delete();
        return "You're terminated. Hasta la vista baby";
    }
}
