var products = [
    {name: "Banana", type: "Fruit", quantity: 5, price: 12},
    {name: "Celery", type: "Vegetable", quantity: 10, price: 22},
    {name: "Apple", type: "Fruit", quantity: 30, price: 32},
    {name: "Corriander", type: "Vegetable", quantity: 6, price: 42}
];

var filteredProducts = [];
for(let i =0; i<products.length;i++)
{
    if(products[i].type==='Fruit')
    {
        filteredProducts.push(products[i]);
    }
}
//console.log(filteredProducts);

let newFilteredProducts = products.filter(product => {
    return product.type==='Fruit';
})
//console.log(newFilteredProducts);


var newFilteredProducts1 = products.filter(product =>{
    return (product.type==='Vegetable' && product.quantity>5 && product.price<23)
})
//console.log(newFilteredProducts1);


// For Post and comments 

var Post = 
    {id: 4, title: "New Post"};

var comments = [
    { postId: 4, content: 'awesome!!'},
    { postId: 4, content: 'Wow you killed it!!'},
    { postId: 3, content: 'Congratualations dear.'},
    { postId: 2, content: 'Hurrah you enjoyed.'},
    { postId: 7, content: 'That`s amazing!!'},
    { postId: 4, content: 'Great job.'}
]


// return comments where post id matches to the post id.

function commentsForPost(post, comments){   
    return comments.filter(function(comment){
        return comment.postId===Post.id;
    })
}
// let commentsforId = comments.filter(comment =>{

//     return comment.postId=== Post.id;
// })

console.log(commentsForPost(Post, comments));

