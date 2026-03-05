<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Categories (CPNS, UTBK, Kedinasan)
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->timestamps();
        });

        // 2. Packages (Produk yang berisi kumpulan ujian)
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->integer('price')->default(0);
            $table->boolean('is_free')->default(false);
            $table->string('image')->nullable();
            $table->timestamps();
        });

        // 3. Exams (Sub-tes di dalam paket, misal: TWK, TIU)
        Schema::create('exams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('package_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->integer('duration_minutes'); // Durasi pengerjaan
            $table->text('description')->nullable();
            $table->timestamps();
        });

        // 4. Questions
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('exam_id')->constrained()->cascadeOnDelete();
            $table->text('question_text');
            $table->string('image')->nullable();
            $table->text('explanation')->nullable(); // Pembahasan
            $table->timestamps();
        });

        // 5. Options (Pilihan Jawaban A, B, C, D, E)
        Schema::create('options', function (Blueprint $table) {
            $table->id();
            $table->foreignId('question_id')->constrained()->cascadeOnDelete();
            $table->text('option_text');
            $table->boolean('is_correct')->default(false);
            $table->timestamps();
        });

        // 6. User Exams (Mencatat percobaan ujian siswa)
        Schema::create('user_exams', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('exam_id')->constrained()->cascadeOnDelete();
            $table->timestamp('started_at')->nullable();
            $table->timestamp('finished_at')->nullable();
            $table->decimal('score', 8, 2)->default(0);
            $table->enum('status', ['ongoing', 'finished'])->default('ongoing');
            $table->timestamps();
        });

        // 7. User Answers (Mencatat setiap jawaban yang dipilih siswa)
        Schema::create('user_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_exam_id')->constrained()->cascadeOnDelete();
            $table->foreignId('question_id')->constrained()->cascadeOnDelete();
            $table->foreignId('option_id')->nullable()->constrained()->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_answers');
        Schema::dropIfExists('user_exams');
        Schema::dropIfExists('options');
        Schema::dropIfExists('questions');
        Schema::dropIfExists('exams');
        Schema::dropIfExists('packages');
        Schema::dropIfExists('categories');
    }
};
