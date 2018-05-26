<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Register in order to upload packs
Route::get('/login', 'Auth\LoginController@redirectToProvider');
Route::get('login/github/callback', 'Auth\LoginController@handleProviderCallback');
Route::get('/logout', 'Auth\LoginController@logout');

Route::get('/profile', 'ProfileController@index');
Route::get('/acceptGDPRBeforeContinuing', 'ProfileController@acceptGDPRBeforeContinuing');
Route::get('/acceptGDPR', 'ProfileController@acceptGDPR');

// Packs
Route::get('/', 'PackController@index');
Route::get('/packs', 'PackController@index');
Route::post('/packs/upload', 'PackController@upload');
Route::get('/packs/{id}/review', 'PackController@review');
Route::get('/packs/{author}/{packName}', 'PackController@resolve');

Route::get('/users', 'UserController@index');


Route::get('/boolean', function() {

    $user = new \App\User;
    $user->has_accepted_gdpr = 1;
    $user = \App\User::first();
    // transform to fix the boolean bug
    //$user->has_accepted_gdpr = ($user->has_accepted_gdpr ? "true" : "false");    
    

    return view('boolean')->with([
        'user' => $user
    ]);
});








/*
$user = new \StdClass();
$user->hasAcceptedGDPR = true;    

$user->hasAcceptedGDPR = ($user->hasAcceptedGDPR ? "true" : "false");
