<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;

// Public auth routes
Route::prefix('auth')->group(function () {
    Route::post('/login',           [AuthController::class, 'login']);
    Route::post('/forgot-password', [AuthController::class, 'forgotPassword']);
    Route::post('/reset-password',  [AuthController::class, 'resetPassword']);
});

// Protected routes (require JWT token)
Route::middleware('admin.auth')->prefix('auth')->group(function () {
    Route::post('/logout',  [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/me',       [AuthController::class, 'me']);
});

// Protected admin routes (we'll add products & photos here in next steps)
Route::middleware('admin.auth')->prefix('admin')->group(function () {
    // coming in step 3
});



/*
### 5. Quick Test with Postman or curl

**Login:**
```
POST http://localhost:8000/api/auth/login
Body (JSON): { "email": "admin@restaurant.com", "password": "changeme123" }
```
You should get back an `access_token`.

**Test protected route:**
```
GET http://localhost:8000/api/auth/me
Header: Authorization: Bearer <your_token_here>
```

**Forgot password:**
```
POST http://localhost:8000/api/auth/forgot-password
Body (JSON): { "email": "admin@restaurant.com" }*/