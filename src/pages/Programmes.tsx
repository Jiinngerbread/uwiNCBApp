import {IonContent, IonCard, IonCardHeader, IonCardTitle, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel } from '@ionic/react';
import './Home.css';
import './About.css';

const Programmes: React.FC = () => {
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
            <IonTitle size="large">Programmes at UWI</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonCard>
          <IonCardHeader>
            <IonCardTitle> Undergraduate Programmes </IonCardTitle>
          </IonCardHeader>
        </IonCard>
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>BSc General</IonCardTitle>
            </IonCardHeader>
          <IonList> 
              {/* <IonListHeader>BSc General</IonListHeader>    */}
            <IonItem>
                <IonLabel>1. Computer Science</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>2. Software Engineering</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>BSc Information Technology</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>BSc Computer Studies</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>BSc. Software Engineering (Mobile Application Technologies)</IonLabel>
            </IonItem>
          </IonList>
        </IonCard>


        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Minors are Offered as Follows:</IonCardTitle>
            </IonCardHeader>
          <IonList> 
              {/* <IonListHeader>BSc General</IonListHeader>    */}
            <IonItem>
                <IonLabel>1. Minor in Computer Science</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>2. Minor in Software Engineering</IonLabel>
            </IonItem>
            <IonItem>
                <IonLabel>3. Minor in Information Technology</IonLabel>
            </IonItem>
            </IonList>

        </IonCard>
        
        
      </IonContent>
    </IonPage>
  );
};

export default Programmes;
