import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp, IonContent, IonHeader,
  IonIcon, IonItem,
  IonLabel, IonList, IonMenu,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs, IonTitle, IonToolbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import {
  libraryOutline,
  bookmarkOutline,
  shuffleOutline
} from 'ionicons/icons';
import Library from './pages/Library';
import Bookmarked from './pages/Bookmarked';
import Discover from './pages/Discover';
import Details from './pages/Details';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './fonts/font-config.css';

// Test API Functionality
import TestScript2 from "./api/TestScript2"
//import conf from "./api/TestScriptConfig.json"
import ContentManager from "./api/ContentManager"
// TestScript hook.
//if (conf.test2) {TestScript2()}

// init content manager
let cm = new ContentManager();

const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonMenu side="start" menuId="folders">
            <IonHeader>
              <IonToolbar color="primary">
                <IonTitle>Folders</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem>Wisdom Verses</IonItem>
                <IonItem>Stewardship Verses</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
                <IonItem>Menu Item</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet>
            <Route path="/library" component={() => <Library contentManager={cm}/>} exact={true}/>
            <Route path="/bookmarked" component={Bookmarked} exact={true}/>
            <Route path="/bookmarked/details" component={Details}/>
            <Route path="/discover" component={() => <Discover contentManager={cm}/>} exact={true}/>
            <Route path="/" render={() => <Redirect to="/library"/>} exact={true}/>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="library" href="/library">
              <IonIcon icon={libraryOutline}/>
              <IonLabel>Library</IonLabel>
            </IonTabButton>
            <IonTabButton tab="bookmarked" href="/bookmarked">
              <IonIcon icon={bookmarkOutline}/>
              <IonLabel>Bookmarked</IonLabel>
            </IonTabButton>
            <IonTabButton tab="discover" href="/discover">
              <IonIcon icon={shuffleOutline}/>
              <IonLabel>Discover</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
);

export default App;