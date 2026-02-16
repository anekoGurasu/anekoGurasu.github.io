<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\DashboardController;
use Inertia\Inertia; // <--- TOTO JE NUTNÉ PŘIDAT

// API Routy (tohle je v pořádku)
Route::get('/api/categories', [CategoryController::class, 'index']);
Route::get('/api/questions', [QuestionController::class, 'index']);
Route::get('/api/dashboard', [DashboardController::class, 'index']);
Route::post('/api/dashboard/save', [DashboardController::class, 'save']);

// Hlavní stránka
Route::get('/', function () {
    return Inertia::render('Home');
});

// Hra
Route::get('/game', function () {
    return Inertia::render('Game');
});

// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

// Login
Route::get('/login', function () {
    return Inertia::render('Login');
});