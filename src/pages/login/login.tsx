import React, { useEffect, useState } from 'react';
import { IonItem, IonLabel, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar, useIonRouter, IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
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
            <header className="header bg-light-blue">
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
                  <IonItem>
                    <IonLabel>Name</IonLabel>
                    <IonInput type="text" name="name" value={formData.name} onIonChange={handleChange}></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonLabel>Email</IonLabel>
                    <IonInput type="email" name="email" value={formData.email} onIonChange={handleChange}></IonInput>
                  </IonItem>
                  <IonButton expand="block" onClick={handleSubmit}>Submit</IonButton>
                </form>
              </div>
            </main>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Login;
