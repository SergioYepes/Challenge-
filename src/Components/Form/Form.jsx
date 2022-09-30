import React, {useState} from 'react';
import {Formik,Form,Field,ErrorMessage} from "formik";
import form from "./form.module.css"

function ContactForm() {
    const[enviado,setEnviado]=useState(false)
    return(
        <div className={form.container}>
            <h3 className={form.titulo}>NEWSLETTER</h3>
            <Formik
                initialValues={{
                    nombre:"",
                    correo:"",
                }}
                validate={(valores)=>{
                    let errores={}

                    if(!valores.nombre){
                        errores.nombre= "Por favor ingresa un nombre"
                    }
                    else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                        errores.nombre= "El nombre solo de incluir letras"
                    }
                    
                    if(!valores.correo){
                        errores.correo= "Por favor ingresa un Email"
                    }
                    else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                        errores.correo= "El formato de email no es correcto"
                    }
                    return errores
                }}
                onSubmit={(valores,{resetForm})=>{
                    resetForm();
                    console.log("enviado")
                    setEnviado(true)
                    setTimeout(()=> setEnviado(false),5000)
                }}
            >
                {(props)=>(
                    <Form className={form.formulario}>

                    <div>
                        <label>Nombre </label>
                        <Field 
                            id="nombre"
                            type="text"
                            name="nombre"
                            placeholder='insert name'   
                        />
                        <ErrorMessage  name="nombre" component={()=>(<div className={form.error}>{props.errors.nombre}</div>)}/>
                    </div>
                    <div>
                        <label>Email </label>
                        <Field 
                            id="correo"
                            type="text"
                            name="correo"
                            placeholder='inserte correo ej: correo@correo.com'   
                        />
                        <ErrorMessage name="correo" component={()=><div className={form.error}>{props.errors.correo}</div>}/>
                    </div>
                    <button type="submit" >enviar</button>
                    {enviado && <p className={form.exito}>Enviado con exito</p>}
                </Form>
                )}
                
            </Formik>
        </div>
    )
}
export default ContactForm;