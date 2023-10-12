class Node {
    constructor(user){
        this.user = user;
        this.izquierda = null;
        this.derecha = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }

    insertar(user){
        const newNode = new Node(user);
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true){
                if(user.id === currentNode.user.id){
                    return "Ya existe uno con ese id";
                }
                if(user.id < currentNode.user.id){
                    if(currentNode.izquierda === null){
                        currentNode.izquierda = newNode;
                        return true;
                    }

                    currentNode = currentNode.izquierda;
                } else {
                    if(currentNode.derecha === null){
                        currentNode.derecha = newNode;
                        return true;
                    }
                    currentNode = currentNode.derecha;
                }
            }
        }
    }
    buscar(id){
        let currentNode = this.root;

        while(currentNode !== null){
            if(id === currentNode.user.id){
                return currentNode.user;
            } else if(id < currentNode.user.id){
                currentNode = currentNode.izquierda;
            } else {
                currentNode = currentNode.derecha;
            }
        }
        return "No encontrado";
    }

    borrar(id) {
        this.root = this.borrarNodo(this.root, id);
    }

    borrarNodo(root, id) {
        if (root === null)
            return null;

        if (id < root.user.id) {
            root.izquierda = this.borrarNodo(root.izquierda, id);
        } else if (id > root.user.id) {
            root.derecha = this.borrarNodo(root.derecha, id);
        } else {
            if (root.izquierda === null) {
                return root.derecha;
            } else if (root.derecha === null) {
                return root.izquierda;
            }

            const sucesor = this.encontrarMinimo(root.derecha);
            root.user = sucesor.user;
            root.derecha = this.borrarNodo(root.derecha, sucesor.user.id);
        }

        return root;
    }

    encontrarMinimo(root) {
        while (root.izquierda !== null) {
            root = root.izquierda;
        }
        return root;
    }

    modificarUsuario(id, nuevoUsuario) {
        this.root = this._modificarUsuario(this.root, id, nuevoUsuario);
    }

    _modificarUsuario(root, id, nuevoUsuario) {
        if (root === null)
            return null;

        if (id < root.user.id) {
            root.izquierda = this._modificarUsuario(root.izquierda, id, nuevoUsuario);
        } else if (id > root.user.id) {
            root.derecha = this._modificarUsuario(root.derecha, id, nuevoUsuario);
        } else {
            root.user = nuevoUsuario;
        }

        return root;
    }

    verArbol(){
        return this.root;
    }
}

const usuarios = require('./usuarios.json');

const tree = new BinaryTree();

const newUser = {
    "id" : 1,
    "usuario" : "Jojojojo11",
    "password" : "12345",
    "nombre" : "Juan",
    "apellidos" : "Orgado Tello"
};

usuarios.forEach((usuario) => {
    tree.insertar(usuario);
});


console.log(tree.insertar(newUser));
console.log(tree.buscar(6));

tree.borrar(6);

console.log(tree.buscar(6));
console.log(tree.buscar(7));

const UsuarioModificado = {
    "id" : 1,
    "usuario" : "NuevoUsuario123",
    "password" : "nuevacontraseña",
    "nombre" : "NuevoNombre",
    "apellidos" : "NuevoApellido"
};

tree.modificarUsuario(1, UsuarioModificado);

console.log(tree.buscar(1));