<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Package extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'description',
        'price',
        'is_free',
        'image',
    ];

    protected $casts = [
        'is_free' => 'boolean',
    ];

    /**
     * Get the category that owns the package.
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Get the exams for the package.
     */
    public function exams(): HasMany
    {
        return $this->hasMany(Exam::class);
    }
}
