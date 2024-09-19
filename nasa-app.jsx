import axios from "axios";
import { useEffect, useState } from "react"

export function NasaAPI()
{

    const [marsObject, setMarsObject] = useState({photos:[]});

    function LoadData(){
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot")
        .then(response=>{
            setMarsObject(response.data);
        })
    }

    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <main className="d-flex flex-wrap">
                {
                    marsObject.photos.map(photo=>
                     <div key={photo.id} className="card m-2 p-2" style={{width:'200px'}}>
                        <img src={photo.img_src} height="150" className="card-img-top" />
                        <div className="card-header">
                            <h3>{photo.id}</h3>
                        </div>
                        <div className="card-body">
                            <dl>
                                <dt>Camera</dt>
                                <dd>{photo.camera.full_name}</dd>
                                <dt>Rover</dt>
                                <dd>{photo.rover.name}</dd>
                            </dl>
                        </div>
                     </div>
                    )
                }
            </main>
        </div>
    )
}