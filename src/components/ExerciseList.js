import React from 'react'
import Card from './card'

export default function ExerciseList(props) {
    return (
        <div>
            {props.exercises.map((exercise) => {
                return (
                    <Card
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                    />
                )
            })}
        </div>
    )
}
