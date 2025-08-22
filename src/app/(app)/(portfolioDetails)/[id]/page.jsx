import Details from '@/modules/Porfolio-details/ui/components/Details';
function page({params}) {
    const {id}=params;

  return (
    <Details id={id}/>
  )
}

export default page
