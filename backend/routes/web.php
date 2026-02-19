<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ContactController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/menu', [MenuController::class, 'index']);
Route::post('/contact', [ContactController::class, 'send']);