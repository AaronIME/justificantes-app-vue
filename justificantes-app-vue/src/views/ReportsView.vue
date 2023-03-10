<script >
export default {
    methods: {
        Descargar(){
            var element = document.getElementById("element-to-pdf");
            html2pdf(element);
        }
    }
}
</script>
<template>
    <div>
        <h1>Reportes</h1>
        
    </div>
</template>