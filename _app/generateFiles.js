'use strict';
var fs = require('fs-extra'),
	zipDir = require('zip-dir');

// example
var buildList = {
	folderName: 'parent-folder', // This will create an index file by default
	filesArray: ['index', 'about-us', 'surgeons', 'contact', 'specials'], // file names will be given the templates file extension
	template: 'template.cshtml' // include directory and extension
};

//generateFiles(buildList);

function generateFiles(obj){
	
	fileArrayLoop(obj.filesArray, buildFile);
	
	zipDir('./zipped', { saveTo: './files.zip' }, function(err, buffer){
		console.log('zipped');
	});
	
	function buildFile(fileName){
	
		var folderName = obj.folderName;
	
		var template = obj.template;
		var extension = '.' + template.split('.')[1];
	
		var newFile = 'zipped/' + fileName + extension;
	
		// template, directory + filename;
		fs.copy(template, newFile, function(err){
			if(err)  { 
				console.error(err); 
			} else {
				console.log('File generated: ' + fileName + extension);
			}
		});
	}
	
	
	// Need to: loop over file names and be able to call a function on that file
	function fileArrayLoop(arr, func){
		if(!Array.isArray(arr)){ return; }
	
		var arrayContainsIndex = arr.indexOf('index') > -1;
	
		if(!arrayContainsIndex){
			arr.push('index');
		}
	
		for(var i = 0; i < arr.length; i++){
			func(arr[i]); // will run function with string of file name passed to it
		}
	}
}

module.exports = generateFiles;