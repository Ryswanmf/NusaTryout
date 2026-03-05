<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserAnswer extends Model
{
    protected $fillable = [
        'user_exam_id',
        'question_id',
        'option_id',
    ];

    /**
     * Get the user exam that owns the user answer.
     */
    public function userExam(): BelongsTo
    {
        return $this->belongsTo(UserExam::class);
    }

    /**
     * Get the question that owns the user answer.
     */
    public function question(): BelongsTo
    {
        return $this->belongsTo(Question::class);
    }

    /**
     * Get the option that owns the user answer.
     */
    public function option(): BelongsTo
    {
        return $this->belongsTo(Option::class);
    }
}
