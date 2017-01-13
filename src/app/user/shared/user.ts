export class User {
  // TODO: uid should not be stored as its already $key
  uid: string;
  displayName: string;
  email: string;
  photoURL: string;

  constructor(options: {
    uid?: string,
    displayName?: string,
    email?: string,
    photoURL?: string
  } = {}) {
    this.uid = options.uid;
    this.displayName = options.displayName;
    this.email = options.email;
    this.photoURL = options.photoURL;
  }
}
