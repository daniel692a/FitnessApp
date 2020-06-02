import React from 'react'
import Card from './card'

const ExerciseList = ({exercises}) => (
    <div>
            { exercises.map((exercise) => (
                    <Card
                        key={exercise.id} //Las keys son para identificar que elementos han cambiado
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                    />
            ))}
        </div>
)

export default ExerciseList
