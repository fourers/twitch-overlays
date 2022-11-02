import { Chat, ChatEvents, Commands } from 'twitch-js'

const relevantLetters = ["W", "L"]

function getFirstValidLetter(message) {
    const messageParts = message.toUpperCase().split(" ");
    const firstPart = messageParts[0];
    if (relevantLetters.includes(firstPart)) {
        return firstPart;
    }
    return null;
}

export async function createTwitchClient(channel, setChatClient, setAnswers) {
    console.log("Creating chat client");
    const chat = new Chat({
        "username": null,
        "token": null,
    });
    setChatClient(chat);

    await chat.connect();
    await chat.join(channel);

    chat.on(ChatEvents.ALL, (message) => {
        if (message.command === Commands.PRIVATE_MESSAGE) {
            const username = message.username;
            const incomingMessage = message.message;
            const validLetter = getFirstValidLetter(incomingMessage);
            if (validLetter !== null) {
                setAnswers((prevState) => {
                    return {...prevState, [username]: validLetter};
                });
            }
        }
    });
}

export async function closeTwitchClient(chatClient) {
    if (chatClient !== null) {
        console.log("Closing chat client");
        chatClient.disconnect();
    }
}
