import logo from './logo.svg';
import './App.css';

const WhatsAppButton = ({ phoneNumbers, message }) => {
  const sendMessages = () => {
    const encodedMessage = encodeURIComponent(message);
    phoneNumbers.forEach((number) => {
      window.open(`https://wa.me/${number}?text=${encodedMessage}`, "_blank");
    });
  };

  return (
      <button onClick={sendMessages} className="px-4 py-2 bg-green-500 text-white rounded-lg">
        Send WhatsApp Messages
      </button>
  );
};


function App() {
  return (
      <WhatsAppButton
          phoneNumbers={["1234567890", "9876543210", "1122334455"]}
          message="Hello, this is a test message!"
      />
  );
}

export default App;
