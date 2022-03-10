// function createBookShop(inventory){
//     return{
//         inventory: inventory,
//         inventoryValue: function(){
//             return this.inventory.reduce((total, book) => total + book.price,0);
//         },
//         priceForTitle: function(title){
//             return this.inventory.find(book => book.title === title).price;
//         }
//     }
// }

// with es6
function createBookShop(inventory){
    return{
        inventory,  // if key and value are same then just use only one time (compacted fashion).
        inventoryValue(){ // if value is function then ommit ": and function" keyword to make it more compact.
            return this.inventory.reduce((total, book) => total + book.price,0);
        },
        priceForTitle(title){
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const inventory = [
    { title: 'Harry Potter', price: 10},
    { title: 'Java script', price: 15}
]

const bookShop = createBookShop(inventory);
// console.log(bookShop);
// console.log(bookShop.inventoryValue());
// console.log(bookShop.priceForTitle('Harry Potter'));

function saveFile(url, data){
    $.ajax({ 
        url,
        data, 
        method: 'POST'
    })
}
const url = 'http://uploadfile.com';
const data = {color: 'red'}
console.log(saveFile(url, data));