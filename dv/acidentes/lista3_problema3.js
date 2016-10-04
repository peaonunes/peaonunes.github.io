function toggleCheckboxColors(checkbox){
    svgMap.selectAll("circle")
        .data(features)
        .transition()
        .duration(500)
        .attr("cx", function (d) {
            var coordinates = d.geometry.coordinates;
            return projection(coordinates)[0];
        })
        .attr("cy", function (d) {
            var coordinates = d.geometry.coordinates;
            return projection(coordinates)[1];
        })
        .attr("r", "3px")
        .attr("stroke","black")
        .attr("fill", function(d){
            var type = typeTransformation(d.properties.tipo);
            if(clicked[type]){
                return "gray";
            } else {
                var checkbox = document.getElementById("colors");
                return colorPicker(checkbox.checked, type);
            }
        });

    svgHist.selectAll("#bars")
        .data(barsDataset)
        .transition()
        .duration(500)
        .attr("id", "bars")
        .attr("x", function(d, i) {
            return margin.right+ 5 + (i * ((w/2)/barsDataset.length));
        })
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", function(d){
            return yScale(d.value);
        })
        .attr("fill", function(d){
            var type = d.key;
            if(clicked[type]){
                return "gray";
            } else {
                var checkbox = document.getElementById("colors");
                return colorPicker(checkbox.checked, type);
            }
        });

    renderLines();

}

var clicked = {"Pedestres e Ciclistas":false,"Colisoes e Atropelamentos":false, "Ciclomotores":false, "Ciclistas":false, "Pedestres":false, "Automóveis e outros":false};

function unmarkType(){
    renderLines();

    svgHist.selectAll("#bars")
        .data(barsDataset)
        .transition()
        .duration(500)
        .attr("x", function(d, i) {
            return margin.right+ 5 + (i * ((w/2)/barsDataset.length));
        })
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", function(d){
            return yScale(d.value);
        })
        .attr("fill", function(d){
            var type = d.key;
            if(clicked[type]){
                return "gray";
            } else {
                var checkbox = document.getElementById("colors");
                return colorPicker(checkbox.checked, type);
            }
        });

    svgMap.selectAll("circle")
        .data(features)
        .transition()
        .duration(500)
        .attr("cx", function (d) {
            var coordinates = d.geometry.coordinates;
            return projection(coordinates)[0];
        })
        .attr("cy", function (d) {
            var coordinates = d.geometry.coordinates;
            return projection(coordinates)[1];
        })
        .attr("r", "3px")
        .attr("stroke", function(d){
            var type = typeTransformation(d.properties.tipo);
            if(clicked[type])
                return "gray";
            else
                return "black";
        })
        .attr("fill-opacity", function(d){
            var type = typeTransformation(d.properties.tipo);
            if(clicked[type])
                return 0.1;
            else
                return 1.0;
        })
        .attr("fill", function(d){
            var type = typeTransformation(d.properties.tipo);
            if(clicked[type]){
                return "gray";
            } else {
                var checkbox = document.getElementById("colors");
                return colorPicker(checkbox.checked, type);
            }
        });

}

function colorPicker(checked, type){
    if (checked){
        if (type == "Ciclistas")
            return "#4daf4a";
        else if (type == "Automóveis e outros")
            return "#ff7f00";
        else if (type == "Colisoes e Atropelamentos")
            return "#a65628";
        else if (type == "Pedestres")
            return "#984ea3";
        else if (type == "Pedestres e Ciclistas")
            return "#e41a1c";
        else if (type == "Ciclomotores")
            return "#377eb8";
        else if (type == "Total")
            return "#ffff33";
    }
    return "gray";
}

