export class Password {
    constructor(root){
        this.element = document.createElement('input');
        this.element.type = 'password';
        this.value = '';
        root.append(this.element);
    }
}