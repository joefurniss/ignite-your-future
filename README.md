# Ignite your future

## Getting started
Clone repo by typing the following into a terminal:

```bash
git clone https://github.com/joefurniss/ignite-your-future.git
```

In terminal running the folder for this project, to install the dependencies run:

```bash
yarn
```

## Development

To start the server for development run: 

```bash
yarn dev
```

## Snippets
```js 

(function(){

    console.clear();

    var cheese = 'Cheddar';

    var cheeses = ['Cheddar', 'Brie', 'Gouda'];

    var cheeseObject = {
        name: 'Cheddar',
        vegatarian: true,
    }

    var cheesesList = [
        {
            name: 'Cheddar',
            vegetarian: true
        },
        {
            name: 'Brie',
            vegetarian: false,
        },
        {
            name: 'Gouda',
            vegetarian: false,
        }
    ];

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });

}());

```
