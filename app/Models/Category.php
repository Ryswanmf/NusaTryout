<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    protected $fillable = [
        'name',
        'slug',
    ];

    /**
     * Get the packages for the category.
     */
    public function packages(): HasMany
    {
        return $this->hasMany(Package::class);
    }
}
