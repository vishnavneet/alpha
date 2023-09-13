import { UserContextProvider } from "./UserContextProvider";
import UserConsumer from "./userConsumer";

export default function User() {
  return (
    <div>
        <UserContextProvider>
            <UserConsumer />
        </UserContextProvider>
    </div>
  );
}