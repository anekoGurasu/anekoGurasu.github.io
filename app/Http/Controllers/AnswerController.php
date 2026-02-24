<?php

namespace App\Http\Controllers;

use App\Models\Answer;

class AnswerController extends Controller
{
    public function index()
    {
        $categoryId = request(Question::COL_CATEGORY_ID);
        $difficulty = request(Question::COL_DIFFICULTY_ID);

        return Question::with('answers')
            ->where(Question::COL_CATEGORY_ID, $categoryId)
            ->where(Question::COL_DIFFICULTY_ID, $difficulty)
            ->get();
    }
}
