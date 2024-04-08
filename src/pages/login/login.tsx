import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar, useIonRouter, IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';
import { FormInput } from '@/components/shared/form/input';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted with data:', formData);
  };
    // const router = useIonRouter()

    // useEffect(() =>{
    //   const timeout = setTimeout(() =>{
    //     router.push('/home')
    //   }, 2000)
    
    //   return () => { clearTimeout(timeout) }
    // }, [])

  return (
    <>
      <IonPage id="main-content">
        <IonContent>
            <header className="header bg-light-blue absolute top-0 left-0 right-0">
              <div className="img__container">
                <div className="flex justify-center">
                  <div className='translate-y-1/2 bg-light-blue rounded-[50%] p-6'>
                    <img src="/assets/scholar_go_logo.png" className='img-logo' alt="Logo" width="60" height="100" />
                  </div>
                </div>
              </div>
            </header>
            <main className="bg-primary-blue min-h-screen">
              <div className="min-h-screen flex items-center justify-center">
                <form className='w-4/5 max-w-lg' onSubmit={handleSubmit}>
                  <FormInput type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' />
                  <FormInput type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' />

                  <div className="text-right">
                    <Link to="/password-reset" className=" text-right text-slate-600">Forgot Password?</Link>
                  </div>
                  <IonButton type="submit" className="w-full text-white rounded-[5px] p-2 mt-4">Login</IonButton>
                </form>
              </div>
            </main>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Login;
