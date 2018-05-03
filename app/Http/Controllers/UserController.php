<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UploadRequest;
use App\Pack;
use App\User;

class UserController extends Controller
{
    public function index() {
        $users = User::all();
        return $users;
    }
}
