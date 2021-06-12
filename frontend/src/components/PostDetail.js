import React, { useState, useEffect  } from 'react';
import Typography from '@material-ui/core/Typography';




function PostDetail(props) {

    const id = props.match.params.id;
    const[details, setDetails] = useState([]);

    // note to self: useEffect is used to tell react that it needs to do something after render
    useEffect(()=>{
        getData();

        }, []
    );

    function getData() {
        fetch(`/api/posts/${id}/`)
        .then((response) =>{
            return response.json();
        })
        .then(json =>setDetails(json))
        .catch((error) =>console.log(error));
    }
    console.table(details);


    return (
        <>
            <div style={{textAlign: 'center'}}>
                <Typography variant="h2" component="h2" >{details.name}</Typography>
            </div>
            <div>
                <p className="normal_text"> <span>Instructions:<br/></span>{details.instructions}</p>
                <p className="normal_text"><span>Ingredients:<br/></span>{details.ingredients}</p>
                {/* <a href={`/recipe/${id}/delete`} className="btn">Delete</a> */}
            </div>
                
            
            

        </>
        );

  }

export default PostDetail;
  