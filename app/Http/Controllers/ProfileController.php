<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UploadRequest;
use App\Pack;
use App\User;

class ProfileController extends Controller
{
    public function __constuct()
    {
        $this->middleware('auth');
    }

    public function index() {
        return User::first();
    }
}
