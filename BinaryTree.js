
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
        return false;
    }
}


const tree = new BinaryTree();

const usuarios = `usuarios`;
//Agregamos a los usuarios.
for(let i = 1; i < u.length; i++){
    tree.insertar(u[i]);
}
