const firebaseConfig = {
  apiKey: "AIzaSyAPW65Pg89WNjypDOBSw9EBIOLkP2L1cag",
  authDomain: "disneyclone-54648.firebaseapp.com",
  projectId: "disneyclone-54648",
  storageBucket: "disneyclone-54648.firebasestorage.app",
  messagingSenderId: "385520591936",
  appId: "1:385520591936:web:e45071c64ca5c49e9eaba5",
  measurementId: "G-GPM4EXE30B",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, db, storage, provider };
