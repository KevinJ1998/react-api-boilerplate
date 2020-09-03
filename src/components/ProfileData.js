import React, { useEffect, useState } from 'react';
import { useAuth } from '../providers/Auth';
import { Descriptions, Badge } from 'antd';
import { useCategoriesUser } from '../data/useCategoriesUser';

const ProfileData = () => {
  const userData = { ...useAuth() };
  const categories  = useCategoriesUser();
  console.log( 'useAuth', JSON.stringify( userData ) );
  const [ user, setUser ] = useState( {} );
  useEffect( () => {
    setUser( userData.currentUser );
    return () => {
      setUser( {} );
    };
  }, [ userData ] );

  console.log( 'categories', categories );


  return (
    <>
      {
        userData.isAuthenticated
          ?
          <Descriptions title={ `${ user.name }` } column={ 2 } bordered>
            <Descriptions.Item label='Email'>{ user.email }</Descriptions.Item>
            <Descriptions.Item label='Se unió'>{ user.created_at }</Descriptions.Item>
            <Descriptions.Item label='Email verificado'>{ user.email_verified_at !== null
              ? user.email_verified_at
              : 'No' }</Descriptions.Item>
            <Descriptions.Item label='Tipo de usuario'>{ user.userable_type === 'App\\Writer'
              ? 'Escritor'
              : 'Admin' }</Descriptions.Item>
            <Descriptions.Item label='Categorías suscrito'>
              Data disk type: MongoDB
              <br />
              Database version: 3.4
              <br />
              Package: dds.mongo.mid
              <br />
              Storage space: 10 GB
              <br />
              Replication factor: 3
              <br />
              Region: East China 1<br />
            </Descriptions.Item>
          </Descriptions>
          : ''
      }
    </>
  );
};

export default ProfileData;