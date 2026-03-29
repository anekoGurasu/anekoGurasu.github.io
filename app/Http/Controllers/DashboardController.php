<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Dashboard;

class DashboardController extends Controller
{
    public function index()
    {
        $scores = DB::table(Dashboard::getViewName())
            ->select(Dashboard::COL_USERNAME, Dashboard::COL_POINTS, 'difficulty_text')
            ->orderByDesc(Dashboard::COL_POINTS)
            ->get();

        return response()->json($scores);
    }

    // --- Uloží skóre ---
    public function save(Request $request)
    {
        // validace vstupu
        $request->validate([
            Dashboard::COL_USERNAME => 'required|string|max:255',
            Dashboard::COL_POINTS => 'required|integer|min:0',
            Dashboard::COL_DIFFICULTY => 'nullable|integer|max:5',
        ]);

        // vytvoření záznamu
        $dashboard = Dashboard::create([
            Dashboard::COL_USERNAME => $request->username,
            Dashboard::COL_POINTS => $request->points,
            Dashboard::COL_DIFFICULTY => $request->difficulty ?? 1,
        ]);

        // odpověď
        return response()->json([
            'success' => true,
            'data' => $dashboard
        ]);
    }
}
