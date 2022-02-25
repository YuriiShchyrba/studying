export class SubmitBtn {
    constructor(root){
        this.element = document.createElement('button');
        this.element.innerHTML = 'Submit';
        this.element.type = 'submit';
        root.appendChild(this.element);
    }
}