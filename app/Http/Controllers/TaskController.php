<?php

namespace App\Http\Controllers;

use App\Http\Requests\{RequestDeleteTask, RequestTasks, RequestUpdateTask};
use App\Http\Resources\TaskResource;
use App\Models\Tasks;

class TaskController extends Controller
{
    public function saveTask(RequestTasks $request)
    {
        Tasks::create(["user_id" => Auth()->user()->id] + $request->validated());
        return responseJson("Perfect");
    }

    public function showTask()
    {
        $tasks = Tasks::tasks();
        return responseJson("Perfect", true, TaskResource::collection($tasks));
    }

    public function deleteTask(RequestDeleteTask $request)
    {
        $task = Tasks::taskByUserAndId($request->task_id);
        if (count($task)) {
            $task[0]->delete();
            return responseJson("Deleted");
        }
        return responseJson("Task not found", false);
    }

    public function task(RequestDeleteTask $request)
    {
        $task = Tasks::taskByUserAndId($request->task_id);
        if (count($task)) {
            return responseJson("Ok", true, $task[0]);
        }
        return responseJson("Task not found", false);
    }

    public function updateTask(RequestUpdateTask $request)
    {
        $task = Tasks::taskByUserAndId($request->task_id);
        if (count($task)) {
            $task[0]->update($request->validated());
            return responseJson("Updated");
        }
        return responseJson("Task not found", false);
    }
}