function typeTransformation(type){
    if (type == "Ciclistas" || type == "Cicliestas"){
        return "Ciclistas";
    }else if (type == "Automóveis e outros" || type == "Automóveis" || type == "Outros"){
        return "Automóveis e outros";
    }else if (type == "Atropelamentos" || type == "Colisões"){
        return "Colisoes e Atropelamentos";
    }else if (type == "Pedestre" || type == "Pedestres"){
        return "Pedestres";
    }else if (type == "Ciclistas e Pedestres" || type == "Ciclistas e pedestre" || type == "Pedestres e ciclista"){
        return "Pedestres e Ciclistas";
    }else if (type == "Motocicletas" || type == "Motos e Ciclomotores" || type == "Motocicleta" || type == "Moto e Ciclomotor" || type == "Ciclomotores"){
        return "Ciclomotores";
    }else{
        return "Automóveis e outros";
    }
}

function getProperties(isSelection, selection, propertiesInDataset){
    var unorderedSelection = {"Pedestres e Ciclistas":0,"Colisoes e Atropelamentos":0, "Ciclomotores":0, "Ciclistas":0, "Pedestres":0, "Automóveis e outros":0};
    var emptySelection = true;

    for (var i = 0 ; i < propertiesInDataset.length ; i ++){
        var type = typeTransformation(propertiesInDataset[i]["tipo"]);
        if(isSelection){
            if(pointInside(selection,propertiesInDataset[i])){
                unorderedSelection[type] += 1;
                emptySelection = false;
            }
        } else if (!isSelection){
                unorderedSelection[type] += 1;
        } else {
            console.log("ERROR >> There is no valid option when trying to get the properts");
        }
    }

    if(isSelection && emptySelection)
        return fullHistDataset;
    else
        return unorderedSelection;
}

//Width and height
var w = 800;
var h = 600;

//Global variables
var features = [];
var neighborhoodsData = [];
var projection = [];
var path = [];
var yScale = [];
var fullHistDataset = [];
var barsDataset = [];


function loadAndRender(svgMap, svgHist, svgLine){
    // Render Map.
    loadAndRenderDataMap(svgMap, svgHist, svgLine);
}

function renderHist(svgHist, data){
    var localHistDataset = {};

    if (Object.keys(data).length == 0) {
        var propertiesInDataset = features.map(element => element.properties);
        localHistDataset = getProperties(false,[],propertiesInDataset);
        fullHistDataset = localHistDataset;
    } else {
        localHistDataset = data;
    }

    barsDataset = [];

    for (var element in localHistDataset)
        barsDataset.push({key:element, value:localHistDataset[element], clicked:false});

    var max = d3.max(barsDataset, function(d) { return d.value; });
    yScale = d3.scaleLinear()
        .domain([0, max])
	    .range([0,h/2]);

    var yAxisScale = d3.scaleLinear()
        .domain([0,max])
        .range([h/2-margin.top,margin.top]);

    var yAxis = d3.axisLeft(yAxisScale).ticks(12);
    var yAxisGroup = d3.select("#yAxis").attr("transform","translate(" + (margin.right) + ",0)").transition().call(yAxis);

    svgHist.selectAll("#bars")
        .data(barsDataset)
        .enter()
        .append("rect")
        .attr("id", "bars")
        .attr("x", function(d, i) {
            return margin.right+ 5 + (i * ((w/2)/barsDataset.length));
        })
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", function(d){
            return yScale(d.value);
        })
        .attr("fill", function(d){
            var type = d.key;
            if(clicked[type]){
                return "gray";
            } else {
                var checkbox = document.getElementById("colors");
                return colorPicker(checkbox.checked, type);
            }
        })
        .on("click", function(d,i){
            d3.event.stopPropagation();
            clicked[d.key] = !clicked[d.key];
            return unmarkType();
        })
        .on("mouseover", function(d, i) {
            var type = d.key;
            var x = (margin.right + (i * ((w/2)/barsDataset.length)));
            x = x + 30 > (w/2) ? x - 30 : x;
            var y = ((h/2) - yScale(d.value))
            y = y - 10 < 0 ? y +15 : y;
            gHist.append("text")
                .attr("class", "info")
                .attr("x", x)
                .attr("y", y)
                .attr("font-weight", "bold")
                .attr("stroke", "black")
                .attr("stroke-width",0.2)
                .attr("fill", colorPicker(true, d.key))
                .attr("dy", ".35em")
                .text(d.value+" "+type);
        })
        .on("mouseout", function(d) {
            d3.select("text.info").remove();
        });

    svgHist.selectAll("#bars")
        .data(barsDataset)
        .transition()
        .duration(500)
        .attr("x", function(d, i) {
            return margin.right+ 5 + (i * ((w/2)/barsDataset.length));
        })
        .attr("y", 0)
        .attr("width", 20)
        .attr("height", function(d){
            return yScale(d.value);
        })
        .attr("fill", function(d){
            var type = d.key;
            if(clicked[type]){
                return "gray";
            } else {
                var checkbox = document.getElementById("colors");
                return colorPicker(checkbox.checked, type);
            }
        });
}

