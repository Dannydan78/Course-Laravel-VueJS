<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookCollection;
use Illuminate\Http\Request;
use App\Models\Book;


class BookController extends Controller
{
    public function index(): BookCollection
    {
          return new BookCollection(
            Book::with('user')->get(),
          );
    }
}


