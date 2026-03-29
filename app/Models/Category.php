<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    public const COL_ID = 'id';
    public const COL_TITLE = 'title';
    public const COL_DESC = 'desc';
    public const COL_IMG = 'img';
    public const COL_ORDER_IDX = 'order_idx';

    protected $table = 'category';
    protected $primaryKey = self::COL_ID;
    public $timestamps = false;

    protected $fillable = [
        self::COL_TITLE,
        self::COL_DESC,
        self::COL_IMG,
        self::COL_ORDER_IDX,
    ];

    public function items()
    {
        return $this->hasMany(CategoryItem::class, CategoryItem::COL_CATEGORY_ID);
    }
}
