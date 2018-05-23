<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class HasAcceptedGDPR
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!Auth::user()->has_accepted_gdpr) {
            return redirect('/acceptGDPRBeforeContinuing');
        }

        return $next($request);
    }
}
