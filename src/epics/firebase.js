import firebase from 'firebase'
import {combineEpics} from 'redux-observable'
import {Observable} from 'rxjs'

const SAVE_DATA = "SAVE_DATA"
const LOAD_DATA = "LOAD_DATA"

const firebaseSaveEpic = (action$, state) =>
  action$.ofType(SAVE_DATA)
    .do(()=>firebase.database().ref("state").set(state.getState()))
    .mapTo({type: "SAVED_DATA"})

const firebaseLoadEpic = (action$) =>
    action$.ofType(LOAD_DATA)
        .switchMap(()=>Observable.fromPromise(firebase.database().ref("state").once("value")))
        .map(x=>({type: "INIT_DATA", payload: x.val()}))

export const firebaseEpics = combineEpics(
    firebaseSaveEpic,
    firebaseLoadEpic
)