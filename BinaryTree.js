import usuarios from './usuarios.json'

class Node {
    constructor(valor){
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}
class BinaryTree{
    constructor(){
        this.root = null;
    }

    insertar(valor){
        const newNode = new Node(valor);
        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true){
                if(valor < currentNode.valor){
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
    verValor(){
        return this.root;
    }

    buscar(valor){
        let currentNode = this.root;

        while(currentNode !== null){
            if(valor === currentNode.valor){
                console.log(currentNode.valor);
                currentNode = currentNode.derecha;
                if(currentNode === null){
                    return true;
                }
            } else if(valor < currentNode.valor){
                currentNode = currentNode.izquierda;
            } else {
                currentNode = currentNode.derecha;
            }
        }
        return false;
    }
}


const tree = new BinaryTree();
//Agregamos a los usuarios.
for(let i = 1; i < 8; i++){
    tree.insertar(usuarios.Usuarios.find(usuario => usuario.id === i));
}

tree.buscar(2);
