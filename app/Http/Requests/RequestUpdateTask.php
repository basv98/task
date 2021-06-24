<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RequestUpdateTask extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "task_id" => ["required", "integer"],
            "task_name" => ["required", "string"],
            "task_description" => ["required", "string"],
            "date_programation" => ["required", "date_format:Y-m-d"],
        ];
    }
}