var linesChartDataset = {
	"Total":{3:0, 4:0, 5:0, 6:0, 7:0, 8:0,9:0,10:0,11:0,12:0},
	"Colisoes e Atropelamentos":{3:0, 4:0, 5:0, 6:0, 7:0, 8:0,9:0,10:0,11:0,12:0},
	"Ciclomotores":{3:0, 4:0, 5:0, 6:0, 7:0, 8:0,9:0,10:0,11:0,12:0},
	"Ciclistas":{3:0, 4:0, 5:0, 6:0, 7:0, 8:0,9:0,10:0,11:0,12:0},
	"Pedestres":{3:0, 4:0, 5:0, 6:0, 7:0, 8:0,9:0,10:0,11:0,12:0},
	"Automóveis e outros":{3:0, 4:0, 5:0, 6:0, 7:0, 8:0,9:0,10:0,11:0,12:0},
    "Pedestres e Ciclistas":{3:0, 4:0, 5:0, 6:0, 7:0, 8:0,9:0,10:0,11:0,12:0}
};

var lineChartDataset = [];

function renderLines(){
    var yDataScale = d3.scaleLinear()
        .domain([0,d3.max(lineChartDataset[0].values, function(d){ return d[1]; })])
        .range([margin.top+20,h/2-margin.top+5]);

    var xDataScale = d3.scaleLinear()
        .domain([3,12])
        .range([0,w/2 - margin.right - 10]);

    var line = d3.line()
        .x(function(d) { return xDataScale(d[0]); })
        .y(function(d) { return yDataScale(d[1]); });

    svgLine.selectAll("path.line").remove();

    lineChartDataset.forEach(function (d){
            svgLine.append("path")
                .attr("class", "line")
                .attr("d", function() {
                    var values = d.values;
                    return line(values);
                })
                .attr("stroke",function(){
                    var type = d.key;
                    if(clicked[type]){
                        return "gray";
                    } else {
                        var checkbox = document.getElementById("colors");
                        return colorPicker(checkbox.checked, type);
                    }
        		})
                .attr("stroke-width", 3)
                .attr("fill", "none")
                .attr("transform", "translate(30,0)")
                .on("click", function(){
                    d3.event.stopPropagation();
                    d3.select("text.info").remove();
                    clicked[d.key] = !clicked[d.key];
                    return unmarkType();
                })
                .on("mouseover", function() {
                    var type = d.key;
                    var mouse = d3.mouse(this);
                    var xValue = parseInt(xDataScale.invert(mouse[0]), 10) - 3;
                    var value = d.values[xValue][1];
                    var x = mouse[0];
                    var y = h/2 - mouse[1];
                    groupLineChart.append("text")
                        .attr("class", "info")
                        .attr("x", x)
                        .attr("y", y)
                        .attr("font-weight", "bold")
                        .attr("stroke", "black")
                        .attr("stroke-width",0.2)
                        .attr("fill", colorPicker(true, d.key))
                        .attr("dy", ".35em")
                        .text(value+":"+type);
                })
                .on("mouseout", function() {
                    groupLineChart.select("text.info").remove();
                });
    });
}

