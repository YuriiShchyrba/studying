import { Login } from "./login";
import { Password } from "./password";
import { SubmitBtn } from "./submitBtn";

export class Form {
    constructor(root){
        this.element = document.createElement('form');
        this.inputs = [];
        this.login = new Login(this.element);
        this.inputs.push(this.login);
        this.password = new Password(this.element);
        this.inputs.push(this.password);
        this.submitBtn = new SubmitBtn(this.element);
        this.inputs.push(this.submitBtn);
        this.p = '';
        this.l = '';
        this.inputs.map(el => this.element.append(el.element));
        this.submitBtn.element.addEventListener('click', ()=>{
            this.l = this.login.element.value;
            this.p = this.password.element.value;
        });
        root.appendChild(this.element);
    }

    getValues (){
        const data = {
            login : this.l,
            password : this.p
        };
        return data;
    }
}