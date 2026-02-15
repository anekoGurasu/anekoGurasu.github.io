<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\DashboardController;


Route::get('/api/categories', [CategoryController::class, 'index']);
Route::get('/api/questions', [QuestionController::class, 'index']);

Route::get('/api/dashboard', [DashboardController::class, 'index']);
Route::post('/api/dashboard/save', [DashboardController::class, 'save']);


