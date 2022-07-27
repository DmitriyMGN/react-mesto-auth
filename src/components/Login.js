

function Login () {
  return (
<div className="login"> 
    <h2 className="login__title">Вход</h2>
      <form>
        <input className="login__email"></input>  
        <input className="login__password"></input>
        <button className="login__button" type="submit"></button>
      </form>  
  

</div>

  )
}

export default Login;