function renderLineChart(svgLine){

	lineChartDataset = [
		{key:"Total", values:[[3,0], [4,0], [5,0], [6,0], [7,0], [8,0],[9,0],[10,0],[11,0],[12,0]]},
		{key:"Colisoes e Atropelamentos", values:[[3,0], [4,0], [5,0], [6,0], [7,0], [8,0],[9,0],[10,0],[11,0],[12,0]]},
		{key:"Ciclomotores", values:[[3,0], [4,0], [5,0], [6,0], [7,0], [8,0],[9,0],[10,0],[11,0],[12,0]]},
		{key:"Ciclistas", values:[[3,0], [4,0], [5,0], [6,0], [7,0], [8,0],[9,0],[10,0],[11,0],[12,0]]},
		{key:"Pedestres", values:[[3,0], [4,0], [5,0], [6,0], [7,0], [8,0],[9,0],[10,0],[11,0],[12,0]]},
		{key:"Automóveis e outros", values:[[3,0], [4,0], [5,0], [6,0], [7,0], [8,0],[9,0],[10,0],[11,0],[12,0]]},
        {key:"Pedestres e Ciclistas", values:[[3,0], [4,0], [5,0], [6,0], [7,0], [8,0],[9,0],[10,0],[11,0],[12,0]]}
	];

    for (var i = 0 ; i < lineChartDataset.length ; i++){
        var line = lineChartDataset[i];
        var lineName = line.key;
        var lineValues = line.values;
        var datasetLine = linesChartDataset[lineName];

        for (var j = 0 ; j < lineValues.length ; j++){
            var month = lineValues[j][0];
            var datasetValueMonth = datasetLine[month];
            lineValues[j][1] = datasetValueMonth;
        }
    }

    var yDataScale = d3.scaleLinear()
        .domain([0,d3.max(lineChartDataset[0].values, function(d){ return d[1]; })])
        .range([margin.top+20,h/2-margin.top+5]);

    var yAxisScale = d3.scaleLinear()
        .domain([0,d3.max(lineChartDataset[0].values, function(d){ return d[1]; })])
        .range([h/2-margin.top+5,margin.top+20]);

    var yAxis = d3.axisLeft(yAxisScale).ticks(6);
    var yAxisGroup = d3.select("#yAxisChart").attr("transform","translate(30,-20)").transition().call(yAxis);

    var xDataScale = d3.scaleLinear()
        .domain([3,12])
        .range([0,w/2 - margin.right - 10]);

    var xAxisScale = d3.scaleLinear()
        .domain([3,12])
        .range([0,w/2 - margin.right - 10]);

    var xAxis = d3.axisBottom(xAxisScale).ticks(10);
    var xAxisGroup = d3.select("#xAxisChart").attr("transform","translate(30,280)").transition().call(xAxis);

    renderLines();
}

function sumIntoIncidentsData(features){
	var month = getMonthFromStr(features[0].properties.data);
	for (element in features){
		var total = linesChartDataset["Total"];
		total[month] += 1;
		var type = typeTransformation(features[element].properties.tipo);
		var totalByType = linesChartDataset[type];
		totalByType[month] += 1;
	}
}

function getMonthFromStr(str){
	var parts = str.split("\/");
	return parseInt(parts[1],10);
}

var featuresByMonth = [];

function agregateFeatures(incidents){
    features = features.concat(incidents.features);
    featuresByMonth.push(incidents.features);
}

