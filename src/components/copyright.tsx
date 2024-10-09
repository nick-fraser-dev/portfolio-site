
export default function Copyright() {
  return (
    <p className='mb-20 font-extralight'>
      {"Copyright ©"}
      Nick Fraser
      {" "}
      {new Date().getFullYear()}.
    </p>
  );
}