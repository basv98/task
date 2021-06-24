<?php

namespace App\Http\Controllers;

use App\Http\Requests\RequestLogin;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(RequestLogin $request)
    {
        if (Auth::attempt($request->only('email', 'password'))) {
            return responseJson("Correct", true, ['token' => $request->user()->createToken($request->email)->plainTextToken,]);
        }
        return responseJson("Incorrect", false);
    }
}
