import React, { useState, useEffect } from 'react';
import { db } from '../db/firebase';
import { collection, getDocs, query, where, Timestamp, setDoc, doc } from 'firebase/firestore/lite';
import { useParams } from "react-router-dom";

function Events() {
  const { id } = useParams();
  const [eventData, setEventData] = useState();
  const [eventId, setEventId] = useState();
  const [paramId, setParamId ] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      setParamId(id);
    }
  }, [id]);
  useEffect(() => {
    if (paramId) {
      const collectionRef = collection(db, 'events');
      const q = query(collectionRef, where('name', '==', paramId))
      getDocs(q).then(docs => {
        if (docs.lenght > 1) {
          setError(true);
        } else {
          docs.forEach((doc) => {
            setEventId(doc.id);
            setEventData(doc.data());
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          });
        }
      });
    }
  }, [paramId]);

  return (
    <>
      <h1>{`Event: ${paramId} - ${eventId}`}</h1>
      {eventData && (
        <div className="events"><span>{JSON.stringify(eventData)}</span></div>
      )}
    </>
  );
}

export default Events;