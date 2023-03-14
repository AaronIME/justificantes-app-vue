<script setup>
import { ref } from 'vue';
import {useReports} from '../stores/reportes.js'
import {useUserStore} from '../stores/usuarios.js'

const {guardarReporte } = useReports();
const {obtenerMaestros} = useUserStore()

const asunto = ref("");
const fecha = ref("");
const horaInicio = ref("");
const horaFin = ref("");
const file = ref("");
const descripcion = ref("");

const crearReporte = async(asunto, fecha, horaInicio, horaFin, file, descripcion) => {
    obtenerMaestros()
    await guardarReporte(asunto, fecha, descripcion)
    //await guardarReporte(asunto, fecha, horaInicio, horaFin, descripcion)
    //const clase = horaInicio+"-"+horaFin

}
</script>
<template>
    <div class="container">
        <form @submit.prevent="crearReporte(asunto, fecha, horaInicio, horaFin, file, descripcion)">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Asunto:</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Asunsto" v-model="asunto">
            </div>
            <div class="row justify-content-md-center">
                <div class="col col-4">
                    <div class="mb-1">
                        <label for="exampleFormControlInput1" class="form-label">Fecha a justificar:</label>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="mb-1">
                        <label for="exampleFormControlInput1" class="form-label">Horas a justificar:</label>
                    </div>
                </div>
                <div class="col col-4">
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col col-4">
                    <div class="mb-3">
                        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="fecha">
                    </div>
                </div>
                <div class="col col-4">
                    <div class="mb-3">
                        <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="horaInicio">
                    </div>
                </div>
                <div class="col col-4">
                    <div class="mb-3">
                        <input type="time" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="horaFin">
                    </div>
                </div>

            </div>

            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Multiple files input example</label>
                <input class="form-control" type="file" id="formFileMultiple" multiple >
            </div>

            <div class="row">
                <div class="col-8">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png"
                                    style="width:150px;height:80px" class="img-fluid rounded-start object-fit-cover" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">

                                    <div class="container mt-2">
                                        <div class="row">
                                            <div class="col-8">
                                                <p class="card-text">NombreImagen.png</p>
                                            </div>
                                            <div class="col-4 text-center">
                                                <button class="btn btn-primary" type="button">Eliminar</button>

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                </div>
                <div class="col-4">

                </div>

            </div>
            <div class="row">
                <div class="col-8">
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="descripcion"></textarea>
                    </div>
                </div>
                <div class="col-4">
                    <button id="btnEnviar" class="btn btn-primary btn-lg px-5" type="submit">Enviar</button>
                </div>
            </div>
        </form>
    </div>
</template>