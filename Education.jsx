import React, { useContext, useState } from 'react'
import { UserContext } from './UserProvider';

const Education = () => {
    const [education, setEducation] = useState([{ courseName: '', organizationName: '', startDate: '', endDate: '' }]);
    const {handleUserSubmit} = useContext(UserContext);

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedEducation = [...education];
        updatedEducation[index] = { ...updatedEducation[index], [name]: value };
        setEducation(updatedEducation);
    };

    const handleAddMore = () =>{
        setEducation([...education,{courseName:'',organizationName:'',startDate:'',endDate:''}]);
    }

    const deleteForm = () =>{
      setEducation(x=>x.slice(0,-1));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(education);
        handleUserSubmit(education);
    }

    return (
        <div>
            <div className='userDetails'>
            <h1>Add your Education details here..</h1>
                <form onSubmit={handleSubmit}>
                    {
                        
                        education.map((edu, index) =>
                            <>
                                <div key={index}>
                                <h2>Detail : {index+1}</h2>
                                   
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Course Name</label>
                                        <input type="text" name='courseName' value={edu.courseName} onChange={(event) => handleInputChange(index, event)} class="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Organization Name</label>
                                        <input type="text" name='organizationName' value={edu.organizationName} onChange={(event) => handleInputChange(index, event)} class="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Start Date</label>
                                        <input type="date" name='startDate' value={edu.startDate} onChange={(event) => handleInputChange(index, event)} class="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Start Date</label>
                                        <input type="date" name='endDate' value={edu.endDate} onChange={(event) => handleInputChange(index, event)} class="form-control" id="exampleInputPassword1" />
                                    </div>

                                    <button className='btn btn-secondary m-2' type="button" onClick={handleAddMore}>
                                        Add More
                                    </button>
                                    <button type='button' className='btn btn-primary m-2' onClick={handleSubmit}>Submit</button>

                                    <button type='button' className='btn btn-danger m-2' onClick={deleteForm}>delete</button>
                                </div>
                            </>
                        )
                    }


                </form>
            </div>
        </div>
    )
}

export default Education