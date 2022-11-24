import useUserName from "../hooks/useUserName";
import SignInView from "../views/SignInView";
import VoteView from "../views/VoteView";

export default function Home() {
  const { userName } = useUserName();
  return <>{userName ? <VoteView /> : <SignInView />}</>;
}
