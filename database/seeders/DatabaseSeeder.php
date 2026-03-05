<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Package;
use App\Models\Exam;
use App\Models\Question;
use App\Models\Option;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Buat User Admin (Jika belum ada)
        User::updateOrInsert(
            ['email' => 'admin@nusatryout.com'],
            [
                'name' => 'Admin NusaTryout',
                'password' => Hash::make('admin123'),
                'email_verified_at' => now(),
            ]
        );

        // 2. Buat Kategori
        $catCpns = Category::create(['name' => 'CPNS', 'slug' => 'cpns']);
        $catUtbk = Category::create(['name' => 'UTBK-SNBT', 'slug' => 'utbk-snbt']);

        // 3. Buat Paket (CPNS)
        $packageCpns = Package::create([
            'category_id' => $catCpns->id,
            'name' => 'Simulasi SKD CPNS 2024',
            'slug' => 'simulasi-skd-cpns-2024',
            'description' => 'Paket simulasi lengkap materi TWK, TIU, dan TKP sesuai standar BKN.',
            'price' => 50000,
            'is_free' => false,
        ]);

        // 4. Buat Paket (UTBK)
        $packageUtbk = Package::create([
            'category_id' => $catUtbk->id,
            'name' => 'Tryout Gratis SNBT #1',
            'slug' => 'tryout-gratis-snbt-1',
            'description' => 'Uji kemampuanmu di materi Literasi dan Penalaran Matematika.',
            'price' => 0,
            'is_free' => true,
        ]);

        // 5. Buat Ujian (Sub-tes TWK di CPNS)
        $examTwk = Exam::create([
            'package_id' => $packageCpns->id,
            'title' => 'Tes Wawasan Kebangsaan (TWK)',
            'duration_minutes' => 30,
            'description' => 'Materi Pancasila, UUD 1945, NKRI, dan Bhinneka Tunggal Ika.',
        ]);

        // 6. Buat Soal Contoh (TWK)
        $q1 = Question::create([
            'exam_id' => $examTwk->id,
            'question_text' => 'Lambang negara Garuda Pancasila diatur dalam UUD 1945 pasal...',
            'explanation' => 'Pasal 36A UUD 1945 menyatakan bahwa Lambang Negara ialah Garuda Pancasila dengan semboyan Bhinneka Tunggal Ika.',
        ]);

        Option::create(['question_id' => $q1->id, 'option_text' => 'Pasal 35', 'is_correct' => false]);
        Option::create(['question_id' => $q1->id, 'option_text' => 'Pasal 36', 'is_correct' => false]);
        Option::create(['question_id' => $q1->id, 'option_text' => 'Pasal 36A', 'is_correct' => true]);
        Option::create(['question_id' => $q1->id, 'option_text' => 'Pasal 36B', 'is_correct' => false]);
        Option::create(['question_id' => $q1->id, 'option_text' => 'Pasal 37', 'is_correct' => false]);

        // 7. Buat Ujian (Sub-tes Literasi di UTBK)
        $examLit = Exam::create([
            'package_id' => $packageUtbk->id,
            'title' => 'Literasi Bahasa Indonesia',
            'duration_minutes' => 45,
            'description' => 'Menguji kemampuan memahami isi bacaan dan penalaran kritis.',
        ]);

        $q2 = Question::create([
            'exam_id' => $examLit->id,
            'question_text' => 'Apa tujuan utama dari teks argumentasi?',
            'explanation' => 'Teks argumentasi bertujuan untuk meyakinkan pembaca agar menerima pendapat atau pandangan penulis.',
        ]);

        Option::create(['question_id' => $q2->id, 'option_text' => 'Menghibur pembaca', 'is_correct' => false]);
        Option::create(['question_id' => $q2->id, 'option_text' => 'Menceritakan kejadian', 'is_correct' => false]);
        Option::create(['question_id' => $q2->id, 'option_text' => 'Mempengaruhi opini pembaca', 'is_correct' => true]);
        Option::create(['question_id' => $q2->id, 'option_text' => 'Menjelaskan cara kerja', 'is_correct' => false]);
        Option::create(['question_id' => $q2->id, 'option_text' => 'Mendeskripsikan objek', 'is_correct' => false]);
    }
}
