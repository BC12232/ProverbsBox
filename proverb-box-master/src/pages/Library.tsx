import {
  IonPopover,
  IonGrid,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonTitle,
  IonToolbar, 
  IonSearchbar,
  IonCol,
  IonButton
} from '@ionic/react';
import { book, build, colorFill, grid } from 'ionicons/icons';
import React, {useState} from 'react';
import './Library.css';

import {IProverb} from "../components/ProverbInterface";
import {Proverb} from "../components/Proverb";

type ILibraryProps = {
  proverbs: Array<IProverb>
}

const Library: React.FC<ILibraryProps> = (props: ILibraryProps) => {
  const [showPopover, setShowPopover] = useState(false);

  let proverbDisplay :any = props.proverbs.map((prov:IProverb) =>{
    return (<Proverb Proverb={prov}></Proverb>);
  });


  return (
    <IonPage>
    <IonPopover isOpen={showPopover} onDidDismiss={e => setShowPopover(false)}>
        <p>This is popover content</p>
     </IonPopover>
      <IonHeader>
       
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton onClick={() => setShowPopover(true)}>
                  <IonIcon slot = "start" icon = {book} />
                </IonButton>
              </IonCol>
              <IonCol>
                <IonTitle>Library</IonTitle>
              </IonCol>
            </IonRow>
           <IonRow>
             <IonSearchbar></IonSearchbar>
           </IonRow>
         </IonGrid>
          
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {proverbDisplay}
      </IonContent>
    </IonPage>
  );
};

export default Library;
