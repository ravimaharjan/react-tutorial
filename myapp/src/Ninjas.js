import React from 'react'

// UI component or stateless component. 

const Ninjas = (props) => {
        const { ninjas } = props;
        const ninjasList = ninjas.map(ninja =>{
            if (ninja.age > 23){
                return (

                    
                    <div className="ninjas" key={ ninja.id }>
                        <div>Name: { ninja.name }</div>
                        <div>Age: { ninja.age }</div>
                        <div>Belt: { ninja.belt }</div>
                    </div> 
                )
            } else {
                return null
            }
        })
        return(
            <div className="ninjasList">
                { ninjasList }
            </div>
        )
    }
export default Ninjas