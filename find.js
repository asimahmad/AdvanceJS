let users = [{name:"asim"},
{name: "nitish"},
{name: "shivang"}];

var user ;
for(let i=0;i<users.length;i++)
{
    if(users[i].name === 'nitish')
    {
        user = users[i];
        break;
    }
}

//console.log(user);

let user1 = users.find(user =>{
    return user.name==='shivang';
})

//console.log(user1);


function Car(model){
    this.model = model;
}

var cars = [
    new Car('Buick'),
    new Car('Camero'),
    new Car('Focus')
];

var car1 = cars.find(car =>{
    return car.model === 'Focus';
})
//console.log(car1);

var posts = [
    {id: 1, title: 'New Post'},
    {id: 2, title: 'Old Post'},
    {id: 4, title: 'Senior Post'}
]

var comment = {postId:1, content: 'Awesome'}

function PostForComment(posts, comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    })

}

console.log(PostForComment(posts,comment));