import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

          <IonToolbar>
            <IonTitle size="small">This is Jheanel's App</IonTitle>
            
          </IonToolbar>
          <IonButton>Press</IonButton>
        
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
