<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dashboard extends Model
{
    public const COL_ID = 'id';
    public const COL_USERNAME = 'username';
    public const COL_POINTS = 'points';
    public const COL_DIFFICULTY = 'difficulty';

    protected $table = 'dashboard';
    protected $primaryKey = self::COL_ID;
    public $timestamps = false;

    protected $fillable = [
        self::COL_USERNAME,
        self::COL_POINTS,
        self::COL_DIFFICULTY,
    ];
}
