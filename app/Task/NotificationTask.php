<?php

namespace App\Task;

use Illuminate\Support\Facades\DB;

class NotificationTask
{
    public function __invoke()
    {
        DB::insert('insert into users (name,email,password) values (?, ?, ?)', ["basv", 'Dayle' . round(1, 1000) . "@gmail.com", "$2Kihue"]);
    }
}
