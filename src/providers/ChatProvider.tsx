import { createContext, useMemo, useState } from 'react';
import type { SpotifyResponse } from '@/types/Spotify';

interface Chat {
    chat: {
        id: number;
        input: string;
        output: SpotifyResponse[];
    }[];
}

interface ChatContextProps {
    chat: Chat;
    setChat: (chat: Chat) => void;
}

interface ChatProviderProps {
  children: React.ReactNode; 
}

const ChatContext = createContext<ChatContextProps>({ chat: { chat: [] }, setChat: () => { console.log('not initialized'); }});

const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
    const [chat, setChat] = useState<Chat>({ chat: [] });

    const contextValue = useMemo(() => ({ chat, setChat }), [chat, setChat]);
    
    return (
        <ChatContext.Provider value={contextValue}>
            {children}
        </ChatContext.Provider>
    );
};

export { ChatContext, ChatProvider };
