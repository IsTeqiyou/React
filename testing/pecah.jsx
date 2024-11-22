// Atoms
const Input = ({ label, type, placeholder, value, onChange }) => (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
  
  const Button = ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  );
  
  // Molecules
  const FormField = ({ label, type, placeholder, value, onChange }) => (
    <Input label={label} type={type} placeholder={placeholder} value={value} onChange={onChange} />
  );
  
  const RegisterForm = ({ onRegister }) => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onRegister({ firstName, secondName, email, password });
    };
  
return (
      <form onSubmit={handleSubmit}>
        <FormField label="First Name" type="text" placeholder="Fill The First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <FormField label="Second Name" type="text" placeholder="Fill The Second Name" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
        <FormField label="Email" type="email" placeholder="Fill Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <FormField label="Password" type="password" placeholder="Fill Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSubmit}>Register</Button>
      </form>
    );
  };
  
  // Organisms
  const RegisterPage = () => {
    const handleRegister = (userData) => {
      // Logic to handle registration here
      console.log('User data:', userData);
    };
  
    return (
      <div>

        <h1>Register</h1>
        <p>Silahkan Registrasi terlebih dahulu</p>
        <RegisterForm onRegister> </RegisterForm>
      </div >            