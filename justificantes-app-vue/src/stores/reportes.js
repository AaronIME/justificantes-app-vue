import { defineStore } from "pinia";
import { getStorage, createReporte } from "firebase/storage";
import { storage, database } from "../firebase.js";
import { ref as storageRef, set, get, remove } from "firebase/database";

export const useReports = defineStore("usuarios", {
    state: () => ({
        reportes: []
    }),
    actions: {
        async registrarReporte(email, password) {
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                return user;

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

