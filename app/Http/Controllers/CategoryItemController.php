<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CategoryItem;

class CategoryItemController extends Controller
{
    public function index(Request $request)
    {
        return CategoryItem::where(
            'category_id',
            $request->category_id
        )->get();
    }
}
