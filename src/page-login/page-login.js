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

function show_page_login(){
    document.body.insertAdjacentHTML("beforeend",page_login_markup);

    let login_button = document.getElementById("page-login-button-login");
    login_button.addEventListener("click",function(e){
        show_page_map();
        const page_login = document.getElementById("page-login");
        page_login.parentElement.removeChild(page_login);
    })
}