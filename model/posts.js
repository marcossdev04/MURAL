module.exports = {
    posts: [
        {   
            id: "1",
            title:"teste do mural",
            description: "descriçao teste",
        },
    ],
    getAll(){
        return this.posts
    },
    newPost(title,description){
        this.posts.push({ id: generateId() ,title ,description })
    }
}
function generateId(){
    return Math.random().toString(36).substring(2,9)
}