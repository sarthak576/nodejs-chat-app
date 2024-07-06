import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "c717dd3a-1264-4ca9-b0a0-ede3801ac164",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatWindow {...chatProps} style={{ height: "100vh" }} />
      <MultiChatSocket {...chatProps} />
    </div>
  );
};

export default ChatsPage;
