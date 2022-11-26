import { useState } from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { markFavorite, unMarkFavorite } from '../features/favorites/favoritesSlice';

const  MarkFavorite = ({resource}) => {
    const [favorite, setFavorite] = useState(false);
    const dispatch = useDispatch();

    const addToFavorites = (resource) => {
        const favorite = {
            id: resource.id,
            name: resource.name,
            author: resource.author,
            source: resource.source,
            img: resource.img  
        };
        console.log(favorite);
        setFavorite(true);
        dispatch(markFavorite(favorite));
    };

    const removeFromFavorites = (favorite) => {
        setFavorite(false);
        dispatch(unMarkFavorite(favorite));
    };

    if (favorite === true) {
        return (
           
                <Button 
                    className='btn btn-secondary'
                    size='sm'
                    onClick={() => removeFromFavorites()}
                    >
                    <i className='fa fa-heart favorite-heart' aria-hidden='true' />
                </Button>
         
        );
    } else {

    return (
      

                        <Button
                        color="white"
                        className='btn btn-secondary'
                        outline
                        size='sm'
                        onClick={() => addToFavorites(resource)}
                        active={favorite === true}
                        >
                        <i className='fa fa-heart-o' aria-hidden='true' />
                        </Button>
        
    );

    

        
    }
  }

  export default MarkFavorite;