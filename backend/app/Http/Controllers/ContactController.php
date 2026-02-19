<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ContactController extends Controller
{

    public function send(Request $request) {
    $data = $request->validate([
        'name'    => 'required|string',
        'email'   => 'required|email',
        'message' => 'required|string',
    ]);

    Mail::to('company@example.com')->send(new ContactMail($data));

    return response()->json(['message' => 'Message sent successfully']);
    }

}
