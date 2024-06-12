import React, { useEffect, useState } from 'react'

const ApiCal = () => {
    const [user, setUers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        // console.log(response)
        setUers(await response.json());
    }
    useEffect(() => {
        getUsers();


    }, []);
    return (
        <>
            <h2> List of GitHUb Users</h2>
            <div className='container-fluid mt-5 '>
                <div className='row text-center d-flex'>
                    {
                        user.map((curElem) => {
                            return (
                                <div>

                                    <div className='col-10 col-md-4 mt-5 ' key={curElem.id}>
                                        <div className='card p-2'>
                                            <div className='d-flex align-item-center'>
                                                <div className='image'> <img src={curElem.thumbnailUrl} className='ronded' width="155" /></div>
                                                <div className='ml-3 w-100'>
                                                    <h4 className="mb-0 mt-0 textleft">Haider</h4><span className='textleft'>{curElem.title}</span>
                                                    <div className='p-2 mt-2 b d-flex justify-content-rounded text-white stats new' >
                                                        <div className='d-flex flex-column'><span className='article'>Articles</span><span className="number1">40</span></div>
                                                        <div className='d-flex flex-column'><span className='followers'>Followers</span><span className="number2">980</span></div>
                                                        <div className='d-flex flex-column'><span className
                                                            ='rating'>Rating </span><span className="number3">89</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                    <div className='col-10 col-md-4 mt-5 '>
                        <div className='card p-2'>
                            <div className='d-flex align-item-center'>
                                <div className='image'> <img src="" className='ronded' width="155" /></div>
                                <div className='ml-3 w-100'>
                                    <h4 className="mb-0 mt-0 textleft">Haider</h4><span className='textleft'>Web developer</span>
                                    <div className='p-2 mt-2 b d-flex justify-content-rounded text-white stats new' >
                                        <div className='d-flex flex-column'><span className='article'>Articles</span><span className="number1">40</span></div>
                                        <div className='d-flex flex-column'><span className='followers'>Followers</span><span className="number2">980</span></div>
                                        <div className='d-flex flex-column'><span class='rating'>Rating </span><span class="number3">89</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApiCal