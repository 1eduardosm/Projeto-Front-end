import { useState } from 'react'
import Header from '../components/Header'
import InputField from '../components/InputField'
import { aiResponse } from '../service/aiService'

const AiTutor = () => {

  const [msg, setMsg] = useState('')
  const [awaitingAi, setAwaitingAi] = useState(false)
  const [loading, setLoading] = useState(false)

  const [conversation, setConversation] = useState([])



  async function sendButton() {
    if (!msg.trim()) return;
    setAwaitingAi(true)

    setConversation(prev => [
      ...prev,
      {
        content: msg,
        author: 'usuario'
      },
      {
        content: 'Pensando...',
        author: 'ai',
        loading: true
      }
    ]);
    setMsg('')

    try {
      const apiResponse = await aiResponse()

      setConversation(prev => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          content: apiResponse.body,
          author: 'ai',
          loading: false
        };

        return updated;
      });
    } catch (e) {

      setConversation(prev => {
        const updated = [...prev];

        updated[updated.length - 1] = {
          content: e.message,
          author: 'ai',
          loading: false
        };

        return updated;

      });
    } finally {
      setAwaitingAi(false)
    }



  }

  return (
    <div className="dashboard">

      <Header />

      <div className="content__container">
        <div className="chat-container">
          <div className="chat-messages">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={msg.author === 'ai' ? 'aiMsg' : 'userMsg'}
              >
                {msg.loading ? (
                  <span>pensando...</span>
                ) : (
                  msg.content
                )}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <InputField
              type='text'
              value={msg}
              onChange={e => setMsg(e.target.value)}
              placeholder='Escreva sua dúvida...'
            />

            <button onClick={sendButton} disabled={awaitingAi}>
              Enviar
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AiTutor