<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pack;

class PackController extends Controller
{
    public function index() {
        //$packs = Pack::with('user')->get();
        //return $this->transformPacks($packs);
        return view('packs');
    }

    private function transformPacks($packs) {
        return $packs->map(function($pack) {
            return $this->transformPack($pack);
        });
    }

    private function transformPack($pack) {
        $pack->name = $pack->user->name . "/" . $pack->name;

        // Eager loading crap
        $userName = $pack->user->name;
        unset($pack->user);
        $pack->user = $userName;

        unset($pack->user_id);
        return $pack;
    }
}
