import {IonContent, IonCard, IonCardHeader, IonCardTitle, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonImg, IonCardContent } from '@ionic/react';
import './Home.css';
import photo from '../image/jheanelbrown.png';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="home"></IonBackButton>
          </IonButtons>
          <IonTitle>About Me</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About Me</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle> Welcome to my Page! </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <IonImg src={photo}>Photo of me</IonImg>
            Hey there! My name is Jheanel. I am a budding Software Developer learning to use Ionic!
            </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default About;
