import './styles.scss'

function Login() {

    function handleLogin() {
        alert("Login")
    }

    return (
        <div id="container">
            <div id='loginArea'>
                <div id="logo">
                    <span>Logo</span>
                </div>
                <form id="loginForm">
                    <div className='inputLoginGroup'>
                        <label for="email"><span>Email</span></label>
                        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className='inputLoginGroup'>
                        <label for="email"><span>Senha</span></label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" />
                    </div>
                    <div>
                        <input type="submit" value={handleLogin} />
                    </div>
                </form>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Login;