function loadAndRenderDataMap(svgMap,svgHist,svgLine){
    // Creating projection
    projection = d3.geoMercator()
        .scale(1)
        .translate([0, 0]);
    // Seting projection path
    path = d3.geoPath().projection(projection);

    d3.json("bairros.geojson", function(neighborhoods) {

        neighborhoodsData = neighborhoods;
        // Updating bounds, scale and translate values related to the dataset
        var bounds = path.bounds(neighborhoods);
        var scale = 0.90 / Math.max((bounds[1][0] - bounds[0][0]) / w, (bounds[1][1] - bounds[0][1]) / h);
        var translate = [(w - scale * (bounds[1][0] + bounds[0][0])) / 2, (h - scale * (bounds[1][1] + bounds[0][1])) / 2];
        var center = d3.geoCentroid(neighborhoods);

        projection
            .center(center)
            .fitSize([w-10, h-10], neighborhoods);

        svgMap.append("rect")
            .attr("width", w)
            .attr("height", h)
            .attr("stroke", "black")
            .attr("fill", "none");

        svgMap.selectAll("path")
           .data(neighborhoods.features)
           .enter()
           .append("path")
           .attr("d", path)
           .attr("stroke", "black")
           .attr("fill", "none");

        d3.json("acidentes-2014-11-novembro.geojson", function (incidentsNov){

            agregateFeatures(incidentsNov);

            d3.json("acidentes-2014-03-marco.geojson", function (incidentsMar){

                agregateFeatures(incidentsMar);

                d3.json("acidentes-2014-04-abril.geojson", function (incidentsAbr){

                    agregateFeatures(incidentsAbr);

                    d3.json("acidentes-2014-05-maio.geojson", function (incidentsMai){

                        agregateFeatures(incidentsMai);

                        d3.json("acidentes-2014-06-junho.geojson", function (incidentsJun){

                            agregateFeatures(incidentsJun);

                            d3.json("acidentes-2014-07-julho.geojson", function (incidentsJul){

                                agregateFeatures(incidentsJul);

                                d3.json("acidentes-2014-08-agosto.geojson", function (incidentsAgo){

                                    agregateFeatures(incidentsAgo);

                                    d3.json("acidentes-2014-09-setembro.geojson", function (incidentsSet){

                                        agregateFeatures(incidentsSet);

                                        d3.json("acidentes-2014-10-outubro.geojson", function (incidentsOut){

                                            agregateFeatures(incidentsOut);

                                            d3.json("acidentes-2014-12-dezembro.geojson", function (incidentsDez){

                                                agregateFeatures(incidentsDez);

                                                for (element in features)
                                                    features[element]["clicked"] = false;

                                                svgMap.selectAll("circle")
                                            		.data(features)
                                                    .enter()
                                            		.append("circle")
                                            		.attr("cx", function (d) {
                                                        var coordinates = d.geometry.coordinates;
                                                        return projection(coordinates)[0];
                                                    })
                                            		.attr("cy", function (d) {
                                                        var coordinates = d.geometry.coordinates;
                                                        return projection(coordinates)[1];
                                                    })
                                            		.attr("r", "3px")
                                                    .attr("stroke","black")
                                            		.attr("fill", function(d){
                                                        var type = typeTransformation(d.properties.tipo);
                                                        var checkbox = document.getElementById("colors");
                                                        return colorPicker(checkbox.checked, type);
                                                });

                                                renderHist(svgHist,{});

                                    			for (var i = 0 ; i < featuresByMonth.length ; i++)
                                                    sumIntoIncidentsData(featuresByMonth[i]);
                                    			renderLineChart(svgLine);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function pointInside(selection, pointInDataset){
    // Taking point coordinates and translating to the projection coordinates
    var point = [pointInDataset["longitude"], pointInDataset["latitude"]]
    point = projection(point);

    // Getting selections and point poisitions
    var startX = parseInt(selection.attr("x"),10);
    var finalX = startX + parseInt(selection.attr("width"),10);
    var startY = parseInt(selection.attr("y"),10);
    var finalY = startY + parseInt(selection.attr("height"),10);

    var pointX = parseInt(point[0],10);
    var pointY = parseInt(point[1],10);

    /*
    //DEBUG POSITIONS
    console.log("--- selection x and y:");
    console.log(startX);
    console.log(finalX);
    console.log(startY);
    console.log(finalY);

    console.log("--- point x and y:");
    console.log(point);

    console.log(pointX);
    console.log(pointY);*/

    if ((startX <= pointX && pointX <= finalX)
     && (startY <= pointY && pointY <= finalY))
        return true;
    else
        return false;
}

function renderDataset(){

    path = d3.geoPath().projection(projection);

    svgMap.selectAll("path")
        .transition()
        .duration(100)
        .attr("d", path)
        .attr("stroke", "black")
        .attr("fill", "none");

    svgMap.selectAll("circle")
        .transition()
        .duration(100)
        .attr("cx", function (d) {
            var coordinates = d.geometry.coordinates;
            return projection(coordinates)[0];
        })
        .attr("cy", function (d) {
            var coordinates = d.geometry.coordinates;
            return projection(coordinates)[1];
        })
        .attr("r", "3px")
        .attr("stroke","black")
        .attr("fill", function(d){
            var type = typeTransformation(d.properties.tipo);
            if(clicked[type]){
                return "gray";
            } else {
                var checkbox = document.getElementById("colors");
                return colorPicker(checkbox.checked, type);
            }
        });
}

// Global variables for mouse
var xDifference = 0;
var yDifference = 0;
var initialMousePosition  = [0,0]
var state = "idle";
var scaleFactor = 1.0;
var rightClick = false;
var mouseInitialTranslate;

function addMouseFunctions(svgMap){

    // Prevent context menu of opening
    svgMap.on("contextmenu", function(d,i){
        d3.event.preventDefault();
    });

    // Decides and implements wheter zoom or select
    svgMap.on("mousedown", function(){
        d3.event.stopPropagation();
		d3.event.preventDefault();
        var button = d3.event.button;
        if (button == 0 || button == 1){
            rightClick = false;
            var p = d3.mouse(this);
    	    initialMousePosition = p;
            mouseInitialTranslate = projection.translate();
            state = "pan";
        } else if (button == 2){
            rightClick = true;
            var p = d3.mouse(this);
            d3.select("#main").append("rect")
            .attr("rx", 6)
            .attr("ry", 6)
            .attr("class", "selection")
            .attr("x", p[0])
            .attr("y", p[1])
            .attr("width", 0)
            .attr("height", 0)
            .attr("fill-opacity", 0.0)
            .attr("stroke-width", 2)
            .attr("stroke", "gray")
            .attr("stroke-linecap","round")
            .attr("stroke-dasharray",5.5);
        }
    });

    svgMap.on("mousemove", function() {
        d3.event.stopPropagation();
		d3.event.preventDefault();
        if(state === "pan"){
            /*var p = d3.mouse(this);

            xDifference -= p[0] - initialMousePosition[0];
            yDifference -= p[1] - initialMousePosition[1];

            var destination = [(mouseInitialTranslate[0]+(-1)*yDifference),(mouseInitialTranslate[1]+(-1)*xDifference)];
            projection.translate(destination);*/
		} else {
            var s = d3.select("#main").select("rect.selection");

            if(!s.empty()) {
                var p = d3.mouse(this);

                var d = {
                    x       : parseInt(s.attr("x"),10),
                    y       : parseInt(s.attr("y"),10),
                    width   : parseInt(s.attr("width"),10),
                    height  : parseInt(s.attr("height"),10)
                };

                var move = {
                    x : p[0] - d.x,
                    y : p[1] - d.y
                };

                if( move.x < 1 || (move.x*2<d.width)) {
                    d.x = p[0];
                    d.width -= move.x;
                } else {
                    d.width = move.x;
                }

                if( move.y < 1 || (move.y*2<d.height)) {
                    d.y = p[1];
                    d.height -= move.y;
                } else {
                    d.height = move.y;
                }

                s.attr("x", d.x)
                .attr("y", d.y)
                .attr("width", d.width)
                .attr("height", d.height);
            }
        }
    });

    svgMap.on("mouseup", function() {
        d3.event.stopPropagation();
		d3.event.preventDefault();
        if(rightClick){
            console.log("EVENT >> Mouseup for right click.")
            var selection = d3.select("#main").select("rect.selection");

            var pointsInDataset = features.map(element => element.properties);

            var dataset = getProperties(true,selection,pointsInDataset);
            selection.remove();
            renderHist(svgHist,dataset);


        } else {
            state = "idle";

            var mouseNow = d3.mouse(this);
            var difference = [initialMousePosition[0]-mouseNow[0],initialMousePosition[1]-mouseNow[1]];
            var destination = [(mouseInitialTranslate[0]+(-1)*difference[0]),(mouseInitialTranslate[1]+(-1)*difference[1])];
            projection.translate(destination);

            renderDataset();
        }
    });

    svgMap.on("wheel.zoom",function(d){
        d3.event.stopPropagation();
	    d3.event.preventDefault();

	    if(d3.event.deltaY > 0){
            scaleFactor = 1.05;
        }
	    else{
            scaleFactor = 0.95;
        }

        var mouse = d3.mouse(this);
        var scale = projection.scale() * scaleFactor;
        var center = projection.invert(mouse);

        projection
            .scale(scale)
            .center(center)
            .translate([w/2,h/2])
        ;

        renderDataset();
	});
}

var margin = { "top": 10, "right": 40 , "bottom":10, "left":20 }

function init(){
    var path = d3.geoPath();

    gHist = d3.select("body")
                .append("svg")
                .attr("width", w/2)
                .attr("height", h/2)
                .attr("id", "histGroup");

    gHist.append("rect")
        .attr("id", "border")
        .attr("width", w/2)
        .attr("height", h/2)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("fill", "none");

    gHist.append("g")
        .attr("width", w/2 - margin.right)
        .attr("height", h/2 - margin.top)
        .attr("id","yAxis");

    svgHist = d3.select("#histGroup")
                .append("svg")
                .attr("id","hist")
                .attr("width", w/2)
                .attr("height", h/2)
                .attr("transform", "translate(0,"+((h/2)+margin.top)+") scale(1,-1)");

    groupLineChart = d3.select("body")
                        .append("svg")
                        .attr("width",w/2)
                        .attr("height",h/2)
                        .attr("id","chartGroup");

    groupLineChart.append("g")
        .attr("width", w/2 - margin.right)
        .attr("height", h/2 - margin.top)
        .attr("transform", "translate(400,300)")
        .attr("id","yAxisChart");

    groupLineChart.append("g")
        .attr("width", w/2 - margin.right)
        .attr("height", h/2 - margin.top)
        .attr("transform", "translate(400,300)")
        .attr("id","xAxisChart")
        .text("Months");

    groupLineChart.append("text")
        .attr("x",255)
        .attr("y",15)
        .attr("font-family", "sans-serif")
        .attr("font-size", "12px")
        .attr("fill", "red")
        .attr("id","label")
        .text("X: Meses vs Y: #acidentes");

    svgLine = d3.select("#chartGroup")
                .append("svg")
                .attr("width",w/2)
                .attr("height",h/2)
                .attr("id","lineChart")
                .attr("transform", "translate(0,"+((h/2)+margin.top)+") scale(1,-1)");


    groupLineChart.append("rect")
        .attr("id", "border")
        .attr("width", w/2)
        .attr("height", h/2)
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("fill", "none");

    var svgMap = d3.select("body")
                .append("svg")
                .attr("id","main")
                .attr("width", w)
                .attr("height", h);

    loadAndRender(svgMap, svgHist, svgLine);

    addMouseFunctions(svgMap);

    return svgMap;
}

var groupLineChart = [];
var svgLine = [];
var gHist = [];
var svgHist = [];
var svgMap = init();
