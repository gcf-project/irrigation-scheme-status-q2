ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([23.258839, -22.758547, 37.890363, -15.227453]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_NationalProvincialboundaries_2 = new ol.format.GeoJSON();
var features_NationalProvincialboundaries_2 = format_NationalProvincialboundaries_2.readFeatures(json_NationalProvincialboundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NationalProvincialboundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NationalProvincialboundaries_2.addFeatures(features_NationalProvincialboundaries_2);
var lyr_NationalProvincialboundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NationalProvincialboundaries_2, 
                style: style_NationalProvincialboundaries_2,
                popuplayertitle: 'National Provincial boundaries',
                interactive: true,
                title: '<img src="styles/legend/NationalProvincialboundaries_2.png" /> National Provincial boundaries'
            });
var format_GCFDistricts_3 = new ol.format.GeoJSON();
var features_GCFDistricts_3 = format_GCFDistricts_3.readFeatures(json_GCFDistricts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GCFDistricts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GCFDistricts_3.addFeatures(features_GCFDistricts_3);
var lyr_GCFDistricts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GCFDistricts_3, 
                style: style_GCFDistricts_3,
                popuplayertitle: 'GCF Districts',
                interactive: true,
                title: '<img src="styles/legend/GCFDistricts_3.png" /> GCF Districts'
            });
var format_IrrigationSchemeSites_4 = new ol.format.GeoJSON();
var features_IrrigationSchemeSites_4 = format_IrrigationSchemeSites_4.readFeatures(json_IrrigationSchemeSites_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IrrigationSchemeSites_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrrigationSchemeSites_4.addFeatures(features_IrrigationSchemeSites_4);
var lyr_IrrigationSchemeSites_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrrigationSchemeSites_4, 
                style: style_IrrigationSchemeSites_4,
                popuplayertitle: 'Irrigation Scheme Sites',
                interactive: true,
    title: 'Irrigation Scheme Sites<br />\
    <img src="styles/legend/IrrigationSchemeSites_4_0.png" /> Civil works completed<br />\
    <img src="styles/legend/IrrigationSchemeSites_4_1.png" /> Crop production commenced<br />\
    <img src="styles/legend/IrrigationSchemeSites_4_2.png" /> On-going civil works<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_NationalProvincialboundaries_2.setVisible(true);lyr_GCFDistricts_3.setVisible(true);lyr_IrrigationSchemeSites_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenTopoMap_1,lyr_NationalProvincialboundaries_2,lyr_GCFDistricts_3,lyr_IrrigationSchemeSites_4];
lyr_NationalProvincialboundaries_2.set('fieldAliases', {'ID': 'ID', 'PROVINCE_N': 'PROVINCE_N', 'AREA': 'AREA', 'POPULATION': 'POPULATION', 'POPU_M': 'POPU_M', 'POPU_F': 'POPU_F', 'PERIMETER': 'PERIMETER', });
lyr_GCFDistricts_3.set('fieldAliases', {'fid': 'fid', 'NAME1_': 'NAME1_', 'NAME2_': 'NAME2_', });
lyr_IrrigationSchemeSites_4.set('fieldAliases', {'fid': 'fid', 'Scheme': 'Scheme', 'Province': 'Province', 'District': 'District', 'Ward': 'Ward', 'Water_Sour': 'Water Source', 'Status': 'Status', 'Total_ha_': 'Total Area (Ha)', 'html_exp': 'Photos', 'completion': 'Completion', });
lyr_NationalProvincialboundaries_2.set('fieldImages', {'ID': 'Hidden', 'PROVINCE_N': 'Hidden', 'AREA': 'Hidden', 'POPULATION': 'Hidden', 'POPU_M': 'TextEdit', 'POPU_F': 'TextEdit', 'PERIMETER': 'Hidden', });
lyr_GCFDistricts_3.set('fieldImages', {'fid': 'Hidden', 'NAME1_': 'Hidden', 'NAME2_': 'Hidden', });
lyr_IrrigationSchemeSites_4.set('fieldImages', {'fid': 'Hidden', 'Scheme': 'TextEdit', 'Province': 'TextEdit', 'District': 'TextEdit', 'Ward': 'Hidden', 'Water_Sour': 'TextEdit', 'Status': 'TextEdit', 'Total_ha_': 'TextEdit', 'html_exp': 'ExternalResource', 'completion': 'Hidden', });
lyr_NationalProvincialboundaries_2.set('fieldLabels', {'POPU_M': 'hidden field', 'POPU_F': 'hidden field', });
lyr_GCFDistricts_3.set('fieldLabels', {});
lyr_IrrigationSchemeSites_4.set('fieldLabels', {'Scheme': 'header label - visible with data', 'Province': 'header label - visible with data', 'District': 'header label - visible with data', 'Water_Sour': 'header label - visible with data', 'Status': 'header label - visible with data', 'Total_ha_': 'header label - visible with data', 'html_exp': 'header label - visible with data', });
lyr_IrrigationSchemeSites_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});