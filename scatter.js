console.log("Hey, you!")
d3.json("datospartidos.json", function(data) {
    console.log("Datos cargados")
    window.data = data
    partidos = data.partidos
    ancho = 500
    alto = 500
    dominioVotantes = d3.extent(partidos,function(d){return d.votantes})
    //Escalas
    escalaLineal = d3.scaleLinear()
        .domain(d.mediaAutoubicacion)
        .range([0,300])
    
    
    container = d3.select("#container")
        .append("svg") 
        .attr("width", ancho)
        .attr("height", alto)
    container
    .selectAll("circle")
    .data(partidos)
    .enter()
    .append("circle")
    .attr("cx", function(d){
        return d.mediaAutoubicacion
    })
    .attr("cy", 10)
    .attr("r", 10)
    
    
    
    d3.axisBottom()
    //Tarea 1: Crear una escala lineal para el cx. El dominio es 0-10 y el rango es 0-500
    //Tarea 2: Colorear los puntos por su ubicación ideológica (rojo-azul). NOTA: el attr es fill
    //Tarea 3: Crear una escala lineal para el cy(eje vertical) con la variable votantes. Aplícala en cy. Calcula el mínimo ty el máximo automáticamente (con d3.extent)
    //Tarea 4: Haz que cuando haya un click sobre el botón salga una alerta (alert con el nombre del partido)
    
})