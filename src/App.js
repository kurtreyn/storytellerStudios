import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { setCurrentUser, setUserAuth } from './redux/user';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import NavRoutes from './routes/NavRoutes';
import './styles/app.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const { isAuth } = useSelector((state) => state.user);
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const currentUser = useAuth();

  function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));

      return unsub;
    }, []);

    return currentUser;
  }

  // const fetchFeaturedProduct = async () => {
  //   onSnapshot(featureProdRef, (snapshot) => {
  //     const results = snapshot.docs.map((doc) => {
  //       return { ...doc.data(), key: doc.id };
  //     });
  //     dispatch(setFeaturedProduct(results));
  //   });
  // };

  return (
    <div className="app-container">
      <BrowserRouter>
        <NavRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
