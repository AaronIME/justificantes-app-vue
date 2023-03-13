import { defineStore } from "pinia";
import { createUserWithEmailAndPassword, deleteUser, getAuth } from "firebase/auth";
import { auth, database } from "../firebase.js";
import { ref as storageRef, set, get, remove } from "firebase/database";

export const useUserStore = defineStore("usuarios", {
    state: () => ({
        maestros: []
    }),
    actions: {
        async registrarMaestro(email, password) {
            try {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                return user;

            } catch (error) {
                console.log(error);
            }
        },
        async guardarDatosMaestro(idMaestro, nombre, nombreUsuario) {
            try {
                console.log(idMaestro);
                console.log(nombre);
                console.log(nombreUsuario);
                await set(storageRef(database, 'maestros/' + idMaestro), {
                    nombre: nombre,
                    usuario: nombreUsuario,
                    id: idMaestro
                });
            } catch (error) {
                console.log(error);
            }
        },
        async obtenerMaestros() {
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
        async eliminarMaestro(idMaestro) {
            try {
                const res = getAuth().deleteUser(idMaestro);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        },
        async eliminarDatosMaestro(idMaestro) {
            try {
                console.log(idMaestro);
                const res = await remove(storageRef(database),`maestros${idMaestro}`)
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }

    }


})





