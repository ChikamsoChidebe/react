import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  fontFamily: "Arial, sans-serif",
  headerBgColor: "#ff6f61",
  headerFontColor: "#fff",
  headerFontSize: "20px",
  botBubbleColor: "#ff6f61",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "1",
    message: "Hi there! I'm your AI assistant. How can I help you today?",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      { value: "about", label: "Tell me about yourself", trigger: "3" },
      { value: "portfolio", label: "Show me your portfolio", trigger: "4" },
      { value: "contact", label: "How can I contact you?", trigger: "5" },
      { value: "skills", label: "What skills do you have?", trigger: "6" },
      { value: "experience", label: "Tell me about your experience", trigger: "7" },
    ],
  },
  {
    id: "3",
    message: "I'm a full-stack developer specializing in React and Node.js!",
    trigger: "8",
  },
  {
    id: "4",
    message: "You can check out my portfolio in the Portfolio section above.",
    trigger: "8",
  },
  {
    id: "5",
    message: "Feel free to reach out via the Contact section or email me directly.",
    trigger: "8",
  },
  {
    id: "6",
    message: "I have expertise in React, Node.js, MongoDB, and UI/UX design.",
    trigger: "8",
  },
  {
    id: "7",
    message: "I have worked on various projects, including e-commerce platforms, dashboards, and social media apps.",
    trigger: "8",
  },
  {
    id: "8",
    message: "Is there anything else I can help you with?",
    trigger: "2",
  },
];

function AIChat() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} />
    </ThemeProvider>
  );
}

export default AIChat;