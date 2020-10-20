function Login() {
  var done = 0;
  var username = document.login.username.value;
  username = username.toLowerCase();
  var password = document.login.password.value;
  password = password.toLowerCase();
  if (username == "everton" && password == "123456") { window.location = "http://evertonsouza.dev.br"; done = 1; }
  if (username == "outro" && password == "outrosenha") { window.location = "http://www.seu_site.com.br"; done = 1; }
  if (username == "outro" && password == "outrasenha") { window.location = "http://www.seu_site.com.br"; done = 1; }
  if (done == 0) { alert("Senha ou Usuário inválido."); }
}