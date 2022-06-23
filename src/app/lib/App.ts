import {PageLogin} from '../pages/page-login/PageLogin';
import {PageMap} from '../pages/page-map/PageMap';
import {Tools} from '../lib/Tools';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App{
    public tools: Tools;
    public pageMap: PageMap;
    public pageLogin: PageLogin;

    constructor(){
        this.tools = new Tools();
        this.pageMap = null;
        this.pageLogin = null;
    }
    Init(){
        this.tools.Init();
        this.ShowPageLogin();
    }
    ShowPageMap(){
        let instance = this;
        if ( this.pageMap === null ){
            this.pageMap = new(PageMap);
            this.pageMap.SetApp(instance);
            this.pageMap.Show();     
        }
        else {
            this.pageMap.Show();     
        }
    }
    ShowPageLogin(){
        let instance = this;
        if ( this.pageLogin === null ){
            this.pageLogin = new(PageLogin);
            this.pageLogin.SetApp(instance);
            this.pageLogin.Show();     
        }
        else {
            this.pageLogin.Show();     
        }
    }
}

let app = new App;
export {app, App};