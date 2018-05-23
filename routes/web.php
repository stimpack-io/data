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

//Route::get('/acceptTermsBeforeRegister', 'Auth\LoginController@acceptTermsBeforeRegister');
Route::get('/register', 'Auth\LoginController@register');

Route::get('/welcome', function() {
    return view('welcome');
});

Route::get('/profile', 'ProfileController@index');








// Packs
Route::get('/', 'PackController@index');
Route::get('/packs', 'PackController@index');
Route::post('/packs/upload', 'PackController@upload');
Route::get('/packs/{id}/review', 'PackController@review');
Route::get('/packs/{author}/{packName}', 'PackController@resolve');

Route::get('/users', 'UserController@index');