<?php

use Illuminate\Database\Seeder;
use App\Pack;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Pack::create([
          "name" => "Add Socialite"
        ]);
        Pack::create([
          "name" => "Create content site"
        ]);
        Pack::create([
          "name" => "Create documentation site"
        ]);
    }
}
