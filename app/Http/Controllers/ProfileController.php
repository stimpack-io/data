<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UploadRequest;
use App\Pack;
use App\User;
use Auth;
use App\Http\Controllers\PackController;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware([
            'auth'
        ]);

        $this->middleware([
            'hasAcceptedGDPR'
        ])->except([
            'acceptGDPRBeforeContinuing', 'acceptGDPR'
        ]);

    }

    public function index() {
        return view('profile')->with([
            "user" => Auth::user()
        ]);
    }

    public function acceptGDPRBeforeContinuing() {
        return view('acceptGDPRBeforeContinuing');
    }

    public function acceptGDPR() {
        $user = Auth::user();
        $user->has_accepted_gdpr = "1";
        $user->save();

        return redirect('/');
    }

}
