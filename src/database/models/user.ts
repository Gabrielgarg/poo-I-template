export class User{

    //se usar assim eles ja vem como public
    
    // id:string
    // name:string
    // email:string
    // password:string
    // createdAt:string

    public constructor(
        private id:string,
        private name:string,
        private email:string,
        private password:string,
        private createdAt:string)
        {
        // this.id = id
        // this.name = name
        // this.email = email
        // this.password = password
        // this.createdAt = createdAt
    }
    public getId(): string{
        console.log("id foi acessado!")
        return this.id
    }
    public getName(): string{
        console.log("nome foi acessado!")
        return this.name
    }
    public getEmail(): string{
        console.log("email foi acessado!")
        return this.email
    }
    public getPassword(): string{
        console.log("senha foi acessado!")
        return this.password
    }
    public getCreatedAt(): string{
        console.log("criado quando foi acessado!")
        return this.createdAt
    }
    public setId(newId:string) :void{
        console.log("id foi alterado!")
        this.id = newId
    }
}

//instanciar o user = popular
const user1 = new User("001", "João", "joao123@gmail.com", "1234","17/04/2023")
const user2 = new User("002", "Felipe", "felipe123@gmail.com", "1234","17/04/2023")