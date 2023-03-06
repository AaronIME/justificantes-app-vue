<script setup>
import { ref } from 'vue';
import {useUserStore} from '../stores/usuarios.js'

const {registrarMaestro, guardarDatosMaestro} = useUserStore();

const nombre = ref("");
const usuario = ref("");
const contraseña = ref("");

const crearMaestro = async(usuario, contraseña, nombre) => {
    const correo = `${usuario}@justificantes.com`
    const maestro = await registrarMaestro(correo, contraseña)
    const idMaestro = maestro.user.uid
    await guardarDatosMaestro(idMaestro, nombre, usuario)
}

</script>
<template>
    <div class="text-center mb-4 mt-4">
        <h1>Agregar maestro</h1>
    </div>

    <div class="container">
        <form @submit.prevent="crearMaestro(usuario, contraseña, nombre)">
            <div class="row justify-content-md-center">
                <div class="col-8">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
                                <input type="text" class="form-control" placeholder="name@example.com" v-model="nombre">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Usuario:</label>
                                <input type="text" class="form-control" placeholder="name@example.com" v-model="usuario">
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Contraseña:</label>
                                <input type="password" class="form-control" placeholder="name@example.com" v-model="contraseña">
                            </div>
                            <div class="mb-4">
                                <label for="exampleFormControlInput1" class="form-label">Repetir contraseña:</label>
                                <input type="password" class="form-control" placeholder="name@example.com">
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-primary" type="submit">Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>