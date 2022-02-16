
const Login = ()=>{
return(
    <>
        <section className="container-fluid">
            <main className="row align-items-start">
                <div className="col-lg-6  col-md-12  col-sm-12">
                    <img src='images/nimasa-logo.png' alt='nimasa-logo' />
                    <div className="d-grid gap-4 col-4 mx-auto mt-5">
                        <h3>Sign In</h3>
                        <p>Welcome, kindly login with your credentials to use the app</p>
                        <input className="form-control" type="text" id="name" name="name" placeholder='Email' />
                        <input className="form-control" type="password" id="password" name="password" placeholder='Password' />
                        <button className="btn btn-success form-control" type="button">SIGN IN</button>
                    </div>
                </div>
                <div className="col-lg-6 d-none d-sm-none d-md-none d-lg-block ">
                    <img src='images/img.png' alt='view-of-nimasa' />
                </div>
            </main>
        </section>
    </>
)
}
export default Login;