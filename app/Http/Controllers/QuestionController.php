<?php

namespace App\Http\Controllers;

use App\Models\Question;

class QuestionController extends Controller
{
    public function index()
    {
        $categoryId = request(Question::COL_CATEGORY_ID);
        $difficulty = request(Question::COL_DIFFICULTY);

        return Question::with('answers')
            ->where(Question::COL_CATEGORY_ID, $categoryId)
            ->where(Question::COL_DIFFICULTY, $difficulty)
            ->orderBy(Question::COL_ORDER_IDX)
            ->get();
    }
}
