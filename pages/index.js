import MeetupList  from '../components/meetups/MeetupList'

const DUMMY_MEETS=[
    {
    id:'m1',
    title:'A first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address:'r 5, 123 city',
    description: 'This is a first meetup!'
},
{
    id:'m2',
    title:'A second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
    address:'r 5, 123 city',
    description: 'This is a first meetup!'
},

]

export default function HomePage(){
return (
    <>
    <MeetupList meetups={DUMMY_MEETS}></MeetupList>
    </>
)
}