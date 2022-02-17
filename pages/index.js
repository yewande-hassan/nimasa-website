import { Formik } from 'formik';
const Login = ()=>{
return(
    <>
        <section className="container-fluid" >
            <main className="row align-items-start" style={{
          height:'100%',
          width:'100%'
        }}>
                <div className="col-lg-6  col-md-12  col-sm-12">
                    <img src='images/nimasa-logo.png' alt='nimasa-logo' />
                    <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validate={values => {
                        const errors = {};

                        if (!values.email) {
                            errors.email = 'Incorrect Email';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    validate={values => {
                        const errors = {};
                        if (!values.password) {
                            errors.password = 'Please Input a Password';
                        } else if (
                            values.password == null
                        ) {
                            errors.email = 'Input password';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,

                    }) => (
                        <form onSubmit={handleSubmit} className="d-grid gap-4 col-4 mx-auto mt-5">
                            <h3>Sign In</h3>
                            <p>Welcome, kindly login with your credentials to use the app</p>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <div className='error'>
                                {errors.email && touched.email && errors.email}
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            <div className='error'>
                                {errors.password && touched.password && errors.password}
                            </div>
                            <button type="submit" className="btn btn-success form-control" disabled={isSubmitting}>SIGN IN</button>
                        </form>)}
                </Formik>
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