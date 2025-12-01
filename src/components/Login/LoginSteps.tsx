import { useAuthStore } from "@/store/auth.store";
import Entrance from "./Entrance";
import VerificationCode from "./VerificationCode";
import CreateAccount from "./CreateAccount";
import Password from "./Password";
import ForgetPassword from "./ForgetPassword";
import NewPassword from "./NewPassword";
import NoneExist from "./NoneExist";

const LoginSteps = () => {
  const { step } = useAuthStore();

  return (
    <div className="w-full">
      {step === 1 && <Entrance />}
      {step === 2 && <VerificationCode />}
      {step === 3 && <Password />}
      {step === 4 && <ForgetPassword />}
      {step === 5 && <NewPassword />}
      {step === 6 && <NoneExist />}
      {step === 7 && <CreateAccount />}
      {step === 8 && <div>Logged in - redirect to Dashboard</div>}
    </div>
  );
};

export default LoginSteps;
