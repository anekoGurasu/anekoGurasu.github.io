<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Answer;

class Question extends Model
{
    public const COL_ID = 'id';
    public const COL_CATEGORY_ID = 'category_id';
    public const COL_DIFFICULTY = 'difficulty';
    public const COL_TEXT = 'text';
    public const COL_IMAGE_PATH = 'image_path';
    public const COL_ORDER_IDX = 'order_idx';

    protected $table = 'question';
    protected $primaryKey = self::COL_ID;
    public $timestamps = false;

    protected $fillable = [
        self::COL_CATEGORY_ID,
        self::COL_DIFFICULTY,
        self::COL_TEXT,
        self::COL_IMAGE_PATH,
        self::COL_ORDER_IDX,
    ];

    public function answers()
    {
        return $this->hasMany(
            Answer::class,
            Answer::COL_QUESTION_ID,
            self::COL_ID
        );
    }
}
