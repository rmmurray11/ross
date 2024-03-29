define(['pipAPI', 'https://rmmurray11.github.io/ross/extension.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Sport', //Will appear in the data.
		    title : {
		      media : {word : 'Sport'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{image : 'b1.jpg'}, 
    			{image : 'b2.jpg'}, 
    			{image : 'b3.jpg'}, 
    			{image : 'b4.jpg'}, 
    			{image : 'b5.jpg'}, 
    			{image : 'b6.jpg'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Woman', //Attribute label
			title : {
				media : {word : 'Woman'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{image : 'w1.jpg'}, 
    				{image : 'w2.jpg'}, 
    				{image : 'w3.jpg'}, 
    				{image : 'w4.jpg'}, 
    				{image : 'w5.jpg'}, 
    				{image : 'w6.jpg'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Man', //Attribute label
			title : {
				media : {word : 'Man'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{image : 'm1.jpg'}, 
    				{image : 'm2.jpg'}, 
    				{image : 'm3.jpg'}, 
    				{image : 'm4.jpg'}, 
    				{image : 'm5.jpg'}, 
    				{image : 'm6.jpg'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://rmmurray11.github.io/ross/pics'
  }}
  );
  });

