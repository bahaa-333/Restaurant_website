<?php

namespace App\Models;

use MongoDB\Laravel\Eloquent\Model;

class MenuItem extends Model {
    protected $connection = 'mongodb';
    protected $collection = 'menu_items';
    protected $fillable = ['name', 'description', 'price', 'category', 'active', 'bestseller', 'image_url'];
}

