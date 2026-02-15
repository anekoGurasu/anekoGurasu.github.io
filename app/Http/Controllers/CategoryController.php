<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
{
    $data = Category::select(
        Category::COL_ID,
        Category::COL_TITLE,
        Category::COL_DESC,
        Category::COL_ITEMS
    )
    ->orderBy(Category::COL_ID)
    ->get();

    return response()->json($data);
}
}
