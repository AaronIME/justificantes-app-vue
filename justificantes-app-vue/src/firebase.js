import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage} from 'firebase/storage';

const app = initializeApp({
    
    apiKey: "AIzaSyBMrzPW2gccO8fGi_YXC_m2ab9VM1Wv0Ho",
    authDomain: "computonube-7fd50.firebaseapp.com",
    projectId: "computonube-7fd50",
    storageBucket: "computonube-7fd50.appspot.com",
    messagingSenderId: "398123700844",
    appId: "1:398123700844:web:6be9fc279fd2537a8e3e49"
    
});


const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app);
export{ auth, database, storage }

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase-admin/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";

// const admin = 'firebase-admin'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyCUiUUSyDbxx9z3Lbc1HW-JrF_2FVXxSt0",
//   authDomain: "justificantes-app-vue.firebaseapp.com",
//   projectId: "justificantes-app-vue",
//   storageBucket: "justificantes-app-vue.appspot.com",
//   messagingSenderId: "1014450521971",
//   appId: "1:1014450521971:web:371b7c5b76bf55e7d3a706",
//   databaseURL:"https://justificantes-app-vue-default-rtdb.firebaseio.com/"
// };

// Initialize Firebases

// const app = admin.initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const database = getDatabase(app);
// export { auth, database }