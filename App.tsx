import App from './src/main';
export default App;


// Utilized one API https://my-json-server.typicode.com/benirvingplt/products/products in the app (HomeScreen.tsx).
// APIs can also be moved outside to a new file(s)
// Individual screen with details for items can be added as such
// navigation.navigate('ItemDetailScreen', {
//   itemId: idNumber,
// });
// and then the API can be called on that screen with the route param for that item ID
// e.g. fetch(`https://my-json-server.typicode.com/benirvingplt/products/products/${route.params.itemId}`)
// and then the new screen can be populated with the response.
// Not sure why this API was given https://my-json-server.typicode.com/benirvingplt/products/menu
// since its response does not contain any data that can relate to any other screen or its corresponding API response data.
// If it was meant to create the main menu, then we can use it in a flatlist or with array.map and navigate to the relevant screen.
// Already used the above mentioned steps across the app in different ways.

// TESTS
// Wrote some basic test cases.
// Similarly we can import parent child components and check their value expectations and then the state inside context API (main.tsx) to have that expected value
// e.g.
// const shouldHave = [{id: 1, img: 'abc.png', quantity: 1...}];
// const subject = [{...}. {...}]
// shouldHave.map(item => expect(subject).toContain(item) && expect(item.quantity).toBe(1));
// ...etc