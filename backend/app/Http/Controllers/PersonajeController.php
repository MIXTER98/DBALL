<?php

namespace App\Http\Controllers;

use App\Models\Personaje;
use Illuminate\Http\Request;

class PersonajeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Personaje::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        $request->validate([
            'nombre' => 'required|max:100',
            'raza' => 'required|max:100',
            'poder'=>'required|numeric|min:0',
            'transformacion'=>'required|max:100',
            'imgsrc'=>'required'
        ]);
        $personaje = Personaje::create([
            'nombre' => $request->nombre,
            'raza' => $request->raza,
            'poder'=>$request->poder,
            'transformacion'=>$request->transformacion,
            'imgsrc'=>$request->imgsrc
        ]);

        return  response()-> json($personaje);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $nombre)
    {
        $personaje = Personaje::where(
            'nombre',
            $nombre
        )->firstOrFail();

        return response() -> json($personaje);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Personaje $personaje)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $nombre)
    {   
        $personaje = Personaje::where(
            'nombre',
            $nombre
        )->firstOrFail();

        $personaje->update([
            'nombre'=>$request->nombre,
            'raza'=>$request->raza,
            'poder'=>$request->poder,
            'transformacion'=>$request->transformacion,
            'imgsrc' =>$request->imgsrc
        ]);

        return response () ->json($personaje);  
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $nombre)
    {
        $personaje = Personaje::where(
            'nombre',
            $nombre
        )->firstOrFail();
        $personaje->delete();
        return response()->json([
            'mensaje'=> 'Eliminado correctamente'
        ]);
    }
}
