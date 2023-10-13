<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;


class TablesController extends Controller
{
    public function index()
    {
        $users = User::all();

        // dd($users);

        return Inertia::render('Tables', [
            'users' => $users,
        ]);
    }

    public function destroy(int $id)
    {
        
    }
}
