<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "task_name" => $this->task_name,
            "description" => $this->task_description,
            "date_programation" => date("Y-m-d", strtotime($this->date_programation)),
            "user" => $this->user->name
        ];
    }
}
