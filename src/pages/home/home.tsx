import React from 'react';
import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { arrowBack } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content" className='blue-bg'>
          <IonHeader>
            <IonToolbar className='blue-bg'>
              <IonButtons slot="start">
                <IonMenuToggle>
                  <IonButton aria-label="Go Back" color="primary">
                    <IonIcon icon={arrowBack} style={{ color: 'white' }}></IonIcon>
                  </IonButton>
                </IonMenuToggle>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding blue-bg">This is the menu content.</IonContent>
      </IonMenu>
      <IonPage id="main-content">
          <IonHeader>
            <IonToolbar className='light-blue-bg'>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle></IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding blue-bg">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage>
    </>
  );
};

export default Home;
