<script setup>
</script>
<template>
    <div class="text-center mb-5 mt-4">
        <h1>Login</h1>
    </div>

    <div class="container">
        <div class="row justify-content-md-center">
            <div class="col col-2"></div>
            <div class="col-8">
                <div class="card pt-5 pb-5">
                    <div class="card-body">
                        <div class="mb-4">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <button class="btn btn-primary" type="button">Iniciar sesión</button>
                    </div>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
</template>