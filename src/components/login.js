export class Login {
    constructor(root){
        this.element = document.createElement('input');
        this.element.type = 'text';
        root.append(this.element);

    }
}