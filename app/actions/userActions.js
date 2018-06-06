export default function signUp (user) {
  console.log('setting user action');
  return {
    type: 'SET_USER',
    payload: user
  }
}
