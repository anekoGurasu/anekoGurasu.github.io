<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CategoryItemController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\DashboardController;

Route::post('/poslat-kontakt', function (Request $request) {
    $data = $request->validate([
        'name' => 'required',
        'email' => 'required|email',
        'message' => 'required',
    ]);

    Mail::raw("Zpráva od: {$data['name']}\nEmail: {$data['email']}\n\nText:\n{$data['message']}", function ($message) use ($data) {
        $message->to('kontakt@internetbezobav.cz')
                ->from('kontakt@internetbezobav.cz', 'Internet bez obav')
                ->replyTo($data['email'], $data['name'])
                ->subject('Nová zpráva z webu od: ' . $data['name']);
    });

    return response()->json(['success' => true]);
});

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
