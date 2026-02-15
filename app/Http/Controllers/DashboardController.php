<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Dashboard;

class DashboardController extends Controller
{
    // --- Vrátí top 5 skóre ---
    public function index()
    {
        $scores = DB::table('dashboard_view')
            ->select('username', 'points', 'difficulty_text')
            ->orderByDesc('points')
            ->limit(5)
            ->get();

        return response()->json($scores);
    }

    // --- Uloží skóre ---
    public function save(Request $request)
    {
        // validace vstupu
        $request->validate([
            'username' => 'required|string|max:255',
            'points' => 'required|integer|min:0',
            'difficulty' => 'nullable|integer|max:5',
        ]);

        // vytvoření záznamu
        $dashboard = Dashboard::create([
            'username' => $request->username,
            'points' => $request->points,
            'difficulty' => $request->difficulty ?? 0,
        ]);

        // odpověď
        return response()->json([
            'success' => true,
            'data' => $dashboard
        ]);
    }
}
