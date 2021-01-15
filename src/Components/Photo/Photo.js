import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PHOTO_GETBYID } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import PhotoContent from './PhotoContent';

const Photo = () => {
    const { id } = useParams();
    const { data, error, request } = useFetch();

    useEffect(() => {
        const { url, options } = PHOTO_GETBYID(id);
        const { response } = request(url, options);
    }, [request, id]);

    if (error) return <Error error={error} />   
    if (data) 
        return (
            <section className="container mainContainer">
                <PhotoContent single={true} data={data} />
            </section>
        );
    
    else return null;
    
};

export default Photo;
