<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\UploadRequest;
use App\Pack;
use App\User;

class PackController extends Controller
{
    public function index() {
        //$packs = Pack::with('user')->get();
        //return $this->transformPacks($packs);
        $packs = Pack::all();
        return view('packs')->with(["packs" => $packs]);
    }

    public function upload(UploadRequest $request) {
        $pack = new Pack();
        $pack->name = $request->name;
        $pack->description = $request->description;
        $pack->content = $request->fileContent;
        $pack->user_id = $this->user()->id;        
        $pack->icon = "cube";
        $pack->save();       
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

    private function user()
    {
        return User::where('stimpack_io_token', request()->header('stimpack-io-token'))->first();
    }


}
