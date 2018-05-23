<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Socialite;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/packs';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('acceptTermsBeforeRegister');
    }

    /**
     * Redirect the user to the GitHub authentication page.
     *
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('github')->redirect();
    }

    /**
     * Obtain the user information from provider.  Check if the user already exists in our
     * database by looking up their provider_id in the database.
     * If the user exists, log them in. Otherwise, create a new user then log them in. After that
     * redirect them to the authenticated users homepage.
     *
     * @return Response
     */
    public function handleProviderCallback()
    {
        $user = Socialite::driver('github')->user();
        return $this->attemptLogin($user);
    }

    /**
     * If a user has registered before using social auth, return the user
     * else, create a new user object.
     * @param  $user Socialite user object
     * @param $provider Social auth provider
     * @return  User
     */
    public function attemptLogin($user)
    {
        $authUser = User::where('provider_id', $user->id)->first();
        if ($authUser) {
            Auth::login($authUser, true);
            return redirect($this->redirectTo);
        } else {
            //return redirect("/acceptTermsBeforeRegister")->with(['user' => $user]);
            return redirect("/register")->with(['user' => $user]);
        }
    }

    //public function acceptTermsBeforeRegister(Request $request)
    //{
    //    return view("acceptTermsBeforeRegister")->with(["user" => $request->session()->get('user')]);
    //}

    public function register(Request $request)
    {
        $user = $request->session()->get('user');

        $authUser = User::create([
            'nickname' => $user->nickname,
            'provider' => 'github',
            'provider_id' => $user->id,
            'stimpack_io_token' => bin2hex(random_bytes(24))
        ]);

        Auth::login($authUser, true);

        return redirect($this->redirectTo);
    }
}
