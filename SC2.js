define(['pipAPI', 'https://rmmurray11.github.io/ross/extension.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Girls', //Will appear in the data.
		    title : {
		      media : {word : 'Girl'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : 'Jessica'}, 
    			{word : 'Jasmine'}, 
    			{word : 'Katy'}, 
    			{word : 'Madison'}, 
    			{word : 'Amy'}, 
    			{word : 'Melissa'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Not Sport', //Attribute label
			title : {
				media : {word : 'Not Sport'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Barbie'},
				{word: 'Dress'},
				{word: 'Perfume'},
				{word: 'Nails'},
				{word: 'Dolls'},
				{word: 'Pink'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Sport', //Attribute label
			title : {
				media : {word : 'Sport'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Baseball'},
				{word: 'Athlete'},
				{word: 'Run'},
				{word: 'Speed'},
				{word: 'Activity'},
				{word: 'Homerun'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });

