// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, addDoc, getDocs, getFirestore, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCowDxxBps8fqwiIfruFm_oiwHRuKWjz8c',
	authDomain: 'degen-forest.firebaseapp.com',
	projectId: 'degen-forest',
	storageBucket: 'degen-forest.appspot.com',
	messagingSenderId: '794228378325',
	appId: '1:794228378325:web:313052ec8ff10b2f69305c',
	measurementId: 'G-W665RQNTX6'
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// export firestore
const db = getFirestore(app);
export const getFirestoreData = async function () {
	const col = collection(db, 'stats');
	const querySnapshot = await getDocs(col);
	const docs = querySnapshot.docs;
	console.log('docs ....', docs);
	if (docs.length > 0) {
		return docs.map((doc) => doc.data())[0];
	} else {
		return [];
	}
};

export const addFirestoreData = async function (data: Array<any>) {
	console.log('_data firestore ...', JSON.stringify(data));

	try {
		const col = collection(db, 'stats');
		const querySnapshot = await getDocs(col);
		const docs = querySnapshot.docs;
		if (docs.length > 0) {
			return docs.map((doc) => {
				deleteDoc(doc.ref);
			});
		}
		if (data.length > 0) {
			const docRef = await addDoc(collection(db, 'stats'), {
				data: data,
				created_at: new Date().getTime().toString()
			});
			console.log('Document written with ID: ', docRef.id);
		}
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};
