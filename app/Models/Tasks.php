<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\{Model, SoftDeletes};

class Tasks extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ["task_name", "task_description", "date_programation", "user_id"];

    public function user()
    {
        return $this->belongsTo(User::class, "user_id", "id");
    }

    static public function tasks()
    {
        return self::where(["user_id" => Auth()->user()->id])
            ->with("user")->get();
    }

    static public function taskByUserAndId($task_id)
    {
        return self::where(["user_id" => Auth()->user()->id])
            ->where(["id" => $task_id])->get();
    }
}
