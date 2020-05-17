// from data.js

var tableData = data;

console.log(tableData);

var t_body = d3.select("tbody");

tableData.forEach(function(sighting) {
        console.log(sighting);
            var row = t_body.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
        cell.text(value);
         }); 
});



var filter = d3.select("#filter-btn");

filter.on("click", function() {

    t_body.html("");

    var input_Field = d3.select("#datetime");
    var input_Value = input_Field.property("value");

    console.log(input_Value);

    var filteredData = tableData.filter(sighting => sighting.datetime === input_Value);

    console.log(filteredData);

    filteredData.forEach(function(selections) {

        console.log(selections);
       
        var row = t_body.append("tr");
        
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
});