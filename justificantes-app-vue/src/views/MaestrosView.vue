<script setup>
import { auth } from '../firebase';

import { useUserStore } from '../stores/usuarios';
const { maestros, obtenerMaestros, eliminarMaestro, eliminarDatosMaestro} = useUserStore()

obtenerMaestros();

const borrarMaestro = async(idMaestro) => {
    console.log(`idMaestro: ${idMaestro}`);
    await eliminarMaestro(idMaestro)
    //await eliminarDatosMaestro(idMaestro)
}

</script>
<template>
    <div class="text-center mb-5 mt-4">
        <h1>Maestros</h1>
    </div>

    <div class="container">
        <div class="d-grid gap-2 mb-4">
            <router-link to="/agregarMaestro" class="btn btn-primary" type="button">Agregar maestro</router-link>
        </div>
    </div>

    <div class="container">
        <div class="card mb-3" v-for="maestro in maestros" >
            <div class="card-body">
                <div class="row mb-2">
                    <div class="col-10">
                        <h5 class="d-inline-block me-5" style="font-weight: bold;">Maestro: <span
                                style="font-weight: normal;">{{ maestro?.nombre }}</span></h5>

                    </div>
                    <div class="col-2">
                        <div class="d-grid gap-2">
                            <button class="btn btn-warning" type="button">Editar</button>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-10">
                        <h5 class="d-inline-block" style="font-weight: bold;">Usuario: <span
                                style="font-weight: normal;">{{ maestro?.usuario }}</span></h5>
                    </div>
                    <div class="col-2">
                        <div class="d-grid gap-2">

                            <button class="btn btn-danger" type="button" @click="">Eliminar</button>
                            <!-- borrarMaestro(maestro.id) -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>