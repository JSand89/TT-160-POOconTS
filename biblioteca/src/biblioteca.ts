class Libro {
    titulo:string
    autor:string
    isbn:string
    disponible:boolean
    constructor(titulo:string,autor:string,isbn:string,disponible:boolean = true){
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponible = disponible;
    }
}

class Usuario  {
    nombre : string
    email :string
    librosPrestados : Libro[]
    constructor(nombre:string,email:string){
        this.nombre = nombre;
        this.email = email;
        this.librosPrestados = [];
    }

    prestarLibro(libro:Libro){
        if(libro.disponible){
            this.librosPrestados.push(libro)
            libro.disponible = false;
            console.log(`${libro.titulo} fue prestado a ${this.nombre}`)
            return true
        }else {
            console.log(`El Libro ${libro.titulo} no esta disponible`)
            return false
        }
    }
    devolverLibro(libro:Libro){
        const resultado = this.librosPrestados.filter(elemento=>libro==elemento)
        if(resultado.length>0){
            libro.disponible = true
            console.log(`${libro.titulo} devuelto por ${this.nombre}`)
            this.librosPrestados = this.librosPrestados.filter(elemento=>elemento!=libro)
            return true
        }else{
            console.log(`${libro.titulo} no esta prestado a el usuario ${this.nombre}`)
            return false
        }
    }
}

let libro1 = new Libro("1984","George Orwell","124rt435")
let libro2 = new Libro("Juramentada","Brando Sanderson", "132rjkakjf")
// console.log(libro1)
// console.log(libro2)
let petunia = new Usuario("Petunia","petun")
let javier = new Usuario("Javier","javier@gmail.com")
petunia.prestarLibro(libro2)
petunia.prestarLibro(libro1)
petunia.devolverLibro(libro2)
console.log(petunia.librosPrestados)
// javier.prestarLibro(libro1)