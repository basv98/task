<?php

function responseJson($message, $success = true, $data = [])
{
    return response()->json([
        "success" => $success,
        "messagge" => $message,
        "data" => $data,
    ]);
}
