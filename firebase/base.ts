'usec client'
import {
  QueryDocumentSnapshot,
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc
} from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'
import { db, storage } from './config'

// Create a new document
const create = async (collectionRef: any, data: object) => {
  const docRef = await addDoc(collectionRef, data)
  return docRef.id
}
// Read a single document
const read = async (collectionName: string, id: string) => {
  const docRef = doc(collection(db, collectionName), id)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return { id: docSnap.id, ...(docSnap.data() as any) }
  } else {
    return null
  }
}

// Read all documents in a collection
const readAll = async (collectionRef: any) => {
  const querySnapshot = await getDocs(collectionRef)
  const documents = []
  querySnapshot.docs.forEach((doc: any) => {
    documents.push({ id: doc.id, ...doc.data() })
  })
  return documents
}
export type Condition<T> = [string, T[keyof T] | T[keyof T][]]

const findAll = async <T>(collectionRef: any, conditions: Condition<T>[]): Promise<T[]> => {
  const querySnapshot: QuerySnapshot<T> = await getDocs(collectionRef)
  const data: T[] = []
  querySnapshot.forEach((doc: QueryDocumentSnapshot<T>) => {
    const docData = doc.data()
    if (doc.exists() && docData) {
      // Check if snapshot exists and contains data
      const item: T = { ...docData, id: doc.id } // Include document ID as 'id' property in returned data
      if (
        conditions.every((condition) => {
          const [key, value] = condition
          return Array.isArray(value) ? value.includes(item[key]) : item[key] === value
        })
      ) {
        data.push(item)
      }
    }
  })
  return data
}
// Update a document
const update = async (collectionRef: any, id: string, data: object) => {
  await updateDoc(doc(collectionRef, id), data)
}

// Delete a document
const deleteItem = async (collectionRef: any, id: string) => {
  await deleteDoc(doc(db, collectionRef, id))
}

const addImage = async (file: File, path: string): Promise<string> => {
  const storageRef = ref(storage, path)
  const snapshot = await uploadBytes(storageRef, file)
  return snapshot.metadata.fullPath
}

export { create, deleteItem, read, readAll, update, addImage, findAll }
