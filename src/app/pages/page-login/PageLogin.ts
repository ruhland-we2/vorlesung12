import './page-login.scss';
import {Page} from '../../lib/Page';

const page_login_markup = `
<div id="page-login" class="page">
    <div id="page-login-header">
        <div class="title">Vorlesung06 Login, SCSS, Bootstrap</div>
    </div>
    <div id="page-login-area">
        <div id="page-login-form" class="container p-5">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="page-login-input-email" placeholder="name@example.com">
                <label for="page-login-input-email">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="page-login-input-password" placeholder="Password">
                <label for="page-login-input-password">Password</label>
            </div>
            <button type="button" id="page-login-button-login" class="btn btn-primary">Login</button>
        </div>
    </div>
</div>
`;

class PageLogin extends Page{
    public map_area: HTMLElement;
    public markup: string;

    constructor(){
        super("page-login");
        this.map_area = null;
        this.markup = page_login_markup;

    }
    Init(){
        let page_elem = document.getElementById(this.id);
        if ( page_elem === null ){
            document.body.insertAdjacentHTML('beforeend', this.markup);
            this.page = document.getElementById("page-login");
        }
    }
    Show(){
        this.page = document.getElementById("page-login");
        if ( this.page === null ){
            this.Init();
        }
        this.SetCallbacks();
    }
    SetCallbacks(){
        let instance = this;
        let login_button = document.getElementById("page-login-button-login").addEventListener("click",event => {
            instance.app.ShowPageMap();
            this.page.parentElement.removeChild(this.page);
        });
    }
}

export {PageLogin};
