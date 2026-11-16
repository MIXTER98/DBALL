<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonajeController;

Route::apiResource('personaje', PersonajeController::class);
Route::get('/imagenes', function(){

})
?>