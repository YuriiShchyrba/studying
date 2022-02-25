import { Form } from "./components/form";
import { Main } from "./components/main";

export class App {
    constructor(root){
        this.element = document.createElement('div');
        root.append(this.element);
        this.element.innerHTML = 'Yeah';
        this.main = new Main(this.element);
        //this.element.append(this.main.element);
        // this.form = new Form(this.element);
        // this.main = null;
        // this.element.style.width = '500px'
        // this.element.style.height = '500px'
        // this.form.element.onsubmit = this.someFunction.bind(this);
    }

    // someFunction (e){
    //     const data = this.form.getValues();

    //     // location.href = 'http://localhost:3000/main';
    //     if(data.password === '123' && data.login === 'login'){
    //         while(this.element.firstChild){
    //             this.element.removeChild(this.element.firstChild);
    //         }
    //         this.main = new Main(this.element);
    //         this.element.append(this.main.element);
    //     } else console.log('wrong stuff');
    //     e.preventDefault();
    // }

}