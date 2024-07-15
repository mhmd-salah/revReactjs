interface Iprops{
  statusCode?:number;
  title?:string
}
export default function ErrorHandler({statusCode=500,title="server error"}:Iprops) {
  return (
    <div>
      <h2>{statusCode} {title}</h2>
    </div>
  )
}
