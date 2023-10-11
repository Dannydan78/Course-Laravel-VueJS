<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;


class TablesController extends Controller
{
    public function index()
    {
        $users = User::all();

        return Inertia::render('Tables', [
            'users' => $users,
        ]);

    }
}
