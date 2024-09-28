
export default function Produto({params}:{params:{id:number}}) {

    

  return (
    <div>
        <h2>Produto</h2>
        <p>ID : {params.id}</p>
    </div>
  )
}
