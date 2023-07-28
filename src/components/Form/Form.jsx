import { useState, useEffect } from "react"
import style from './Form.module.css'
import logoImage from '../../img/Rick-and-Morty.png'

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const handleChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };
    const validate = () => {
        let err = {...errors}

        if (validEmail.test(userData.email)) err.email = ''
        else err.email = 'Invalid Email'

        if (userData.password.length >= 6) err.password = ''
        else err.password = 'Su contraseña debe tener más de 6 caracteres'

        setErrors(err)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    useEffect(()=>{
        validate()
    }, [userData])

    return (
        <div className={style.formContainer}>
            <img className={style.img} src={logoImage} alt="" />
            <form className={style.form} action="">
                {/* <label>EMAIL</label> */}
                <input 
                    className={style.inputForm}
                    name="email" 
                    value={userData.email} 
                    type="email" 
                    placeholder="Email..."
                    onChange={handleChange}
                />
                {errors.email !== '' ? <p className={style.error}>X {errors.email}</p> : ''}

                {/* <label>PASSWORD</label> */}
                <input 
                    className={style.inputForm}
                    name="password"
                    value={userData.password}
                    type="password"
                    onChange={handleChange}
                    placeholder="Password..."
                />
                {errors.password !== '' ? <p className={style.error}>X {errors.password}</p> : ''}

                <button className={style.btn} onClick={handleSubmit} type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Form