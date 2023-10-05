<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::with('user')->withCount('episodes')->get();

        // dd($courses);

        return Inertia::render('Courses/Index', [
            'courses' => $courses
        ]);
    }
}
