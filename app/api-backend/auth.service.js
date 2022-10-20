import { Alert } from 'react-native'
import firebase from './firebase'
const dbRef = firebase.firestore().collection('users')

export const registerUser = (newUser) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
}

export const loginUser = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
}

export const getUser = async (email, password) => {
  const response = await dbRef.get()
  if (response.exists) {
    const user = res.data()
    return {
      key: res.id,
      name: user.name,
      email: user.email,
      contact: user.contact,
    }
  } else {
    throw new Error('User does not exist!')
  }
}
