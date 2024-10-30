async function generateImage(promptData) {
  // Step 1: Add an API key below. Copy the API key from GChat.
  const apiKey = "..."

  // Step 2: Add the endpoint URL here.
  // Go to the OpenAI API documentation: https://platform.openai.com/docs/api-reference/
  // Add the POST request endpoint for creating images using DALL-E below. 

  const url = "..."

  // Create the 'options' object.
  // This object will contain the details needed to make the request
  // Step 3: Add request method
  // Step 4: Add the headers object with the keys Content-Type and Authorization. 
  // Step 5: Add the body (The actual body data will be an input from this function)
  const options = {

  }

  // Step 6: Add the options object as the second parameter in fetch()
  const response = await fetch(url);

  const data = await response.json();
  console.log(data); 
  return data;
}

// Step 7: Call the function with a data object
// It should return an image of an underwater library with glowing jellyfish and ancient books.
generateImage({});

// Group Work: Part 1
// Using the function above, create two new function definitions for other POST requests. 
// Look at the API documentation to learn how to configure your promptData object. 
// You can use your own prompts, here are some prompts for inspiration: 
// "A futuristic cityscape at sunset with flying cars and neon lights"
// "A steampunk robot holding an umbrella in a rainy forest"
// "A cozy coffee shop with a cat sitting on the counter, in watercolor style"
// "A medieval knight riding a unicorn through a field of sunflowers"
// "A spaceship landing on a crystal-covered planet under a starry sky"
// "A 1950s diner with astronauts eating ice cream"
// "A magical forest where trees have lanterns hanging from the branches"
// "A tropical island with a volcano and rainbow-colored water"
// "A dragon curled up in a cozy cabin, reading a book by the fireplace"


// 1. Create a POST request to return 2 images, each 512x512 pixels, with a "natural" style. (Not two seperate POST requests, one request that creates 2 images)
// 2. Set up a POST request using the DALL-E 3 model to generate one high-definition image with a vivid style, at a size of 1024x1792 pixels.
