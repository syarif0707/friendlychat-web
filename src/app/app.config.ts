import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
      provideFunctions(() => getFunctions()),
      provideStorage(() => getStorage()),
      provideMessaging(() => getMessaging())
    ),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-a4b1f","appId":"1:607383984793:web:3f3dfba54ebcc9ccf3f608","storageBucket":"friendlychat-a4b1f.firebasestorage.app","apiKey":"AIzaSyBXIYHzHRbBngpR6nKcwRCtEW3eUIMtrqY","authDomain":"friendlychat-a4b1f.firebaseapp.com","messagingSenderId":"607383984793"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-a4b1f","appId":"1:607383984793:web:3f3dfba54ebcc9ccf3f608","storageBucket":"friendlychat-a4b1f.firebasestorage.app","apiKey":"AIzaSyBXIYHzHRbBngpR6nKcwRCtEW3eUIMtrqY","authDomain":"friendlychat-a4b1f.firebaseapp.com","messagingSenderId":"607383984793"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
