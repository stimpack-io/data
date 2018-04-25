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

Route::get('/', function() {
    return view('marketing');
});


// Register in order to upload packs
Route::get('/register', 'Auth\LoginController@redirectToProvider');
Route::get('/login', 'Auth\LoginController@redirectToProvider');
Route::get('login/github/callback', 'Auth\LoginController@handleProviderCallback');
Route::get('/welcome', function() {
    return view('welcome');
});

// Packs
Route::get('/packs', 'PackController@index');
Route::post('/packs/upload', 'PackController@upload');
Route::get('/packs/upload', 'PackController@upload');
//Route::get('/packs/upload', 'PackController@upload');
