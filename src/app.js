import { Form } from "./components/form";

export class App {
    constructor(root){
        this.element = document.createElement('div');
        root.append(this.element);
        this.element.innerHTML = 'Yeah';
        this.form = new Form(this.element);
        this.element.style.width = '500px'
        this.element.style.height = '500px'
        this.form.element.addEventListener('submit', (e)=>{
            console.log('In app')
            console.log(this.form.getValues());
            e.preventDefault();
        });
    }

    checkerFunction 
}