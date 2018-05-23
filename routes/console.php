<?php

use Illuminate\Foundation\Inspiring;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');

Artisan::command('delete:users', function () {
    $this->confirm("Whoa! Are you sure about this?");
    \App\User::all()->each(function($user) {
        $user->delete();
    });
    $this->comment("Deleted all users!");
})->describe('Delete all users!');