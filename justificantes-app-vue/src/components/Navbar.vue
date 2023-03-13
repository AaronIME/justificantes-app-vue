<script >
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="container-fluid" style="border-bottom: 1px solid #D3D3D3">
        <div class="row">
            <div class="col-1">
                <div class="text-center mt-3 ms-5 mb-3">
                    <img style="height: 50px; width: 50px;" src="https://cdn-icons-png.flaticon.com/512/4136/4136043.png" alt="">
                </div>
            </div>
            <div class="col-10">
                    <ul class="nav justify-content-center mt-4">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Enviados</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/crear" class="nav-link">Crear</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/maestros" class="nav-link">Maestros</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/reporte" class="nav-link">Reporte</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/historial" class="nav-link">Historial</router-link>
                        </li>
                    </ul>
            </div>
            <div class="col-1">
    
            </div>
        </div>
    </div>
    
</template>