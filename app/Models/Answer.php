<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    public const COL_ID = 'id';
    public const COL_QUESTION_ID = 'question_id';
    public const COL_TEXT = 'text';
    public const COL_IS_CORRECT = 'is_correct';
    public const COL_POINTS = 'points';

    protected $table = 'answer';
    protected $primaryKey = self::COL_ID;
    public $timestamps = false;

    protected $fillable = [
        self::COL_QUESTION_ID,
        self::COL_TEXT,
        self::COL_IS_CORRECT,
        self::COL_POINTS,
    ];

    protected $casts = [
        self::COL_IS_CORRECT => 'boolean',
        self::COL_POINTS => 'integer',
    ];

    public function question()
    {
        return $this->belongsTo(Question::class, self::COL_QUESTION_ID);
    }
}
