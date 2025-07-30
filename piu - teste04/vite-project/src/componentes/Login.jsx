import { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  });

  // Função genérica para atualizar os campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para lidar com o submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarregar a página
    console.log('Dados enviados:', formData); // Exibe no console
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="login"
        value={formData.login}
        onChange={handleChange}
        placeholder="Login"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Senha"
      />
      <button type="submit">Entrar</button>
    </form>
  );
}