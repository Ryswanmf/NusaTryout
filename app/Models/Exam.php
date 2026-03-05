<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Exam extends Model
{
    protected $fillable = [
        'package_id',
        'title',
        'duration_minutes',
        'description',
    ];

    /**
     * Get the package that owns the exam.
     */
    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }

    /**
     * Get the questions for the exam.
     */
    public function questions(): HasMany
    {
        return $this->hasMany(Question::class);
    }

    /**
     * Get the user exams for the exam.
     */
    public function userExams(): HasMany
    {
        return $this->hasMany(UserExam::class);
    }
}
