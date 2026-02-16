<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| API Routy
|--------------------------------------------------------------------------
| Musí být DEFINOVÁNY JAKO PRVNÍ. Laravel je projde shora dolů.
*/
Route::get('/api/categories', [CategoryController::class, 'index']);
Route::get('/api/questions', [QuestionController::class, 'index']);
Route::get('/api/dashboard', [DashboardController::class, 'index']);
Route::post('/api/dashboard/save', [DashboardController::class, 'save']);

/*
|--------------------------------------------------------------------------
| Catch-all pro React Router
|--------------------------------------------------------------------------
| Tato routa musí být ÚPLNĚ POSLEDNÍ. Vše, co není /api, 
| pošle do Reactu (view 'app'), kde si to přebere React Router.
*/
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');