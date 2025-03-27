import NewMeetupForm from '../../components/meetups/NewMeetupForm'

export default function NewMeetupPage(){
  function addMeetupHandle(enteredData){
  console.log(enteredData)
  }
  return (
    <>
    <NewMeetupForm onAddMeetup={addMeetupHandle}></NewMeetupForm>
    </>
  )  
}