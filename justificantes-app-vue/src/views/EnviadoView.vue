<script setup></script>
<template>
  <div class="container text-center">
    <div class="row">
      <div class="col">
        <div class="card" type="button" data-bs-toggle="modal" data-bs-target="#modalEnviados">
          <div class="card-body">
            <h5 class="card-title">Se murió mi gato</h5>
            <p class="card-text">
              En efecto, vengo a confirmar en un número de caracteres superior al
              anterior, que mi gato ha dejado de pagar su sucripción a la vida.
            </p>
            <span class="card-datetime badge bg-primary"> 02/03/2023 </span>
            <span class="card-datetime badge bg-primary"> 15:00 - 16:00 </span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" type="button" data-bs-toggle="modal" data-bs-target="#modalEnviados">
          <div class="card-body">
            <h5 class="card-title">Se murió mi gato</h5>
            <p class="card-text">
              En efecto, vengo a confirmar en un número de caracteres superior al
              anterior, que mi gato ha dejado de pagar su sucripción a la vida.
            </p>
            <span class="card-datetime badge bg-primary"> 02/03/2023 </span>
            <span class="card-datetime badge bg-primary"> 15:00 - 16:00 </span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card" type="button" data-bs-toggle="modal" data-bs-target="#modalEnviados">
          <div class="card-body">
            <h5 class="card-title">Se murió mi gato</h5>
            <p class="card-text">
              En efecto, vengo a confirmar en un número de caracteres superior al
              anterior, que mi gato ha dejado de pagar su sucripción a la vida.
            </p>
            <span class="card-datetime badge bg-primary"> 02/03/2023 </span>
            <span class="card-datetime badge bg-primary"> 15:00 - 16:00 </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade modal-lg text-center" id="modalEnviados" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered-scrollable">
      <div class="modal-content">
        <div class="modal-header d-block">
          <span style="font-size: x-large; font-weight: 750">Se murió mi gato</span>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            style="float: right"
          ></button>
        </div>

        <div class="modal-header">
          <div class="row">
            <div class="col mb-2">
              <span class="modal-datetime badge bg-info" style="float: left"
                >Fecha de envio: 02/03/2023</span
              >
            </div>
            <div class="col">
              <span class="modal-datetime badge bg-info" style="float: left"
                >Horas de envio: 8:55</span
              >
            </div>
          </div>
          <div class="row">
            <div class="col mb-2">
              <span class="modal-datetime badge bg-info" style="float: right"
                >Fecha a justificar: 02/03/2023</span
              >
            </div>
            <div class="col">
              <span class="modal-datetime badge bg-info" style="float: right"
                >Horas a justificar: 15:00 - 16:00</span
              >
            </div>
          </div>
        </div>

        <div class="modal-body">
          <div class="container pt-2 px-4">
            <p style="text-align: justify">
              En efecto, vengo a confirmar en un número de caracteres superior al en un
              número de caracteres superior alen un número de caracteres superior alen un
              número de caracteres superior alen un número de caracteres superior alen un
              número de caracteres superior alen un número de caracteres superior alen un
              número de caracteres superior alen un número de caracteres superior alen un
              número de caracteres superior alen un número de caracteres superior alen un
              número de caracteres superior alen un número de caracteres superior alen un
              número de caracteres superior alen un número de caracteres superior alen un
              número de caracteres superior alen un número de caracteres superior alen un
              número de caracteres superior alen un número de caracteres superior alen un
              número de caracteres superior alen un número de caracteres superior
            </p>
          </div>

          <div
            class="container"
            style="
              border-color: #6e6e6e;
              border-width: thin;
              border-style: solid;
              border-radius: 0.375rem;
            "
          >
            <img src="/src/views/..." class="rounded mx-auto" alt="..." />
            <span>FotoGatoMuerto.png</span>
          </div>

          <div class="form-check mt-3" style="float: right">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              style="border-color: #6e6e6e;"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Mostrar imagen en vista previa
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>

.card {
  margin-top: 45px;
}

.card:hover {
  border-color: skyblue;
  border-width: 2px;
}

span.card-datetime {
  margin-left: 20px;
  margin-right: 20px;
  font-size: small;
}

.card-text {
  text-align: justify;
}

.bg-info {
  background-color: #7a8ec6 !important;
}

.modal-header {
  border-color: #6e6e6e;
}

.modal-datetime {
  font-size: 10.4pt;
}
</style>
