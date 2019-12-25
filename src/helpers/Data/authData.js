import firebase from 'firebase/app';
import 'firesbase/auth';

const getUid = () => firebase.auth().currentUser.uid;

export default { getUid };
