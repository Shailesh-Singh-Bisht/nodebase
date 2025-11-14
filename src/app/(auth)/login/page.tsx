import LoginFormWrapper from "@/features/auth/components/login-form-wrapper";
import { requireUnauth } from "@/lib/auth-utils";

const Page = async () => {
  await requireUnauth();

  return <LoginFormWrapper />;
};

export default Page;
