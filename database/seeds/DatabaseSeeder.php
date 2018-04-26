<?php

use Illuminate\Database\Seeder;
use App\Pack;
use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            "name" => "ajthinking",
            "email" => "dummy@dummy.com",
            "provider" => "github",
            "provider_id" => "1337",
            "stimpack_io_token" => "this is a token"
        ]);

        Pack::create([
          "name" => "Add Socialite",
          "description" => "In addition to typical, form based authentication, Laravel also provides a simple, convenient way to authenticate with OAuth providers using Laravel Socialite. Socialite currently supports authentication with Facebook, Twitter, LinkedIn, Google, GitHub and Bitbucket.",
          "content" => '{"sample": {"key": 1337}} ',
          "user_id" => 1,
          "icon" => "cube"

        ]);
        Pack::create([
          "name" => "Create content site",
          "description" => "Create beautiful sites",
          "content" => '{"sample": {"key": 1337}} ',
          "user_id" => 1,
          "icon" => "cube"          
        ]);
        Pack::create([
          "name" => "Create documentation site",
          "description" => "Using the laravel docs repo, create your own stunning repo site!",
          "content" => '{"sample": {"key": 1337}} ',
          "user_id" => 1,
          "icon" => "cube"                    
        ]);

        Pack::create([
          "name" => "Add Socialite",
          "description" => "In addition to typical, form based authentication, Laravel also provides a simple, convenient way to authenticate with OAuth providers using Laravel Socialite. Socialite currently supports authentication with Facebook, Twitter, LinkedIn, Google, GitHub and Bitbucket.",
          "content" => '{"sample": {"key": 1337}} ',
          "user_id" => 1,
          "icon" => "cube"

        ]);
        Pack::create([
          "name" => "Create content site",
          "description" => "Create beautiful sites",
          "content" => '{"sample": {"key": 1337}} ',
          "user_id" => 1,
          "icon" => "cube"          
        ]);
        Pack::create([
          "name" => "Create documentation site",
          "description" => "Using the laravel docs repo, create your own stunning repo site!",
          "content" => '{"sample": {"key": 1337}} ',
          "user_id" => 1,
          "icon" => "cube"                    
        ]);
        
        Pack::create([
          "name" => "Add Socialite",
          "description" => "In addition to typical, form based authentication, Laravel also provides a simple, convenient way to authenticate with OAuth providers using Laravel Socialite. Socialite currently supports authentication with Facebook, Twitter, LinkedIn, Google, GitHub and Bitbucket.",
          "content" => '{"sample": {"key": 1337}} ',
          "user_id" => 1,
          "icon" => "cube"

        ]);
        Pack::create([
          "name" => "Create content site",
          "description" => "Create beautiful sites",
          "content" => '{"sample": {"key": 1337}} ',
          "user_id" => 1,
          "icon" => "cube"          
        ]);        





    }
}
