export class Main {
    constructor(root){
        this.element = document.createElement('div');
        this.element.style.width = '500px';
        this.element.style.height = '500px';
        this.element.style.backgroundColor = 'red';
        root.append(this.element);
    }
}