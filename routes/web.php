<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryItemController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\DashboardController;

Route::get('/api/categories', [CategoryController::class, 'index']);
Route::get('/api/questions', [QuestionController::class, 'index']);
Route::get('/api/answers', [QuestionController::class, 'index']);
Route::get('/api/dashboard', [DashboardController::class, 'index']);
Route::post('/api/dashboard/save', [DashboardController::class, 'save']);
Route::get('/api/category-items', function (Illuminate\Http\Request $request) {
    return DB::table('category_item')
        ->where('category_id', $request->query('category_id'))
        ->get();
});

// Catch-all route for SPA
Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
