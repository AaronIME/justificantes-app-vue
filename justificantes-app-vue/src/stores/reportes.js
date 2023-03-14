import { defineStore } from "pinia";
import { storage, database } from "../firebase.js";
import { ref as storageRef, set, get, remove } from "firebase/database";

export const useReports = defineStore("reportes", {
    state: () => ({
        reportes: []
    }),
    actions: {
        async guardarReporte(asunto, fecha, horaInicio, horaFin, descripcion) {
            try {
                console.log(asunto);
                console.log(fecha);
                console.log(horaInicio);
                console.log(horaFin);
                console.log(descripcion);
                await set(storageRef(database, 'reportes/'), {
                    Asunto: asunto,
                    Fecha: fecha,
                    Descripcion: descripcion,
                    Clase: horaInicio+"-"+horaFin
                });
            } catch (error) {
                console.log(error);
            }
        },
        async obtenerReporte() {
            try {
                if (this.maestros.length != 0) {
                    return
                }
                const listaMaestros = await get(storageRef(database), `maestros`)
                if (listaMaestros.exists()) {
                    const arregloMaestros = listaMaestros.val().maestros
                    for (const maestro in arregloMaestros) {
                        this.maestros.push(arregloMaestros[maestro]);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
})

